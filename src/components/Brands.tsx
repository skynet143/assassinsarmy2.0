"use client";

import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Brands() {
  const brands = [
    { brandImage: "/Images/Lenskart_Logo_PNG3 (1).png" },
    { brandImage: "/Images/garena.png" },
    { brandImage: "/Images/freefirews.png" },
    { brandImage: "/Images/monster.png" },
    { brandImage: "/Images/aorus-logo-1.png" },
    { brandImage: "/Images/amd.png" },
  ];

  return (
    <>
      <HeroHighlight className="py-12 lg:py-24 px-4 lg:px-0 w-full sm:w-full lg:w-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" id="brands">
            Brands
          </h1>
          <h3 className="text-lg md:text-xl lg:text-2xl text-white mb-2 font-semibold">
            <span>— </span>
            <span className="text-red-500"> We Work With</span>
            <span> —</span>
          </h3>

          <InfiniteMovingCards
            items={brands}
            direction="right"
            speed="slow"
          />
        </div>
      </HeroHighlight>
    </>
  );
}
