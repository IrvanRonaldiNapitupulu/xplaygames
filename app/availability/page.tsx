import type { Metadata } from "next";
import AvailabilityClient from "@/components/AvailabilityClient";

export const metadata: Metadata = {
  title: "Live Station Availability | XPLAY Games",
  description: "Cek ketersediaan unit gaming PS4, PS5, VIP, dan VVIP Room secara real-time sebelum berkunjung ke lounge XPLAY Games.",
  keywords: ["Ketersediaan PS4", "Ketersediaan PS5", "Status Unit Real-time", "XPLAY Lounge Live Status", "Batam Gaming Lounge Status"],
  openGraph: {
    title: "Live Station Availability | XPLAY Games",
    description: "Cek ketersediaan unit gaming PS4, PS5, VIP, dan VVIP Room secara real-time sebelum berkunjung ke lounge XPLAY Games.",
    images: ["/vip.jpeg"],
  }
};

export default function AvailabilityPage() {
  return <AvailabilityClient />;
}
