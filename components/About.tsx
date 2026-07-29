// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  Building2, 
  Calendar, 
  Award, 
  Users, 
  MapPin,
  Sparkles,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const stats = [
  { icon: Calendar, value: "2011", label: "Founded" },
  { icon: Award, value: "15+", label: "Years in Business" },
  { icon: Users, value: "20+", label: "Years Experience" },
  { icon: TrendingUp, value: "10,000+", label: "Happy Travellers" },
];

const features = [
  "Complete Travel & Visa Solutions",
  "Personalised Travel Planning",
  "Competitive Pricing",
  "Dedicated Customer Support",
  "Trusted Network of Hotels & Airlines",
  "End-to-End Travel Assistance",
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden py-16 md:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">ABOUT US</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              Leading Travel & Visa Consultancy
              <br />
              <span className="text-primary">Since 2011</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-text leading-relaxed mb-4"
            >
              Traavel Bug is a leading travel and visa consultancy based in New Delhi, 
              proudly serving travellers since 2011 with over 20 years of industry expertise.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-text leading-relaxed mb-6"
            >
              From visa assistance to international holidays, flight bookings, hotels, 
              and customised tour packages, we offer complete travel management under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-2 mb-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 text-primary font-heading text-lg font-semibold"
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Wander. Explore. Discover.</span>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-text">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}