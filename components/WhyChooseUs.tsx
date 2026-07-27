// src/components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Globe, 
  Clock3, 
  Plane,
  Sparkles
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Trusted Visa Assistance",
    description: "Get professional guidance throughout your visa application process with dedicated support."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Document Guidance",
    description: "Know exactly which documents are required before submitting your application."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Our team is available to answer your questions and guide you at every stage."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multiple Destinations",
    description: "Visa assistance for a wide range of international destinations."
  },
  {
    icon: <Clock3 className="w-6 h-6" />,
    title: "Quick Response",
    description: "Receive timely assistance so you can plan your journey with confidence."
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Complete Travel Assistance",
    description: "Beyond visa support, we can also help with flights, hotels and customised holiday packages."
  }
];

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative p-8 bg-white rounded-2xl",
        "border border-border/50",
        "shadow-sm hover:shadow-2xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2",
        "cursor-default"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container */}
      <div className="relative mb-4">
        <div className={cn(
          "inline-flex items-center justify-center w-14 h-14 rounded-xl",
          "bg-primary/10 text-primary",
          "group-hover:bg-primary group-hover:text-white",
          "transition-all duration-300 ease-out",
          "shadow-sm group-hover:shadow-lg group-hover:shadow-primary/25"
        )}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-heading font-semibold text-dark-text mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-text leading-relaxed group-hover:text-dark-text/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export function WhyChooseUs() {
  return (
    <Section 
      background="light" 
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Decorative Shapes */}
        <svg className="absolute top-1/4 right-10 w-24 h-24 text-primary/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0L120 70L190 70L135 110L155 180L100 140L45 180L65 110L10 70L80 70L100 0Z" />
        </svg>
        <svg className="absolute bottom-1/3 left-10 w-16 h-16 text-accent/5" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <MotionWrapper animation="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                WHY CHOOSE TRAAVEL BUG
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Thousands of Travellers
              <br />
              <span className="text-primary">Choose Traavel Bug</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              We make the visa application process simpler by providing guidance, 
              document support, and dedicated assistance from start to finish.
            </p>
          </MotionWrapper>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + (index * 0.05)}
            />
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <MotionWrapper animation="fadeUp" delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-dark-text">100% Free Consultation</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-dark-text">10,000+ Happy Travellers</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-dark-text">50+ Countries</span>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}