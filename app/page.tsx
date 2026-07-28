import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularDestinations } from "@/components/PopularDestinations";
import { DocumentsSection } from "@/components/DocumentsSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Services for International Travel | Traavel Bug",
  description: "Expert visa assistance for tourists, business travellers and families.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <PopularDestinations />
      <DocumentsSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}