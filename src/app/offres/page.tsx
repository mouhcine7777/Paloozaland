import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import OffresHero from "./components/OffresHero";
import EntrepriseSection from "./components/EntrepriseSection";
import ScolaireSection from "./components/ScolaireSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Parc à thème dinosaures à Marrakech - Offres Palooza Land",
  description:
    "Profitez des meilleures offres Palooza Land : sorties scolaires, team building, billets parc à thème dinosaures, attractions et expériences VR à Marrakech",
};

export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <OffresHero />
      <ScolaireSection />
      <EntrepriseSection />
      <FooterSection />
    </main>
  );
}