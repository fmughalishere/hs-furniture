"use client"
import Hero from "../app/components/sections/Hero";
import StatsSection from "../app/components/sections/Stats";
import CategorySection from "../app/components/sections/CategorySection";
import Bestsellers from "../app/components/sections/BestSellers";
import Reviews from "../app/components/sections/Reviews";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero/>
      <CategorySection />
      <StatsSection />
      <Bestsellers />
      <Reviews />
    </main>
  );
}