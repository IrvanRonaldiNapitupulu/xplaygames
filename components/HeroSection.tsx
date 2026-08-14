"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronRight, Gamepad2, Layers, Crown, Clock, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const highlights = [
    {
      icon: Layers,
      value: "2 Floors",
      label: "Smoking & No-Smoking Area",
      color: "#36B7F0",
    },
    {
      icon: Gamepad2,
      value: "20 Units",
      label: "Gaming Units & Setups",
      color: "#75D84B",
    },
    {
      icon: Crown,
      value: "VIP & VVIP",
      label: "Private Rooms Experience",
      color: "#B45CE0",
    },
    {
      icon: Clock,
      value: "10:00 — 03:00",
      label: "Buka Setiap Hari",
      color: "#FFD84D",
    },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#080808]">
      {/* Subtle Background Glow Spheres (Non-overpowering) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#36B7F0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#B45CE0]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#292929] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#36B7F0] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 uppercase">
                PLAYSTATION GAMING LOUNGE
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFD84D]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              MAIN. MABAR. <br />
              <span className="text-[#36B7F0] relative inline-block">
                MENANG.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#36B7F0]/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" />
                </svg>
              </span>{" "}
              ULANGI.
            </h1>

            {/* Subheading */}
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              {BUSINESS_INFO.heroSubhead}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#36B7F0] to-[#2b96c7] text-black font-extrabold px-8 py-4 text-base shadow-lg shadow-[#36B7F0]/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 fill-black/20 group-hover:rotate-12 transition-transform" />
                <span>BOOKING SEKARANG</span>
              </button>

              <Link
                href="#pricing"
                className="w-full sm:w-auto rounded-xl bg-[#111111] hover:bg-[#171717] border border-[#292929] hover:border-zinc-600 text-white font-semibold px-7 py-4 text-base transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>LIHAT HARGA</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Operating Badge */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400 bg-[#111111]/80 px-4 py-2.5 rounded-xl border border-[#292929]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#75D84B] animate-ping" />
              <span>Jam Operasional Hari Ini: <strong className="text-white">{BUSINESS_INFO.operatingHoursText}</strong></span>
            </div>
          </div>

          {/* Right Hero Visual Card - Official TikTok Video */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
              {/* Outer Card glow container */}
              <div className="relative rounded-3xl bg-[#111111] border border-[#292929] p-3.5 sm:p-4 shadow-2xl overflow-hidden group">
                
                {/* Accent glow corner */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#36B7F0]/20 rounded-full blur-2xl group-hover:bg-[#36B7F0]/30 transition-colors" />

                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#292929] relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF3038]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
                    <span className="w-2 h-2 rounded-full bg-[#75D84B]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[#36B7F0] font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36B7F0] animate-ping" />
                    <span>XPLAY TIKTOK TOUR</span>
                  </div>
                </div>

                {/* Vertical Video Embed Frame (Aspect Ratio 9:16 optimized for TikTok) */}
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black border border-[#292929] shadow-inner">
                  <iframe
                    src="https://www.tiktok.com/player/v1/7603348601129028884?autoplay=1&muted=1&loop=1"
                    title="XPLAY Games Official TikTok Video"
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>

                {/* Quick Feature Footer */}
                <div className="mt-4 pt-3 border-t border-[#292929] flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full p-0.5 bg-gradient-to-tr from-[#36B7F0] to-[#B45CE0] overflow-hidden">
                      <Image
                        src="/xplay.png"
                        alt="XPLAY Logo"
                        width={28}
                        height={28}
                        className="object-cover bg-[#080808]"
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-extrabold text-white font-mono leading-none">
                        @xplaygamesbatam
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        Tour 2 Lantai Lounge
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://vt.tiktok.com/ZSV1axhA5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-xs font-bold text-[#36B7F0] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Buka TikTok</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Hero Quick Highlights Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#292929] hover:border-zinc-700 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="p-2.5 rounded-xl bg-[#171717] border border-[#292929] group-hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    {item.value}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
