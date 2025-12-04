"use client";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";

import Geo from "@/components/GeoTargeting"
import Footer from "@/components/Footer";
import Ad from "@/components/Ad";
import Rental from '@/components/RentalPlans'
import Clients from "@/components/OurClients"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Ad />
      <Rental/>
      <Clients/>
     <Geo/>

      <Footer />
    </>
  );
}
