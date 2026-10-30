import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import HorairesHero from "./components/HorairesHero";
import HorairesSection from "./components/HorairesSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "أوقات عمل بارك الألعاب فمراكش | Palooza Land",
  description:
    "شوف أوقات العمل ديال Palooza Land فمراكش: الأسبوع، الويكاند، العطل المدرسية وأوقات الصيف باش تنظم زيارتك بكل راحة.",
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
