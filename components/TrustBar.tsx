// components/TrustBar.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Users, Globe, Clock, ShieldCheck, Award, Star } from "lucide-react";

const trustStats = [
  { 
    icon: Users, 
    label: "Happy Travellers", 
    value: "10,000+",
    description: "Satisfied customers worldwide"
  },
  { 
    icon: Globe, 
    label: "Countries Covered", 
    value: "50+",
    description: "Destinations across the globe"
  },
  { 
    icon: Clock, 
    label: "Avg. Response Time", 
    value: "24 Hours",
    description: "Quick and reliable support"
  },
  { 
    icon: ShieldCheck, 
    label: "Success Rate", 
    value: "95%",
    description: "Successful visa applications"
  },
  { 
    icon: Award, 
    label: "Years Experience", 
    value: "10+",
    description: "Trusted industry experts"
  },
];

export function TrustBar() {
  return (
    <Section background="white" padding="small" className="border-b border-border/30">
      <Container>
        {/* Section Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-primary font-medium tracking-wide uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary/30" />
            Trusted by travellers worldwide
            <span className="w-8 h-px bg-primary/30" />
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {trustStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 mb-3">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-dark-text group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-dark-text mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-text">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Progress Bar */}
        <motion.div
          className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Bottom Rating Badge */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-text">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
            </div>
            <span>4.9/5 based on 500+ reviews</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}