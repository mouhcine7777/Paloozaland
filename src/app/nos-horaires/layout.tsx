import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horaires du parc d'attractions à Marrakech | Palooza Land",
  description:
    "Consultez les horaires d'ouverture de Palooza Land à Marrakech : semaine, week-ends, vacances scolaires et horaires saisonniers pour organiser votre visite en toute sérénité.",
  openGraph: {
    title: "Horaires du parc d'attractions à Marrakech | Palooza Land",
    description:
      "Consultez les horaires d'ouverture de Palooza Land à Marrakech : semaine, week-ends, vacances scolaires et horaires saisonniers pour organiser votre visite en toute sérénité.",
    url: "https://paloozaland.com/nos-horaires",
    siteName: "Palooza Land Marrakech",
    locale: "fr_FR",
    type: "website",
  },
};

export default function HorairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
