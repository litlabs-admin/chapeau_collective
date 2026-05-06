import { Header } from "./home/header";
import { HeroSection } from "./home/hero-section";
import { MetricsSection } from "./home/metrics-section";
import { ServicesSection } from "./home/services-section";
import { ResultsSection } from "./home/results-section";
import { ProcessSection } from "./home/process-section";
import { TeamSection } from "./home/team-section";
import { BlogSection } from "./home/blog-section";
import { FaqSection } from "./home/faq-section";
import { QuoteSection } from "./home/quote-section";
import { Footer } from "./home/footer";


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
