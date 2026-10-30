import type { Metadata } from "next";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import TicketsSection from "./components/TicketsSection";
import GallerySection from "./components/GallerySection";
import Newsletter from "./components/Newsletter";
import FooterSection from "./components/FooterSection";

export const metadata: Metadata = {
  title: "بارك الألعاب فمراكش – ألعاب وأكوابارك بالمغرب",
  description:
    "اكتشف بالوزا لاند، أول بارك ديال الديناصورات فمراكش: ألعاب، تجارب فالواقع الافتراضي، مسبح، أكوابارك، أكروبراش وعروض لجميع أفراد العائلة. عيش يوم مليان متعة ما غاديش تنساه!",
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
