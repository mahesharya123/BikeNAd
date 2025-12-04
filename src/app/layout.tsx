import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

// Load Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "BikenAds – Digital Marketing",
  description: "Digital Taxi & Bike LED Advertising Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
