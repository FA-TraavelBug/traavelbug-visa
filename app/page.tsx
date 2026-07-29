// app/page.tsx
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularDestinations } from "@/components/PopularDestinations";
import { DocumentsSection } from "@/components/DocumentsSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Services & Complete Travel Solutions | Traavel Bug",
  description: "Traavel Bug provides visa assistance, passport support, international holidays, flight bookings, travel insurance & customised tour packages since 2011.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <PopularDestinations />
      <DocumentsSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}