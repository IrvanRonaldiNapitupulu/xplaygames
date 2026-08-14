"use client";

import { BUSINESS_INFO, generateWhatsAppLink } from "@/data/business";
import { MapPin, Clock, ExternalLink, MessageCircle, Navigation } from "lucide-react";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export default function LocationSection({ onOpenBooking }: LocationSectionProps) {
  return (
    <section id="location" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#36B7F0] uppercase mb-4">
            <MapPin className="w-4 h-4 text-[#36B7F0]" />
            <span>LOKASI & NAVIGASI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            COME PLAY WITH US
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Kunjungi lokasi XPlay Games Lounge. Kami siap menyambut sesi mabar kamu setiap hari.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#292929] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#292929]">
                <div className="w-12 h-12 rounded-2xl bg-[#171717] border border-[#292929] flex items-center justify-center text-[#36B7F0]">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">
                    PlayStation Gaming Lounge
                  </span>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                {/* Operating Hours Box */}
                <div className="bg-[#171717] p-4 rounded-2xl border border-[#292929]">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono mb-1 uppercase">
                    <Clock className="w-4 h-4 text-[#FFD84D]" />
                    <span>JAM OPERASIONAL HARI INI</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {BUSINESS_INFO.operatingHoursText}
                  </div>
                  <span className="text-xs text-[#75D84B] font-semibold mt-1 block">
                    ● Siang sampai lewat tengah malam (03:00 WIB)
                  </span>
                </div>

                {/* WhatsApp Contact Box */}
                <div className="bg-[#171717] p-4 rounded-2xl border border-[#292929]">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono mb-1 uppercase">
                    <MessageCircle className="w-4 h-4 text-[#36B7F0]" />
                    <span>CONTACT & WHATSAPP</span>
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    {BUSINESS_INFO.whatsappNumber}
                  </div>
                  <span className="text-xs text-zinc-400 mt-1 block">
                    Fast response untuk booking tempat & konsultasi room
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#292929]">
              <a
                href={BUSINESS_INFO.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-[#36B7F0] text-black font-extrabold py-3.5 px-4 text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                <span>BUKA GOOGLE MAPS</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-white font-bold py-3.5 px-4 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#36B7F0]" />
                <span>BOOKING VIA WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* Right Map Embed Panel */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#292929] rounded-3xl p-3 sm:p-4 shadow-xl overflow-hidden flex flex-col min-h-[380px]">
            <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden bg-[#171717]">
              <iframe
                title="XPlay Games Google Maps Location"
                src="https://maps.google.com/maps?q=XPlay%20Games&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
