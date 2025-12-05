"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-accent backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-black font-sora font-bold text-3xl">BikeNAds</h1>

        <div className="hidden md:flex gap-6 font-sora text-gray/500">
          <Link href="/">Home</Link>
         
          <Link href="/adwithus">AdwithUs</Link>
           <Link href="/ridewithus">Rentals</Link>
            <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black font-sora px-6 py-4 flex flex-col gap-4 text-white">
          <Link href="/">Home</Link>
          <Link href="/adwithus">ADwithUS</Link>
          <Link href="/ridewithus">Rentals</Link>
              <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
