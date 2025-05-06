import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Navbar from "@/components/molecules/Navbar/Navbar";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import OrgIntro from "@/components/organisms/OrgIntro/OrgIntro";
import Products from "@/components/organisms/Products/Products";
import PhotoGallery from "@/components/organisms/PhotoGalery/PhotoGallery";
import FAQSection from "@/components/organisms/FAQSection/FAQSection";

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

export const butler = localFont({
  src: [
    {
      path: "../../public/fonts/butler/Butler_Ultra_Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/butler/Butler_Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-butler",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Pepper Farm",
  description:
    "World-class peppers delivered fresh from our fields to your table",
};

export default function Home() {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} ${butler.variable}`}
    >
      <div className=" font-butler">
        <Navbar />

        <HeroSection />

        <div className=" ">
          <OrgIntro />
          <Products />
          <PhotoGallery />
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
