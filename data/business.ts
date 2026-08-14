export const BUSINESS_INFO = {
  name: "XPLAY GAMES",
  tagline: "PLAY. MABAR. CHILL. REPEAT.",
  taglineIndo: "Main. Mabar. Menang. Ulangi.",
  heroSubhead: "Temukan pengalaman gaming yang pas buat kamu — dari PS4 untuk mabar santai sampai VVIP Room dengan PlayStation, Nintendo, dan Netflix.",
  whatsappNumber: "085194345274",
  whatsappRaw: "6285194345274",
  openHour: 10, // 10:00 AM
  closeHour: 3,  // 03:00 AM (next day)
  operatingHoursText: "10:00 — 03:00 WIB",
  timezone: "Asia/Jakarta",
  totalFloors: 2,
  totalUnits: 20,
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.528347895745!2d107.6186!3d-6.9532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTcnMTEuNSJTIDEwN8KwMzcnMDcuMCJF!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  googleMapsDirectUrl: "https://maps.google.com/?q=XPlay+Games",
  addressLabel: "XPlay Games Lounge",
  ratesEffectiveDate: "16 Mei 2026",
};

export function isBusinessOpen(): boolean {
  try {
    const now = new Date();
    // Convert to Asia/Jakarta time
    const jakartaTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
    const jakartaDate = new Date(jakartaTimeStr);
    const hours = jakartaDate.getHours();
    
    // Operating hours: 10:00 (10 AM) to 03:00 (3 AM next morning)
    // Open if hours >= 10 OR hours < 3
    if (hours >= 10 || hours < 3) {
      return true;
    }
    return false;
  } catch {
    return true; // Fallback to open
  }
}

export function generateWhatsAppLink(details?: {
  consoleOrRoom?: string;
  date?: string;
  time?: string;
  duration?: string;
  playerCount?: string;
}): string {
  // Convert date options like "Hari Ini", "Besok", "Lusa" to actual DD-MM-YYYY format
  let formattedDate = details?.date || "";
  if (formattedDate === "Hari Ini" || formattedDate === "Besok" || formattedDate === "Lusa") {
    const now = new Date();
    const targetDate = new Date(now);
    if (formattedDate === "Besok") {
      targetDate.setDate(now.getDate() + 1);
    } else if (formattedDate === "Lusa") {
      targetDate.setDate(now.getDate() + 2);
    }
    const day = String(targetDate.getDate()).padStart(2, '0');
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const year = targetDate.getFullYear();
    formattedDate = `${day}-${month}-${year}`;
  }

  const consoleStr = details?.consoleOrRoom ? `A. Tipe : ${details.consoleOrRoom}` : "A. Tipe :";
  const dateStr = `B. Tanggal : ${formattedDate}`;
  const timeStr = details?.time ? `C. Jam Mulai (format 24h) : ${details.time}` : "C. Jam Mulai (format 24h) :";
  const nameStr = "D. Nama :";
  const durationStr = details?.duration ? `E. Jmlh Jam : ${details.duration}` : "E. Jmlh Jam :";

  const message = `Hello XPLAY Games 👋

${consoleStr}
${dateStr}
${timeStr}
${nameStr}
${durationStr}

Jangan lakukan pembayaran sebelum ada konfirmasi`;

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
