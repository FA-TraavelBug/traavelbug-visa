// src/components/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Globe, 
  PlaneTakeoff,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  Star
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const trustItems: TrustItem[] = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Professional Guidance",
    subtitle: "Expert visa assistance"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Quick Response",
    subtitle: "Timely support"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Multiple Destinations",
    subtitle: "Global coverage"
  },
  {
    icon: <PlaneTakeoff className="w-5 h-5" />,
    title: "Complete Travel Support",
    subtitle: "End-to-end service"
  }
];

export function FinalCTA() {
  return (
    <Section 
      background="white" 
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Glowing Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glow Orbs */}
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Abstract Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border border-accent/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        
        {/* Small Decorative Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-ping delay-700" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-ping delay-500" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <MotionWrapper animation="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white/90 tracking-wide">
                READY TO TRAVEL?
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </MotionWrapper>

          {/* Main Heading */}
          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Start Your Visa
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">Journey Today</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 rounded-full blur-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
          </MotionWrapper>

          {/* Description */}
          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you're travelling for a holiday, business trip or family visit, 
              our team is here to guide you through the visa process with personalised 
              assistance.
            </p>
          </MotionWrapper>

          {/* CTA Buttons */}
          <MotionWrapper animation="fadeUp" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl shadow-black/20 hover:shadow-black/30 text-base px-8 py-4 w-full sm:w-auto group"
              >
                <Phone className="w-5 h-5" />
                Get Visa Assistance
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </MotionWrapper>

          {/* Trust Row */}
          <MotionWrapper animation="fadeUp" delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-accent group-hover:bg-white/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium text-sm">
                      {item.title}
                    </p>
                    <p className="text-white/50 text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </MotionWrapper>

          {/* Additional Trust Signals */}
          <MotionWrapper animation="fadeUp" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span>Trusted by travellers worldwide</span>
              </div>
              <div className="w-px h-4 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Free consultation</span>
              </div>
              <div className="w-px h-4 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 support</span>
              </div>
            </div>
          </MotionWrapper>

          {/* Floating Decorative Element - Bottom Right */}
          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Decorative Element - Top Left */}
          <motion.div
            className="absolute -top-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </Container>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
    </Section>
  );
}