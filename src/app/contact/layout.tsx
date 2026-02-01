import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parc d'attractions Palooza Land Marrakech - Contact & Réservations",
  description:
    "Besoin d'informations ou d'un devis ? Contactez Palooza Land à Marrakech pour vos événements, sorties de groupe, anniversaires ou visites du parc d'attractions et aqua park",
  openGraph: {
    title: "Parc d'attractions Palooza Land Marrakech - Contact & Réservations",
    description:
      "Besoin d'informations ou d'un devis ? Contactez Palooza Land à Marrakech pour vos événements, sorties de groupe, anniversaires ou visites du parc d'attractions et aqua park",
    url: "https://paloozaland.com/contact",
    siteName: "Palooza Land Marrakech",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
