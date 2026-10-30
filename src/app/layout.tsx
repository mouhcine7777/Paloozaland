import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
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
    default: "Parc d'attraction Marrakech – Parc de jeux & aqua park Maroc",
    template: "%s | Palooza Park Marrakech",
  },
  description:
    "Découvrez Palooza Land, le parc d’attractions incontournable à Marrakech : manèges, expériences VR, piscine, aqua park, accrobranche et spectacles pour toute la famille. Vivez une journée de fun inoubliable !",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-19DEWNPDDE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-19DEWNPDDE');
          `}
        </Script>
      </body>
    </html>
  );
}
