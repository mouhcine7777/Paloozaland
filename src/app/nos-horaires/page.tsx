"use client";
import StickyNavbar from "../components/StickyNavbar";
import HorairesHero from "./components/HorairesHero";
import HorairesSection from "./components/HorairesSection";
import FooterSection from "../components/FooterSection";


export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <HorairesHero />
      <HorairesSection />
      <FooterSection />
    </main>
  );
}


