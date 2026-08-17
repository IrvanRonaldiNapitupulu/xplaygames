"use client";

import { useState } from "react";
import { PRICING_DATA, CategoryPricing } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { MessageCircle, FileText, ChevronDown, Eye } from "lucide-react";

interface PricingSectionProps {
  onOpenBooking: (consoleName?: string) => void;
  onOpenPosterModal: () => void;
}

export default function PricingSection({ onOpenBooking, onOpenPosterModal }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const displayedCategories =
    activeTab === "all"
      ? PRICING_DATA
      : PRICING_DATA.filter((cat) => cat.id === activeTab);

  const toggleExpand = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section id="pricing" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Daftar Tarif Tempat Main PS
            </h2>
            <p className="text-zinc-400 text-base">
              Tarif resmi rental konsol & private room. Berlaku per{" "}
              <strong className="text-white">{BUSINESS_INFO.ratesEffectiveDate}</strong>.
            </p>
          </div>

          <button
            onClick={onOpenPosterModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111318] hover:bg-[#171920] border border-[#242832] text-xs font-semibold text-zinc-300 transition-colors shrink-0"
          >
            <FileText className="w-4 h-4 text-[#1FA6F0]" />
            <span>Lihat Poster Price List Official</span>
            <Eye className="w-3.5 h-3.5 text-zinc-500" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar scrollbar-none whitespace-nowrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              activeTab === "all"
                ? "bg-[#1FA6F0] text-black"
                : "bg-[#111318] text-zinc-400 border border-[#242832] hover:text-white"
            }`}
          >
            Semua Kategori
          </button>

          {PRICING_DATA.map((cat) => {
            const isVVIP = cat.id === "vvip";
            const activeBg = isVVIP ? "#FF2D8D" : "#1FA6F0";
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === cat.id
                    ? "text-black font-extrabold"
                    : "bg-[#111318] text-zinc-400 border border-[#242832] hover:text-white"
                }`}
                style={{
                  backgroundColor: activeTab === cat.id ? activeBg : undefined,
                  color: activeTab === cat.id ? (isVVIP ? "#ffffff" : "#000000") : undefined,
                }}
              >
                {cat.name} ({cat.startingPrice})
              </button>
            );
          })}
        </div>

        {/* Menu Harga Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {displayedCategories.map((cat: CategoryPricing) => {
            const isExpanded = expandedCategory === cat.id;
            const isVVIP = cat.id === "vvip";
            const accentColor = isVVIP ? "#FF2D8D" : "#1FA6F0";

            return (
              <div
                key={cat.id}
                className="bg-[#111318] border border-[#242832] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Console Header */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#1f1f1f]">
                    <h3 className="text-xl font-bold text-white">
                      {cat.name}
                    </h3>
                    {cat.originalPrice && (
                      <span className="text-xs line-through text-zinc-500 font-mono">
                        {cat.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Hourly Rate Focus */}
                  <div className="mb-4">
                    <span className="text-xs text-zinc-400 block mb-0.5">Tarif per jam</span>
                    <div className="text-3xl font-black" style={{ color: accentColor }}>
                      {cat.startingPrice}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Rate Table */}
                  <div className="bg-[#08090B] border border-[#242832] rounded-lg p-3 mb-5">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#1f1f1f] text-[11px] font-mono text-zinc-400">
                      <span>DURASI</span>
                      <span>HARGA</span>
                    </div>

                    <div className="space-y-1 text-xs">
                      {cat.rates.slice(0, isExpanded ? 8 : 4).map((r) => (
                        <div key={r.hours} className="flex justify-between py-0.5 text-zinc-300">
                          <span>{r.hours} Jam</span>
                          <span className="font-bold text-white font-mono">{r.formattedPrice}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(cat.id)}
                      className="w-full mt-2 pt-2 border-t border-[#1f1f1f] text-[11px] text-[#1FA6F0] font-semibold flex items-center justify-center gap-1 hover:underline"
                    >
                      <span>{isExpanded ? "Sembunyikan" : "Tarif s.d 8 Jam"}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>

                {/* Booking CTA */}
                <button
                  onClick={() => onOpenBooking(cat.name)}
                  className="w-full rounded-lg text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: accentColor,
                    color: isVVIP ? "#ffffff" : "#000000",
                  }}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book {cat.name}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
