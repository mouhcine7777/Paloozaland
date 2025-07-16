"use client";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import TicketsSection from "./components/TicketsSection";
import TimingSection from "./components/TimingSection";
import GallerySection from "./components/GallerySection";
import FooterSection from "./components/FooterSection";



export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <HeroSection />
      <TicketsSection />
      <GallerySection />
      <TimingSection />
      <FooterSection />
    </main>
  );
}


