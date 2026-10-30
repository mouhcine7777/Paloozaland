import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import OffresHero from "./components/OffresHero";
import EntrepriseSection from "./components/EntrepriseSection";
import ScolaireSection from "./components/ScolaireSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Dinosaur Theme Park in Marrakech - Palooza Land Offers",
  description:
    "Enjoy the best Palooza Land offers: school outings, team building, dinosaur theme park tickets, attractions and VR experiences in Marrakech",
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
