"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  { id: 1, name: "Huzaif Pathan", designation: "Content Creator", image: "/Images/huzzai.png" },
  { id: 2, name: "Bhushan Shelke", designation: "Content Creator", image: "/Images/bhushan.png" },
  { id: 3, name: "Rohan Patil", designation: "Video Editor", image: "/Images/rohan.png" },
  { id: 4, name: "Abhishek Sable", designation: "Cinematographer", image: "/Images/abhishek.png" },
  { id: 5, name: "Karan Bhambhu", designation: "Manager", image: "/Images/Karan.jpg" },
];

export function Team() {
  return (
    <div
      className="
        container mx-auto
        min-h-[60vh]
        flex flex-col items-center justify-center
        px-4 py-16
        text-center
      "
    >
      <h1
        id="team"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
      >
        My Team
      </h1>
      <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold mb-12">
        <span>— </span>
        <span className="text-red-500">Who with me</span>
        <span> —</span>
      </h3>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-12 w-full max-w-7xl">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
