import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import OffresHero from "./components/OffresHero";
import EntrepriseSection from "./components/EntrepriseSection";
import ScolaireSection from "./components/ScolaireSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "بارك الديناصورات فمراكش - عروض Palooza Land",
  description:
    "استافد من أحسن عروض Palooza Land: خرجات مدرسية، تيم بيلدينغ، تذاكر بارك الديناصورات، ألعاب وتجارب فالواقع الافتراضي فمراكش",
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
