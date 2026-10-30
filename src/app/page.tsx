"use client";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import TicketsSection from "./components/TicketsSection";
import TimingSection from "./components/TimingSection";
import GallerySection from "./components/GallerySection";
import Newsletter from "./components/Newsletter";
import FooterSection from "./components/FooterSection";
import OffersPopup from "./components/OffersPopup";


export default function Home() {
  return (
    <main>
      <OffersPopup />
      <StickyNavbar />
      <HeroSection />
      <TicketsSection />
      <GallerySection />
      <TimingSection />
      <Newsletter />
      <FooterSection />
    </main>
  );
}