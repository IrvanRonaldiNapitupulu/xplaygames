"use client";

import Link from "next/link";
import { MessageCircle, ChevronRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  return (
    <section className="py-24 bg-[#080808] border-t border-[#1f1f1f] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
          SIAP MABAR?
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Pilihan konsol sudah siap. Tinggal pilih room dan tentukan waktumu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto rounded-xl bg-[#1FA6F0] hover:opacity-90 text-black font-extrabold px-8 py-4 text-base flex items-center justify-center gap-3 transition-opacity"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>BOOKING SEKARANG</span>
          </button>

          <Link
            href="#pricing"
            className="w-full sm:w-auto rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-bold px-7 py-4 text-base transition-colors flex items-center justify-center gap-2"
          >
            <span>Lihat Tarif</span>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
