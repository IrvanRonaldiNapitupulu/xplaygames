export interface HourlyRate {
  hours: number;
  price: number;
  formattedPrice: string;
}

export interface CategoryPricing {
  id: string;
  name: string;
  badge?: string;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  startingPrice: string;
  originalPrice?: string;
  hourlyRate: string; // e.g. "Rp12.000 / jam"
  description: string;
  features: string[];
  rates: HourlyRate[];
}

export const PRICING_DATA: CategoryPricing[] = [
  {
    id: "ps4",
    name: "PS4",
    accentColor: "#1FA6F0", // XPLAY Blue
    borderColor: "border-[#1FA6F0]/30",
    bgGlow: "rgba(31, 166, 240, 0.15)",
    startingPrice: "Rp12.000",
    hourlyRate: "12k",
    description: "Cocok untuk gaming kasual dan mabar seru bareng teman.",
    features: ["Standard Gaming Setup", "Floor 01 (Smoking) & Floor 02 (No Smoking)", "Stick Controller DualShock 4", "Multiplayer Mabar Ready"],
    rates: [
      { hours: 1, price: 12000, formattedPrice: "Rp12.000" },
      { hours: 2, price: 23000, formattedPrice: "Rp23.000" },
      { hours: 3, price: 33000, formattedPrice: "Rp33.000" },
      { hours: 4, price: 43000, formattedPrice: "Rp43.000" },
      { hours: 5, price: 53000, formattedPrice: "Rp53.000" },
      { hours: 6, price: 62000, formattedPrice: "Rp62.000" },
      { hours: 7, price: 71000, formattedPrice: "Rp71.000" },
      { hours: 8, price: 80000, formattedPrice: "Rp80.000" },
    ],
  },
  {
    id: "ps4-plus",
    name: "PS4+",
    accentColor: "#75D84B", // XPLAY Green
    borderColor: "border-[#75D84B]/30",
    bgGlow: "rgba(117, 216, 75, 0.15)",
    startingPrice: "Rp15.000",
    hourlyRate: "15k",
    description: "Pengalaman main PS4 yang lebih responsif dan upgrade kenyamanan.",
    features: ["Upgraded Gaming Setup", "Floor 02 (No Smoking)", "Display TV Layar Lebar", "Koleksi Game Terbaru"],
    rates: [
      { hours: 1, price: 15000, formattedPrice: "Rp15.000" },
      { hours: 2, price: 29000, formattedPrice: "Rp29.000" },
      { hours: 3, price: 42000, formattedPrice: "Rp42.000" },
      { hours: 4, price: 55000, formattedPrice: "Rp55.000" },
      { hours: 5, price: 67000, formattedPrice: "Rp67.000" },
      { hours: 6, price: 78000, formattedPrice: "Rp78.000" },
      { hours: 7, price: 89000, formattedPrice: "Rp89.000" },
      { hours: 8, price: 100000, formattedPrice: "Rp100.000" },
    ],
  },
  {
    id: "ps5",
    name: "PS5",
    badge: "NEXT-GEN",
    accentColor: "#FFD84D", // XPLAY Yellow
    borderColor: "border-[#FFD84D]/30",
    bgGlow: "rgba(255, 216, 77, 0.15)",
    startingPrice: "Rp20.000",
    hourlyRate: "20k",
    description: "Untuk kamu yang menginginkan grafis next-gen 4K & DualSense haptic feedback.",
    features: ["Next-Gen Console", "Floor 01 & Floor 02 Available", "Grafis 4K High Dynamic", "Stik DualSense Wireless"],
    rates: [
      { hours: 1, price: 20000, formattedPrice: "Rp20.000" },
      { hours: 2, price: 39000, formattedPrice: "Rp39.000" },
      { hours: 3, price: 58000, formattedPrice: "Rp58.000" },
      { hours: 4, price: 75000, formattedPrice: "Rp75.000" },
      { hours: 5, price: 92000, formattedPrice: "Rp92.000" },
      { hours: 6, price: 110000, formattedPrice: "Rp110.000" },
      { hours: 7, price: 125000, formattedPrice: "Rp125.000" },
      { hours: 8, price: 140000, formattedPrice: "Rp140.000" },
    ],
  },
  {
    id: "vip",
    name: "VIP",
    badge: "PRIVATE PS5",
    accentColor: "#B45CE0", // XPLAY Purple
    borderColor: "border-[#B45CE0]/30",
    bgGlow: "rgba(180, 92, 224, 0.15)",
    startingPrice: "Rp35.000",
    originalPrice: "Rp45.000",
    hourlyRate: "35k",
    description: "Main lebih fokus dan private di ruangan khusus ber-console PlayStation 5.",
    features: ["Private Gaming Room", "Console PlayStation 5", "Sofa Empuk & Suasana Nyaman", "Floor 01 (Smoking) Setup"],
    rates: [
      { hours: 1, price: 35000, formattedPrice: "Rp35.000" },
      { hours: 2, price: 68000, formattedPrice: "Rp68.000" },
      { hours: 3, price: 100000, formattedPrice: "Rp100.000" },
      { hours: 4, price: 130000, formattedPrice: "Rp130.000" },
      { hours: 5, price: 160000, formattedPrice: "Rp160.000" },
      { hours: 6, price: 190000, formattedPrice: "Rp190.000" },
      { hours: 7, price: 215000, formattedPrice: "Rp215.000" },
      { hours: 8, price: 240000, formattedPrice: "Rp240.000" },
    ],
  },
  {
    id: "vvip",
    name: "VVIP",
    badge: "POPULER",
    accentColor: "#F45CB4", // XPLAY Pink
    borderColor: "border-[#F45CB4]/30",
    bgGlow: "rgba(244, 92, 180, 0.15)",
    startingPrice: "Rp40.000",
    originalPrice: "Rp50.000",
    hourlyRate: "40k",
    description: "Pengalaman bermain terbaik: PlayStation 5 (4 Stik DualSense), Nintendo Switch, & TV Netflix dalam 1 ruangan private.",
    features: ["Ruangan Private Premium", "4 Stik DualSense PS5", "Nintendo Switch Ready", "Akses Netflix TV", "Floor 02 (No Smoking)"],
    rates: [
      { hours: 1, price: 40000, formattedPrice: "Rp40.000" },
      { hours: 2, price: 78000, formattedPrice: "Rp78.000" },
      { hours: 3, price: 115000, formattedPrice: "Rp115.000" },
      { hours: 4, price: 150000, formattedPrice: "Rp150.000" },
      { hours: 5, price: 185000, formattedPrice: "Rp185.000" },
      { hours: 6, price: 220000, formattedPrice: "Rp220.000" },
      { hours: 7, price: 250000, formattedPrice: "Rp250.000" },
      { hours: 8, price: 280000, formattedPrice: "Rp280.000" },
    ],
  },
];
