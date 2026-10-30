import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import FooterSection from "../components/FooterSection";

export const metadata: Metadata = {
  title: "Palooza Land Amusement Park Marrakech - Contact & Bookings",
  description:
    "Need information or a quote? Contact Palooza Land in Marrakech for your events, group outings, birthdays or visits to the amusement park and aqua park",
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
