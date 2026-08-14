"use client";

import Image from "next/image";
import { FLOORS_DATA, FloorInfo } from "@/data/floors";
import { Layers, Cigarette, CigaretteOff, Check, MessageCircle, ArrowRight } from "lucide-react";

interface FloorSectionProps {
  onOpenBooking: (floorName?: string) => void;
}

export default function FloorSection({ onOpenBooking }: FloorSectionProps) {
  return (
    <section id="floors" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#75D84B] uppercase mb-4">
            <Layers className="w-4 h-4" />
            <span>2 FLOORS EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            TWO FLOORS. DIFFERENT VIBES.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Setiap lantai memiliki karakter dan kenyamanan tersendiri. Total 20 unit setup gaming siap menyambut sesi mabar kamu.
          </p>
        </div>

        {/* 2 Floors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLOORS_DATA.map((floor: FloorInfo) => {
            const isSmoking = floor.isSmoking;
            return (
              <div
                key={floor.floorNumber}
                className="bg-[#111111] border border-[#292929] rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Accent Top Border Bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all"
                  style={{ backgroundColor: floor.badgeColor }}
                />

                <div>
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between mb-6 pt-2">
                    <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                      FLOOR {floor.floorNumber}
                    </span>

                    <div
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                        isSmoking
                          ? "bg-[#FF3038]/15 text-[#FF3038] border border-[#FF3038]/30"
                          : "bg-[#75D84B]/15 text-[#75D84B] border border-[#75D84B]/30"
                      }`}
                    >
                      {isSmoking ? <Cigarette className="w-4 h-4" /> : <CigaretteOff className="w-4 h-4" />}
                      <span>{floor.environmentTag}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    {floor.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed">
                    {floor.description}
                  </p>

                  {/* Floor Image Preview */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-[#292929]/50 shadow-inner">
                    <Image
                      src={floor.imageSrc}
                      alt={floor.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Units Breakdown */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                      DAFTAR UNIT GAMING ({floor.totalUnits} SETUP):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {floor.units.map((u, idx) => (
                        <div
                          key={idx}
                          className="bg-[#171717] border border-[#292929] p-3 rounded-xl flex flex-col justify-center"
                        >
                          <span className="text-xs text-zinc-400 font-mono">Tipe</span>
                          <span
                            className="text-sm font-extrabold"
                            style={{ color: u.accent || "#FFFFFF" }}
                          >
                            {u.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Atmosphere Highlights */}
                  <div className="mb-8 pt-4 border-t border-[#292929]">
                    <div className="flex flex-wrap gap-2">
                      {floor.highlights.map((hl, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-[#171717] text-zinc-300 border border-[#292929]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#36B7F0]" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floor CTA */}
                <button
                  onClick={() => onOpenBooking(`Floor ${floor.floorNumber} (${floor.environmentTag})`)}
                  className="w-full rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-white font-bold py-3.5 px-4 text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-zinc-600"
                >
                  <MessageCircle className="w-4 h-4 text-[#36B7F0]" />
                  <span>EXPLORE & BOOK FLOOR {floor.floorNumber}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
