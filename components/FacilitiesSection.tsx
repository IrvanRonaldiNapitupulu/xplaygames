"use client";

import { FACILITIES_DATA, FacilityCategory } from "@/data/facilities";
import { CheckCircle2 } from "lucide-react";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Fasilitas & Layanan Venue
          </h2>
          <p className="text-zinc-400 text-base">
            Semua fasilitas terkonfirmasi yang tersedia di XPLAY Games untuk menjamin pengalaman mabar kamu.
          </p>
        </div>

        {/* Editorial Information List (No heavy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {FACILITIES_DATA.map((cat: FacilityCategory, idx) => (
            <div key={idx} className="border-b border-[#1f1f1f] pb-8 last:border-b-0">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  {cat.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1FA6F0] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">
                        {item.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
