export interface FacilityCategory {
  title: string;
  subtitle: string;
  iconName: string;
  accentColor: string;
  items: {
    name: string;
    description: string;
  }[];
}

export const FACILITIES_DATA: FacilityCategory[] = [
  {
    title: "Gaming Consoles",
    subtitle: "Pilihan Konsol Terlengkap",
    iconName: "Gamepad2",
    accentColor: "#1FA6F0",
    items: [
      { name: "PlayStation 4", description: "Standard unit mabar kasual dengan performa lancar." },
      { name: "PlayStation 4+", description: "Pengalaman PS4 yang di-upgrade untuk gameplay lebih prima." },
      { name: "PlayStation 5", description: "Performa 4K next-gen dan DualSense haptic feedback." },
    ],
  },
  {
    title: "Private Rooms",
    subtitle: "Pengalaman Private Exklusif",
    iconName: "Crown",
    accentColor: "#B45CE0",
    items: [
      { name: "VIP Room", description: "Ruangan khusus dengan PS5 untuk mabar lebih privat dan fokus." },
      { name: "VVIP Room", description: "Ruangan privat paling lengkap dengan PS5 (4 Stik DualSense), Nintendo Switch, & TV Netflix." },
    ],
  },
  {
    title: "Multimedia Entertainment",
    subtitle: "Lebih dari Sekadar Main PS",
    iconName: "Tv",
    accentColor: "#F45CB4",
    items: [
      { name: "Nintendo Switch", description: "Nikmati game party & multiplayer Nintendo di VVIP Room." },
      { name: "Netflix Entertainment", description: "Nonton film & series favorit bersama teman di VVIP Room." },
    ],
  },
  {
    title: "Zonasi Ruangan",
    subtitle: "Pilih Kenyamanan Kamu",
    iconName: "Building2",
    accentColor: "#75D84B",
    items: [
      { name: "Smoking Area (Floor 01)", description: "Area lantai 1 khusus merokok dengan sirkulasi udara baik." },
      { name: "No Smoking Area (Floor 02)", description: "Area lantai 2 bebas asap rokok yang bersih dan nyaman." },
    ],
  },
];
