import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import AttractionHero from "./components/AttractionHero";
import AttractionsSection from "./components/AttractionsSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Amusement Park in Morocco – Rides, Aqua Park & VR | Palooza Land",
  description:
    "Dive into the world of Palooza Land: over 20 thrilling attractions, rides, VR experiences, aqua park, ropes course and adventure zones for unique emotions in Marrakech",
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
