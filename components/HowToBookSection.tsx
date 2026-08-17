"use client";

import { MessageCircle } from "lucide-react";

interface HowToBookSectionProps {
  onOpenBooking: () => void;
}

export default function HowToBookSection({ onOpenBooking }: HowToBookSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Pilih Unit / Room",
      desc: "Pilih opsi bermain dari PS4, PS4+, PS5, VIP Room, atau VVIP Room.",
    },
    {
      num: "02",
      title: "Pilih Durasi Sesi",
      desc: "Tentukan berapa jam sesi mabar kamu (mulai dari 1 jam hingga paket 8 jam hemat).",
    },
    {
      num: "03",
      title: "Konfirmasi via WhatsApp",
      desc: "Kirim format booking otomatis langsung ke WhatsApp official XPLAY Games.",
    },
    {
      num: "04",
      title: "Datang & Main",
      desc: "Datang langsung ke lokasi XPLAY Games sesuai jadwal dan langsung mabar!",
    },
  ];

  return (
    <section id="how-to-book" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            4 Langkah Mudah untuk Main
          </h2>
          <p className="text-zinc-400 text-base">
            Proses booking cepat tanpa registrasi ribet. Cukup via WhatsApp resmi XPLAY Games.
          </p>
        </div>

        {/* Open Horizontal Step Layout with Large Numbers as Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-[#1f1f1f] pb-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-black font-mono text-[#22C7F2] mb-3">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenBooking}
            className="rounded-xl bg-[#22C7F2] hover:opacity-90 text-black font-extrabold px-6 py-3.5 text-sm inline-flex items-center gap-2 transition-opacity"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>Booking Sekarang via WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
