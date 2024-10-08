import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import { WhyUs } from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-white/(0.02)">
      <HeroSection />
      <FeaturedSection />
      <WhyUs />
      <Testimonial/>
    </main>
  );
}
