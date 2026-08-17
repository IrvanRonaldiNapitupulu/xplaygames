"use client";

import { MessageCircle, Gamepad2 } from "lucide-react";

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export default function MobileStickyCTA({ onOpenBooking }: MobileStickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#080808]/90 backdrop-blur-md border-t border-[#292929] md:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <button
        onClick={onOpenBooking}
        className="w-full rounded-xl bg-[#22C7F2] text-black font-extrabold py-3.5 px-4 text-center flex items-center justify-center gap-2.5 transition-opacity hover:opacity-90"
      >
        <Gamepad2 className="w-5 h-5 text-black" />
        <span className="tracking-wide text-sm">BOOKING SEKARANG</span>
      </button>
    </div>
  );
}
