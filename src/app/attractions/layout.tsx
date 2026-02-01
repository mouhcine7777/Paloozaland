import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parc d'attractions au Maroc – Manèges, Aqua Park & VR | Palooza Land",
  description:
    "Plongez dans l'univers Palooza Land : plus de 20 attractions à sensations, manèges, expériences VR, aqua park, accrobranche et zones d'aventure pour vivre des émotions uniques à Marrakech",
  openGraph: {
    title: "Parc d'attractions au Maroc – Manèges, Aqua Park & VR | Palooza Land",
    description:
      "Plongez dans l'univers Palooza Land : plus de 20 attractions à sensations, manèges, expériences VR, aqua park, accrobranche et zones d'aventure pour vivre des émotions uniques à Marrakech",
    url: "https://paloozaland.com/attractions",
    siteName: "Palooza Land Marrakech",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AttractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
