"use client";

import { FACILITIES_DATA, FacilityCategory } from "@/data/facilities";
import { Gamepad2, Crown, Tv, Building2, CheckCircle2, Shield } from "lucide-react";

export default function FacilitiesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Gamepad2":
        return Gamepad2;
      case "Crown":
        return Crown;
      case "Tv":
        return Tv;
      case "Building2":
        return Building2;
      default:
        return Shield;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#36B7F0] uppercase mb-4">
            <Shield className="w-4 h-4" />
            <span>FASILITAS OFFICIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            FASILITAS & ENTERTAINMENT
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Semua fasilitas terkonfirmasi yang tersedia di XPLAY Games untuk menjamin pengalaman mabar kamu.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((cat: FacilityCategory, idx) => {
            const Icon = getIcon(cat.iconName);
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#292929] hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl bg-[#171717] border border-[#292929]"
                      style={{ color: cat.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {cat.title}
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#292929]">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: cat.accentColor }}
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-200">
                            {item.name}
                          </h4>
                          <p className="text-xs text-zinc-400 mt-0.5 leading-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
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
