"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Gamepad2, ArrowRight, RefreshCw, AlertTriangle, Clock } from "lucide-react";

import { BUSINESS_INFO, isBusinessOpen } from "@/data/business";

interface StationSummary {
  stationId: number;
  stationName: string;
  consoleType: string;
  floor: number;
  status: "available" | "playing" | "paused" | "unavailable" | "unknown";
  roomType: "regular" | "vip" | "vvip";
  queueCount?: number;
}

interface BillingResponse {
  stations: StationSummary[];
  updatedAt: number;
  isStale?: boolean;
  fromCache?: boolean;
}

export default function LiveAvailabilityWidget() {
  const [data, setData] = useState<BillingResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [secondsAgo, setSecondsAgo] = useState<number>(0);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const isMounted = useRef(false);

  useEffect(() => {
    setIsOpenNow(isBusinessOpen());
  }, []);

  const fetchStatus = useCallback(async () => {
    if (!isMounted.current) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/billing");
      if (!res.ok) throw new Error("Failed to load billing API");
      const json = await res.json();
      if (!isMounted.current) return;
      setData(json);
      setSecondsAgo(0);
    } catch (err) {
      console.error(err);
      if (!isMounted.current) return;
      setError(true);
    } finally {
      if (isMounted.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => {
      isMounted.current = false;
      clearInterval(interval);
    };
  }, [fetchStatus]);

  useEffect(() => {
    if (!data) return;
    const timer = setInterval(() => {
      const diff = Math.floor((Date.now() - data.updatedAt) / 1000);
      setSecondsAgo(diff);
    }, 1000);
    return () => clearInterval(timer);
  }, [data]);

  // Calculate stats
  const totalUnits = data?.stations?.length || 0;
  const availableUnits = data?.stations?.filter(s => s.status === "available").length || 0;
  const floor1Available = data?.stations?.filter(s => s.floor === 1 && s.status === "available").length || 0;
  const floor2Available = data?.stations?.filter(s => s.floor === 2 && s.status === "available").length || 0;
  const totalQueue = data?.stations?.reduce((acc, s) => acc + (s.queueCount || 0), 0) || 0;

  return (
    <section className="py-6 sm:py-8 bg-[#08090B] border-y border-[#242832] relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#111111]/80 rounded-2xl border border-[#292929] p-4 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border transition-all shrink-0 ${
              !isOpenNow
                ? "bg-[#FF3038]/10 border-[#FF3038]/30 text-[#FF3038]"
                : loading 
                  ? "bg-zinc-800/40 border-zinc-700 text-zinc-500 animate-pulse" 
                  : error 
                    ? "bg-[#FF3038]/10 border-[#FF3038]/30 text-[#FF3038]" 
                    : "bg-[#1FA6F0]/10 border-[#1FA6F0]/20 text-[#1FA6F0]"
            }`}>
              <Gamepad2 className={`w-6 h-6 ${loading && isOpenNow ? "animate-spin" : ""}`} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono tracking-widest text-[#1FA6F0] font-bold uppercase">
                  XPLAY LIVE STATUS
                </span>
                {data && isOpenNow && (
                  <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Aktif {secondsAgo}s lalu</span>
                  </span>
                )}
              </div>

              {!isOpenNow ? (
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#FF3038] text-lg sm:text-xl font-extrabold flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF3038]" />
                    <span>XPLAY SEDANG TUTUP (CLOSED)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Jam operasional: <strong className="text-white">{BUSINESS_INFO.operatingHoursText}</strong>. Silakan cek kembali ketersediaan unit real-time saat jam buka pukul 10:00 WIB.
                  </p>
                </div>
              ) : loading ? (
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 animate-ping" />
                  <span>Live status sedang diperbarui...</span>
                </h3>
              ) : error ? (
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#FF3038]" />
                  <h3 className="text-sm sm:text-base font-bold text-zinc-300">
                    Status billing sedang tidak tersedia
                  </h3>
                </div>
              ) : (
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#75D84B] animate-pulse" />
                    <span>{availableUnits} / {totalUnits} UNIT TERSEDIA</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-zinc-400 flex flex-wrap items-center gap-3">
                    <span>Lantai 1: <strong className="text-white">{floor1Available}</strong></span>
                    <span className="text-zinc-600">|</span>
                    <span>Lantai 2: <strong className="text-white">{floor2Available}</strong></span>
                    {totalQueue > 0 && (
                      <>
                        <span className="text-zinc-600">|</span>
                        <span className="text-[#FFD84D] font-bold">Total Antrian: {totalQueue}</span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {data?.isStale && (
                <span className="text-[10px] text-[#FFD84D] font-mono block mt-1">
                  ⚠️ Menampilkan data cadangan (stale).
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            {error ? (
              <button
                onClick={fetchStatus}
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-[#FFD84D] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Coba lagi</span>
              </button>
            ) : (
              <button
                onClick={fetchStatus}
                className="p-3 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-400 hover:text-white transition-colors"
                title="Refresh Status"
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              </button>
            )}

            <Link
              href="/availability"
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#111111] hover:bg-[#171717] border border-[#292929] hover:border-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group"
            >
              <span>LIHAT KETERSEDIAAN</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
