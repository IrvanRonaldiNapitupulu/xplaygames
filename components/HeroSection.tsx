"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronRight, Gamepad2, Layers, Crown, Clock, ExternalLink } from "lucide-react";
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
      color: "#1FA6F0",
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
      color: "#FF2D8D",
    },
    {
      icon: Clock,
      value: "10:00 — 03:00",
      label: "Buka Setiap Hari",
      color: "#FFD84D",
    },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#08090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111318] border border-[#242832] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1FA6F0]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 uppercase">
                PLAYSTATION GAMING SPOT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              MAIN. MABAR. <br />
              <span className="text-[#1FA6F0] relative inline-block">
                MENANG.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#1FA6F0]/40"
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
                className="w-full sm:w-auto rounded-xl bg-[#1FA6F0] hover:opacity-90 text-black font-extrabold px-8 py-4 text-base transition-opacity flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 fill-black/20" />
                <span>BOOKING SEKARANG</span>
              </button>

              <Link
                href="#pricing"
                className="w-full sm:w-auto rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-semibold px-7 py-4 text-base transition-colors flex items-center justify-center gap-2"
              >
                <span>LIHAT HARGA</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>

            {/* Operating Badge */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400 bg-[#111318] px-4 py-2.5 rounded-xl border border-[#242832]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#75D84B]" />
              <span>Jam Operasional Hari Ini: <strong className="text-white">{BUSINESS_INFO.operatingHoursText}</strong></span>
            </div>
          </div>

          {/* Right Hero Visual Card - Official TikTok Video */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
              {/* Clean Card container */}
              <div className="bg-[#111318] border border-[#242832] rounded-2xl p-3.5 sm:p-4">

                {/* Vertical Video Embed Frame */}
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black border border-[#242832]">
                  <iframe
                    src="https://www.tiktok.com/player/v1/7603348601129028884?autoplay=1&muted=1&loop=1"
                    title="XPLAY Games Official TikTok Video"
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>

                {/* Quick Feature Footer */}
                <div className="mt-3.5 pt-3 border-t border-[#242832] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-[#242832] bg-[#08090B]">
                      <Image
                        src="/xplay.png"
                        alt="XPLAY Logo"
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white font-mono leading-none">
                        @xplaygamesbatam
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://vt.tiktok.com/ZSV1axhA5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#08090B] hover:bg-[#111318] border border-[#242832] text-xs font-bold text-[#1FA6F0] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>TikTok</span>
                    <ExternalLink className="w-3 h-3" />
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
                className="bg-[#111318] border border-[#242832] p-5 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="p-2.5 rounded-xl bg-[#08090B] border border-[#242832]"
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
