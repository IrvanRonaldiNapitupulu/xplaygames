"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { Image as ImageIcon, ZoomIn, Eye, Sparkles } from "lucide-react";

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
    <section id="gallery" className="py-20 bg-[#080808] border-t border-[#292929] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#B45CE0] uppercase mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>XPLAY LOUNGE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            ATMOSFER & GALERI XPLAY
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Lihat suasana asli gaming lounge, setup konsol, VIP/VVIP room, dan price list resmi kami.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === f
                  ? "bg-[#36B7F0] text-black shadow-md"
                  : "bg-[#111111] text-zinc-400 border border-[#292929] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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
              className="group cursor-pointer bg-[#111111] border border-[#292929] hover:border-[#36B7F0] rounded-2xl overflow-hidden transition-all duration-300 shadow-xl relative flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-[#171717]">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    item.isPricePoster ? "object-contain p-4" : "object-cover"
                  }`}
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="p-3 rounded-full bg-[#36B7F0] text-black font-bold flex items-center gap-1.5 text-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Perbesar Gambar</span>
                  </span>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#080808]/80 text-[#36B7F0] border border-[#292929]">
                  {item.category}
                </span>
              </div>

              {/* Title Strip */}
              <div className="p-4 border-t border-[#292929]">
                <h3 className="text-base font-bold text-white group-hover:text-[#36B7F0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111111] border border-[#292929] rounded-3xl p-6 max-w-2xl w-full relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{activeItemModal.title}</h3>
                <span className="text-xs text-zinc-400 font-mono">{activeItemModal.subtitle}</span>
              </div>
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-3 py-1.5 rounded-xl bg-[#171717] text-zinc-400 hover:text-white text-xs border border-[#292929]"
              >
                Tutup ✕
              </button>
            </div>

            <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-[#171717] flex items-center justify-center p-6">
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
