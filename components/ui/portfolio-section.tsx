'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';

const softReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1.2, stiffness: 40, damping: 15 },
  },
};

const apps = [
  {
    id: 'riyocut',
    name: 'Riyocut',
    description: 'AI captioning built specifically for Somali creators to go viral faster.',
    mockup: '/prev -images/riyocut-prev.png',
    logo: '/prev -images/riyocut-logo.ico',
    url: 'https://riyocut.co',
  },
  {
    id: 'aqeel',
    name: 'Aqeel',
    description: 'A premium, clean spaced repetition app to memorize the Quran.',
    mockup: '/prev -images/aqeel-prev.png',
    logo: '/prev -images/aqeellogo.png',
    url: 'https://aqeel.abdirahman.xyz',
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-[#050505] py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={softReveal}
        >
          <div>
            <h3 className="text-zinc-500 font-semibold uppercase tracking-[0.2em] text-xs mb-3">Portfolio</h3>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light tracking-normal text-balance text-white/95">
              The apps we own
            </h2>
          </div>
        </motion.div>

        {/* Grid matching the layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {apps.map((app, index) => (
            <motion.div 
              key={app.id} 
              className="group flex flex-col gap-5 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
              variants={softReveal}
            >
              {/* Mockup Card Container */}
              <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 shadow-xl">
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
                <Image 
                  src={app.mockup} 
                  alt={`${app.name} mockup`}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto block" 
                />
              </div>

              {/* Details Section */}
              <div className="flex items-center gap-4 px-2">
                <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
                  <Image 
                    src={app.logo} 
                    alt={`${app.name} logo`} 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white tracking-tight">{app.name}</h3>
                  <p className="text-sm text-zinc-400 font-medium leading-tight mt-1 line-clamp-2 pr-4">{app.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
