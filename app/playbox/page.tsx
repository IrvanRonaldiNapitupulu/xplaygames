import type { Metadata } from "next";
import PlayboxClient from "@/components/PlayboxClient";

export const metadata: Metadata = {
  title: "Playbox PS4 + TV | Sewa Playbox XPLAY Games",
  description: "Sewa paket lengkap gaming Playbox PS4 + TV 32 inch + 2 controller untuk keseruan mabar bersama keluarga di rumah tanpa ribet internet (Offline HEN).",
  keywords: ["Sewa Playbox", "Sewa PS4 TV", "Rental PS4 dan TV", "Playbox Batam", "XPLAY Games Playbox"],
  openGraph: {
    title: "Playbox PS4 + TV | Sewa Playbox XPLAY Games",
    description: "Sewa paket lengkap gaming Playbox PS4 + TV 32 inch + 2 controller untuk keseruan mabar bersama keluarga di rumah tanpa ribet internet (Offline HEN).",
    images: ["/playbox.jpeg"],
  }
};

export default function PlayboxPage() {
  return <PlayboxClient />;
}
