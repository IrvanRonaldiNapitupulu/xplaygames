"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import {
  MessageCircle,
  ShieldAlert,
  CheckCircle2,
  Tv,
  Gamepad2,
  Info,
  Calendar,
  Clock,
  ArrowRight,
  XCircle,
  Search,
  Check
} from "lucide-react";

export default function PlayboxClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Interactive Calculator State
  const [selectedDuration, setSelectedDuration] = useState<string>("1-hari");
  const [rentalDate, setRentalDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");

  // Personal Info State
  const [nama, setNama] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [noHp, setNoHp] = useState<string>("");
  const [jamMulai, setJamMulai] = useState<string>("10:00");
  const [jamSelesai, setJamSelesai] = useState<string>("12:00");

  const updateReturnDate = (startDateVal: string, durationVal: string) => {
    if (!startDateVal) {
      setReturnDate("");
      return;
    }
    const daysMap: Record<string, number> = {
      "1-hari": 1, "2-hari": 2, "3-hari": 3,
      "4-hari": 4, "5-hari": 5, "6-hari": 6, "7-hari": 7
    };
    const daysToAdd = daysMap[durationVal] ?? 1;
    const startDate = new Date(startDateVal);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + daysToAdd);
    const yyyy = endDate.getFullYear();
    const mm = String(endDate.getMonth() + 1).padStart(2, "0");
    const dd = String(endDate.getDate()).padStart(2, "0");
    setReturnDate(`${yyyy}-${mm}-${dd}`);
  };

  // Search Game Library State
  const [searchQuery, setSearchQuery] = useState("");

  // Accordion State
  const [requirementsOpen, setRequirementsOpen] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);

  const gameLibrary = [
    "A Way Out",
    "EA Sports FC 26",
    "eFootball PES 2026",
    "Guns Gore and Cannoli",
    "Guns Gore and Cannoli 2",
    "It Takes Two",
    "Mortal Kombat 11",
    "Moto GP 25",
    "Moving Out 2",
    "NARUTO X Boruto Ultimate Ninja Storm Connections",
    "NBA 2K26",
    "Overcooked! All You Can Eat",
    "Street Fighter 6",
    "Tekken 7",
    "Trine 5: A Clockwork Conspiracy",
    "UFC 4",
    "WWE 2K25"
  ];

  const filteredGames = gameLibrary.filter((game) =>
    game.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookingRedirect = () => {
    const formatDateStr = (dStr: string) => {
      if (!dStr) return "";
      const parts = dStr.split("-");
      if (parts.length === 3) {
        return `${parts[2].padStart(2,"0")}-${parts[1].padStart(2,"0")}-${parts[0]}`;
      }
      return dStr;
    };

    const startFormatted = formatDateStr(rentalDate);
    const endFormatted = formatDateStr(returnDate);
    const tglMulai = startFormatted ? `${startFormatted} ${jamMulai}` : "";
    const tglSelesai = endFormatted ? `${endFormatted} ${jamSelesai}` : "";

    const text = `=====================\nISI FORM SEWA BERIKUT\n=====================\n\n- Nama : ${nama}\n- Alamat Rumah : ${alamat}\n- No. HP : ${noHp}\n- Tgl & Jam Mulai : ${tglMulai}\n- Tgl & Jam Selesai : ${tglSelesai}\n\n- Yg disewa :\n1. PS4 [\u2713] (Paket Playbox + TV)\n2. PS4 Pro\n3. PS5\n4. + Stick PS4\n5. + Stick PS5\n\n- Pengantaran : tidak tersedia\n\nCatatan:\n- Dengan mengisi form di atas, maka penyewa setuju dan tunduk pada semua syarat dan ketentuan sewa yang berlaku di XPlay Games`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6285194345274?text=${encoded}`, "_blank");
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleBookingRedirect();
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#1FA6F0] selection:text-black">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-[#292929]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-30 md:opacity-50">
            <Image
              src="/playbox.jpeg"
              alt="Playbox PS4 dengan TV"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F45CB4]/10 border border-[#F45CB4]/20 text-[#F45CB4] text-xs font-mono font-bold uppercase mb-6">
                <Tv className="w-3.5 h-3.5" />
                <span>PAKET LENGKAP PLAYBOX + TV</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
                Bawa XPLAY ke Rumah.
              </h1>
              
              <p className="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed">
                Satu paket lengkap untuk mabar di rumah. PS4 Slim + TV 32 inch + 2 controller nirkabel + game digital lengkap.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#booking-calculator"
                  className="rounded-xl bg-[#FF2D8D] text-white font-extrabold px-8 py-4 text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-black/20" />
                  <span>BOOKING PLAYBOX</span>
                </a>
                <a
                  href="#pricing-info"
                  className="rounded-xl bg-[#111111] hover:bg-[#171717] border border-[#292929] text-white font-semibold px-7 py-4 text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>LIHAT DETAIL PAKET</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HEN warning notice */}
        <section className="bg-[#FF3038]/10 border-b border-[#FF3038]/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-[#FF3038] shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-300">
                <strong className="text-white">PENTING:</strong> Sistem console Playbox menggunakan <strong className="font-bold text-white">HEN (Offline)</strong>. Konsol <strong className="font-bold text-white">TIDAK boleh dihubungkan ke internet/Wi-Fi</strong>.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#FF3038] font-bold tracking-wider uppercase">
              #PLAYBOXOFFLINE
            </span>
          </div>
        </section>

        {/* Pricing Info Section */}
        <section id="pricing-info" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Package details */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-[#F45CB4] font-bold uppercase tracking-wider block mb-2">COMPLETE BUNDLE</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">PLAYBOX — PS4</h2>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Tidak punya TV di kosan atau rumah? Tenang! Paket Playbox menyediakan satu set lengkap unit game dan televisi portabel berukuran 32 inch agar Anda langsung bisa mabar di mana saja.
              </p>

              {/* Package contents lists */}
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">ISI DALAM PLAYBOX:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "1 × Console PlayStation 4 Slim",
                  "1 × Televisi 32 Inch",
                  "2 × Stick Controller PS4 Wireless",
                  "1 × Kabel Power Unit & TV",
                  "1 × Kabel Charger Stick Controller",
                  "Koleksi Game Digital Terinstall"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-zinc-300 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#F45CB4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#111111] border border-[#292929] p-4 rounded-xl text-xs text-zinc-500 flex flex-col gap-2">
                <span className="block font-bold text-white uppercase text-[10px] tracking-wider text-[#FFD84D]">⚠️ PERINGATAN KONEKSI INTERNET</span>
                <span>Playbox dilarang keras dihubungkan ke internet. Segala akibat berupa kerusakan firmware/sistem lisensi game merupakan tanggung jawab penyewa sepenuhnya.</span>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-6 bg-[#111111] border-2 border-[#F45CB4]/40 rounded-3xl p-6 sm:p-8 hover:border-[#F45CB4] transition-all relative">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#F45CB4] text-black font-extrabold text-[10px] font-mono tracking-widest uppercase rounded-bl-xl">
                BEST OFFER
              </div>

              <span className="text-xs text-zinc-400 font-mono uppercase block mb-1">PRODUK RENTAL</span>
              <h3 className="text-2xl font-black text-white mb-6">PLAYBOX PS4 + TV</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-4 bg-[#171717] rounded-xl border border-[#292929]">
                  <span className="text-zinc-400 font-medium">1 Hari</span>
                  <span className="text-lg font-black text-white">Rp200.000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#171717] rounded-xl border border-[#292929]">
                  <span className="text-zinc-400 font-medium">3 Hari</span>
                  <span className="text-lg font-black text-white">Rp500.000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#171717] rounded-xl border border-[#292929]">
                  <span className="text-zinc-400 font-medium">7 Hari</span>
                  <span className="text-lg font-black text-[#F45CB4]">Rp1.000.000</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#292929] text-xs text-zinc-400 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Jaminan Deposit:</span>
                  <span className="font-mono text-white font-extrabold">Rp100.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Denda Keterlambatan:</span>
                  <span className="font-mono text-white font-extrabold">Rp15.000 / jam</span>
                </div>
              </div>

              <p className="text-[10px] text-zinc-500 leading-normal mb-6">
                * Uang deposit dikembalikan sepenuhnya saat unit Playbox dikembalikan dalam kondisi baik sesuai ketentuan.
              </p>

              <button
                onClick={() => {
                  const target = document.getElementById("booking-calculator");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 rounded-xl bg-[#F45CB4] hover:bg-[#c74ba1] text-black font-extrabold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Booking Playbox Sekarang
              </button>
            </div>

          </div>
        </section>

        {/* Game Library Section */}
        <section className="py-16 bg-[#111111]/30 border-y border-[#292929]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono text-[#F45CB4] font-bold uppercase tracking-wider block mb-2">PLAYBOX GAME LIBRARY</span>
              <h2 className="text-3xl font-black text-white mb-3">LIST GAME PLAYBOX</h2>
              <p className="text-zinc-400 text-sm">
                Bisa request game yang tersedia di Playbox.
              </p>
            </div>

            {/* Filter Search Input */}
            <div className="max-w-md mx-auto mb-8 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-zinc-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari game favorit..."
                className="w-full pl-10 pr-4 py-3 bg-[#111111] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm"
              />
            </div>

            {/* Filtered Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredGames.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-[#111111] border border-[#292929] p-3.5 rounded-xl flex items-center gap-2 hover:border-[#F45CB4]/30 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45CB4] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-bold tracking-tight line-clamp-1">{game}</span>
                </div>
              ))}
              {filteredGames.length === 0 && (
                <div className="col-span-full py-12 text-center text-zinc-500 text-sm">
                  Tidak ada game ditemukan untuk pencarian &quot;{searchQuery}&quot;.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Requirements Accordion */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            
            {/* Accordion: Syarat & Ketentuan */}
            <div className="border border-[#292929] rounded-2xl overflow-hidden bg-[#111111]">
              <button
                onClick={() => setRequirementsOpen(!requirementsOpen)}
                className="w-full p-5 text-left font-bold text-lg sm:text-xl flex items-center justify-between hover:bg-[#171717] transition-colors"
              >
                <span>Syarat & Ketentuan Playbox</span>
                <span className="text-zinc-400">{requirementsOpen ? "✕" : "▼"}</span>
              </button>
              {requirementsOpen && (
                <div className="p-6 border-t border-[#292929] text-sm text-zinc-300 space-y-4 leading-relaxed bg-[#0e0e0e]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="block font-bold text-white uppercase text-xs tracking-wider text-[#F45CB4]">SYARAT JAMINAN:</span>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li>Penyewa bersedia <strong className="font-bold text-white">difoto</strong> bersama unit Playbox saat serah terima.</li>
                        <li>Wajib meninggalkan <strong className="font-bold text-white">jaminan eKTP asli</strong> penyewa selama masa sewa.</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="block font-bold text-white uppercase text-xs tracking-wider text-[#75D84B]">METODE PEMBAYARAN:</span>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li>Penyewaan harus <strong className="font-bold text-white">lunas dibayar di awal</strong> sebelum unit dibawa pulang.</li>
                        <li>Mendukung pembayaran via <strong className="font-bold text-white">QRIS</strong>, <strong className="font-bold text-white">Transfer</strong>, dan <strong className="font-bold text-white">Cash</strong>.</li>
                        <li>Pembayaran cash di lokasi berlaku sistem <strong className="font-bold text-white">First Come First Serve</strong> (Siapa cepat dia dapat selama unit tersedia).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion: Tata Tertib */}
            <div className="border border-[#292929] rounded-2xl overflow-hidden bg-[#111111]">
              <button
                onClick={() => setRulesOpen(!rulesOpen)}
                className="w-full p-5 text-left font-bold text-lg sm:text-xl flex items-center justify-between hover:bg-[#171717] transition-colors"
              >
                <span>Tata Tertib & Larangan Playbox</span>
                <span className="text-zinc-400">{rulesOpen ? "✕" : "▼"}</span>
              </button>
              {rulesOpen && (
                <div className="p-6 border-t border-[#292929] text-sm text-zinc-300 space-y-3 leading-relaxed bg-[#0e0e0e]">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[#FF3038] font-bold">DILARANG KERAS menghubungkan Playbox ke internet.</li>
                    <li><strong className="font-bold text-white">Dilarang menghapus</strong> game digital atau akun profil di dalam konsol.</li>
                    <li><strong className="font-bold text-white">Dilarang menghapus akun</strong> profil bawaan.</li>
                    <li>Unit konsol dan TV wajib dikembalikan dalam <strong className="font-bold text-white">kondisi baik</strong> dan lengkap seperti semula.</li>
                    <li>Keterlambatan pengembalian unit dikenakan denda <strong className="font-bold text-white">Rp15.000 / jam</strong>.</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Damage Penalties Warning */}
        <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111318] border border-[#FF3038]/30 rounded-3xl p-6 sm:p-8 relative">
            
            <div className="flex items-center gap-3 text-[#FF3038] mb-6">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-black text-white">DENDA KERUSAKAN & PELANGGARAN</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan Console PS4</span>
                <span className="text-lg font-black text-white">Rp4.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Stick PS4 / Pcs</span>
                <span className="text-lg font-black text-white">Rp300.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan Layar TV 32&quot;</span>
                <span className="text-lg font-black text-[#FFD84D]">Rp3.000.000</span>
              </div>
              <div className="bg-[#FF3038]/10 p-4 rounded-xl border border-[#FF3038]/30">
                <span className="block text-xs text-[#FF3038] font-bold">Koneksi Internet</span>
                <span className="text-lg font-black text-[#FF3038]">Rp4.000.000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Comparison Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#292929]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#F45CB4] font-bold uppercase tracking-wider block mb-2">PRODUCT DISTINCTION</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">PERBANDINGAN LAYANAN XPLAY</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#292929]">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#111111] border-b border-[#292929]">
                  <th className="p-4 font-mono text-xs text-zinc-400 uppercase">FITUR / LAYANAN</th>
                  <th className="p-4 font-mono text-xs text-[#1FA6F0] uppercase">MAIN DI LOKASI XPLAY</th>
                  <th className="p-4 font-mono text-xs text-[#75D84B] uppercase">SEWA PS (BAWA PULANG)</th>
                  <th className="p-4 font-mono text-xs text-[#F45CB4] uppercase">PLAYBOX (PAKET + TV)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f1f] bg-[#0c0c0c]/50">
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Pilihan PS4</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-[#75D84B]">✓ (Slim)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Pilihan PS5</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-zinc-600">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Televisi (TV)</td>
                  <td className="p-4 text-[#75D84B]">✓ (VIP / Room Display)</td>
                  <td className="p-4 text-zinc-600">—</td>
                  <td className="p-4 text-[#75D84B]">✓ (TV 32 inch)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Jumlah Stick</td>
                  <td className="p-4 text-zinc-300">2-4 Pcs Stick</td>
                  <td className="p-4 text-zinc-300">2 Pcs Stick</td>
                  <td className="p-4 text-zinc-300">2 Pcs Stick</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Koleksi Game Digital</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-zinc-300">Koneksi Online</td>
                  <td className="p-4 text-[#75D84B]">✓</td>
                  <td className="p-4 text-zinc-300">Sesuai aturan sewa</td>
                  <td className="p-4 text-[#FF3038]">❌ (Wajib Offline)</td>
                </tr>
                <tr className="bg-[#111111]/30">
                  <td className="p-4 font-semibold text-zinc-300">Rekomendasi Untuk</td>
                  <td className="p-4 text-[#1FA6F0] font-medium text-xs">Mabar seru & nongkrong di tempat</td>
                  <td className="p-4 text-[#75D84B] font-medium text-xs">Gaming santai di rumah sendiri</td>
                  <td className="p-4 text-[#F45CB4] font-medium text-xs">Mabar lengkap di rumah tanpa TV sendiri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Booking Calculator / Form */}
        <section id="booking-calculator" className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#292929]">
          <div className="bg-[#111111] border border-[#292929] p-6 sm:p-8 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">FORM BOOKING PLAYBOX</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Isi form kalkulator sewa di bawah untuk menghasilkan teks pemesanan WhatsApp otomatis.
              </p>
            </div>

            <form onSubmit={handleCalculatorSubmit} className="space-y-6">

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Nama</label>
                  <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama lengkap..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Alamat Rumah</label>
                  <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat lengkap..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">No. HP</label>
                  <input type="tel" value={noHp} onChange={(e) => setNoHp(e.target.value)} placeholder="08xx..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
              </div>

              <div className="border-t border-[#292929] pt-5">
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Pilih Durasi Sewa</label>
                <select value={selectedDuration} onChange={(e) => { const d = e.target.value; setSelectedDuration(d); updateReturnDate(rentalDate, d); }} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold">
                  <option value="1-hari">1 Hari (Rp200.000)</option>
                  <option value="2-hari">2 Hari (Rp400.000)</option>
                  <option value="3-hari">3 Hari (Rp500.000)</option>
                  <option value="4-hari">4 Hari (Rp800.000)</option>
                  <option value="5-hari">5 Hari (Rp1.000.000)</option>
                  <option value="6-hari">6 Hari (Rp1.200.000)</option>
                  <option value="7-hari">7 Hari (Rp1.500.000)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Tanggal Mulai Sewa</label>
                  <input type="date" value={rentalDate} onChange={(e) => { const d = e.target.value; setRentalDate(d); updateReturnDate(d, selectedDuration); }} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold font-mono" required />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Jam Mulai</label>
                  <input type="time" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold font-mono" required />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400/50 uppercase tracking-wider mb-2">Tanggal Pengembalian (Otomatis)</label>
                  <input type="date" value={returnDate} readOnly className="w-full px-4 py-3 bg-[#121212] border border-[#232323] rounded-xl text-zinc-500 text-sm font-semibold font-mono cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Jam Selesai</label>
                  <input type="time" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#F45CB4] text-sm font-semibold font-mono" required />
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="bg-[#171717] p-5 rounded-2xl border border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">ESTIMASI TARIF PLAYBOX</span>
                  <span className="text-2xl font-black text-white">
                    {selectedDuration === "1-hari" && "Rp200.000"}
                    {selectedDuration === "3-hari" && "Rp500.000"}
                    {selectedDuration === "7-hari" && "Rp1.000.000"}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono block mt-1">
                    * Belum termasuk deposit Rp100.000 (dikembalikan di akhir sewa)
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#F45CB4] hover:bg-[#c74ba1] text-black font-extrabold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-black/20" />
                  <span>KIRIM KE WHATSAPP</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
      
      <FloatingActions onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
