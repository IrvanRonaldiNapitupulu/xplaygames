"use client";

import { useState } from "react";
import Image from "next/image";
import { PRICING_DATA, CategoryPricing } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { DollarSign, Check, MessageCircle, FileText, Sparkles, ChevronDown, Eye } from "lucide-react";

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
    <section id="pricing" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#FFD84D] uppercase mb-4">
            <DollarSign className="w-4 h-4" />
            <span>PRICE LIST RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            TRANSPARAN & TANPA BIAYA TERSEBUNYI
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-6">
            Daftar tarif rental PlayStation, VIP & VVIP di XPLAY Games. Berlaku per{" "}
            <strong className="text-white">{BUSINESS_INFO.ratesEffectiveDate}</strong>.
          </p>

          {/* Button to view official poster image */}
          <button
            onClick={onOpenPosterModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] hover:border-zinc-600 text-xs font-semibold text-zinc-300 transition-colors"
          >
            <FileText className="w-4 h-4 text-[#FFD84D]" />
            <span>Lihat Poster Price List Official</span>
            <Eye className="w-3.5 h-3.5 text-zinc-500" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "all"
                ? "bg-[#36B7F0] text-black shadow-md"
                : "bg-[#111111] text-zinc-400 border border-[#292929] hover:text-white"
            }`}
          >
            Semua Category
          </button>

          {PRICING_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === cat.id
                  ? "bg-[#171717] text-white border-2"
                  : "bg-[#111111] text-zinc-400 border border-[#292929] hover:text-white"
              }`}
              style={{
                borderColor: activeTab === cat.id ? cat.accentColor : undefined,
              }}
            >
              {cat.name} ({cat.startingPrice})
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {displayedCategories.map((cat: CategoryPricing) => {
            const isExpanded = expandedCategory === cat.id;
            return (
              <div
                key={cat.id}
                className="bg-[#111111] border-2 rounded-2xl p-5 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
                style={{ borderColor: cat.borderColor.replace("border-", "").replace("/30", "") }}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-lg text-xs font-mono font-extrabold text-black uppercase"
                      style={{ backgroundColor: cat.accentColor }}
                    >
                      {cat.name}
                    </span>
                    {cat.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#292929] text-zinc-300">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Hourly Rate Focus */}
                  <div className="mb-4 text-center sm:text-left">
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">
                      TARIF PER JAM
                    </span>
                    <div className="text-3xl font-black text-white">
                      {cat.startingPrice}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Quick Feature bullets */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#292929]">
                    {cat.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: cat.accentColor }} />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rate Table Breakdown */}
                  <div className="bg-[#171717] border border-[#292929] rounded-xl p-3 mb-6">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#292929] text-[11px] font-mono text-zinc-400">
                      <span>DURASI</span>
                      <span>HARGA</span>
                    </div>

                    <div className="space-y-1 text-xs">
                      {/* Show first 4 rates always */}
                      {cat.rates.slice(0, isExpanded ? 8 : 4).map((r) => (
                        <div key={r.hours} className="flex justify-between py-1 text-zinc-300 border-b border-[#292929]/40 last:border-none">
                          <span>{r.hours} Jam</span>
                          <span className="font-bold text-white font-mono">{r.formattedPrice}</span>
                        </div>
                      ))}
                    </div>

                    {/* Toggle more rates button */}
                    <button
                      onClick={() => toggleExpand(cat.id)}
                      className="w-full mt-2 pt-2 border-t border-[#292929] text-[11px] text-[#36B7F0] font-semibold flex items-center justify-center gap-1 hover:underline"
                    >
                      <span>{isExpanded ? "Sembunyikan Tarif 5-8 Jam" : "Lihat Tarif Lengkap (s.d 8 Jam)"}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>

                {/* Booking CTA per Tier */}
                <button
                  onClick={() => onOpenBooking(cat.name)}
                  className="w-full rounded-xl text-black font-extrabold py-3 text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-md"
                  style={{ backgroundColor: cat.accentColor }}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
                  <span>BOOK {cat.name}</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
