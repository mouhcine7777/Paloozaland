"use client";
import StickyNavbar from "../components/StickyNavbar";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import FooterSection from "../components/FooterSection";


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


