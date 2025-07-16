"use client";
import StickyNavbar from "../components/StickyNavbar";
import AttractionHero from "./components/AttractionHero";
import AttractionsSection from "./components/AttractionsSection";
import FooterSection from "../components/FooterSection";


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


