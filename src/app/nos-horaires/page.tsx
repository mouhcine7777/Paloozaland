import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import HorairesHero from "./components/HorairesHero";
import HorairesSection from "./components/HorairesSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Horaires du parc d'attractions à Marrakech | Palooza Land",
  description:
    "Consultez les horaires d'ouverture de Palooza Land à Marrakech : semaine, week-ends, vacances scolaires et horaires saisonniers pour organiser votre visite en toute sérénité.",
};

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