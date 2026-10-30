import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "بارك الألعاب Palooza Land مراكش - تواصل معانا",
  description:
    "محتاج معلومات أو عرض ثمن؟ تواصل مع Palooza Land فمراكش للفعاليات، الخرجات الجماعية، أعياد الميلاد أو زيارة البارك والأكوابارك",
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
