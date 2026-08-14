export interface FloorUnit {
  type: string;
  count: number;
  label: string;
  accent?: string;
}

export interface FloorInfo {
  floorNumber: string;
  title: string;
  environmentTag: "SMOKING AREA" | "NO SMOKING";
  isSmoking: boolean;
  totalUnits: number;
  description: string;
  highlights: string[];
  units: FloorUnit[];
  badgeColor: string;
  imageSrc: string;
}

export const FLOORS_DATA: FloorInfo[] = [
  {
    floorNumber: "01",
    title: "FLOOR 01 — SMOKING AREA",
    environmentTag: "SMOKING AREA",
    isSmoking: true,
    totalUnits: 10,
    description: "Lantai 1 dirancang khusus untuk gamer yang ingin mabar seru sambil merokok dengan sirkulasi udara optimal.",
    highlights: ["Smoking Friendly", "Atmosphere Mabar Semangat", "Akses Cepat & Luas", "10 Unit Setup"],
    badgeColor: "#FF3038", // Red accent
    imageSrc: "/lantai1.jpeg",
    units: [
      { type: "PS4", count: 8, label: "8 × PS4 Standard", accent: "#36B7F0" },
      { type: "PS5", count: 1, label: "1 × PS5 Regular", accent: "#FFD84D" },
      { type: "VIP", count: 1, label: "1 × PS5 VIP Room", accent: "#B45CE0" },
    ],
  },
  {
    floorNumber: "02",
    title: "FLOOR 02 — NO SMOKING",
    environmentTag: "NO SMOKING",
    isSmoking: false,
    totalUnits: 10,
    description: "Lantai 2 adalah area bebas asap rokok yang bersih, nyaman, dan sejuk — lengkap dengan VIP & VVIP Private Rooms.",
    highlights: ["Bebas Asap Rokok", "PlayStation + Nintendo + Netflix", "2 VVIP Private Rooms", "Suasana Santai & Premium"],
    badgeColor: "#75D84B", // Green accent
    imageSrc: "/lantai2.jpeg",
    units: [
      { type: "PS4", count: 6, label: "6 × PS4 Standard", accent: "#36B7F0" },
      { type: "PS4+", count: 1, label: "1 × PS4+", accent: "#75D84B" },
      { type: "PS5", count: 1, label: "1 × PS5 Regular", accent: "#FFD84D" },
      { type: "VVIP", count: 2, label: "2 × VVIP Private Rooms", accent: "#F45CB4" },
    ],
  },
];
