"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import HeroSection from "@/components/HeroSection";
import LiveAvailabilityWidget from "@/components/LiveAvailabilityWidget";
import ExperienceSection from "@/components/ExperienceSection";
import FloorSection from "@/components/FloorSection";
import VipShowcase from "@/components/VipShowcase";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GamesSection from "@/components/GamesSection";
import GallerySection from "@/components/GallerySection";
import HowToBookSection from "@/components/HowToBookSection";
import LocationSection from "@/components/LocationSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import PosterModal from "@/components/PosterModal";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingConsole, setBookingConsole] = useState<string | undefined>(undefined);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const handleOpenBooking = (consoleName?: string) => {
    setBookingConsole(consoleName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenPoster = () => {
    setIsPosterOpen(true);
  };

  const handleClosePoster = () => {
    setIsPosterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#1FA6F0] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section + Quick Highlights */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Live Availability Banner */}
        <LiveAvailabilityWidget />

        {/* Experience Selector Section */}
        <ExperienceSection
          onSelectCategory={(id) => {
            // Optional callback
          }}
          onOpenBooking={handleOpenBooking}
        />

        {/* Floor 01 & Floor 02 Section */}
        <FloorSection onOpenBooking={handleOpenBooking} />

        {/* VIP & VVIP Showcase */}
        <VipShowcase onOpenBooking={handleOpenBooking} />

        {/* Official Pricing Section */}
        <PricingSection
          onOpenBooking={handleOpenBooking}
          onOpenPosterModal={handleOpenPoster}
        />

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Games Categories Section */}
        <GamesSection />

        {/* Gallery & Atmosphere Showcase */}
        <GallerySection onOpenPosterModal={handleOpenPoster} />

        {/* 4 Steps How to Book */}
        <HowToBookSection onOpenBooking={handleOpenBooking} />

        {/* Google Maps & Location Section */}
        <LocationSection onOpenBooking={handleOpenBooking} />

        {/* Final Conversion CTA */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA onOpenBooking={handleOpenBooking} />

      {/* Floating Fixed WhatsApp & Back To Top */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialConsole={bookingConsole}
      />

      {/* Poster Image Lightbox Modal */}
      <PosterModal isOpen={isPosterOpen} onClose={handleClosePoster} />
    </div>
  );
}
