// src/components/PopularDestinations.tsx
"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Plane, 
  Globe, 
  ChevronRight,
  Sparkles,
  MessageCircle,
  Phone
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

interface Destination {
  flag: string;
  name: string;
  description: string;
  countryCode: string;
}

const destinations: Destination[] = [
  {
    flag: "🇦🇪",
    name: "Dubai (UAE)",
    description: "Perfect for holidays, family visits and business travel.",
    countryCode: "UAE"
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    description: "Fast-growing destination for leisure and business travellers.",
    countryCode: "SG"
  },
  {
    flag: "🇹🇭",
    name: "Thailand",
    description: "A favourite destination for beach holidays and cultural experiences.",
    countryCode: "TH"
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    description: "Visitor visa assistance for tourism and family visits.",
    countryCode: "UK"
  },
  {
    flag: "🇪🇺",
    name: "Schengen Countries",
    description: "Travel across multiple European countries with one Schengen Visa.",
    countryCode: "EU"
  },
  {
    flag: "🇯🇵",
    name: "Japan",
    description: "Experience Japan with professional visa guidance.",
    countryCode: "JP"
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    description: "Visa assistance for tourism and family visits.",
    countryCode: "AU"
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    description: "Travel with confidence through expert visa support.",
    countryCode: "CA"
  }
];

const DestinationCard = ({ 
  destination, 
  index 
}: { 
  destination: Destination; 
  index: number;
}) => {
  return (
    <motion.div
      className={cn(
        "group relative p-6 bg-white rounded-2xl",
        "border border-border/50",
        "shadow-sm hover:shadow-2xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2",
        "cursor-default",
        "flex flex-col"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: 0.05 * index,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative flex flex-col flex-1">
        {/* Flag and Name */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
            {destination.flag}
          </span>
          <h3 className="text-lg font-heading font-semibold text-dark-text group-hover:text-primary transition-colors duration-300">
            {destination.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-text text-sm leading-relaxed flex-1 mb-4 group-hover:text-dark-text/80 transition-colors duration-300">
          {destination.description}
        </p>

        {/* CTA Button */}
        <motion.button
          className={cn(
            "inline-flex items-center justify-between w-full px-4 py-2.5",
            "bg-light-bg text-dark-text",
            "rounded-lg border border-border/50",
            "transition-all duration-300",
            "group-hover:bg-primary group-hover:text-white",
            "group-hover:border-primary/50",
            "group-hover:shadow-lg group-hover:shadow-primary/25",
            "text-sm font-medium"
          )}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span>Get Visa Assistance</span>
          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-3/4" />
    </motion.div>
  );
};

export function PopularDestinations() {
  return (
    <Section 
      background="light" 
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Decorative Shapes */}
        <svg className="absolute top-1/3 right-20 w-20 h-20 text-primary/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0L120 70L190 70L135 110L155 180L100 140L45 180L65 110L10 70L80 70L100 0Z" />
        </svg>
        <svg className="absolute bottom-1/4 left-20 w-12 h-12 text-accent/5" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" />
        </svg>
        
        {/* Flying Plane Decoration */}
        <motion.div
          className="absolute top-20 right-10 text-primary/10 hidden lg:block"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Plane className="w-16 h-16" />
        </motion.div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <MotionWrapper animation="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                POPULAR DESTINATIONS
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Visa Assistance for
              <br />
              <span className="text-primary">Popular Destinations</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              Wherever you're planning to travel, our team is here to guide you 
              through the visa application process.
            </p>
          </MotionWrapper>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.countryCode}
              destination={destination}
              index={index}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <MotionWrapper animation="fadeUp" delay={0.4}>
          <div className="relative mt-16 lg:mt-20 overflow-hidden rounded-2xl">
            {/* Banner Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            
            {/* Banner Decorations */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative p-8 md:p-10 lg:p-12 text-center">
              <MotionWrapper animation="fadeIn" delay={0.5}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white/90">
                    CAN'T FIND YOUR DESTINATION?
                  </span>
                </div>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.55}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                  Need Visa Assistance for Another Country?
                </h3>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.6}>
                <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  We provide visa assistance for many international destinations. 
                  Get in touch and we'll help you with your travel plans.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.65}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 hover:shadow-black/30"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Our Team
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </MotionWrapper>

              {/* Bottom Trust Badge */}
              <MotionWrapper animation="fadeIn" delay={0.7}>
                <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Available for 50+ Countries</span>
                  </div>
                  <span className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <span>✨</span>
                    <span>100% Free Consultation</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}