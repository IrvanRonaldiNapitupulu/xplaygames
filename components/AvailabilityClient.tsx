"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import GameListModal from "@/components/GameListModal";
import { BUSINESS_INFO, isBusinessOpen } from "@/data/business";
import { getGamesForStation } from "@/data/games";
import {
  MessageCircle,
  RefreshCw,
  Clock,
  Layers,
  HelpCircle,
  AlertTriangle,
  Gamepad2,
  Tv,
  Crown,
  CheckCircle2,
  ChevronRight,
  Info,
  Users
} from "lucide-react";

interface QueueItem {
  nama: string;
  mulai: string;
  selesai: string;
  catatan?: string;
}

interface Station {
  stationId: number;
  stationName: string;
  consoleType: string;
  floor: number;
  status: "available" | "playing" | "paused" | "unavailable" | "unknown";
  roomType: "regular" | "vip" | "vvip";
  elapsedSeconds: number | null;
  remainingSeconds: number | null;
  estimatedFinishAt: string | null;
  queueCount: number;
  queueList?: QueueItem[];
}

interface BillingResponse {
  stations: Station[];
  updatedAt: number;
  isStale?: boolean;
  fromCache?: boolean;
}

export default function AvailabilityClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConsole, setBookingConsole] = useState<string | undefined>(undefined);
  
  const [selectedGameModal, setSelectedGameModal] = useState<{
    name: string;
    consoleType: string;
    games: string[];
  } | null>(null);

  const [data, setData] = useState<BillingResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  const [activeFloor, setActiveFloor] = useState<number>(1);
  const [secondsAgo, setSecondsAgo] = useState<number>(0);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    setIsOpenNow(isBusinessOpen());
  }, []);

  const fetchStatus = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/billing");
      if (!res.ok) throw new Error("Failed to load live status data");
      const json = await res.json();
      setData(json);
      setSecondsAgo(0);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(() => {
      fetchStatus();
    }, 20000); // refresh every 20 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!data) return;
    const timer = setInterval(() => {
      const diff = Math.floor((Date.now() - data.updatedAt) / 1000);
      setSecondsAgo(diff);
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  const handleOpenBookingModal = (stationName: string) => {
    setBookingConsole(stationName);
    setIsBookingOpen(true);
  };

  const handleWhatsAppBooking = (station: Station) => {
    // Generate current date in DD-MM-YYYY format
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    // Get current time in 24h format
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    const text = `Hello XPLAY Games 👋\n\nA. Tipe : ${station.consoleType} (Station ${station.stationName})\nB. Tanggal : ${formattedDate}\nC. Jam Mulai (format 24h) : ${formattedTime}\nD. Nama : \nE. Jmlh Jam : \n\nJangan lakukan pembayaran sebelum ada konfirmasi`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6285194345274?text=${encoded}`, "_blank");
  };

  const filteredStations = data?.stations?.filter(s => s.floor === activeFloor) || [];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#36B7F0] selection:text-black">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1 pt-24 pb-16">
        
        {/* Header / Intro Hero */}
        <section className="relative py-12 md:py-16 border-b border-[#242832] bg-[#08090B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#36B7F0]/10 border border-[#36B7F0]/20 text-[#36B7F0] text-xs font-mono font-bold uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#36B7F0] animate-ping" />
                <span>LIVE UPDATING SYSTEM</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                LIVE AVAILABILITY
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Cek status unit XPLAY secara real-time sebelum datang. Dapatkan informasi ketersediaan konsol terhangat langsung dari billing server.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              {data && (
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono bg-[#111111] px-4 py-2.5 rounded-xl border border-[#292929]">
                  <Clock className="w-3.5 h-3.5 text-[#36B7F0]" />
                  <span>Diperbarui {secondsAgo} detik lalu</span>
                </div>
              )}

              <button
                onClick={fetchStatus}
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-[#171717] border border-[#292929] hover:border-zinc-700 text-white font-bold text-xs flex items-center gap-2 transition-all"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-zinc-400 ${loading ? "animate-spin" : ""}`} />
                <span>{loading ? "MEMUAT..." : "SEGERAKAN REFRESH"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Live availability alert/warning states */}
        {!isOpenNow && (
          <div className="bg-[#FF3038]/10 border-b border-[#FF3038]/30 py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-[#FF3038] flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3038] animate-pulse" />
            <span>XPLAY SEDANG TUTUP (CLOSED) — Jam operasional: {BUSINESS_INFO.operatingHoursText}. Silakan cek kembali ketersediaan unit real-time saat jam buka pukul 10:00 WIB.</span>
          </div>
        )}

        {data?.isStale && (
          <div className="bg-[#FFD84D]/10 border-b border-[#FFD84D]/30 py-3 text-center text-xs font-semibold text-[#FFD84D]">
            ⚠️ Menampilkan status cadangan (stale). Pembaruan real-time ke billing server sedang mengalami hambatan.
          </div>
        )}

        {/* Core Availability Interface */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Floor Switcher & Summary Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 border-b border-[#1f1f1f] pb-6">
            <div className="flex items-center gap-2 bg-[#111111] p-1.5 rounded-2xl border border-[#292929]">
              <button
                onClick={() => setActiveFloor(1)}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeFloor === 1
                    ? "bg-[#36B7F0] text-black shadow-lg"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>LANTAI 1 (SMOKING)</span>
              </button>
              <button
                onClick={() => setActiveFloor(2)}
                className={`px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeFloor === 2
                    ? "bg-[#36B7F0] text-black shadow-lg"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>LANTAI 2 (NO-SMOKING)</span>
              </button>
            </div>

            {/* Quick status summary legend */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#75D84B]" />
                <span>Tersedia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3038]" />
                <span>Sedang Main</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D]" />
                <span>Jeda (Paused)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span>Offline / Perbaikan</span>
              </div>
            </div>
          </div>

          {/* Loading / Error States */}
          {loading && !data && (
            <div className="py-24 text-center">
              <div className="inline-block w-8 h-8 border-4 border-t-transparent border-[#36B7F0] rounded-full animate-spin mb-4" />
              <p className="text-zinc-400 text-sm font-semibold">Menghubungkan ke server billing...</p>
            </div>
          )}

          {error && !data && (
            <div className="py-16 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#FF3038]/10 border border-[#FF3038]/30 flex items-center justify-center text-[#FF3038] mx-auto mb-6">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live status temporarily unavailable</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Sistem tidak dapat memuat informasi ketersediaan unit. Harap periksa koneksi internet Anda atau coba muat ulang halaman.
              </p>
              <button
                onClick={fetchStatus}
                className="px-6 py-3 rounded-xl bg-[#36B7F0] hover:bg-[#2b96c7] text-black font-extrabold text-sm transition-all"
              >
                Coba lagi
              </button>
            </div>
          )}

          {/* Render Stations Grid */}
          {data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredStations.map((station) => {
                const isAvailable = station.status === "available";
                const isPlaying = station.status === "playing";
                const isPaused = station.status === "paused";
                const isVVIP = station.roomType === "vvip";
                const isVIP = station.roomType === "vip";
                const stationGames = getGamesForStation(station.stationName, station.stationId, station.consoleType);

                return (
                  <div
                    key={station.stationId}
                    className={`rounded-2xl p-4 border flex flex-col justify-between transition-all group relative overflow-hidden ${
                      isVVIP
                        ? "bg-gradient-to-br from-[#1c1221] to-[#111111] border-[#B45CE0]/30 hover:border-[#B45CE0]"
                        : isVIP
                          ? "bg-gradient-to-br from-[#121c21] to-[#111111] border-[#36B7F0]/30 hover:border-[#36B7F0]"
                          : "bg-[#111111] border-[#292929] hover:border-zinc-700"
                    }`}
                  >
                    {/* VIP/VVIP Badge */}
                    {(isVIP || isVVIP) && (
                      <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-gradient-to-r text-black font-mono font-black text-[9px] uppercase tracking-widest rounded-bl-xl flex items-center gap-1 shadow-md" style={{
                        backgroundImage: isVVIP 
                          ? "linear-gradient(to right, #B45CE0, #FF3038)" 
                          : "linear-gradient(to right, #36B7F0, #75D84B)"
                      }}>
                        <Crown className="w-2.5 h-2.5" />
                        <span>{isVVIP ? "VVIP ROOM" : "VIP ROOM"}</span>
                      </div>
                    )}

                    <div>
                      {/* Name & Console */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="block text-[11px] font-mono font-bold text-zinc-500 uppercase">
                            STATION {station.stationId}
                          </span>
                          <h4 className="text-base font-black text-white group-hover:text-[#36B7F0] transition-colors">
                            {station.stationName}
                          </h4>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#171717] border border-[#292929] text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-wider shrink-0">
                          {station.consoleType}
                        </span>
                      </div>

                      {/* Status indicator pill */}
                      <div className="mb-3">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border uppercase ${
                          isAvailable
                            ? "bg-[#75D84B]/10 border-[#75D84B]/20 text-[#75D84B]"
                            : isPlaying
                              ? "bg-[#FF3038]/10 border-[#FF3038]/20 text-[#FF3038]"
                              : isPaused
                                ? "bg-[#FFD84D]/10 border-[#FFD84D]/20 text-[#FFD84D]"
                                : "bg-zinc-800/40 border-zinc-700/50 text-zinc-500"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isAvailable
                              ? "bg-[#75D84B] animate-pulse"
                              : isPlaying
                                ? "bg-[#FF3038] animate-ping"
                                : isPaused
                                  ? "bg-[#FFD84D]"
                                  : "bg-zinc-600"
                          }`} />
                          <span>
                            {isAvailable && "AVAILABLE"}
                            {isPlaying && "PLAYING"}
                            {isPaused && "PAUSED"}
                            {station.status === "unavailable" && "UNAVAILABLE"}
                            {station.status === "unknown" && "UNKNOWN"}
                          </span>
                        </div>
                      </div>

                      {/* Game Library info line & trigger */}
                      <div className="mb-3 pt-2.5 border-t border-[#1f1f1f] flex items-center justify-between">
                        <span className="text-[11px] text-zinc-400 font-mono">
                          {stationGames.length} Games
                        </span>
                        <button
                          onClick={() =>
                            setSelectedGameModal({
                              name: station.stationName,
                              consoleType: station.consoleType,
                              games: stationGames,
                            })
                          }
                          className="text-[11px] font-semibold text-[#22C7F2] hover:underline flex items-center gap-1"
                        >
                          <span>Lihat Daftar Game</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>

                    {/* Footer timer or status support text */}
                    <div>
                      <div className="min-h-[36px] flex items-center justify-between border-t border-[#1f1f1f] pt-2.5 mb-3 text-xs font-medium text-zinc-400">
                        {isAvailable && (
                          <span className="text-[#75D84B] font-semibold text-[11px]">Siap dimainkan sekarang</span>
                        )}
                        {isPlaying && (
                          <div className="flex flex-col gap-0.5">
                            <span className="text-zinc-500 text-[10px]">Estimasi Selesai:</span>
                            <span className="text-white font-extrabold font-mono text-xs flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#FF3038]" />
                              <span>± {station.estimatedFinishAt || "Open Billing"}</span>
                            </span>
                          </div>
                        )}
                        {isPaused && (
                          <span className="text-[#FFD84D] text-[11px]">Sesi dihentikan sementara</span>
                        )}
                        {station.status === "unavailable" && (
                          <span className="text-zinc-500 text-[11px]">Unit tidak aktif / maintenance</span>
                        )}

                        {/* Queue Indicator */}
                        {station.queueCount > 0 && (
                          <span className="px-2 py-0.5 rounded bg-[#FFD84D]/10 border border-[#FFD84D]/20 text-[#FFD84D] text-[9px] font-mono font-bold flex items-center gap-1">
                            <Users className="w-2.5 h-2.5" />
                            <span>Antrian: {station.queueCount}</span>
                          </span>
                        )}
                      </div>

                      {/* Detailed Queue List Items */}
                      {station.queueList && station.queueList.length > 0 && (
                        <div className="mb-4 pt-3 border-t border-[#1f1f1f] bg-[#141414] p-3 rounded-xl border border-[#292929]">
                          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#242832]">
                            <span className="text-[11px] font-mono font-bold text-[#FFD84D] uppercase flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5" />
                              <span>DAFTAR ANTRIAN ({station.queueList.length})</span>
                            </span>
                            {station.queueList.length > 3 && (
                              <span className="text-[9px] font-mono text-zinc-500 uppercase">
                                Scroll info
                              </span>
                            )}
                          </div>
                          <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                            {station.queueList.map((q, idx) => (
                              <div
                                key={idx}
                                className="bg-[#0b0b0b] px-2.5 py-1.5 rounded-lg border border-[#242832] flex items-center justify-between gap-2 text-xs"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span className="w-4 h-4 shrink-0 rounded-full bg-[#FFD84D]/20 text-[#FFD84D] text-[10px] font-mono font-bold flex items-center justify-center">
                                    #{idx + 1}
                                  </span>
                                  <span className="font-semibold text-white capitalize truncate">
                                    {q.nama}
                                  </span>
                                </div>
                                {(q.mulai || q.selesai) && (
                                  <span className="shrink-0 text-[10px] font-mono text-zinc-300 bg-[#171717] px-2 py-0.5 rounded border border-[#292929]">
                                    {q.mulai}{q.selesai ? ` - ${q.selesai}` : ""}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* WhatsApp Booking CTA */}
                      <button
                        onClick={() => handleWhatsAppBooking(station)}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                          isAvailable
                            ? "bg-[#36B7F0] hover:bg-[#2b96c7] text-black hover:scale-105 active:scale-95 shadow-md shadow-[#36B7F0]/10"
                            : "bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-400 hover:text-white"
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>BOOKING VIA WHATSAPP</span>
                      </button>
                    </div>

                  </div>
                );
              })}

              {filteredStations.length === 0 && !loading && (
                <div className="col-span-full py-16 text-center text-zinc-500 text-sm font-semibold">
                  Tidak ada data unit untuk Lantai {activeFloor}.
                </div>
              )}
            </div>
          )}

          {/* Disclaimer text below WhatsApp CTA */}
          <div className="max-w-2xl mx-auto text-center mt-8 text-xs text-zinc-500 leading-relaxed bg-[#111111]/40 border border-[#292929]/50 p-4 rounded-xl">
            <span className="block font-bold text-zinc-400 mb-1">Catatan Pemesanan WhatsApp</span>
            Klik tombol booking untuk menghasilkan format pesan otomatis. Harap diingat bahwa pengiriman pesan **tidak otomatis memesan unit**; ketersediaan unit baru resmi dikonfirmasi setelah tim administrator XPLAY memberikan konfirmasi balasan manual.
          </div>
        </section>

        {/* Crucial Service Distinction Section */}
        <section className="py-16 bg-[#111111]/30 border-y border-[#292929] mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono text-[#36B7F0] font-bold uppercase tracking-wider block mb-2">IMPORTANT BUSINESS DISTINCTION</span>
              <h2 className="text-3xl font-black text-white mb-4">LAYANAN XPLAY GAMES</h2>
              <p className="text-zinc-400 text-sm">
                Harap bedakan layanan mabar di lokasi kami dengan produk rental bawa pulang ke rumah demi kenyamanan bersama.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1: Main di XPLAY */}
              <div className="bg-[#111111] border border-[#36B7F0]/30 rounded-3xl p-6 flex flex-col justify-between hover:border-[#36B7F0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#36B7F0]/10 border border-[#36B7F0]/20 flex items-center justify-center text-[#36B7F0] mb-5">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Main di XPLAY</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Bermain langsung di gaming place premium kami. Dilengkapi setup layar lebar, ruangan VIP AC, sofa nyaman, makanan/minuman lengkap, dan atmosfir mabar yang seru.
                  </p>
                </div>
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#36B7F0] hover:underline"
                >
                  <span>Lihat Tarif Main</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Option 2: Sewa PS */}
              <div className="bg-[#111111] border border-[#75D84B]/30 rounded-3xl p-6 flex flex-col justify-between hover:border-[#75D84B] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#75D84B]/10 border border-[#75D84B]/20 flex items-center justify-center text-[#75D84B] mb-5">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Sewa PS (Bawa Pulang)</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Sewa unit konsol PlayStation 4 Slim, PS4 Pro, atau PS5 untuk dibawa pulang dan dimainkan di rumah. Unit yang disewakan **hanya berupa konsol dan aksesoris (tidak termasuk TV)**.
                  </p>
                </div>
                <Link
                  href="/sewa-ps"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#75D84B] hover:underline"
                >
                  <span>Info Sewa PS Rumah</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Option 3: Playbox */}
              <div className="bg-[#111111] border border-[#F45CB4]/30 rounded-3xl p-6 flex flex-col justify-between hover:border-[#F45CB4] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F45CB4]/10 border border-[#F45CB4]/20 flex items-center justify-center text-[#F45CB4] mb-5">
                    <Tv className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">3. Playbox (PS + TV Bundle)</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Paket rental console lengkap beserta TV 32 inch terintegrasi untuk dibawa pulang. Setup portabel sangat praktis bagi Anda yang tidak memiliki televisi sendiri di kosan atau rumah.
                  </p>
                </div>
                <Link
                  href="/playbox"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F45CB4] hover:underline"
                >
                  <span>Info Paket Playbox</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      
      <FloatingActions onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialConsole={bookingConsole}
      />

      {/* Game List Modal */}
      {selectedGameModal && (
        <GameListModal
          isOpen={!!selectedGameModal}
          onClose={() => setSelectedGameModal(null)}
          unitName={selectedGameModal.name}
          consoleType={selectedGameModal.consoleType}
          games={selectedGameModal.games}
          onOpenBooking={() => {
            setBookingConsole(selectedGameModal.name);
            setIsBookingOpen(true);
          }}
        />
      )}
    </div>
  );
}
