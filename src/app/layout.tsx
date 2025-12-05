import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ⭐ FULL SEO OPTIMIZED METADATA
export const metadata: Metadata = {
  title: {
    default: "Palooza Park – Parc d’Attractions à Marrakech",
    template: "%s | Palooza Park Marrakech",
  },
  description:
    "Palooza Park Marrakech – Parc d’attractions thématique avec dinosaures, manèges, espace enfants, restaurants et activités familiales. Découvrez nos attractions, horaires, tarifs et événements.",
  keywords: [
    "Palooza Park",
    "Palooza Park Marrakech",
    "parc d'attraction Marrakech",
    "parc dinosaure Marrakech",
    "dinosaur park Morocco",
    "family park Marrakech",
    "sorties Marrakech",
    "activités enfants Marrakech",
  ],
  openGraph: {
    title: "Palooza Park – Parc d’Attractions à Marrakech",
    description:
      "Découvrez Palooza Park Marrakech : dinosaures, manèges, attractions, espace famille, restaurants et expériences immersives.",
    url: "https://paloozaland.com",
    siteName: "Palooza Park Marrakech",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
