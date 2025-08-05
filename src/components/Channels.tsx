"use client";
import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Channels() {
    const channels = [
        {
            title: "Assassins Army",
            description: "Join Assassins Army, where 12 million subscribers enjoy gaming thrills and hilarious pranks! Subscribe for non-stop entertainment!",
            subscribers: "11M subscribers",
            logo: "/Images/assassinsarmy.jpg",
            features: ["11M subscribers", "Gaming thrills and hilarious pranks"],
            link: "https://www.youtube.com/@AssassinsARMY",
        },
        {
            title: "Nayan Shelke Vlogs",
            description: "Discover Nayan Shelke Vlogs: 450k subscribers, endless adventures! Subscribe now for inspiring journeys and heartwarming moments.",
            subscribers: "450K subscribers",
            logo: "/Images/nayanvlogs.jpg",
            features: ["450K subscribers", "Inspiring journeys and heartwarming moments"],
            link: "https://www.youtube.com/@NayanShelkevlogs",
        },
        {
            title: "Assassins Gaming",
            description: "Assassins Gaming: 500k subscribers, non-stop excitement! Dive into thrilling gameplay and action-packed live streams. Subscribe now!",
            subscribers: "500K subscribers",
            logo: "/Images/assassinsgaming.jpg",
            features: ["500K subscribers", "Thrilling gameplay and action-packed live streams"],
            link: "https://www.youtube.com/@AssassinGaminghuzzai",
        },
    ];

    return (
        <HeroHighlight className="lg:h-[100vh] min-h-screen flex items-center justify-center py-12 lg:py-24 px-4 lg:px-0">
            <div className="w-full max-w-6xl text-center" id="channels">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    My YouTube Channels
                </h1>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white mb-10 font-semibold">
                    <span>— </span>
                    <span className="text-red-500">What I Provide</span>
                    <span> —</span>
                </h3>
                <div className="flex flex-col items-center gap-8">
                    <HoverEffect
                        items={channels.map(channel => ({
                            title: channel.title,
                            description: channel.description,
                            price: 0, // Placeholder
                            features: channel.features,
                            link: channel.link,
                            logo: channel.logo,
                        }))}
                    />
                </div>
            </div>
        </HeroHighlight>
    );
}
