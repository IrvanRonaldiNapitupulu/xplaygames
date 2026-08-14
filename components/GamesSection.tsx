"use client";

import { GAME_CATEGORIES, GameCategory } from "@/data/games";
import { Gamepad2, Trophy, Zap, Gauge, Crosshair, Compass } from "lucide-react";

export default function GamesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return Trophy;
      case "Zap":
        return Zap;
      case "Gauge":
        return Gauge;
      case "Crosshair":
        return Crosshair;
      case "Compass":
        return Compass;
      default:
        return Gamepad2;
    }
  };

  return (
    <section id="games" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#FFD84D] uppercase mb-4">
            <Gamepad2 className="w-4 h-4 text-[#FFD84D]" />
            <span>GENRE & KOLEKSI GAME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            WHAT WILL YOU PLAY TODAY?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Koleksi judul game favorit siap dimainkan di konsol PS4, PS4+, PS5, dan Nintendo VVIP Lounge.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {GAME_CATEGORIES.map((cat: GameCategory) => {
            const Icon = getIcon(cat.iconName);
            return (
              <div
                key={cat.id}
                className="bg-[#111111] border border-[#292929] hover:border-zinc-700 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#171717] border border-[#292929] text-[#36B7F0] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171717] border border-[#292929] text-zinc-300 font-bold uppercase">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292929]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                    CONTOH JUDUL FAVORITE:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.sampleTitles.map((title, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-1 rounded bg-[#171717] text-zinc-300 border border-[#292929]"
                      >
                        {title}
                      </span>
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
