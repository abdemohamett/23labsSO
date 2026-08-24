import Hero15 from "@/components/ui/hero-15";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-black">
      <Hero15 
        backgroundImage="/images/bg.png"
        brandName="23labs"
        headingLine1="We build the apps"
        headingLine2="Somalis use every day."
        description="23labs is the parent company behind a growing family of digital products. We build, own, and operate the technology that connects the global Somali community."
        primaryCtaLabel="Explore Our Portfolio"
        primaryCtaHref="#portfolio"
        secondaryCtaLabel="Our Apps"
        secondaryCtaHref="#portfolio"
        navLinks={[
          { label: 'Portfolio', href: '#portfolio' },
        ]}
        signupLabel=""
        trustedBrands={[]}
      />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
