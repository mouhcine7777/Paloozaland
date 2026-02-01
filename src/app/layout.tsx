import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ⭐ SEO METADATA - PAGE ACCUEIL
export const metadata: Metadata = {
  title: "Parc d'attraction Marrakech – Parc de jeux & aqua park Maroc",
  description:
    "Découvrez Palooza Land, le parc d'attractions incontournable à Marrakech : manèges, expériences VR, piscine, aqua park, accrobranche et spectacles pour toute la famille. Vivez une journée de fun inoubliable !",
  keywords: [
    "Palooza Land",
    "Palooza Park Marrakech",
    "parc d'attraction Marrakech",
    "aqua park Marrakech",
    "parc de jeux Maroc",
    "manèges Marrakech",
    "VR Marrakech",
    "accrobranche Marrakech",
    "sorties famille Marrakech",
  ],
  openGraph: {
    title: "Parc d'attraction Marrakech – Parc de jeux & aqua park Maroc",
    description:
      "Découvrez Palooza Land, le parc d'attractions incontournable à Marrakech : manèges, expériences VR, piscine, aqua park, accrobranche et spectacles pour toute la famille.",
    url: "https://paloozaland.com",
    siteName: "Palooza Land Marrakech",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://paloozaland.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
