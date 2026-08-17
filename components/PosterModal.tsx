"use client";

import Image from "next/image";
import { X, Download, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PosterModal({ isOpen, onClose }: PosterModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center animate-fadeIn overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111111] border border-[#292929] rounded-3xl p-6 max-w-3xl w-full relative shadow-2xl my-8 flex flex-col items-center"
      >
        <div className="w-full flex items-center justify-between mb-4 pb-4 border-b border-[#292929]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FFD84D]" />
            <h3 className="text-lg font-bold text-white">
              Official Price List XPLAY Games
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-full h-[500px] sm:h-[600px] rounded-2xl overflow-hidden bg-[#080808] flex items-center justify-center p-2 mb-4">
          <Image
            src="/hargaxplay.jpeg"
            alt="Official Price List XPLAY Games per 16 Mei 2026"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3 pt-2">
          <span>Tarif berlaku per {BUSINESS_INFO.ratesEffectiveDate}</span>
          <a
            href="/hargaxplay.jpeg"
            download="PriceList-XPLAY-Games.jpeg"
            className="px-4 py-2 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-zinc-200 font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-[#1FA6F0]" />
            <span>Download Poster High-Res</span>
          </a>
        </div>
      </div>
    </div>
  );
}
