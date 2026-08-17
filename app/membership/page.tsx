import type { Metadata } from "next";
import MembershipClient from "@/components/MembershipClient";

export const metadata: Metadata = {
  title: "XPLAY Membership & Loyalty Rewards | XPLAY Games",
  description: "Main lebih sering, kumpulkan poin, main lagi di XPLAY Games! Dapatkan reward waktu main gratis mulai dari PS4, PS4+, PS5, hingga VIP & VVIP Room menggunakan poin loyalty kamu.",
  keywords: ["XPLAY Membership", "XPLAY Rewards", "Poin Loyalty Rental PS", "Rewards PlayStation", "XPLAY Games"],
  openGraph: {
    title: "XPLAY Membership & Loyalty Rewards | XPLAY Games",
    description: "Main lebih sering, kumpulkan poin, main lagi di XPLAY Games! Dapatkan reward waktu main gratis mulai dari PS4, PS4+, PS5, hingga VIP & VVIP Room menggunakan poin loyalty kamu.",
    images: ["/sewanontv.jpeg"],
  }
};

export default function MembershipPage() {
  return <MembershipClient />;
}
