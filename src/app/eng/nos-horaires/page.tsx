import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import HorairesHero from "./components/HorairesHero";
import HorairesSection from "./components/HorairesSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Amusement Park Opening Hours in Marrakech | Palooza Land",
  description:
    "Check Palooza Land's opening hours in Marrakech: weekdays, weekends, school holidays and seasonal hours to plan your visit with complete peace of mind.",
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
