"use client";

import Link from "next/link";
import { MessageCircle, Gamepad2, ChevronRight, Sparkles } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  return (
    <section className="py-24 bg-[#080808] border-t border-[#292929] relative overflow-hidden">
      {/* Blue Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#36B7F0]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-[#111111] border-2 border-[#36B7F0]/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle logo background watermarks */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171717] border border-[#292929] text-xs font-mono tracking-widest text-[#36B7F0] uppercase mb-6">
            <Gamepad2 className="w-4 h-4" />
            <span>PLAYSTATION GAMING LOUNGE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            SIAP MABAR?
          </h2>

          <p className="text-zinc-300 text-base sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Pilihan console sudah siap. Tinggal pilih room dan tentukan waktumu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto rounded-xl bg-[#36B7F0] text-black font-extrabold px-8 py-4 text-base shadow-lg shadow-[#36B7F0]/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-black/20" />
              <span>BOOKING SEKARANG</span>
            </button>

            <Link
              href="#pricing"
              className="w-full sm:w-auto rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-white font-bold px-7 py-4 text-base transition-colors flex items-center justify-center gap-2 group"
            >
              <span>LIHAT HARGA</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
