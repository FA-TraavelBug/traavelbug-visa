// components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Globe, 
  Clock, 
  Plane,
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Visa Assistance",
    description: "Get professional guidance throughout your visa application process with dedicated support.",
  },
  {
    icon: FileCheck,
    title: "Document Guidance",
    description: "Know exactly which documents are required before submitting your application.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team is available to answer your questions and guide you at every stage.",
  },
  {
    icon: Globe,
    title: "Multiple Destinations",
    description: "Visa assistance for a wide range of international destinations.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Receive timely assistance so you can plan your journey with confidence.",
  },
  {
    icon: Plane,
    title: "Complete Travel Assistance",
    description: "Beyond visa support, we can also help with flights, hotels and customised packages.",
  },
];

export function WhyChooseUs() {
  return (
    <Section background="light" id="why-choose-us" className="relative overflow-hidden">
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">WHY CHOOSE TRAAVEL BUG</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Why Thousands of Travellers
            <br />
            <span className="text-primary">Choose Traavel Bug</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            We make the visa application process simpler by providing guidance, 
            document support, and dedicated assistance from start to finish.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/25">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-heading font-semibold text-dark-text mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-text leading-relaxed group-hover:text-dark-text/80 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">100% Free Consultation</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">10,000+ Happy Travellers</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">50+ Countries</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}