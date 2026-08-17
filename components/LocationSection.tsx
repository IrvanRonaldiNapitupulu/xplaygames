"use client";

import { BUSINESS_INFO } from "@/data/business";
import { Clock, ExternalLink, MessageCircle } from "lucide-react";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export default function LocationSection({ onOpenBooking }: LocationSectionProps) {
  return (
    <section id="location" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Lokasi & Kontaks Venue
          </h2>
          <p className="text-zinc-400 text-base">
            Kunjungi lokasi XPLAY Games. Kami siap menyambut sesi mabar kamu setiap hari.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Practical Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-6">
                PlayStation Gaming Spot
              </p>

              <div className="space-y-4 text-sm text-zinc-300">
                <div className="border-b border-[#1f1f1f] pb-4">
                  <span className="text-xs font-mono text-zinc-400 block mb-1 uppercase">Jam Operasional</span>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1FA6F0]" />
                    <span>{BUSINESS_INFO.operatingHoursText}</span>
                  </div>
                  <span className="text-xs text-[#1FA6F0] mt-1 block">
                    Buka setiap hari (10:00 — 03:00 WIB)
                  </span>
                </div>

                <div className="border-b border-[#1f1f1f] pb-4">
                  <span className="text-xs font-mono text-zinc-400 block mb-1 uppercase">WhatsApp Official</span>
                  <div className="text-base font-bold text-white font-mono flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#1FA6F0]" />
                    <span>{BUSINESS_INFO.whatsappNumber}</span>
                  </div>
                  <span className="text-xs text-zinc-400 mt-1 block">
                    Fast response booking tempat & info room
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#1f1f1f]">
              <a
                href={BUSINESS_INFO.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-[#1FA6F0] hover:opacity-90 text-black font-extrabold py-3 px-4 text-sm flex items-center justify-center gap-2 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Google Maps</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="w-full rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-bold py-3 px-4 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#1FA6F0]" />
                <span>Booking via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right: Static Map Card — no cross-origin iframe, no SecurityError */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#111318] border border-[#242832] min-h-[360px] flex flex-col">
            {/* Map visual placeholder */}
            <div className="flex-1 relative bg-[#0d0e12] flex items-center justify-center p-8 min-h-[240px]">
              {/* Grid lines for map feel */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(#1FA6F0 1px, transparent 1px), linear-gradient(90deg, #1FA6F0 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />
              {/* Map pin */}
              <div className="relative flex flex-col items-center gap-3 z-10">
                <div className="w-16 h-16 rounded-full bg-[#1FA6F0]/20 border-2 border-[#1FA6F0]/40 flex items-center justify-center shadow-lg shadow-[#1FA6F0]/20">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#1FA6F0]" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinejoin="round"/>
                    <circle cx="12" cy="9" r="2.5" fill="currentColor" strokeWidth="0"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm">XPLAY GAMES</p>
                  <p className="text-zinc-400 text-xs mt-0.5">Batam, Kepulauan Riau</p>
                </div>
                {/* Concentric rings */}
                <div className="absolute w-32 h-32 rounded-full border border-[#1FA6F0]/20 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute w-48 h-48 rounded-full border border-[#1FA6F0]/10" />
              </div>
            </div>
            {/* Open Maps CTA */}
            <a
              href={BUSINESS_INFO.googleMapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-4 border-t border-[#242832] bg-[#111318] hover:bg-[#171920] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1FA6F0]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1FA6F0]" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Buka di Google Maps</p>
                  <p className="text-xs text-zinc-400">Dapatkan petunjuk arah ke XPLAY Games</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#1FA6F0] transition-colors" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
