"use client";

import Link from "next/link";
import { GAME_CATEGORIES, GameCategory } from "@/data/games";

export default function GamesSection() {
  return (
    <section id="games" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Koleksi Judul Game Favorit
            </h2>
            <p className="text-zinc-400 text-base">
              Berbagai pilihan judul game favorit siap dimainkan di konsol PS4, PS5, VIP, dan VVIP Room.
            </p>
          </div>

          <Link
            href="/availability"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111318] hover:bg-[#1a1d24] border border-[#242832] text-xs font-bold text-[#22C7F2] transition-colors shrink-0"
          >
            <span>Cek Game Per Unit (Live)</span>
            <span>→</span>
          </Link>
        </div>

        {/* Clean Typography & Grouping List (No repetitive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_CATEGORIES.map((cat: GameCategory) => (
            <div key={cat.id} className="border-b border-[#1f1f1f] pb-6 last:border-b-0">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#22C7F2] mb-2">
                {cat.name}
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                {cat.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cat.sampleTitles.map((title, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-semibold text-white bg-[#111318] px-3 py-1.5 rounded-md border border-[#242832]"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
