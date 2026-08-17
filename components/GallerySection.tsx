"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { ZoomIn } from "lucide-react";

interface GallerySectionProps {
  onOpenPosterModal: () => void;
}

export default function GallerySection({ onOpenPosterModal }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeItemModal, setActiveItemModal] = useState<GalleryItem | null>(null);

  const filters = ["All", "Pricing", "Floor 01", "Floor 02", "VIP", "VVIP"];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Left-aligned, clean, no AI pill) */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Atmosfer & Galeri Venue
          </h2>
          <p className="text-zinc-400 text-base">
            Lihat suasana asli venue XPLAY, setup konsol, VIP/VVIP room, dan price list resmi kami.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeFilter === f
                  ? "bg-[#22C7F2] text-black"
                  : "bg-[#111318] text-zinc-400 border border-[#242832] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Natural Photography Grid (No heavy card wrappers, borders, or badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.isPricePoster) {
                  onOpenPosterModal();
                } else {
                  setActiveItemModal(item);
                }
              }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Natural Image Container with slight radius */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#111318]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className={`transition-transform duration-300 group-hover:scale-102 ${
                    item.isPricePoster ? "object-contain p-4" : "object-cover"
                  }`}
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-lg bg-[#22C7F2] text-black font-bold flex items-center gap-1.5 text-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Perbesar</span>
                  </span>
                </div>
              </div>

              {/* Minimal Text Below Photo */}
              <div className="mt-3">
                <h3 className="text-sm font-bold text-white group-hover:text-[#22C7F2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Non-poster Items */}
      {activeItemModal && (
        <div
          onClick={() => setActiveItemModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111318] border border-[#242832] rounded-2xl p-6 max-w-2xl w-full relative"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{activeItemModal.title}</h3>
                <span className="text-xs text-zinc-400">{activeItemModal.subtitle}</span>
              </div>
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-3 py-1.5 rounded-lg bg-[#08090B] text-zinc-400 hover:text-white text-xs border border-[#242832]"
              >
                Tutup ✕
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#08090B] flex items-center justify-center p-4">
              <Image
                src={activeItemModal.imageSrc}
                alt={activeItemModal.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
