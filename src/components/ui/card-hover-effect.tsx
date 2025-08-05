import { useState } from 'react';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';  // Import Image from next/image

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    logo: string; // Added logo field
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10", className)}>
        {items.map((item, idx) => (
          <div
            key={item.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-custom-base-100 dark:bg-slate-800/[0.6] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.1] group-hover:border-slate-900 relative z-20">
              <div className="flex flex-col justify-center items-center mb-4">
                {/* Displaying the logo with a grey border */}
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-full border border-neutral-800" // Added grey border
                  width={96}  // Set width
                  height={96} // Set height
                />
                {/* Displaying the channel name */}
                <h3 className="text-xl font-semibold text-white dark:text-gray-300 mt-4">
                  {item.title}
                </h3>
                {/* Displaying the description */}
                <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 my-4 text-center">
                  {item.description}
                </p>
                {/* Subscribe Button */}
                <a
                  href={item.link}
                   target="_blank"
                  className="bg-red-500 text-white py-2 px-4 rounded-full text-center hover:bg-red-600 transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal or additional UI components can be added here if needed */}
    </div>
  );
};
