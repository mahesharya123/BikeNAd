import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import CookieConsent from "../components/CookieConsent";

// Load Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "BikeNAds | EV Bike Rentals & Mobile LED Advertising",
  description:
    "BikeNAds offers electric bike rentals with LED advertising solutions. Promote your brand using eco-friendly mobile digital ads across the city.",
  keywords: [
    "EV bike advertising",
    "mobile LED advertising",
    "bike rental advertising",
    "electric bike ads",
    "outdoor advertising India",
    "BikeNAds",
  ],
  authors: [{ name: "BikeNAds" }],
  creator: "BikeNAds",
  publisher: "BikeNAds",
  openGraph: {
    title: "BikeNAds | EV Bike Advertising Platform",
    description:
      "India’s first mobile digital advertising company using EV bikes with LED displays.",
    url: "https://bikenads.netlify.app/",
    siteName: "BikeNAds",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "BikeNAds EV Advertising",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
        <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1190344404731568"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-inter antialiased">
        <CookieConsent/>
        {children}
      </body>
    </html>
  );
}
