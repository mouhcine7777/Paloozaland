import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parc à thème dinosaures à Marrakech - Offres Palooza Land",
  description:
    "Profitez des meilleures offres Palooza Land : sorties scolaires, team building, billets parc à thème dinosaures, attractions et expériences VR à Marrakech",
  openGraph: {
    title: "Parc à thème dinosaures à Marrakech - Offres Palooza Land",
    description:
      "Profitez des meilleures offres Palooza Land : sorties scolaires, team building, billets parc à thème dinosaures, attractions et expériences VR à Marrakech",
    url: "https://paloozaland.com/offres",
    siteName: "Palooza Land Marrakech",
    locale: "fr_FR",
    type: "website",
  },
};

export default function OffresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
