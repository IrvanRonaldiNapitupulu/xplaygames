"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, isBusinessOpen } from "@/data/business";

interface NavbarProps {
  onOpenBooking: (consoleName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setIsOpenNow(isBusinessOpen());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Homepage scroll section observer
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["pricing", "facilities", "location"];

    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    handleSectionScroll();
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Harga", href: "/#pricing" },
    { name: "Sewa PS", href: "/sewa-ps" },
    { name: "Playbox", href: "/playbox" },
    { name: "Live Billing", href: "/availability" },
    { name: "Membership", href: "/membership" },
    { name: "Fasilitas", href: "/#facilities" },
    { name: "Lokasi", href: "/#location" },
  ];

  const isLinkActive = (href: string) => {
    if (!mounted) return false;

    if (href === "/") {
      return pathname === "/" && !activeSection;
    }
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      return pathname === "/" && activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? "bg-[#08090B]/95 backdrop-blur-md border-b border-[#242832] h-18 sm:h-20"
        : "bg-[#08090B]/80 backdrop-blur-sm border-b border-[#242832]/40 h-18 sm:h-20"
        } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo & Compact Status */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-0.5 bg-[#242832] transition-colors group-hover:border-[#1FA6F0] border border-transparent">
                <div className="w-full h-full bg-[#08090B] rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/xplay.png"
                    alt="XPLAY GAMES Logo"
                    width={38}
                    height={38}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-[#1FA6F0] transition-colors">
                  XPLAY <span className="text-[#1FA6F0]">GAMES</span>
                </span>
                <span className="text-[10px] text-zinc-400 tracking-widest uppercase -mt-0.5 hidden sm:block font-mono">
                  Play The Game
                </span>
              </div>
            </Link>

            {/* Compact Operating Status Indicator */}
            {mounted && (
              <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-zinc-400 pl-3 border-l border-[#242832]/60">
                <span
                  className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-[#75D84B] animate-pulse" : "bg-[#FF3038]"
                    }`}
                />
                <span className={isOpenNow ? "text-zinc-200 font-semibold" : "text-zinc-400"}>
                  {isOpenNow ? "OPEN NOW" : "CLOSED"}
                </span>
                <span className="text-zinc-500">· {BUSINESS_INFO.operatingHoursText}</span>
              </div>
            )}
          </div>

          {/* Desktop Text Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              const isStatusBilling = link.href === "/availability";

              if (isStatusBilling) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 rounded-full bg-[#FF3038] animate-pulse text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-[#FF3038]/30 hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
                    <span>Live Billing</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-xs xl:text-sm font-medium transition-colors duration-150 whitespace-nowrap flex items-center gap-1.5 ${
                    active
                      ? "text-[#1FA6F0]"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1FA6F0] shadow-[0_1px_6px_rgba(31,166,240,0.5)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Booking CTA (Primary CTA) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="h-10 rounded-xl bg-[#1FA6F0] hover:opacity-90 text-black font-bold px-4 sm:px-5 text-xs sm:text-sm transition-opacity flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-[#1FA6F0]/10"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black/20" />
              <span>BOOKING SEKARANG</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            {mounted && (
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-400">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpenNow ? "bg-[#75D84B] animate-pulse" : "bg-[#FF3038]"
                  }`}
                />
                <span className={isOpenNow ? "text-[#75D84B] font-semibold" : "text-[#FF3038]"}>
                  {isOpenNow ? "OPEN NOW" : "CLOSED"}
                </span>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#111318] border border-[#242832] text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#1FA6F0]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#08090B]/98 backdrop-blur-xl border-b border-[#242832] px-5 py-5 shadow-2xl transition-all max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="flex flex-col gap-3 pb-4">

            {/* Mobile Open Status line */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pb-3 border-b border-[#242832]">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? "bg-[#75D84B] animate-pulse" : "bg-[#FF3038]"
                }`}
              />
              <span>Jam Operasional: {BUSINESS_INFO.operatingHoursText}</span>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                const isStatusBilling = link.href === "/availability";

                if (isStatusBilling) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="my-1 px-4 py-3 rounded-xl bg-[#FF3038] animate-pulse text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#FF3038]/30 whitespace-nowrap active:scale-[0.99] transition-transform"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
                      <span>Live Billing</span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm py-3 px-3 rounded-xl transition-colors whitespace-nowrap flex items-center gap-2 ${
                      active
                        ? "text-[#1FA6F0] font-semibold bg-[#1FA6F0]/10 border-l-2 border-[#1FA6F0]"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Booking CTA */}
            <div className="pt-3 border-t border-[#242832]">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full h-12 rounded-xl bg-[#1FA6F0] text-black font-extrabold text-sm text-center flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-[0.99]"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-black/20" />
                <span>BOOKING SEKARANG</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
