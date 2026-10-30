import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import AttractionHero from "./components/AttractionHero";
import AttractionsSection from "./components/AttractionsSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Parc d'attractions au Maroc – Manèges, Aqua Park & VR | Palooza Land",
  description:
    "Plongez dans l'univers Palooza Land : plus de 20 attractions à sensations, manèges, expériences VR, aqua park, accrobranche et zones d'aventure pour vivre des émotions uniques à Marrakech",
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