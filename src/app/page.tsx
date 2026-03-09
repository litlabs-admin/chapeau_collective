import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Philosophy } from "@/components/sections/Philosophy";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden selection:bg-brand-indigo selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Philosophy />
      <Team />
      <Footer />
    </main>
  );
}
