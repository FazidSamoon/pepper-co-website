import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/molecules/Navbar/Navbar";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Premium Pepper Farm",
  description:
    "World-class peppers delivered fresh from our fields to your table",
};

export default function Home() {
  return (
    <div className={`${inter.variable} ${playfair.variable}`}>
      <div className="">
        <Navbar />

        <HeroSection />
      </div>
    </div>
  );
}
