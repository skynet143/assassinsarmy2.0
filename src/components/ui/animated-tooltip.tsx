"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <div className="text-center">
      <div
        className="
          flex flex-row items-center justify-center
          space-x-[-20px] sm:space-x-[-30px] md:space-x-[-40px] lg:space-x-[-50px]
        "
      >
        {items.map((item) => (
          <div
            className="relative group"
            key={item.id}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              handleMouseLeave();
            }}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 15,
                    },
                  }}
                  exit={{ opacity: 0, y: 15, scale: 0.7 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-28 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-5 py-3"
                >
                  <div className="font-bold text-white text-base sm:text-lg">
                    {item.name}
                  </div>
                  <div className="text-white text-sm sm:text-base">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <Image
              onMouseMove={handleMouseMove}
              src={item.image}
              alt={item.name}
              width={180}
              height={180}
              className="
                object-cover object-top rounded-full border-2 border-white
                relative transition-transform duration-500
                h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44
                group-hover:scale-105 group-hover:z-30
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
