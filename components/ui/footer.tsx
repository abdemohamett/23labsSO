import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 overflow-hidden flex flex-col items-center">
      {/* Main footer content */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 pt-16 pb-0">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-16">

          {/* Left: Logo + tagline + email */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Image
              src="/images/logo.png"
              alt="23labs"
              width={160}
              height={50}
              className="h-10 w-auto object-contain -ml-26"
            />
            <p className="text-sm text-white/35 leading-relaxed">
              Building apps for the Somali community, one product at a time.
            </p>
            <a
              href="mailto:hello@23labs.co"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              hello@23labs.co
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Right: Apps column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/25 uppercase">Our Apps</p>
            <a href="https://riyocut.co" target="_blank" rel="noopener noreferrer" className="text-sm text-white/45 hover:text-white transition-colors duration-200">
              Riyocut
            </a>
            <a href="https://aqeel.abdirahman.xyz" target="_blank" rel="noopener noreferrer" className="text-sm text-white/45 hover:text-white transition-colors duration-200">
              Aqeel
            </a>
          </div>
        </div>

        {/* Copyright line */}
        <div className="border-t border-white/5 py-5 flex justify-center md:justify-start">
          <p className="text-xs text-white/20">© {currentYear} 23labs. All rights reserved.</p>
        </div>
      </div>

      {/* Big brand watermark */}
      <div className="w-full flex justify-center select-none pointer-events-none -mt-4 mb-[-2%]">
        <p className="text-[clamp(6rem,22vw,22rem)] font-bold tracking-tighter text-white/[0.04] leading-none text-center">
          23labs
        </p>
      </div>
    </footer>
  );
}

