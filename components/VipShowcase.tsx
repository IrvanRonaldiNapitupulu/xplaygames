"use client";

import Image from "next/image";
import { Crown, Gamepad2, Tv, Sparkles, ShieldCheck, CigaretteOff, MessageCircle } from "lucide-react";

interface VipShowcaseProps {
  onOpenBooking: (roomType: string) => void;
}

export default function VipShowcase({ onOpenBooking }: VipShowcaseProps) {
  return (
    <section id="vip-vvip" className="py-20 bg-[#080808] border-t border-[#292929] relative overflow-hidden">
      {/* Background Accent Gradient Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B45CE0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F45CB4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#B45CE0] uppercase mb-4">
            <Crown className="w-4 h-4 text-[#B45CE0]" />
            <span>PRIVATE ROOM EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            EKSKLUSIF VIP & VVIP ROOMS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Nikmati kenyamanan maksimal tanpa gangguan di ruangan private ber-console modern.
          </p>
        </div>

        {/* 2 Cards Grid: VIP vs VVIP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* VIP Card */}
          <div className="bg-[#111111] border-2 border-[#B45CE0]/40 rounded-3xl p-6 sm:p-8 hover:border-[#B45CE0] transition-all duration-300 flex flex-col justify-between relative shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#B45CE0] text-black uppercase">
                  VIP ROOM
                </span>
                <span className="text-xs font-mono text-zinc-400">Floor 01 Setup</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                LEVEL UP YOUR GAME
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base mb-4 leading-relaxed">
                Main lebih private dengan pengalaman PS5 di VIP Room. Suasana tenang dengan sofa empuk untuk gaming tanpa hambatan.
              </p>

              {/* VIP Image Preview */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-[#292929]/50 shadow-inner">
                <Image
                  src="/vip.jpeg"
                  alt="XPLAY VIP Room Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* VIP Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-[#171717] p-3 rounded-xl border border-[#292929]">
                  <Gamepad2 className="w-5 h-5 text-[#B45CE0]" />
                  <span className="text-sm font-semibold text-white">Console PlayStation 5 High Performance</span>
                </div>
                <div className="flex items-center gap-3 bg-[#171717] p-3 rounded-xl border border-[#292929]">
                  <ShieldCheck className="w-5 h-5 text-[#B45CE0]" />
                  <span className="text-sm font-semibold text-white">Ruangan Private & Sofa Kenyamanan Maksimal</span>
                </div>
              </div>
            </div>

            {/* Bottom Price & CTA */}
            <div className="pt-6 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-zinc-400 block uppercase">TARIF VIP</span>
                <div className="text-2xl sm:text-3xl font-black text-[#B45CE0]">
                  Rp45.000 <span className="text-xs font-normal text-zinc-400">/ jam</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking("VIP Room")}
                className="w-full sm:w-auto rounded-xl bg-[#B45CE0] text-black font-extrabold px-6 py-3.5 text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>BOOK VIP ROOM</span>
              </button>
            </div>
          </div>

          {/* VVIP Card (Ultimate Highlight) */}
          <div className="bg-[#111111] border-2 border-[#F45CB4]/50 rounded-3xl p-6 sm:p-8 hover:border-[#F45CB4] transition-all duration-300 flex flex-col justify-between relative shadow-2xl overflow-hidden group">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#F45CB4] text-black font-extrabold text-[10px] font-mono tracking-widest uppercase rounded-bl-xl">
              ULTIMATE EXPERIENCE
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-[#F45CB4] text-black uppercase">
                  VVIP ROOM
                </span>
                <span className="text-xs font-mono text-[#75D84B]">Floor 02 (No Smoking)</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                PLAY. WATCH. CHILL.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base mb-4 leading-relaxed">
                Lebih dari sekadar tempat main. Nikmati pengalaman private dengan PlayStation, Nintendo, dan Netflix.
              </p>

              {/* VVIP Image Preview */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-[#292929]/50 shadow-inner">
                <Image
                  src="/vvip.jpeg"
                  alt="XPLAY VVIP Room Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* VVIP 5 Feature Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                <div className="bg-[#171717] p-2.5 rounded-xl border border-[#292929] flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-[#F45CB4]" />
                  <span className="text-xs font-bold text-white">PlayStation</span>
                </div>
                <div className="bg-[#171717] p-2.5 rounded-xl border border-[#292929] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFD84D]" />
                  <span className="text-xs font-bold text-white">Nintendo</span>
                </div>
                <div className="bg-[#171717] p-2.5 rounded-xl border border-[#292929] flex items-center gap-2">
                  <Tv className="w-4 h-4 text-[#FF3038]" />
                  <span className="text-xs font-bold text-white">Netflix TV</span>
                </div>
                <div className="bg-[#171717] p-2.5 rounded-xl border border-[#292929] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#36B7F0]" />
                  <span className="text-xs font-bold text-white">Private Room</span>
                </div>
                <div className="bg-[#171717] p-2.5 rounded-xl border border-[#292929] flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CigaretteOff className="w-4 h-4 text-[#75D84B]" />
                  <span className="text-xs font-bold text-white">No Smoking</span>
                </div>
              </div>
            </div>

            {/* Bottom Price & CTA */}
            <div className="pt-6 border-t border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-zinc-400 block uppercase">TARIF VVIP</span>
                <div className="text-2xl sm:text-3xl font-black text-[#F45CB4]">
                  Rp50.000 <span className="text-xs font-normal text-zinc-400">/ jam</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking("VVIP Room")}
                className="w-full sm:w-auto rounded-xl bg-[#F45CB4] text-black font-extrabold px-6 py-3.5 text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#F45CB4]/20"
              >
                <MessageCircle className="w-4 h-4 fill-black/20" />
                <span>BOOK VVIP ROOM</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
