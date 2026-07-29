// components/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
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
import Button from "./ui/Button";

const faqItems = [
  {
    id: "1",
    question: "Do you guarantee visa approval?",
    answer: "No. Visa approval is solely at the discretion of the respective embassy, consulate or immigration authority. Traavel Bug provides visa assistance and application guidance only. We help you prepare the best possible application."
  },
  {
    id: "2",
    question: "Which countries do you provide visa assistance for?",
    answer: "We assist travellers with visa applications for multiple international destinations including UAE, Singapore, Thailand, UK, Schengen countries, Japan, Australia, Canada, and many more. Contact our team to discuss your travel plans."
  },
  {
    id: "3",
    question: "How long does visa processing take?",
    answer: "Processing times vary depending on the destination, visa type and the respective embassy or immigration authority. Typically, it can take anywhere from 3-15 business days. We'll provide you with an estimated timeline based on your specific case."
  },
  {
    id: "4",
    question: "Can you help with document preparation?",
    answer: "Yes! We guide you through the required documents and help you prepare your application before submission. Our team reviews your documents to ensure everything is in order, minimizing the chances of rejection."
  },
  {
    id: "5",
    question: "Do you also help with flights and hotels?",
    answer: "Yes! Traavel Bug can also assist with flights, hotels and customised holiday packages. We provide end-to-end travel assistance to make your journey completely stress-free."
  },
  {
    id: "6",
    question: "How do I get started?",
    answer: "Simply fill out the enquiry form on this page, or contact our team via WhatsApp or phone. We'll guide you through the next steps and help you with your visa application process."
  },
];

const AccordionItem = ({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: typeof faqItems[0]; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className={`group relative rounded-xl bg-white border ${
        isOpen ? "border-primary/20 shadow-md" : "border-border/50 shadow-sm hover:shadow-md"
      } transition-all duration-300`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background on Hover/Open */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 ${
        (isOpen || "group-hover:opacity-100") && "opacity-100"
      } transition-opacity duration-500`} />

      <button
        onClick={onToggle}
        className="relative w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className={`font-heading font-medium text-dark-text pr-8 transition-colors duration-300 ${
          isOpen && "text-primary"
        }`}>
          {item.question}
        </span>
        
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1">
              <div className="w-12 h-0.5 bg-primary/30 mb-3" />
              <p className="text-muted-text leading-relaxed">{item.answer}</p>
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
    <Section background="white" id="faqs" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
          >
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Everything You Need
            <br />
            <span className="text-primary">to Know</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            Here are answers to some of the most common questions travellers 
            ask before applying for a visa.
          </motion.p>
        </div>

        {/* FAQ Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-4">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative mt-12 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative p-8 md:p-10 lg:p-12 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white/90">STILL HAVE QUESTIONS?</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3">
              We're Here to Help You
            </h3>
            
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Our travel experts are happy to guide you through the visa process 
              and answer your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-all shadow-lg shadow-black/20 hover:shadow-black/30"
              >
                <Phone className="w-5 h-5" />
                Get Visa Assistance
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                <span>support@mail.traavelbug.com</span>
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
          </div>
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-muted-text">
            Can't find your question?{" "}
            <a href="#services" className="text-primary font-medium hover:underline">
              Contact our support team
            </a>
            {" "}and we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}