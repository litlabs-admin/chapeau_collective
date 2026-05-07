import { Header } from "./layout/header";
import { HeroSection } from "./sections/hero-section";
import { MetricsSection } from "./sections/metrics-section";
import { ServicesSection } from "./sections/services-section";
import { ResultsSection } from "./sections/results-section";
import { ProcessSection } from "./sections/process-section";
import { TeamSection } from "./sections/team-section";
import { BlogSection } from "./sections/blog-section";
import { FaqSection } from "./sections/faq-section";
import { QuoteSection } from "./layout/quote-section";
import { Footer } from "./layout/footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <ResultsSection />
        <ProcessSection />
        <TeamSection />
        <BlogSection />
        <FaqSection />
        <QuoteSection />
        <Footer />
      </main>
    </>
  );
}
