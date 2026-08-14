"use client";

import React, { useState } from "react";
import { Star, ArrowRight, ShieldAlert, Award, Sparkles, HelpCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Definisi data reward koin membership
const REWARD_DATA = {
  ps4: {
    title: "PS4 Regular",
    subtitle: "Console PlayStation 4 Standard",
    badge: "Standard",
    accent: "#36B7F0",
    items: [
      { duration: "30 Menit", value: "Rp6.000", points: 12 },
      { duration: "1 Jam", value: "Rp12.000", points: 24 },
      { duration: "2 Jam", value: "Rp23.000", points: 46 },
      { duration: "3 Jam", value: "Rp33.000", points: 66 },
      { duration: "4 Jam", value: "Rp43.000", points: 86 },
      { duration: "5 Jam", value: "Rp53.000", points: 106 },
      { duration: "6 Jam", value: "Rp62.000", points: 124 },
      { duration: "7 Jam", value: "Rp71.000", points: 142 },
      { duration: "8 Jam", value: "Rp80.000", points: 160 },
      { duration: "Paket 3 Jam Happy Hour", value: "Rp27.000", points: 54 },
      { duration: "Paket Pagi Unlimited 6 Jam", value: "Rp40.000", points: 80 },
      { duration: "Paket Malam Unlimited 5 Jam", value: "Rp50.000", points: 100 },
    ]
  },
  "ps4-plus": {
    title: "PS4+",
    subtitle: "Console PlayStation 4 Pro / Premium Room",
    badge: "Premium Room",
    accent: "#75D84B",
    items: [
      { duration: "30 Menit", value: "Rp7.000", points: 14 },
      { duration: "1 Jam", value: "Rp15.000", points: 30 },
      { duration: "2 Jam", value: "Rp29.000", points: 58 },
      { duration: "3 Jam", value: "Rp42.000", points: 84 },
      { duration: "4 Jam", value: "Rp55.000", points: 110 },
      { duration: "5 Jam", value: "Rp67.000", points: 134 },
      { duration: "6 Jam", value: "Rp78.000", points: 156 },
      { duration: "7 Jam", value: "Rp89.000", points: 178 },
      { duration: "8 Jam", value: "Rp100.000", points: 200 },
      { duration: "Paket 3 Jam Happy Hour", value: "Rp35.000", points: 70 },
      { duration: "Paket Pagi Unlimited 6 Jam", value: "Rp50.000", points: 100 },
      { duration: "Paket Malam Unlimited 5 Jam", value: "Rp65.000", points: 130 },
    ]
  },
  ps5: {
    title: "PS5 Standard",
    subtitle: "Console PlayStation 5 Standard",
    badge: "Next-Gen",
    accent: "#FFD84D",
    items: [
      { duration: "30 Menit", value: "Rp10.000", points: 20 },
      { duration: "1 Jam", value: "Rp20.000", points: 40 },
      { duration: "2 Jam", value: "Rp39.000", points: 78 },
      { duration: "3 Jam", value: "Rp58.000", points: 116 },
      { duration: "4 Jam", value: "Rp75.000", points: 150 },
      { duration: "5 Jam", value: "Rp92.000", points: 184 },
      { duration: "6 Jam", value: "Rp110.000", points: 220 },
      { duration: "7 Jam", value: "Rp125.000", points: 250 },
      { duration: "8 Jam", value: "Rp140.000", points: 280 },
      { duration: "Paket 3 Jam Happy Hour", value: "Rp45.000", points: 90 },
      { duration: "Paket Pagi Unlimited 6 Jam", value: "Rp72.000", points: 144 },
      { duration: "Paket Malam Unlimited 5 Jam", value: "Rp90.000", points: 180 },
    ]
  },
  vip: {
    title: "VIP",
    subtitle: "Console PS5 VIP Room Privasi",
    badge: "VIP Room",
    accent: "#FF8C00",
    items: [
      { duration: "30 Menit", value: "Rp25.000", points: 50 },
      { duration: "1 Jam", value: "Rp45.000", points: 90 },
      { duration: "2 Jam", value: "Rp85.000", points: 170 },
      { duration: "3 Jam", value: "Rp120.000", points: 240 },
      { duration: "4 Jam", value: "Rp160.000", points: 320 },
      { duration: "5 Jam", value: "Rp195.000", points: 390 },
      { duration: "6 Jam", value: "Rp230.000", points: 460 },
      { duration: "7 Jam", value: "Rp260.000", points: 520 },
      { duration: "8 Jam", value: "Rp290.000", points: 580 },
      { duration: "Paket 3 Jam Happy Hour", value: "Rp90.000", points: 180 },
      { duration: "Paket Pagi Unlimited 6 Jam", value: "Rp150.000", points: 300 },
      { duration: "Paket Malam Unlimited 5 Jam", value: "Rp180.000", points: 360 },
    ]
  },
  vvip: {
    title: "VVIP",
    subtitle: "Console PS5 VVIP Room Mewah",
    badge: "VVIP Room",
    accent: "#FF3038",
    items: [
      { duration: "30 Menit", value: "Rp25.000", points: 50 },
      { duration: "1 Jam", value: "Rp50.000", points: 100 },
      { duration: "2 Jam", value: "Rp90.000", points: 180 },
      { duration: "3 Jam", value: "Rp130.000", points: 260 },
      { duration: "4 Jam", value: "Rp170.000", points: 340 },
      { duration: "5 Jam", value: "Rp210.000", points: 420 },
      { duration: "6 Jam", value: "Rp250.000", points: 500 },
      { duration: "7 Jam", value: "Rp290.000", points: 580 },
      { duration: "8 Jam", value: "Rp320.000", points: 640 },
      { duration: "Paket 3 Jam Happy Hour", value: "Rp100.000", points: 200 },
      { duration: "Paket Pagi Unlimited 6 Jam", value: "Rp180.000", points: 360 },
      { duration: "Paket Malam Unlimited 5 Jam", value: "Rp200.000", points: 400 },
    ]
  }
};

const EARNING_EXAMPLES = [
  { spent: "Rp10.000", points: 1 },
  { spent: "Rp50.000", points: 5 },
  { spent: "Rp100.000", points: 10 },
  { spent: "Rp200.000", points: 20 },
  { spent: "Rp500.000", points: 50 },
  { spent: "Rp1.000.000", points: 100 }
];

export default function MembershipClient() {
  const [activeTab, setActiveTab] = useState<keyof typeof REWARD_DATA>("ps4");

  const currentCategory = REWARD_DATA[activeTab];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#36B7F0] selection:text-black">
      <Navbar onOpenBooking={() => window.open("https://wa.me/6285194345274", "_blank")} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-[#1A1A1A]">
        {/* Glow Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#36B7F0]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#36B7F0] uppercase mb-6">
            <Award className="w-3.5 h-3.5 text-[#36B7F0]" />
            XPLAY MEMBERSHIP
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
            MAIN LEBIH SERING.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36B7F0] via-white to-[#FF3038]">
              KUMPULKAN POIN.
            </span><br />
            MAIN LAGI.
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Setiap kali bermain di XPLAY, kamu bisa mengumpulkan poin berdasarkan pengeluaran billing. 
            Kumpulkan poinmu dan tukarkan dengan waktu bermain di XPLAY.
          </p>
        </div>
      </section>

      {/* Cara Daftar Membership Section */}
      <section className="py-20 px-4 border-b border-[#1A1A1A] relative">
        {/* Decorative subtle ambient light */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#FFD84D]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#292929] text-[10px] font-mono tracking-widest text-[#FFD84D] uppercase mb-4">
              REGISTRATION PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">CARA DAFTAR MEMBERSHIP</h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Sangat mudah untuk menjadi member XPLAY. Ikuti langkah sederhana berikut saat kamu berkunjung:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#36B7F0]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#36B7F0]/5 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#36B7F0]/10 flex items-center justify-center text-[#36B7F0] mb-6 font-bold text-lg font-mono">01</div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">DATANG KE LOKASI</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Kunjungi lounge XPLAY Games terdekat dan temui crew atau operator kami di meja kasir.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FFD84D]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD84D]/5 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#FFD84D]/10 flex items-center justify-center text-[#FFD84D] mb-6 font-bold text-lg font-mono">02</div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">HUBUNGI OPERATOR</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Beri tahu karyawan atau operator PS yang bertugas bahwa kamu ingin membuat member baru.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FF3038]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF3038]/5 rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-[#FF3038]/10 flex items-center justify-center text-[#FF3038] mb-6 font-bold text-lg font-mono">03</div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">BERIKAN IDENTITAS</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Berikan identitas lengkap berupa <strong className="text-white">Nama</strong>, <strong className="text-white">Email</strong>, <strong className="text-white">Nomor KTP</strong>, dan <strong className="text-white">Nomor HP</strong> aktif ke operator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 border-b border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">CARA MENDAPATKAN POIN</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Setiap kelipatan <span className="text-white font-bold">Rp10.000</span> pengeluaran billing = <span className="text-[#FFD84D] font-bold">1 Poin</span>.
            </p>
          </div>

          {/* Three Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#36B7F0]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#36B7F0]/5 rounded-bl-full pointer-events-none"></div>
              <span className="text-3xl font-black text-[#36B7F0]/30 font-mono block mb-4">01</span>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">SPEND</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Bermain console favoritmu di lounge XPLAY dan lakukan pembayaran billing seperti biasa.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FFD84D]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD84D]/5 rounded-bl-full pointer-events-none"></div>
              <span className="text-3xl font-black text-[#FFD84D]/30 font-mono block mb-4">02</span>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">EARN POINTS</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Poin otomatis terakumulasi ke nomor WhatsApp atau member ID kamu setiap kelipatan Rp10.000 billing.
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222222] p-8 rounded-2xl relative overflow-hidden group hover:border-[#FF3038]/30 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3038]/5 rounded-bl-full pointer-events-none"></div>
              <span className="text-3xl font-black text-[#FF3038]/30 font-mono block mb-4">03</span>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">REDEEM</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tukarkan poin yang telah dikumpulkan dengan berbagai voucher durasi main gratis yang kamu inginkan.
              </p>
            </div>
          </div>

          {/* Quick Rates Grid & Example Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Quick Rates List */}
            <div className="bg-[#111111] border border-[#222222] p-8 rounded-3xl lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-mono tracking-widest text-[#FFD84D] uppercase mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFD84D]" />
                  TABEL SKEMA PEROLEHAN POIN
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {EARNING_EXAMPLES.map((ex, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#171717] border border-[#262626] p-4 rounded-xl flex items-center justify-between group hover:border-[#333333] transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-zinc-300">{ex.spent}</span>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FFD84D]">
                        <span>⭐</span>
                        <span>{ex.points} {ex.points === 1 ? "Poin" : "Poin"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Example Simulation Card */}
            <div className="bg-gradient-to-br from-[#111111] to-[#181818] border border-[#222222] p-8 rounded-3xl lg:col-span-5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#36B7F0]/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <h4 className="text-sm font-mono tracking-widest text-[#36B7F0] uppercase mb-6">SIMULASI ALUR POIN</h4>
                
                <div className="space-y-4">
                  {/* Step A */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#36B7F0]/10 border border-[#36B7F0]/30 text-xs font-mono text-[#36B7F0] flex items-center justify-center shrink-0 mt-0.5">A</span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      Kamu menghabiskan <strong className="text-white">Rp100.000</strong> untuk bermain di XPLAY.
                    </p>
                  </div>
                  
                  {/* Connector Arrow */}
                  <div className="pl-3 py-1 border-l-2 border-dashed border-[#292929] ml-3">
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 transform rotate-90" />
                  </div>
                  
                  {/* Step B */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFD84D]/10 border border-[#FFD84D]/30 text-xs font-mono text-[#FFD84D] flex items-center justify-center shrink-0 mt-0.5">B</span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                      ⭐ Kamu mendapatkan <strong className="text-[#FFD84D]">10 poin</strong>.
                    </p>
                  </div>

                  {/* Connector Arrow */}
                  <div className="pl-3 py-1 border-l-2 border-dashed border-[#292929] ml-3">
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-600 transform rotate-90" />
                  </div>

                  {/* Step C */}
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FF3038]/10 border border-[#FF3038]/30 text-xs font-mono text-[#FF3038] flex items-center justify-center shrink-0 mt-0.5">C</span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-snug">
                      Setelah mengumpulkan poin yang cukup, kamu dapat menukarkannya dengan reward yang tersedia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Catalog Section */}
      <section className="py-20 px-4 border-b border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#292929] text-xs font-mono tracking-widest text-[#FF3038] uppercase mb-4">
              REWARDS CATALOG
            </div>
            <h2 className="text-2xl sm:text-4xl font-black mb-4">TUKARKAN POINMU</h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Gunakan poin yang sudah kamu kumpulkan untuk mendapatkan waktu bermain di XPLAY.
            </p>
          </div>

          {/* Important Clarification Alert */}
          <div className="bg-[#111111] border border-[#292929] rounded-2xl p-5 mb-10 max-w-3xl mx-auto flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/30 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#FF8C00]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1 uppercase tracking-wide">PANDUAN PENUKARAN REWARD</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Nilai Rupiah (Rp) yang tertera adalah harga normal sebagai referensi nilai hadiah. 
                <span className="text-[#FF8C00] font-semibold"> Kamu tidak membayar uang tunai tersebut</span>. 
                Hadiah sepenuhnya ditukarkan hanya menggunakan jumlah poin yang tertera.
              </p>
            </div>
          </div>

          {/* Console Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2 border-b border-[#1A1A1A]">
            {(Object.keys(REWARD_DATA) as Array<keyof typeof REWARD_DATA>).map((key) => {
              const tab = REWARD_DATA[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? "bg-white text-black shadow-lg" 
                      : "bg-[#111111] text-zinc-400 hover:text-white border border-[#222222] hover:border-[#333333]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isActive ? "#000000" : tab.accent }}></span>
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Grid Layout of Rewards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCategory.items.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#111111] border border-[#222222] rounded-2xl p-6 relative overflow-hidden group hover:border-[#36B7F0]/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: currentCategory.accent }}
                ></div>

                {/* Card Top */}
                <div className="mb-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded uppercase"
                      style={{ backgroundColor: `${currentCategory.accent}20`, color: currentCategory.accent }}
                    >
                      {currentCategory.badge}
                    </span>
                    <span className="text-zinc-500 text-xs font-semibold font-mono">REWARD #{idx + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-black text-white group-hover:text-[#36B7F0] transition-colors leading-tight mb-1">
                    {item.duration}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium">
                    Nilai Referensi: <span className="text-zinc-300 font-bold">{item.value}</span>
                  </p>
                </div>

                {/* Card Bottom / Point Requirement */}
                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between relative z-10">
                  <div className="text-zinc-400 text-xs">Poin Dibutuhkan:</div>
                  <div className="flex items-center gap-1 text-base font-black text-[#FFD84D] font-mono">
                    <span>⭐</span>
                    <span>{item.points}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers & Important Notes Section */}
      <section className="py-12 px-4 bg-[#0D0D0D] border-b border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto bg-[#111111] border border-[#222222] p-8 rounded-3xl">
          <div className="flex items-center gap-2.5 mb-5 text-[#FF3038]">
            <HelpCircle className="w-5 h-5" />
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">SYARAT & KETENTUAN UTAMA</h4>
          </div>
          
          <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400 pl-5 list-disc leading-relaxed">
            <li>
              Perolehan poin dihitung berdasarkan pengeluaran pada billing XPLAY.
            </li>
            <li>
              Ketentuan program, saldo poin, dan proses penukaran mengikuti ketentuan XPLAY.
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA Footer Banner */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#070707] text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF3038]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            MAKIN SERING MAIN,<br />MAKIN BANYAK POIN.
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Kumpulkan poinmu dan nikmati lebih banyak waktu bermain gratis di XPLAY Games.
          </p>
          
          <button 
            onClick={() => window.open("https://wa.me/6285194345274?text=Halo%20XPLAY%20Games%2C%20saya%20ingin%20tanya-tanya%20seputar%20membership%20dan%20status%20poin%20saya%20%F0%9F%91%8B", "_blank")}
            className="px-8 py-4 bg-[#FF3038] hover:bg-[#E0262D] text-white font-extrabold rounded-2xl shadow-lg shadow-[#FF3038]/10 hover:shadow-[#FF3038]/20 transition-all inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            HUBUNGI XPLAY VIA WHATSAPP
          </button>
        </div>
      </section>

      <Footer onOpenBooking={() => window.open("https://wa.me/6285194345274", "_blank")} />
    </div>
  );
}
