export interface GalleryItem {
  id: string;
  title: string;
  category: "Floor 01" | "Floor 02" | "VIP" | "VVIP" | "Pricing";
  subtitle: string;
  imageSrc: string;
  isPricePoster?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "poster-1",
    title: "Price List Resmi XPLAY Games",
    category: "Pricing",
    subtitle: "Daftar Tarif Resmi per 16 Mei 2026",
    imageSrc: "/hargaxplay.jpeg",
    isPricePoster: true,
  },
  {
    id: "vvip-1",
    title: "VVIP Private Room",
    category: "VVIP",
    subtitle: "PS, Nintendo, Netflix & Private Sofa",
    imageSrc: "/vvip.jpeg",
  },
  {
    id: "vip-1",
    title: "VIP Private Room",
    category: "VIP",
    subtitle: "Privat PS5 Setup dengan Sofa Nyaman",
    imageSrc: "/vip.jpeg",
  },
  {
    id: "floor1-1",
    title: "Floor 01 — Smoking Area",
    category: "Floor 01",
    subtitle: "8 PS4 + 1 PS5 + 1 VIP Room Setup",
    imageSrc: "/lantai1.jpeg",
  },
  {
    id: "floor2-1",
    title: "Floor 02 — No Smoking Area",
    category: "Floor 02",
    subtitle: "6 PS4 + PS4+ + PS5 + 2 VVIP Rooms",
    imageSrc: "/lantai2.jpeg",
  },
];
