'use client';
import React, { useEffect, useState } from 'react';
import { FaUsers, FaEye, FaVideo, FaGamepad } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutMeProps {
    experience: number;
    happyClients: number;
    deliveredProjects: number;
    profileImageSrc: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
    experience,
    happyClients,
    deliveredProjects,
    profileImageSrc
}) => {
    const [stats, setStats] = useState({
        totalSubscribers: 0,
        totalViews: 0,
        totalVideos: 0,
    });

    const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
    const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
    const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true });

    useEffect(() => {
        const fetchYouTubeData = async () => {
            const API_KEY = 'AIzaSyCBUQiRhdbXMuSl41wQLer_vEqg7y3gM8E'; // Replace with your API key
            const CHANNEL_ID = 'UC6OMn0pp49OpyqhDwYySMSw'; // Replace with your channel ID
            const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                const { statistics } = data.items[0];

                setStats({
                    totalSubscribers: statistics.subscriberCount,
                    totalViews: statistics.viewCount,
                    totalVideos: statistics.videoCount,
                });
            } catch (error) {
                console.error('Error fetching YouTube data:', error);
            }
        };

        fetchYouTubeData();
    }, []);

    // Convert numbers to millions or billions
    const formatNumber = (number: number) => {
        if (number >= 1_000_000_000) {
            return (number / 1_000_000_000).toFixed(1) + ' B'; // Billions
        } else if (number >= 1_000_000) {
            return (number / 1_000_000).toFixed(1) + ' M'; // Millions
        } else {
            return number.toString(); // Less than a million
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-screen-lg">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                ref={sectionRef}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" id='about'>About Me</h2>
                <h3 className="text-lg md:text-xl lg:text-2xl text-center text-white mb-4 font-semibold">
                    <span>&mdash; </span>
                    <span className="text-red-500">Who I am</span>
                    <span> &mdash;</span>
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-4">
                    I&apos;m Nayan Shelke, a dynamic content creator known for my gaming expertise in Free Fire as an official partner of Garena. Alongside my gaming content, I also create engaging vlogs that offer insights into my daily life and adventures.
                </p>
            </motion.div>
            <motion.div
                className="stats flex flex-wrap justify-center gap-6 mb-12 bg-custom-base-100"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                ref={statsRef}
            >
                <div className="stat text-center max-w-xs bg-custom-base-100 p-4 rounded-lg">
                    <div className="stat-figure mb-2 text-red-500">
                        <FaUsers className="inline-block h-8 w-8 text-red-500" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-title text-white text-base md:text-lg">Total Subscribers</div>
                        <div className="stat-value text-red-500 text-2xl md:text-3xl mt-1">{formatNumber(stats.totalSubscribers)} </div>
                    </div>
                </div>

                <div className="stat text-center max-w-xs bg-custom-base-100 p-4 rounded-lg">
                    <div className="stat-figure mb-2 text-red-500">
                        <FaEye className="inline-block h-8 w-8 text-red-500" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-title text-white text-base md:text-lg">Total Views</div>
                        <div className="stat-value text-red-500 text-2xl md:text-3xl mt-1">{formatNumber(stats.totalViews)} </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                ref={gridRef}
            >
                <div className="text-center text-white">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                        Gamer <FaGamepad className="inline-block text-red-500" />
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300">
                    As a Free Fire expert and Garena partner, I deliver strategic gameplay insights and thrilling action, all wrapped in entertaining content that keeps you engaged!
                    </p>
                </div>
                <div className="flex justify-center mb-8">
                    <Image
                        src={profileImageSrc}
                        alt="Profile Image"
                        width={300}
                        height={300}
                        className="rounded-full border-4 border-gray-700"
                    />
                </div>
                <div className="text-center text-white">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                        Vlogger <FaVideo className="inline-block text-red-500" />
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300">
                        Join me for engaging vlogs that showcase my daily life and adventures, along with exclusive content from my gaming experiences.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
