import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import AttractionHero from "./components/AttractionHero";
import AttractionsSection from "./components/AttractionsSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "بارك الألعاب بالمغرب – ألعاب، أكوابارك وواقع افتراضي | Palooza Land",
  description:
    "دخل لعالم بالوزا لاند: كثر من 20 لعبة مليانة إثارة، ألعاب، تجارب فالواقع الافتراضي، أكوابارك، أكروبراش وفضاءات مغامرة باش تعيش أحاسيس استثنائية فمراكش",
};

export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <AttractionHero />
      <AttractionsSection />
      <FooterSection />
    </main>
  );
}
