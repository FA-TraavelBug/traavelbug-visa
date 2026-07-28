// src/app/page.tsx - Updated to include VisaForm in Hero
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
  description: "Expert visa assistance for tourists, business travellers and families. Get professional guidance on visa applications, document preparation and travel planning.",
  keywords: "visa services, travel visa, international travel, visa assistance, document guidance, visa application, tourist visa, business visa",
  alternates: {
    canonical: "https://visa.traavelbug.com",
  },
  openGraph: {
    title: "Visa Services for International Travel | Traavel Bug",
    description: "Expert visa assistance for tourists, business travellers and families. Get professional guidance on visa applications, document preparation and travel planning.",
    url: "https://visa.traavelbug.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Traavel Bug - Premium Visa Services",
      },
    ],
  },
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
