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
                onClick={onOpenBooking}
                className="w-full rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-bold py-3 px-4 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#1FA6F0]" />
                <span>Booking via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Map Embed Panel */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#111318] border border-[#242832] min-h-[360px]">
            <iframe
              title="XPlay Games Google Maps Location"
              src="https://maps.google.com/maps?q=XPlay%20Games&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              className="w-full h-full min-h-[360px] filter grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
