import type { Metadata } from "next";
import SewaPSClient from "@/components/SewaPSClient";

export const metadata: Metadata = {
  title: "Sewa PS4, PS4 Pro & PS5 | XPLAY Games",
  description: "Sewa PlayStation favoritmu untuk dimainkan di rumah. Pilihan rental PS4 Slim, PS4 Pro, dan PS5 termurah di Batam dengan jaminan eKTP aman dan mudah.",
  keywords: ["Sewa PS Batam", "Sewa PS4", "Sewa PS5", "Rental PlayStation", "Sewa PS Pro", "XPLAY Games"],
  openGraph: {
    title: "Sewa PS4, PS4 Pro & PS5 | XPLAY Games",
    description: "Sewa PlayStation favoritmu untuk dimainkan di rumah. Pilihan rental PS4 Slim, PS4 Pro, dan PS5 termurah di Batam dengan jaminan eKTP aman dan mudah.",
    images: ["/sewanontv.jpeg"],
  }
};

export default function SewaPSPage() {
  return <SewaPSClient />;
}
