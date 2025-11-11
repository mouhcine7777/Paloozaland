"use client";
import StickyNavbar from "../components/StickyNavbar";
import OffresHero from "./components/OffresHero";
import EntrepriseSection from "./components/EntrepriseSection";
import ScolaireSection from "./components/ScolaireSection";
import FooterSection from "../components/FooterSection";


export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <OffresHero />
      <EntrepriseSection />
      <ScolaireSection />
      <FooterSection />
    </main>
  );
}


