"use client";

import { useState } from "react";
import { PRICING_DATA } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";

interface ExperienceSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenBooking: (consoleName?: string) => void;
}

export default function ExperienceSection({ onSelectCategory, onOpenBooking }: ExperienceSectionProps) {
  const [selectedId, setSelectedId] = useState<string>("vvip");

  const selectedCategory = PRICING_DATA.find((c) => c.id === selectedId) || PRICING_DATA[4];

  return (
    <section id="experience" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Pilih Pengalaman Gaming Kamu
          </h2>
          <p className="text-zinc-400 text-base">
            Dari mabar kasual PS4 sampai VVIP Private Room lengkap dengan Nintendo & Netflix. Pilih yang sesuai gaya kamu.
          </p>
        </div>

        {/* Selector Tabs (Clean open list) */}
        <div className="flex items-center gap-2 flex-wrap mb-10 border-b border-[#1f1f1f] pb-4">
          {PRICING_DATA.map((cat) => {
            const isSelected = cat.id === selectedId;
            const isVVIP = cat.id === "vvip";
            const activeBorderColor = isVVIP ? "#FF2D8D" : "#1FA6F0";
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#111318] text-white border"
                    : "text-zinc-400 hover:text-white border border-transparent"
                }`}
                style={{
                  borderColor: isSelected ? activeBorderColor : "transparent",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isVVIP ? "#FF2D8D" : "#1FA6F0" }}
                />
                <span>{cat.name}</span>
                {cat.startingPrice && (
                  <span className="text-xs text-zinc-500 font-normal">
                    {cat.startingPrice}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Detail (Open Layout with subtle borders) */}
        <div className="bg-[#111318] border border-[#242832] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{
                    backgroundColor: selectedCategory.id === "vvip" ? "#FF2D8D" : "#1FA6F0",
                    color: selectedCategory.id === "vvip" ? "#ffffff" : "#000000",
                  }}
                >
                  {selectedCategory.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedCategory.name} Gaming Unit
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
                {selectedCategory.description}
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {selectedCategory.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: selectedCategory.id === "vvip" ? "#FF2D8D" : "#1FA6F0" }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking(selectedCategory.name)}
                  className="w-full sm:w-auto rounded-xl font-bold px-6 py-3 text-black text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: selectedCategory.id === "vvip" ? "#FF2D8D" : "#1FA6F0",
                    color: selectedCategory.id === "vvip" ? "#ffffff" : "#000000",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {selectedCategory.name} Sekarang</span>
                </button>

                <a
                  href="#pricing"
                  onClick={() => onSelectCategory(selectedCategory.id)}
                  className="w-full sm:w-auto rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-300 font-semibold px-5 py-3 text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Lihat Rincian Tarif</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Right Price Box */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full bg-[#08090B] border border-[#242832] p-6 rounded-xl flex flex-col">
                <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#1f1f1f]">
                  <div>
                    <span className="text-xs text-zinc-400 block mb-0.5">Tarif per jam</span>
                    {selectedCategory.originalPrice && (
                      <span className="text-xs line-through text-zinc-500 block">
                        {selectedCategory.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span
                      className="text-3xl font-black"
                      style={{ color: selectedCategory.id === "vvip" ? "#FF2D8D" : "#1FA6F0" }}
                    >
                      {selectedCategory.startingPrice}
                    </span>
                    <span className="text-xs text-zinc-400 font-normal"> / jam</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-zinc-400 mb-4">
                  <div className="flex justify-between py-1 border-b border-[#1f1f1f]">
                    <span>1 Jam</span>
                    <strong className="text-white">{selectedCategory.rates[0]?.formattedPrice}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1f1f1f]">
                    <span>3 Jam</span>
                    <strong className="text-white">{selectedCategory.rates[2]?.formattedPrice}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>8 Jam (Paket Hemat)</span>
                    <strong className="text-[#1FA6F0] font-bold">{selectedCategory.rates[7]?.formattedPrice}</strong>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500">
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
