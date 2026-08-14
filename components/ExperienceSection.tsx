"use client";

import { useState } from "react";
import { PRICING_DATA, CategoryPricing } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { Gamepad2, Sparkles, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";

interface ExperienceSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenBooking: (consoleName?: string) => void;
}

export default function ExperienceSection({ onSelectCategory, onOpenBooking }: ExperienceSectionProps) {
  const [selectedId, setSelectedId] = useState<string>("vvip");

  const selectedCategory = PRICING_DATA.find((c) => c.id === selectedId) || PRICING_DATA[4];

  return (
    <section id="experience" className="py-20 bg-[#080808] border-t border-[#292929] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#36B7F0] uppercase mb-4">
            <Gamepad2 className="w-4 h-4" />
            <span>FIND YOUR PLAY STYLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            PILIH PENGALAMAN GAMING KAMU
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Dari mabar kasual PS4 sampai VVIP Private Lounge lengkap dengan Nintendo & Netflix. Pilih yang sesuai gaya kamu.
          </p>
        </div>

        {/* 5 Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {PRICING_DATA.map((cat) => {
            const isSelected = cat.id === selectedId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`relative px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-[#171717] text-white border-2 shadow-lg scale-105"
                    : "bg-[#111111] text-zinc-400 border border-[#292929] hover:text-white hover:border-zinc-700"
                }`}
                style={{
                  borderColor: isSelected ? cat.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 20px ${cat.bgGlow}` : undefined,
                }}
              >
                {isSelected ? (
                  <img
                    src="/xplay.png"
                    alt="XPLAY Logo"
                    className="w-4 h-4 object-contain animate-pulse"
                  />
                ) : (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.accentColor }}
                  />
                )}
                <span>{cat.name}</span>
                {cat.badge && (
                  <span
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded text-black font-extrabold uppercase ml-1"
                    style={{ backgroundColor: cat.accentColor }}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Detail Showcase Card */}
        <div
          className="bg-[#111111] border-2 rounded-3xl p-6 sm:p-10 transition-all duration-500 shadow-2xl relative overflow-hidden"
          style={{ borderColor: selectedCategory.accentColor }}
        >
          {/* Subtle Corner Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: selectedCategory.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-extrabold text-black uppercase"
                  style={{ backgroundColor: selectedCategory.accentColor }}
                >
                  {selectedCategory.name} EXPERIENCE
                </span>
                {selectedCategory.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#171717] text-zinc-300 border border-[#292929]">
                    {selectedCategory.badge}
                  </span>
                )}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                {selectedCategory.name} Gaming Unit
              </h3>
              
              <p className="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed">
                {selectedCategory.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedCategory.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-[#171717] p-3 rounded-xl border border-[#292929]">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: selectedCategory.accentColor }}
                    />
                    <span className="text-sm font-medium text-zinc-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenBooking(selectedCategory.name)}
                  className="w-full sm:w-auto rounded-xl font-bold px-7 py-3.5 text-black text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-md"
                  style={{ backgroundColor: selectedCategory.accentColor }}
                >
                  <MessageCircle className="w-4 h-4 fill-black/20" />
                  <span>BOOK {selectedCategory.name} SEKARANG</span>
                </button>

                <a
                  href="#pricing"
                  onClick={() => onSelectCategory(selectedCategory.id)}
                  className="w-full sm:w-auto rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-300 font-semibold px-6 py-3.5 text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Lihat Rincian Tarif Jam</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Right Price Highlight Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#171717] border border-[#292929] p-8 rounded-2xl text-center relative flex flex-col items-center">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  TARIF MULAI DARI
                </span>
                
                <div
                  className="text-4xl sm:text-5xl font-black mb-1"
                  style={{ color: selectedCategory.accentColor }}
                >
                  {selectedCategory.startingPrice}
                </div>
                
                <span className="text-sm font-semibold text-zinc-400 mb-6">
                  / jam
                </span>

                <div className="w-full pt-6 border-t border-[#292929] flex flex-col gap-2 text-xs text-zinc-400">
                  <div className="flex justify-between py-1 border-b border-[#292929]/50">
                    <span>1 Jam</span>
                    <strong className="text-white">{selectedCategory.rates[0]?.formattedPrice}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#292929]/50">
                    <span>3 Jam</span>
                    <strong className="text-white">{selectedCategory.rates[2]?.formattedPrice}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>8 Jam (Paket Hemat)</span>
                    <strong className="text-[#75D84B] font-bold">{selectedCategory.rates[7]?.formattedPrice}</strong>
                  </div>
                </div>

                <div className="mt-6 text-[11px] text-zinc-500 italic">
                  *Tarif resmi per {BUSINESS_INFO.ratesEffectiveDate}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
