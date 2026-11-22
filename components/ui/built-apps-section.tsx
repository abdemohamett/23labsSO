'use client';

import Image from 'next/image';
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

const clientApps = [
  {
    id: 'afed',
    name: 'AFED',
    description: 'Humanitarian action and community development platform empowering communities across Somalia.',
    mockup: '/images/afed.png',
    logo: '/images/arahma-logo.png',
    url: 'https://www.afed.so/',
    logoClassName: 'w-full h-full object-cover',
    logoBg: 'bg-white',
  },
  {
    id: 'kulmid',
    name: 'Kulmid',
    description: 'Bilingual community event booking and ticketing platform connecting Somalis globally.',
    mockup: '/images/kulmid.png',
    logo: '/images/kulmid-logo.png',
    url: 'https://www.kulmid.com/',
    logoClassName: 'w-full h-full object-contain p-2.5',
    logoBg: 'bg-zinc-800',
  },
];

export function BuiltAppsSection() {
  return (
    <section id="built-apps" className="w-full bg-[#050505] py-24 px-6 sm:px-12 lg:px-24">
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
            <h3 className="text-zinc-500 font-semibold uppercase tracking-[0.2em] text-xs mb-3">
              Client Work
            </h3>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light tracking-normal text-balance text-white/95">
              The apps we have built
            </h2>
          </div>
        </motion.div>

        {/* Grid matching the exact layout of 'The apps we own' */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {clientApps.map((app, index) => (
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
              <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 shadow-xl bg-white">
                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${app.name}`}
                />
                <Image 
                  src={app.mockup} 
                  alt={`${app.name} mockup`}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto block" 
                />
              </div>

              {/* Details Section: Circular logo at start of title & description */}
              <div className="flex items-center gap-4 px-2">
                <div className={`w-14 h-14 rounded-full ${app.logoBg} flex items-center justify-center overflow-hidden shrink-0 shadow-lg`}>
                  <Image 
                    src={app.logo} 
                    alt={`${app.name} logo`} 
                    width={56} 
                    height={56} 
                    className={app.logoClassName} 
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {app.name}
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium leading-tight mt-1 line-clamp-2 pr-4">
                    {app.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
