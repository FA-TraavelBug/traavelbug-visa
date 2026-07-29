// components/HowItWorks.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { FileText, Users2, CheckCircle, Plane, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Enquire",
    description: "Fill out our enquiry form with your travel details. We'll get back to you within 24 hours.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users2,
    title: "Consult",
    description: "Our team reviews your requirements and guides you through the visa application process.",
    color: "from-primary to-primary/80",
  },
  {
    icon: CheckCircle,
    title: "Apply",
    description: "Get assistance with your visa application. We help you prepare and submit all documents.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Receive your visa and embark on your journey. We're here to support you throughout.",
    color: "from-accent to-yellow-600",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary tracking-wide">HOW IT WORKS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Simple Steps to Get Your
            <br />
            <span className="text-primary">Visa Assistance</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            We make the process easy and stress-free. Here's how it works.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/3 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Number */}
              <div className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/25">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="relative mb-4">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-text text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow indicator (mobile) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-4 text-muted-text/30">
                  <ArrowRight className="w-5 h-5 mx-auto rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Below Steps */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-text mb-4">
            Ready to start your journey?
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
          >
            <span>Get started now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}