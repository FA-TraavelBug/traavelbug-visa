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
import { StickyCTA } from "@/components/StickyCTA";
import { ScrollToTop } from "@/components/ScrollToTop";
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
    description: "Expert visa assistance for tourists, business travellers and families.",
    url: "https://visa.traavelbug.com",
    siteName: "Traavel Bug",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Traavel Bug - Premium Visa Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Services for International Travel | Traavel Bug",
    description: "Expert visa assistance for tourists, business travellers and families.",
    images: ["/twitter-image.jpg"],
  },
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
      
      {/* Sticky CTA - Shows after scrolling */}
      <StickyCTA />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}