import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xplaygames.com"),
  title: "XPLAY Games — Rental PS4, PS5, VIP & VVIP Gaming Lounge",
  description:
    "Nikmati pengalaman PlayStation Gaming Lounge terbaik di XPLAY Games. Pilihan PS4, PS4+, PS5, VIP Room, hingga VVIP Room dengan PlayStation, Nintendo & Netflix. Buka 10:00 — 03:00 WIB.",
  keywords: [
    "XPLAY Games",
    "Rental PS",
    "Rental PS5",
    "Rental PS4",
    "Gaming Lounge",
    "VIP Gaming Room",
    "VVIP Nintendo Netflix",
    "Tempat Mabar PS",
    "PS Lounge Bandung",
  ],
  authors: [{ name: "XPLAY Games" }],
  openGraph: {
    title: "XPLAY Games — Rental PS4, PS5, VIP & VVIP Gaming Lounge",
    description:
      "Main. Mabar. Menang. Ulangi. Temukan pengalaman gaming lounge terbaik dari PS4 hingga VVIP Private Room.",
    url: "https://xplaygames.com",
    siteName: "XPLAY Games",
    images: [
      {
        url: "/xplay.png",
        width: 800,
        height: 800,
        alt: "XPLAY Games Logo & Lounge",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XPLAY Games — Rental PS4, PS5, VIP & VVIP Gaming Lounge",
    description: "Gaming lounge modern dengan 20 unit setup, VIP & VVIP room.",
    images: ["/xplay.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/xplay.png",
    apple: "/xplay.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://xplaygames.com/xplay.png",
    "description": BUSINESS_INFO.heroSubhead,
    "telephone": BUSINESS_INFO.whatsappNumber,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "03:00"
      }
    ],
    "priceRange": "Rp 12.000 - Rp 320.000"
  };

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#080808] text-white flex flex-col font-sans selection:bg-[#36B7F0] selection:text-black">
        {children}
      </body>
    </html>
  );
}
