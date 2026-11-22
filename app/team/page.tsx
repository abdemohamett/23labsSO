'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Globe, Mail } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { Footer } from '@/components/ui/footer';

const softReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', mass: 1.2, stiffness: 40, damping: 15 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Social icon helpers for clean zero-dependency SVGs
function LinkedInIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37z" />
    </svg>
  );
}

function GithubIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TikTokIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.88-4.47V8.71a8.21 8.21 0 0 0 4.89 1.6V6.86a4.88 4.88 0 0 1-1-.17z" />
    </svg>
  );
}

interface TeamMember {
  name: string;
  role: string;
  category: string;
  image: string;
  imagePosition?: string;
  bio: string;
  statusBadge?: string;
  links?: {
    website?: string;
    linkedin?: string;
    github?: string;
    tiktok?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
    {
    name: 'Abdirahman',
    role: 'Developer',
    category: 'Core Team',
    image: '/images/abdirahma.png',
    imagePosition: 'object-center',
    bio: 'Just a developer who loves building things from scratch. Keeping it simple, shipping clean software, and having fun along the way.',
    statusBadge: 'Building @ 23labs',
  },
  {
    name: 'Diini Mohamed Kahie',
    role: 'Software Engineer',
    category: 'Engineering',
    image: '/images/diini.png',
    imagePosition: 'object-top',
    bio: 'Building resilient systems, scalable web apps, and clean architectures. Focused on engineering high-performance software.',
    links: {
      website: 'https://www.diinikahiye.online/',
      linkedin: 'https://www.linkedin.com/in/dinikahie/',
      github: 'https://github.com/Diini03',
      email: 'mailto:diiniyare74@gmail.com',
    },
  },
  {
    name: 'Yoonis Gallad Yuusuf',
    role: 'Design & Creative Lead',
    category: 'Creative',
    image: '/images/yoonis.png',
    imagePosition: 'object-top',
    bio: 'Crafting brand aesthetics, motion graphics, and modern UI systems that turn products into captivating digital experiences.',
    links: {
      website: 'https://yoonis-gallad.vercel.app/',
      linkedin: 'https://www.linkedin.com/in/yoonis-gallad-yuusuf-894890291/',
      tiktok: 'https://tiktok.com/@fly__graphics',
      email: 'mailto:YOONKAGALLAD2021@GMAIL.COM',
    },
  },

];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-white/20 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
          <Link
            href="/"
            className="inline-flex items-center transition-[opacity,transform] duration-200 ease-out hover:opacity-80 active:scale-[0.96]"
          >
            <Image
              src="/images/logo.png"
              alt="23labs Logo"
              width={160}
              height={45}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="flex items-center gap-7">
            <Link
              href="/#portfolio"
              className="text-sm font-normal text-white/70 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-white px-3 py-1 rounded-full bg-white/10 border border-white/10"
            >
              Team
            </Link>
            <a
              href="mailto:contact@23labs.site"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              Get in Touch
              <ArrowUpRight className="size-3.5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-12 py-16 sm:py-24">
        {/* Editorial Hero */}
        <motion.div
          className="max-w-3xl mb-16 sm:mb-24"
          initial="hidden"
          animate="visible"
          variants={softReveal}
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-white/40 font-semibold mb-4">
            People & Culture
          </span>
          <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-light tracking-tight text-white/95 leading-[1.05]">
            Small team.{' '}
            <span className="font-serif italic font-normal text-white">
              High conviction.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-2xl">
            We are the builders behind 23labs. No bloated corporate bureaucracy — just makers designing, engineering, and shipping digital products that make an impact.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={softReveal}
              className="group relative flex flex-col bg-white/[0.02] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black"
            >
              {/* Photo Box */}
              <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${member.imagePosition || 'object-top'} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                {/* Subtle base gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                    {member.category}
                  </span>
                </div>

                {/* Status Badge (if present) */}
                {member.statusBadge && (
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white/90">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                      {member.statusBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Bio & Details */}
              <div className="flex flex-col flex-1 justify-between px-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white/95">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-white/40 font-mono mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Action Links */}
                {member.links && (
                  <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/5">
                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s Website`}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <Globe className="size-4" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <LinkedInIcon className="size-4" />
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s GitHub`}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                    )}
                    {member.links.tiktok && (
                      <a
                        href={member.links.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s TikTok`}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <TikTokIcon className="size-4" />
                      </a>
                    )}
                    {member.links.email && (
                      <a
                        href={member.links.email}
                        aria-label={`Email ${member.name}`}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        <Mail className="size-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ethos Strip (Night.co & Genflow inspiration) */}
        <motion.div
          className="mt-24 sm:mt-32 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={softReveal}
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">01 / Focus</span>
            <h4 className="text-lg font-medium text-white">Community First</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              We design specifically for the cultural nuances and digital habits of the Somali diaspora and modern creators.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">02 / Speed</span>
            <h4 className="text-lg font-medium text-white">Rapid Execution</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              No endless committees. We prototype rapidly, test in production, and iterate with real user feedback.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">03 / Craft</span>
            <h4 className="text-lg font-medium text-white">Uncompromising Quality</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              Every interaction, typography choice, and performance metric is refined until it feels effortless.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
