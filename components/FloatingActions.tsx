"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/data/business";

interface FloatingActionsProps {
  onOpenBooking?: (consoleName?: string) => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.open(generateWhatsAppLink(), "_blank");
    }
  };

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col gap-3 items-center">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#111318] hover:bg-[#1a1d24] border border-[#242832] text-zinc-300 hover:text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Bulat Floating Button - Visible ONLY on Desktop/Tablet (hidden on mobile) */}
      <button
        onClick={handleWhatsAppClick}
        className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl items-center justify-center transition-all duration-200 hover:scale-105 relative group"
        aria-label="Chat WhatsApp"
        title="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 text-white" />
        {/* Subtle Tooltip on Hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#111318] border border-[#242832] text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
}
