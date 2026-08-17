"use client";

import Image from "next/image";
import Link from "next/link";
import { FLOORS_DATA, FloorInfo } from "@/data/floors";
import { Cigarette, CigaretteOff, Check, MessageCircle } from "lucide-react";

interface FloorSectionProps {
  onOpenBooking: (floorName?: string) => void;
}

export default function FloorSection({ onOpenBooking }: FloorSectionProps) {
  return (
    <section id="floors" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Dua Lantai, Dua Suasana
          </h2>
          <p className="text-zinc-400 text-base">
            Setiap lantai memiliki karakter dan kenyamanan tersendiri. Total 20 unit setup gaming siap menyambut sesi mabar kamu.
          </p>
        </div>

        {/* 2 Floors Layout - Photo as Hero */}
        <div className="space-y-12">
          {FLOORS_DATA.map((floor: FloorInfo) => {
            const isSmoking = floor.isSmoking;
            return (
              <div
                key={floor.floorNumber}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#1f1f1f] pb-12 last:border-b-0 last:pb-0"
              >
                {/* Large Hero Photography */}
                <div className="lg:col-span-7 relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#111318]">
                  <Image
                    src={floor.imageSrc}
                    alt={floor.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#08090B]/90 text-white backdrop-blur border border-[#242832]">
                    {isSmoking ? <Cigarette className="w-4 h-4 text-[#FF3038]" /> : <CigaretteOff className="w-4 h-4 text-[#1FA6F0]" />}
                    <span>{floor.environmentTag}</span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Lantai {floor.floorNumber}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {floor.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {floor.description}
                  </p>

                  {/* Units Breakdown */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Daftar Unit ({floor.totalUnits} Setup):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {floor.units.map((u, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#111318] border border-[#242832]"
                          style={{ color: u.accent || "#FFFFFF" }}
                        >
                          {u.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Atmosphere Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {floor.highlights.map((hl, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs text-zinc-400"
                        >
                          <Check className="w-3.5 h-3.5 text-[#1FA6F0]" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Floor CTA */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <button
                      onClick={() => onOpenBooking(`Floor ${floor.floorNumber} (${floor.environmentTag})`)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-white font-bold py-3 px-5 text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#1FA6F0]" />
                      <span>Book Lantai {floor.floorNumber}</span>
                    </button>

                    <Link
                      href="/availability"
                      className="text-xs font-semibold text-[#1FA6F0] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Lihat Game per Unit</span>
                      <span>→</span>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
