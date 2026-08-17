"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Gamepad2, Calendar, Clock, Users, Timer } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConsole?: string;
}

export default function BookingModal({ isOpen, onClose, initialConsole }: BookingModalProps) {
  const consoleOptions = ["PS4", "PS4+", "PS5", "VIP Room", "VVIP Room"];

  // Form state
  const [tipe, setTipe] = useState<string>("PS5");
  const [tanggal, setTanggal] = useState<string>("");
  const [jamMulai, setJamMulai] = useState<string>("19:00");
  const [nama, setNama] = useState<string>("");
  const [jumlahJam, setJumlahJam] = useState<string>("2");

  useEffect(() => {
    if (initialConsole && consoleOptions.includes(initialConsole)) {
      setTipe(initialConsole);
    } else if (initialConsole?.toLowerCase().includes("vvip")) {
      setTipe("VVIP Room");
    } else if (initialConsole?.toLowerCase().includes("vip")) {
      setTipe("VIP Room");
    }
  }, [initialConsole]);

  // Lock body scroll only when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Format tanggal to DD-MM-YYYY
  const formatTanggal = (val: string) => {
    if (!val) return "";
    const parts = val.split("-");
    if (parts.length === 3) {
      return `${parts[2].padStart(2,"0")}-${parts[1].padStart(2,"0")}-${parts[0]}`;
    }
    return val;
  };

  const previewTanggal = tanggal ? formatTanggal(tanggal) : "xx-xx-xxxx";

  const handleSendWhatsApp = () => {
    const tanggalFormatted = formatTanggal(tanggal);
    const message = `Hello XPLAY Games 👋\n\nA. Tipe : ${tipe}\nB. Tanggal : ${tanggalFormatted}\nC. Jam Mulai (format 24h) : ${jamMulai}\nD. Nama : ${nama}\nE. Jmlh Jam : ${jumlahJam} Jam\n\nJangan lakukan pembayaran sebelum ada konfirmasi`;
    const link = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
    onClose();
  };

  const inputClass = "w-full bg-[#171717] border border-[#292929] rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-[#1FA6F0] transition-colors font-semibold";
  const labelClass = "text-xs font-mono font-bold text-zinc-400 block mb-2 uppercase tracking-wider";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111111] border border-[#292929] rounded-3xl p-5 sm:p-8 max-w-lg w-full relative shadow-2xl my-auto sm:my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#1FA6F0]/10 border border-[#1FA6F0]/30 text-[#1FA6F0]">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">BOOKING GAMING UNIT</h3>
            <p className="text-xs text-zinc-400">Isi form di bawah, lalu kirim via WhatsApp ke operator.</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* A. Tipe */}
          <div>
            <label className={labelClass}>
              <span className="text-[#1FA6F0] mr-1">A.</span> TIPE CONSOLE / ROOM
            </label>
            <div className="flex flex-wrap gap-2">
              {consoleOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setTipe(opt)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    tipe === opt
                      ? "bg-[#1FA6F0] text-black shadow-md scale-105"
                      : "bg-[#171717] text-zinc-400 border border-[#292929] hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* B. Tanggal */}
          <div>
            <label className={labelClass}>
              <span className="text-[#75D84B] mr-1">B.</span> TANGGAL
            </label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className={inputClass.replace("focus:border-[#1FA6F0]", "focus:border-[#75D84B]")}
              required
            />
          </div>

          {/* C. Jam Mulai */}
          <div>
            <label className={labelClass}>
              <span className="text-[#FFD84D] mr-1">C.</span> JAM MULAI (FORMAT 24H)
            </label>
            <input
              type="time"
              value={jamMulai}
              onChange={(e) => setJamMulai(e.target.value)}
              className={inputClass.replace("focus:border-[#1FA6F0]", "focus:border-[#FFD84D]")}
              required
            />
          </div>

          {/* D. Nama */}
          <div>
            <label className={labelClass}>
              <span className="text-[#F45CB4] mr-1">D.</span> NAMA
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama kamu..."
              className={inputClass.replace("focus:border-[#1FA6F0]", "focus:border-[#F45CB4]") + " placeholder:text-zinc-600"}
              required
            />
          </div>

          {/* E. Jumlah Jam */}
          <div>
            <label className={labelClass}>
              <span className="text-[#B45CE0] mr-1">E.</span> JUMLAH JAM
            </label>
            <div className="flex flex-wrap gap-2">
              {["1","2","3","4","5","6","7","8"].map((j) => (
                <button
                  key={j}
                  type="button"
                  onClick={() => setJumlahJam(j)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                    jumlahJam === j
                      ? "bg-[#B45CE0] text-black shadow-md scale-105"
                      : "bg-[#171717] text-zinc-400 border border-[#292929] hover:text-white"
                  }`}
                >
                  {j}
                </button>
              ))}
              <span className="flex items-center text-xs text-zinc-500 font-mono pl-1">Jam</span>
            </div>
          </div>
        </div>

        {/* Preview Box */}
        <div className="mt-6 p-4 rounded-2xl bg-[#0a0a0a] border border-[#292929]">
          <span className="text-[11px] font-mono text-zinc-500 block mb-3 uppercase tracking-wider">
            📋 Preview Pesan WhatsApp:
          </span>
          <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed">
{`Hello XPLAY Games 👋

A. Tipe : ${tipe}
B. Tanggal : ${previewTanggal}
C. Jam Mulai (format 24h) : ${jamMulai}
D. Nama : ${nama || "..."}
E. Jmlh Jam : ${jumlahJam} Jam

Jangan lakukan pembayaran sebelum ada konfirmasi`}
          </pre>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-[#FF3038]/10 border border-[#FF3038]/30">
          <span className="text-[#FF3038] text-xs font-bold mt-0.5">⚠️</span>
          <p className="text-xs text-[#FF3038] font-semibold leading-relaxed">
            Jangan lakukan pembayaran sebelum ada konfirmasi dari operator XPLAY Games.
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={handleSendWhatsApp}
          disabled={!tanggal || !nama}
          className="w-full mt-5 rounded-2xl bg-[#1FA6F0] disabled:bg-zinc-700 disabled:cursor-not-allowed text-black disabled:text-zinc-500 font-extrabold py-4 px-6 text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#1FA6F0]/25 transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-black/20" />
          <span>KIRIM BOOKING VIA WHATSAPP</span>
        </button>

      </div>
    </div>
  );
}
