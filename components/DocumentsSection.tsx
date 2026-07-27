// src/components/DocumentsSection.tsx
"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Info, 
  FileText, 
  MessageCircle,
  Phone,
  Sparkles,
  Shield,
  Clock,
  Users
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const checklistItems: ChecklistItem[] = [
  { id: "passport", label: "Passport (valid for at least 6 months)" },
  { id: "photos", label: "Passport-size Photographs" },
  { id: "application", label: "Completed Visa Application Form" },
  { id: "bank", label: "Bank Statements (last 3-6 months)" },
  { id: "flight", label: "Flight Itinerary (if applicable)" },
  { id: "hotel", label: "Hotel Booking (if applicable)" },
  { id: "insurance", label: "Travel Insurance (if required)" },
  { id: "employment", label: "Employment or Business Proof" },
  { id: "additional", label: "Additional Supporting Documents" },
];

const ChecklistItem = ({ item, index }: { item: ChecklistItem; index: number }) => {
  return (
    <motion.div
      className={cn(
        "group flex items-start gap-3 py-3",
        "border-b border-border/50 last:border-0",
        "transition-all duration-300",
        "hover:pl-1"
      )}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay: 0.05 * index,
        ease: "easeOut"
      }}
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className={cn(
          "w-5 h-5 rounded-full",
          "bg-primary/10 text-primary",
          "flex items-center justify-center",
          "transition-all duration-300",
          "group-hover:bg-primary group-hover:text-white",
          "group-hover:scale-110"
        )}>
          <CheckCircle className="w-3.5 h-3.5" />
        </div>
      </div>
      <span className="text-dark-text text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
        {item.label}
      </span>
    </motion.div>
  );
};

export function DocumentsSection() {
  return (
    <Section 
      background="white" 
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
        <svg className="absolute top-1/3 left-10 w-16 h-16 text-primary/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0L120 70L190 70L135 110L155 180L100 140L45 180L65 110L10 70L80 70L100 0Z" />
        </svg>
        <svg className="absolute bottom-1/4 right-10 w-20 h-20 text-accent/5" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <MotionWrapper animation="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                DOCUMENT CHECKLIST
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Common Documents Required for
              <br />
              <span className="text-primary">Visa Applications</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              The required documents may vary depending on the destination and visa category. 
              Below are some of the most commonly requested documents.
            </p>
          </MotionWrapper>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Illustration */}
          <MotionWrapper animation="fadeIn" delay={0.25}>
            <div className="relative">
              <div className={cn(
                "relative rounded-2xl overflow-hidden",
                "bg-gradient-to-br from-primary/5 via-white to-accent/5",
                "border border-border/50",
                "p-8 lg:p-12"
              )}>
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                </div>

                {/* Illustration Content */}
                <div className="relative">
                  {/* Main Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles className="w-4 h-4 text-dark-text" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-2xl font-heading font-semibold text-dark-text mb-3">
                    Document Preparation Guide
                  </h3>
                  <p className="text-center text-muted-text mb-6">
                    Our team helps you prepare and review all required documents before submission.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="text-2xl font-heading font-bold text-primary">95%</div>
                      <div className="text-xs text-muted-text">Success Rate</div>
                    </div>
                    <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="text-2xl font-heading font-bold text-primary">24h</div>
                      <div className="text-xs text-muted-text">Response Time</div>
                    </div>
                    <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="text-2xl font-heading font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-text">Countries</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-3 border border-border/50"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Shield className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-3 border border-border/50"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Clock className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
              </div>

              {/* Supporting Info */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-text">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Trusted by 10,000+ travellers</span>
                </div>
                <div className="w-px h-3 bg-border" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Updated checklists</span>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column - Checklist */}
          <MotionWrapper animation="scaleIn" delay={0.2}>
            <div className="relative">
              <div className={cn(
                "relative p-6 sm:p-8",
                "bg-white border border-border/50",
                "rounded-2xl shadow-lg",
                "hover:shadow-xl transition-shadow duration-300"
              )}>
                {/* Card Header */}
                <div className="mb-4 pb-4 border-b border-border/50">
                  <h3 className="text-lg font-heading font-semibold text-dark-text flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Document Checklist
                  </h3>
                  <p className="text-sm text-muted-text mt-1">
                    Commonly requested documents for visa applications
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-0.5">
                  {checklistItems.map((item, index) => (
                    <ChecklistItem key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>

              {/* Notice Card */}
              <motion.div
                className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-text">
                      Requirements May Vary
                    </h4>
                    <p className="text-sm text-muted-text leading-relaxed mt-0.5">
                      Document requirements depend on the destination, visa category and traveller profile. 
                      Our team will guide you with the latest checklist based on your travel plans.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>

        {/* CTA Banner */}
        <MotionWrapper animation="fadeUp" delay={0.5}>
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
              <MotionWrapper animation="fadeIn" delay={0.55}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white/90">
                    NEED HELP PREPARING YOUR DOCUMENTS?
                  </span>
                </div>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.6}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                  We're Here to Guide You Through Every Step
                </h3>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.65}>
                <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Speak with our team and receive guidance on the documents required for your destination.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.7}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 hover:shadow-black/30"
                  >
                    <Phone className="w-5 h-5" />
                    Get Visa Assistance
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

              {/* Trust Badges */}
              <MotionWrapper animation="fadeIn" delay={0.75}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Expert Document Review</span>
                  </div>
                  <span className="w-px h-4 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>100% Free Consultation</span>
                  </div>
                  <span className="w-px h-4 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Quick Turnaround</span>
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