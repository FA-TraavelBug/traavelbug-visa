// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle,
  Phone,
  Sparkles,
  Mail,
  Clock
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Do you guarantee visa approval?",
    answer: "No. Visa approval is solely at the discretion of the respective embassy, consulate or immigration authority. Traavel Bug provides visa assistance and application guidance only."
  },
  {
    id: "2",
    question: "Which countries do you provide visa assistance for?",
    answer: "We assist travellers with visa applications for multiple international destinations. Contact our team to discuss your travel plans."
  },
  {
    id: "3",
    question: "How long does visa processing take?",
    answer: "Processing times vary depending on the destination, visa type and the respective embassy or immigration authority."
  },
  {
    id: "4",
    question: "Can you help with document preparation?",
    answer: "Yes. We guide you through the required documents and help you prepare your application before submission."
  },
  {
    id: "5",
    question: "Do you also help with flights and hotels?",
    answer: "Yes. Traavel Bug can also assist with flights, hotels and customised holiday packages."
  },
  {
    id: "6",
    question: "How do I get started?",
    answer: "Simply fill out the enquiry form or contact our team via WhatsApp or phone. We'll guide you through the next steps."
  }
];

const AccordionItem = ({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className={cn(
        "group relative rounded-xl",
        "bg-white border border-border/50",
        "shadow-sm hover:shadow-md",
        "transition-all duration-300",
        isOpen && "border-primary/20 shadow-md"
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background on Hover/Open */}
      <div className={cn(
        "absolute inset-0 rounded-xl",
        "bg-gradient-to-br from-primary/5 to-accent/5",
        "opacity-0 transition-opacity duration-500",
        (isOpen || "group-hover:opacity-100") && "opacity-100"
      )} />

      <button
        onClick={onToggle}
        className={cn(
          "relative w-full px-6 py-5",
          "flex items-center justify-between gap-4",
          "text-left",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl",
          "transition-all duration-300"
        )}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className={cn(
          "font-heading font-medium text-dark-text",
          "pr-8",
          "transition-colors duration-300",
          isOpen && "text-primary"
        )}>
          {item.question}
        </span>
        
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full",
          "flex items-center justify-center",
          "bg-primary/10 text-primary",
          "transition-all duration-300",
          isOpen && "bg-primary text-white"
        )}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            className="relative overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1">
              <div className="w-12 h-0.5 bg-primary/30 mb-3" />
              <p className="text-muted-text leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  // Split items into two columns
  const midPoint = Math.ceil(faqItems.length / 2);
  const leftColumnItems = faqItems.slice(0, midPoint);
  const rightColumnItems = faqItems.slice(midPoint);

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
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Everything You Need
              <br />
              <span className="text-primary">to Know</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              Here are answers to some of the most common questions travellers 
              ask before applying for a visa.
            </p>
          </MotionWrapper>
        </div>

        {/* FAQ Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <MotionWrapper animation="fadeUp" delay={0.4}>
          <div className="relative mt-12 lg:mt-16 overflow-hidden rounded-2xl">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            
            {/* Card Decorations */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative p-8 md:p-10 lg:p-12 text-center">
              <MotionWrapper animation="fadeIn" delay={0.45}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white/90">
                    STILL HAVE QUESTIONS?
                  </span>
                </div>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.5}>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
                  We're Here to Help You
                </h3>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.55}>
                <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Our travel experts are happy to guide you through the visa process 
                  and answer your questions.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="fadeUp" delay={0.6}>
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

              {/* Support Options */}
              <MotionWrapper animation="fadeIn" delay={0.65}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    <span>support@traavelbug.com</span>
                  </div>
                  <span className="w-px h-4 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Available 24/7</span>
                  </div>
                  <span className="w-px h-4 bg-white/20 hidden sm:block" />
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </MotionWrapper>

        {/* Bottom Trust Indicator */}
        <MotionWrapper animation="fadeUp" delay={0.7}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-text">
              Can't find your question?{" "}
              <span className="text-primary font-medium hover:underline cursor-pointer">
                Contact our support team
              </span>
              {" "}and we'll get back to you within 24 hours.
            </p>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}