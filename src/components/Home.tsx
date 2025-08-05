"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FaYoutube, FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";

const slogans = [
    "Gaming content that inspires.",
    "Streaming with style.",
    "Join the digital army!",
];

const images = [
    { src: "/Images/n1.jpg", alt: "Main Banner" },
    { src: "/Images/n2.jpeg", alt: "Gameplay" },
    { src: "/Images/n3.jpg", alt: "Fanbase" },
    { src: "/Images/n4.jpg", alt: "Vlogs" },
];

export function HeroSection() {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 12;
        const rotateY = (x / rect.width) * 12;
        setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <HeroHighlight className="relative py-16 lg:py-32 px-6 lg:px-20 min-h-screen flex items-center justify-center overflow-hidden">
            <section className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-20">
                {/* Left: Text & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-6">
                        <span className="text-white">I&apos;m </span>
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d32c2c] to-[#ff5e5e]">
                            Nayan Shelke
                        </span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-8 min-h-[56px] font-semibold tracking-wide">
                        <Typewriter
                            words={slogans}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </p>

                    <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                        With over <strong className="text-white">10M+ Subscribers</strong>, I
                        create content that entertains, inspires, and connects a global fanbase.
                        Join me on the journey.
                    </p>

                    {/* Subscribe Button */}
                    <a
                        href="https://www.youtube.com/@AssassinsARMY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-3xl font-bold text-lg text-white transition-all hover:scale-105 hover:shadow-xl overflow-hidden group mb-12"
                    >
                        <span className="absolute inset-0 bg-white opacity-10 blur-lg group-hover:animate-pulse" />
                        <FaYoutube size={28} />
                        <span className="relative z-10">Subscribe Now</span>
                    </a>

                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-start gap-8 mt-4">
                        {/* Youtube */}
                        {/* <a
                            href="https://www.youtube.com/@AssassinsARMY"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube"
                            className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#d32626] text-white transition-all duration-300 hover:bg-[#cf3838] hover:shadow-[0_0_12px_#d32626] hover:scale-110"
                        >
                            <FaYoutube size={24} />
                        </a> */}

                        {/* Discord */}
                        <a
                            href="https://discord.gg/assassins"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#5865F2] text-white transition-all duration-300 hover:bg-[#5865F2] hover:shadow-[0_0_12px_#5865F2] hover:scale-110"
                        >
                            <FaDiscord size={24} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/assassinsarmy01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#E1306C] text-white transition-all duration-300 hover:bg-[#E1306C] hover:shadow-[0_0_12px_#E1306C] hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/AssassinsArmy007/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#1877F2] text-white transition-all duration-300 hover:bg-[#1877F2] hover:shadow-[0_0_12px_#1877F2] hover:scale-110"
                        >
                            <FaFacebookF size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right: Image Carousel with subtle tilt/floating */}
                <motion.div
                    key={currentIndex}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{
                        rotateX: tilt.rotateX,
                        rotateY: tilt.rotateY,
                        transformStyle: "preserve-3d",
                        perspective: 1100,
                        transition: "transform 0.2s ease-out",
                    }}
                    className="group w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] cursor-pointer relative rounded-3xl shadow-2xl  transition-all duration-300 select-none overflow-hidden hover:scale-105"
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        width={480}
                        height={480}
                        priority
                        className="object-cover rounded-3xl"
                        draggable={false}
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
                </motion.div>
            </section>
        </HeroHighlight>
    );
}
