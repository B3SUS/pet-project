"use client";
import { Hero } from "@/components/shared/main-page/Hero";
import { Advantages } from "@/components/shared/main-page/Advantages";
import { Browse } from "@/components/shared/main-page/Browse";
import { FilterCheckbox } from "@/components/shared/listing-page/FilterCheckbox";

export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <Browse />
    </div>
  );
}
