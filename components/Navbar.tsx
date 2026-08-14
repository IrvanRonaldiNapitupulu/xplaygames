"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Clock, Gamepad2 } from "lucide-react";
import { BUSINESS_INFO, isBusinessOpen, generateWhatsAppLink } from "@/data/business";

interface NavbarProps {
  onOpenBooking: (consoleName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOpenNow(isBusinessOpen());

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sewa PS", href: "/sewa-ps" },
    { name: "Playbox", href: "/playbox" },
    { name: "Status", href: "/availability" },
    { name: "Membership", href: "/membership" },
    { name: "Harga", href: "/#pricing" },
    { name: "Fasilitas", href: "/#facilities" },
    { name: "Lokasi", href: "/#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#292929] py-3 shadow-xl"
          : "bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#36B7F0] via-[#B45CE0] to-[#FF3038] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080808] rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/xplay.png"
                  alt="XPLAY GAMES Logo"
                  width={44}
                  height={44}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#36B7F0] transition-colors">
                XPLAY <span className="text-[#36B7F0]">GAMES</span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase -mt-1 hidden sm:block font-mono">
                Gaming Lounge
              </span>
            </div>
          </Link>

          {/* Status Badge & Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Live Open/Closed Status */}
            {mounted && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOpenNow ? "bg-[#75D84B]" : "bg-[#FF3038]"
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isOpenNow ? "bg-[#75D84B]" : "bg-[#FF3038]"
                    }`}
                  ></span>
                </span>
                <span className="text-zinc-300">
                  {isOpenNow ? (
                    <span className="text-[#75D84B] font-semibold">OPEN NOW</span>
                  ) : (
                    <span className="text-[#FF3038] font-semibold">CLOSED</span>
                  )}{" "}
                  <span className="text-zinc-500 text-[11px]">({BUSINESS_INFO.operatingHoursText})</span>
                </span>
              </div>
            )}

            {/* Nav Items */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isStatus = link.name === "Status";
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-zinc-300 hover:text-[#36B7F0] transition-colors py-1 flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                    {isStatus && (
                      <span className="px-1.5 py-0.5 text-[9px] font-black text-white bg-[#FF3038] rounded tracking-wider uppercase font-mono leading-none">
                        LIVE
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Booking CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#36B7F0] to-[#2b96c7] text-black font-bold px-5 py-2.5 text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(54,183,240,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black/20" />
              <span>BOOKING SEKARANG</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Status Indicator */}
            {mounted && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111111] border border-[#292929] text-[11px] font-medium">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    isOpenNow ? "bg-[#75D84B] animate-pulse" : "bg-[#FF3038]"
                  }`}
                />
                <span className={isOpenNow ? "text-[#75D84B]" : "text-[#FF3038]"}>
                  {isOpenNow ? "OPEN" : "CLOSED"}
                </span>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#111111] border border-[#292929] text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#36B7F0]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080808]/95 backdrop-blur-xl border-b border-[#292929] px-4 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#292929]">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-[#36B7F0]" />
                <span>Jam Operasional: {BUSINESS_INFO.operatingHoursText}</span>
              </div>
            </div>

            {navLinks.map((link) => {
              const isStatus = link.name === "Status";
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-zinc-200 hover:text-[#36B7F0] transition-colors py-2 border-b border-[#171717] flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {isStatus && (
                      <span className="px-1.5 py-0.5 text-[9px] font-black text-white bg-[#FF3038] rounded tracking-wider uppercase font-mono leading-none">
                        LIVE
                      </span>
                    )}
                  </span>
                  <span className="text-zinc-600 text-xs">→</span>
                </Link>
              );
            })}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-xl bg-[#36B7F0] text-black font-bold py-3.5 text-center flex items-center justify-center gap-2 shadow-lg shadow-[#36B7F0]/20"
              >
                <MessageCircle className="w-5 h-5 fill-black/20" />
                <span>BOOKING VIA WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
