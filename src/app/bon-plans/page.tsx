import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import BonPlansSlider from "./components/BonPlansSlider";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Bons Plans | Palooza Land Marrakech",
  description:
    "Découvrez les bons plans et offres exclusives de Palooza Land, le parc à thème dinosaures de Marrakech.",
};

export default function BonPlans() {
  return (
    <main>
      <StickyNavbar />
      <BonPlansSlider />
      <FooterSection />
    </main>
  );
}
