import type { Metadata } from "next";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import TicketsSection from "./components/TicketsSection";
import GallerySection from "./components/GallerySection";
import Newsletter from "./components/Newsletter";
import FooterSection from "./components/FooterSection";

export const metadata: Metadata = {
  title: "Amusement Park in Marrakech – Rides & Aqua Park Morocco",
  description:
    "Discover Palooza Land, the must-see amusement park in Marrakech: rides, VR experiences, pool, aqua park, ropes course and shows for the whole family. Live an unforgettable day of fun!",
};

export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <HeroSection />
      <TicketsSection />
      <GallerySection />
      <Newsletter />
      <FooterSection />
    </main>
  );
}
