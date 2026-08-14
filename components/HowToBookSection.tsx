"use client";

import { MessageCircle, Gamepad2, Clock, MapPin, Sparkles } from "lucide-react";

interface HowToBookSectionProps {
  onOpenBooking: () => void;
}

export default function HowToBookSection({ onOpenBooking }: HowToBookSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Pilih Console / Room",
      desc: "Pilih opsi bermain dari PS4, PS4+, PS5, VIP Room, atau VVIP Lounge.",
      icon: Gamepad2,
      accent: "#36B7F0",
    },
    {
      num: "02",
      title: "Pilih Durasi",
      desc: "Tentukan berapa jam sesi mabar kamu (mulai dari 1 jam hingga paket 8 jam hemat).",
      icon: Clock,
      accent: "#75D84B",
    },
    {
      num: "03",
      title: "Booking via WhatsApp",
      desc: "Klik tombol booking untuk mengirim format pesan otomatis via WhatsApp.",
      icon: MessageCircle,
      accent: "#FFD84D",
    },
    {
      num: "04",
      title: "Datang & Play",
      desc: "Datang langsung ke XPLAY Games sesuai jam booking dan langsung main!",
      icon: MapPin,
      accent: "#F45CB4",
    },
  ];

  return (
    <section id="how-to-book" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#75D84B] uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            <span>CARA BOOKING MABAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            4 LANGKAH MUDAH UNTUK MAIN
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Proses booking cepat tanpa ribet registrasi. Cukup via WhatsApp resmi XPLAY Games.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#292929] hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-3xl font-black font-mono"
                      style={{ color: step.accent }}
                    >
                      {step.num}
                    </span>
                    <div
                      className="p-3 rounded-xl bg-[#171717] border border-[#292929] group-hover:scale-110 transition-transform"
                      style={{ color: step.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#292929]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">
                    LANGKAH {step.num} DARI 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Booking Action */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="rounded-xl bg-gradient-to-r from-[#36B7F0] to-[#2b96c7] text-black font-extrabold px-8 py-4 text-sm sm:text-base shadow-lg shadow-[#36B7F0]/25 transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5 fill-black/20" />
            <span>LANSUNG BOOKING SEKARANG VIA WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
}
