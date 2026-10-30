import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Parc d'attractions Palooza Land Marrakech - Contact & Réservations",
  description:
    "Besoin d'informations ou d'un devis ? Contactez Palooza Land à Marrakech pour vos événements, sorties de groupe, anniversaires ou visites du parc d'attractions et aqua park",
};

export default function Home() {
  return (
    <main>
      <StickyNavbar />
      <ContactHero />
      <ContactSection />
      <FooterSection />
    </main>
  );
}