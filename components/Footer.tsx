"use client";

import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/data/business";
import { Clock, MessageCircle, Gamepad2, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#292929] text-zinc-400 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1f1f1f]">

          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full p-0.5 bg-[#242832]">
                <div className="w-full h-full bg-[#080808] rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/xplay.png"
                    alt="XPLAY GAMES Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                XPLAY <span className="text-[#1FA6F0]">GAMES</span>
              </span>
            </Link>

            <p className="text-zinc-300 text-sm font-semibold mb-2">
              &quot;{BUSINESS_INFO.taglineIndo}&quot;
            </p>
            <p className="text-zinc-500 text-xs max-w-sm mb-6 leading-relaxed">
              PlayStation Gaming Place modern dengan 20 unit setup gaming, Floor 01 Smoking Area & Floor 02 No-Smoking Area, VIP PS5 & VVIP Nintendo/Netflix Room.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-[#1FA6F0] font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Official: {BUSINESS_INFO.whatsappNumber}</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
              NAVIGASI WEBSITE
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#1FA6F0] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sewa-ps" className="hover:text-[#1FA6F0] transition-colors">
                  Sewa PS (Bawa Pulang)
                </Link>
              </li>
              <li>
                <Link href="/playbox" className="hover:text-[#1FA6F0] transition-colors">
                  Playbox (PS + TV)
                </Link>
              </li>
              <li>
                <Link href="/availability" className="hover:text-[#1FA6F0] transition-colors">
                  Live Status Unit (Real-time)
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#1FA6F0] transition-colors">
                  Membership & Loyalty Rewards
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#1FA6F0] transition-colors">
                  Daftar Harga Main
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-[#1FA6F0] transition-colors">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-[#1FA6F0] transition-colors">
                  Lokasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours & Direct Action */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
                JAM OPERASIONAL
              </h4>
              <div className="bg-[#111111] p-4 rounded-xl border border-[#292929] mb-4">
                <div className="flex items-center gap-2 text-white font-bold text-base mb-1">
                  <Clock className="w-4 h-4 text-[#FFD84D]" />
                  <span>{BUSINESS_INFO.operatingHoursText}</span>
                </div>
                <span className="text-xs text-zinc-400">
                  Buka setiap hari dari pukul 10:00 pagi hingga 03:00 dini hari WIB.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} XPLAY GAMES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
