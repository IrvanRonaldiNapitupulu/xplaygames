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
  HelpCircle,
  CheckCircle2,
  Tv,
  Gamepad2,
  Info,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  XCircle,
  Truck
} from "lucide-react";

export default function SewaPSClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConsole, setBookingConsole] = useState<string | undefined>(undefined);
  
  // Interactive Calculator State
  const [selectedConsole, setSelectedConsole] = useState<string>("ps5");
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

  // Accordion State
  const [requirementsOpen, setRequirementsOpen] = useState(true);
  const [rulesOpen, setRulesOpen] = useState(false);

  const consolesData = [
    {
      id: "ps4",
      name: "PlayStation 4 Slim/Fat",
      badge: "VALUE CHOICE",
      accent: "#1FA6F0",
      image: "/sewanontv.jpeg",
      pricing: [
        { label: "1 Hari", price: "Rp150.000", raw: 150000 },
        { label: "3 Hari", price: "Rp400.000", raw: 400000 },
        { label: "7 Hari", price: "Rp800.000", raw: 800000 }
      ],
      deposit: "Rp50.000",
      lateFee: "Rp12.000 / jam",
      damageFee: "Rp3.000.000"
    },
    {
      id: "ps4-pro",
      name: "PlayStation 4 Pro",
      badge: "PERFORMANCE",
      accent: "#75D84B",
      image: "/sewanontv.jpeg",
      pricing: [
        { label: "1 Hari", price: "Rp175.000", raw: 175000 },
        { label: "3 Hari", price: "Rp450.000", raw: 450000 },
        { label: "7 Hari", price: "Rp900.000", raw: 900000 }
      ],
      deposit: "Rp60.000",
      lateFee: "Rp15.000 / jam",
      damageFee: "Rp4.000.000"
    },
    {
      id: "ps5",
      name: "PlayStation 5",
      badge: "NEXT-GEN",
      accent: "#FFD84D",
      image: "/sewanontv.jpeg",
      pricing: [
        { label: "1 Hari", price: "Rp250.000", raw: 250000 },
        { label: "3 Hari", price: "Rp650.000", raw: 650000 },
        { label: "7 Hari", price: "Rp1.350.000", raw: 1350000 }
      ],
      deposit: "Rp100.000",
      lateFee: "Rp20.000 / jam",
      damageFee: "Rp10.000.000"
    }
  ];

  const handleBookingRedirect = (consoleName: string) => {
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

    let ps4Checked = "1. PS4";
    let ps4ProChecked = "2. PS4 Pro";
    let ps5Checked = "3. PS5";

    if (consoleName.toLowerCase().includes("pro")) {
      ps4ProChecked = "2. PS4 Pro [\u2713]";
    } else if (consoleName.toLowerCase().includes("5")) {
      ps5Checked = "3. PS5 [\u2713]";
    } else {
      ps4Checked = "1. PS4 [\u2713]";
    }

    const tglMulai = startFormatted ? `${startFormatted} ${jamMulai}` : "";
    const tglSelesai = endFormatted ? `${endFormatted} ${jamSelesai}` : "";

    const text = `=====================\nISI FORM SEWA BERIKUT\n=====================\n\n- Nama : ${nama}\n- Alamat Rumah : ${alamat}\n- No. HP : ${noHp}\n- Tgl & Jam Mulai : ${tglMulai}\n- Tgl & Jam Selesai : ${tglSelesai}\n\n- Yg disewa :\n${ps4Checked}\n${ps4ProChecked}\n${ps5Checked}\n4. + Stick PS4\n5. + Stick PS5\n\n- Pengantaran : tidak tersedia\n\nCatatan:\n- Dengan mengisi form di atas, maka penyewa setuju dan tunduk pada semua syarat dan ketentuan sewa yang berlaku di XPlay Games`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6285194345274?text=${encoded}`, "_blank");
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const consoleObj = consolesData.find(c => c.id === selectedConsole);
    const consoleName = consoleObj ? consoleObj.name : selectedConsole;
    handleBookingRedirect(consoleName);
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
              src="/sewanontv.jpeg"
              alt="Sewa PS Bawa Pulang"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1FA6F0]/10 border border-[#1FA6F0]/20 text-[#1FA6F0] text-xs font-mono font-bold uppercase mb-6">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>LAYANAN SEWA PS BAWA PULANG</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
                MAIN DI RUMAH.
              </h1>
              
              <p className="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed">
                Sewa PS favoritmu untuk dimainkan di rumah. Pilih console dan durasi yang sesuai kebutuhanmu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#booking-calculator"
                  className="rounded-xl bg-[#1FA6F0] text-black font-extrabold px-8 py-4 text-center transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-black/20" />
                  <span>BOOKING SEWA PS</span>
                </a>
                <a
                  href="#pricing-cards"
                  className="rounded-xl bg-[#111111] hover:bg-[#171717] border border-[#292929] text-white font-semibold px-7 py-4 text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>LIHAT HARGA</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Distinct Service Warning Bar */}
        <section className="bg-[#111111] border-b border-[#292929] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <Info className="w-5 h-5 text-[#FFD84D] shrink-0" />
              <p className="text-xs sm:text-sm text-zinc-300">
                Layanan sewa bawa pulang **tidak termasuk TV**. Untuk paket lengkap dengan TV, lihat layanan <Link href="/playbox" className="text-[#1FA6F0] hover:underline font-bold">Playbox</Link>.
              </p>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
              #SEWAPSATPLAY
            </span>
          </div>
        </section>

        {/* Console Pricing Grid */}
        <section id="pricing-cards" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">PILIH PAKET CONSOLE</h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Tarif sewa flat berdasarkan durasi harian, 3 hari, atau mingguan dengan jaminan transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consolesData.map((c) => (
              <div
                key={c.id}
                className="bg-[#111111] border border-[#292929] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded bg-[#171717] border border-[#292929]" style={{ color: c.accent }}>
                      {c.badge}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">Jaminan: {c.deposit}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#1FA6F0] transition-colors">{c.name}</h3>

                  <div className="space-y-3 mb-8">
                    {c.pricing.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#171717] border border-[#292929]">
                        <span className="text-sm text-zinc-400 font-medium">{p.label}</span>
                        <span className="text-base font-extrabold text-white">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#292929] mb-6 text-xs text-zinc-400 flex flex-col gap-1.5">
                    <div className="flex justify-between">
                      <span>Denda Keterlambatan:</span>
                      <span className="font-mono text-white font-bold">{c.lateFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nilai Ganti Rugi Unit:</span>
                      <span className="font-mono text-[#FF3038] font-bold">{c.damageFee}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedConsole(c.id);
                      const target = document.getElementById("booking-calculator");
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3 rounded-xl bg-[#171717] hover:bg-[#222222] border border-[#292929] text-white hover:text-[#1FA6F0] font-bold text-sm transition-all duration-200"
                  >
                    Booking Console Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Included Items Section */}
        <section className="py-12 bg-[#111111]/40 border-y border-[#292929]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">SUDAH TERMASUK DALAM PAKET</h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  Setiap pemesanan sewa PlayStation telah kami lengkapi dengan seluruh kabel pendukung dan aksesoris agar Anda bisa langsung main.
                </p>
                <div className="bg-[#111111] p-4 rounded-xl border border-[#292929]">
                  <span className="text-[10px] font-mono text-[#FF3038] font-bold block mb-1">* CATATAN PENTING GAME</span>
                  <span className="text-xs text-zinc-400 block leading-relaxed">
                    Game terinstall merupakan game digital. Ketersediaan game tertentu dapat bervariasi bergantung pada jenis console dan penyimpanan.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "1 Unit Console PlayStation pilihan",
                  "2 Pcs Stick Controller nirkabel",
                  "1 Pcs Kabel koneksi HDMI",
                  "1 Pcs Kabel Power unit",
                  "1 Pcs Kabel charger stick controller",
                  "Pilihan Game Digital siap main"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#111111] border border-[#292929] p-4 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-[#1FA6F0] shrink-0" />
                    <span className="text-sm font-semibold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons & Delivery Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add-ons */}
          <div className="bg-[#111111] border border-[#292929] p-6 sm:p-8 rounded-3xl">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6">ADD-ONS (TAMBAHAN STICK)</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171717] border border-[#292929]">
                <div>
                  <span className="block text-base font-bold text-white">Stick PS4 Tambahan</span>
                  <span className="text-xs text-zinc-400">Cocok untuk mabar 3-4 orang</span>
                </div>
                <span className="text-lg font-black text-[#1FA6F0]">Rp20.000 <span className="text-xs font-normal text-zinc-400">/ hari</span></span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#171717] border border-[#292929]">
                <div>
                  <span className="block text-base font-bold text-white">Stick PS5 Tambahan</span>
                  <span className="text-xs text-zinc-400">DualSense Wireless controller tambahan</span>
                </div>
                <span className="text-lg font-black text-[#FFD84D]">Rp50.000 <span className="text-xs font-normal text-zinc-400">/ hari</span></span>
              </div>
            </div>
          </div>

          {/* Delivery Warning */}
          <div className="bg-[#111111] border border-[#292929] p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[#FF3038] mb-4">
                <Truck className="w-6 h-6" />
                <h3 className="text-xl sm:text-2xl font-black text-white">LAYANAN PENGANTARAN</h3>
              </div>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Untuk menjaga keamanan perangkat selama proses serah terima dan pemeriksaan jaminan fisik, penyewa diwajibkan untuk mengambil dan mengembalikan unit langsung ke lokasi XPLAY Games.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FF3038]/10 border border-[#FF3038]/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-[#FF3038] shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-bold text-white">Pengantaran Tidak Tersedia</span>
                <span className="text-xs text-[#FF3038] font-semibold">Layanan pengantaran sementara tidak tersedia.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Accordion */}
        <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            
            {/* Accordion 1: Syarat & Ketentuan */}
            <div className="border border-[#292929] rounded-2xl overflow-hidden bg-[#111111]">
              <button
                onClick={() => setRequirementsOpen(!requirementsOpen)}
                className="w-full p-5 text-left font-bold text-lg sm:text-xl flex items-center justify-between hover:bg-[#171717] transition-colors"
              >
                <span>Syarat & Ketentuan Sewa PS</span>
                <span className="text-zinc-400">{requirementsOpen ? "✕" : "▼"}</span>
              </button>
              {requirementsOpen && (
                <div className="p-6 border-t border-[#292929] text-sm text-zinc-300 space-y-4 leading-relaxed bg-[#0e0e0e]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="block font-bold text-white uppercase text-xs tracking-wider text-[#1FA6F0]">PERSYARATAN DOKUMEN:</span>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li>Wajib bersedia **difoto** bersama unit saat penyerahan.</li>
                        <li>Wajib meninggalkan **jaminan eKTP asli** penyewa selama masa sewa.</li>
                        <li>Penyewa harus memiliki **koneksi internet** aktif di rumah (untuk verifikasi lisensi game digital).</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <span className="block font-bold text-white uppercase text-xs tracking-wider text-[#75D84B]">METODE PEMBAYARAN:</span>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li>Penyewaan harus **lunas dibayar di awal** sebelum unit dibawa pulang.</li>
                        <li>Mendukung pembayaran via **QRIS**, **Transfer Bank**, dan **Cash**.</li>
                        <li>Pembayaran cash di lokasi berlaku sistem **First Come First Serve** (Siapa cepat dia dapat selama unit tersedia).</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Tata Tertib Sewa */}
            <div className="border border-[#292929] rounded-2xl overflow-hidden bg-[#111111]">
              <button
                onClick={() => setRulesOpen(!rulesOpen)}
                className="w-full p-5 text-left font-bold text-lg sm:text-xl flex items-center justify-between hover:bg-[#171717] transition-colors"
              >
                <span>Tata Tertib & Peraturan Penggunaan</span>
                <span className="text-zinc-400">{rulesOpen ? "✕" : "▼"}</span>
              </button>
              {rulesOpen && (
                <div className="p-6 border-t border-[#292929] text-sm text-zinc-300 space-y-3 leading-relaxed bg-[#0e0e0e]">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Unit console wajib dikembalikan dalam **kondisi baik** dan lengkap seperti semula.</li>
                    <li>**Dilarang menghapus** game digital atau akun profil bawaan yang terinstall di dalam console.</li>
                    <li>Penyewa **diperbolehkan menambahkan akun personal** untuk memuat data save game sendiri.</li>
                    <li>Khusus untuk game **PES 2021 / eFootball**, pemain/transfers **dilarang keras untuk diedit** karena dapat merusak file patch update yang terinstall.</li>
                    <li><strong className="text-[#FF3038]">PENTING:</strong> Uang jaminan dapat hangus sepenuhnya jika terbukti menghapus game bawaan atau menghilangkan patch game sesuai ketentuan XPLAY.</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Damage Penalties & Late Fees Warning */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111318] border border-[#FF3038]/30 rounded-3xl p-6 sm:p-8 relative">
            
            <div className="flex items-center gap-3 text-[#FF3038] mb-6">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-black text-white">DENDA KERUSAKAN & KEHILANGAN</h3>
            </div>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Daftar denda finansial penggantian komponen apabila terjadi kerusakan fisik permanen atau kehilangan selama unit dalam penguasaan penyewa:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan Console PS4</span>
                <span className="text-lg font-black text-white">Rp3.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan Console PS4 Pro</span>
                <span className="text-lg font-black text-white">Rp4.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan Console PS5</span>
                <span className="text-lg font-black text-[#FFD84D]">Rp10.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Stick PS4 / Pcs</span>
                <span className="text-lg font-black text-white">Rp300.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Stick PS5 / Pcs</span>
                <span className="text-lg font-black text-white">Rp1.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kehilangan BD Game / Disc</span>
                <span className="text-lg font-black text-white">Rp800.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Kerusakan USB Storage</span>
                <span className="text-lg font-black text-white">Rp1.000.000</span>
              </div>
              <div className="bg-[#171717] p-4 rounded-xl border border-[#292929]">
                <span className="block text-xs text-zinc-400">Denda Late Return PS4</span>
                <span className="text-sm font-bold text-white">Rp12.000 <span className="text-[10px] text-zinc-500 font-normal">/ jam</span></span>
              </div>
            </div>
            
            <div className="text-[11px] text-[#FF3038] font-semibold flex items-center gap-2">
              <span>⚠️ Keterlambatan pengembalian PS4 Pro dikenakan denda Rp15.000/jam, dan PS5 dikenakan denda Rp20.000/jam.</span>
            </div>
          </div>
        </section>

        {/* Product Comparison Section */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#1FA6F0] uppercase font-bold tracking-widest block mb-2">COMPARE & DECIDE</span>
            <h2 className="text-3xl font-black text-white">BANDINGKAN PILIHAN BERMAIN</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#292929] bg-[#111111]/80 backdrop-blur">
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
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">FORM BOOKING SEWA PS</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Isi form kalkulator sewa di bawah untuk menghasilkan teks pemesanan WhatsApp otomatis.
              </p>
            </div>

            <form onSubmit={handleCalculatorSubmit} className="space-y-6">

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Nama</label>
                  <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama lengkap..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Alamat Rumah</label>
                  <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat lengkap..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">No. HP</label>
                  <input type="tel" value={noHp} onChange={(e) => setNoHp(e.target.value)} placeholder="08xx..." required className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold placeholder:text-zinc-600" />
                </div>
              </div>

              <div className="border-t border-[#292929] pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Pilih Console</label>
                  <select value={selectedConsole} onChange={(e) => setSelectedConsole(e.target.value)} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold">
                    <option value="ps4">PS4 (Slim/Fat)</option>
                    <option value="ps4-pro">PS4 Pro</option>
                    <option value="ps5">PlayStation 5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Pilih Durasi Sewa</label>
                  <select value={selectedDuration} onChange={(e) => { const d = e.target.value; setSelectedDuration(d); updateReturnDate(rentalDate, d); }} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold">
                    <option value="1-hari">1 Hari</option>
                    <option value="2-hari">2 Hari</option>
                    <option value="3-hari">3 Hari</option>
                    <option value="4-hari">4 Hari</option>
                    <option value="5-hari">5 Hari</option>
                    <option value="6-hari">6 Hari</option>
                    <option value="7-hari">7 Hari</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Tanggal Mulai Sewa</label>
                  <input type="date" value={rentalDate} onChange={(e) => { const d = e.target.value; setRentalDate(d); updateReturnDate(d, selectedDuration); }} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold font-mono" required />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Jam Mulai</label>
                  <input type="time" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold font-mono" required />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400/50 uppercase tracking-wider mb-2">Tanggal Pengembalian (Otomatis)</label>
                  <input type="date" value={returnDate} readOnly className="w-full px-4 py-3 bg-[#121212] border border-[#232323] rounded-xl text-zinc-500 text-sm font-semibold font-mono cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Jam Selesai</label>
                  <input type="time" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} className="w-full px-4 py-3 bg-[#171717] border border-[#292929] rounded-xl text-white focus:outline-none focus:border-[#1FA6F0] text-sm font-semibold font-mono" required />
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="bg-[#171717] p-5 rounded-2xl border border-[#292929] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">ESTIMASI TARIF SEWA</span>
                  <span className="text-2xl font-black text-white">
                    {selectedConsole === "ps4" && selectedDuration === "1-hari" && "Rp150.000"}
                    {selectedConsole === "ps4" && selectedDuration === "3-hari" && "Rp400.000"}
                    {selectedConsole === "ps4" && selectedDuration === "7-hari" && "Rp800.000"}
                    {selectedConsole === "ps4-pro" && selectedDuration === "1-hari" && "Rp175.000"}
                    {selectedConsole === "ps4-pro" && selectedDuration === "3-hari" && "Rp450.000"}
                    {selectedConsole === "ps4-pro" && selectedDuration === "7-hari" && "Rp900.000"}
                    {selectedConsole === "ps5" && selectedDuration === "1-hari" && "Rp250.000"}
                    {selectedConsole === "ps5" && selectedDuration === "3-hari" && "Rp650.000"}
                    {selectedConsole === "ps5" && selectedDuration === "7-hari" && "Rp1.350.000"}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono block mt-1">
                    * Belum termasuk jaminan (dikembalikan saat unit kembali)
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1FA6F0] hover:bg-[#2b96c7] text-black font-extrabold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
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
        initialConsole={bookingConsole}
      />
    </div>
  );
}
