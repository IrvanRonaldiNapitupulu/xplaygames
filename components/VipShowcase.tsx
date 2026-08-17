"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface VipShowcaseProps {
  onOpenBooking: (roomType: string) => void;
}

export default function VipShowcase({ onOpenBooking }: VipShowcaseProps) {
  return (
    <section id="vip-vvip" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Eksklusif VIP & VVIP Room
          </h2>
          <p className="text-zinc-400 text-base">
            Nikmati kenyamanan maksimal tanpa gangguan di ruangan private ber-console modern.
          </p>
        </div>

        {/* 2 Showcases: VIP vs VVIP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* VIP Room */}
          <div className="flex flex-col justify-between">
            <div>
              {/* IMAGE (HERO) */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#111318]">
                <Image
                  src="/vip.jpeg"
                  alt="XPLAY VIP Room"
                  fill
                  className="object-cover"
                />
              </div>

              {/* ROOM NAME */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1FA6F0]">
                  Floor 01 Setup
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                VIP Room (PS5 Private)
              </h3>

              {/* SHORT DESCRIPTION */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Main lebih private dengan konsol PlayStation 5 di VIP Room. Suasana tenang dengan sofa empuk untuk gaming tanpa hambatan.
              </p>
            </div>

            {/* PRICE & CTA */}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 line-through">Rp45.000</span>
                  <span className="text-2xl font-black text-[#1FA6F0]">Rp35.000</span>
                  <span className="text-xs text-zinc-400">/ jam</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking("VIP Room")}
                className="w-full sm:w-auto rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-bold px-5 py-3 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#1FA6F0]" />
                <span>Book VIP Room</span>
              </button>
            </div>
          </div>

          {/* VVIP Room */}
          <div className="flex flex-col justify-between">
            <div>
              {/* IMAGE (HERO) */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#111318]">
                <Image
                  src="/vvip.jpeg"
                  alt="XPLAY VVIP Room"
                  fill
                  className="object-cover"
                />
              </div>

              {/* ROOM NAME */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF2D8D]">
                  Floor 02 (No Smoking)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                VVIP Private Room (PS, Nintendo & Netflix)
              </h3>

              {/* SHORT DESCRIPTION */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Pengalaman private terlengkap. Dilengkapi PlayStation 5 (4 Stik DualSense), Nintendo Switch, dan TV Netflix dalam 1 ruangan ber-AC dengan sofa super nyaman.
              </p>
            </div>

            {/* PRICE & CTA */}
            <div className="pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 line-through">Rp50.000</span>
                  <span className="text-2xl font-black text-[#FF2D8D]">Rp40.000</span>
                  <span className="text-xs text-zinc-400">/ jam</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking("VVIP Room")}
                className="w-full sm:w-auto rounded-xl bg-[#FF2D8D] hover:opacity-90 text-white font-bold px-5 py-3 text-sm flex items-center justify-center gap-2 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book VVIP Room</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
