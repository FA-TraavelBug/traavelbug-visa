// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import Button from "./ui/Button";
import { VisaForm } from "./VisaForm";
import { CheckCircle, MessageCircle, AlertCircle } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section className="min-h-screen flex items-center pt-16 relative overflow-hidden" id="home">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
          {/* Left Column - Content */}
          <div>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Trusted by 10,000+ travellers</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Your Visa Journey
              <br />
              <span className="text-primary">Starts Here</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-text leading-relaxed mb-8 max-w-lg"
            >
              Planning an international trip? Get professional assistance with tourist, 
              business and visit visa applications. Our experienced team will guide you 
              through every step of the process.
            </motion.p>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {[
                "Expert Visa Assistance",
                "Document Guidance",
                "Fast Response",
                "Dedicated Support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button 
                onClick={() => scrollToSection("services")}
                size="lg"
                className="shadow-lg shadow-primary/25 hover:shadow-primary/35"
              >
                Get Visa Assistance
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="https://wa.me/917290001545"
                target="_blank"
                icon={<MessageCircle className="w-5 h-5" />}
                iconPosition="left"
              >
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-sm text-muted-text flex items-center gap-2 mt-4"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              Helping travellers with international visa assistance.
            </motion.p>

            {/* ✅ GOOGLE ADS DISCLAIMER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/10"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-text leading-relaxed">
                  <strong>Disclaimer:</strong> Traavel Bug is a private consultancy. 
                  We provide guidance and document review only. 
                  Visa approval is at embassy's discretion.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-2xl border border-white/50">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              
              <div className="relative">
                <h2 className="text-2xl font-heading font-semibold text-dark-text mb-2">
                  Get Started Today
                </h2>
                <p className="text-sm text-muted-text mb-6">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>
                
                <VisaForm />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-3 -right-3 bg-accent text-dark-text px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              Quick Response
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-3 bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
              initial={{ scale: 0, rotate: 10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              Expert Guidance
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}