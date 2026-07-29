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
  Phone,
  Mail,
  Globe,
  Sparkles,
  CheckCircle,
  Clock,
  Star,
  TrendingUp
} from "lucide-react";

const stats = [
  { icon: Calendar, value: "2011", label: "Founded", description: "Established since 2011" },
  { icon: Award, value: "15+", label: "Years in Business", description: "Industry expertise" },
  { icon: Users, value: "20+", label: "Years Experience", description: "Management team" },
  { icon: Star, value: "10,000+", label: "Happy Travellers", description: "Trusted customers" },
];

const features = [
  "Complete Travel & Visa Solutions",
  "Personalised Travel Planning",
  "Competitive Pricing",
  "Dedicated Customer Support",
  "Trusted Network of Hotels & Airlines",
  "End-to-End Travel Assistance",
  "Customised Itineraries",
  "Reliable & Transparent Service",
];

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4"
            >
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">ABOUT TRAAVEL BUG</span>
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
              proudly serving travellers since 2011. Backed by a team of experienced 
              travel professionals with over 20 years of industry expertise, we specialise 
              in delivering personalised travel experiences and reliable visa solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-text leading-relaxed mb-6"
            >
              From visa assistance and passport support to international holidays, 
              flight bookings, hotels, travel insurance, foreign exchange, and 
              customised tour packages, we offer complete travel management under one roof.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3 mb-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Tagline */}
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

          {/* Right Column - Stats & Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-light-bg rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-primary">{stat.value}</div>
                      <div className="text-sm font-semibold text-dark-text">{stat.label}</div>
                      <div className="text-xs text-muted-text">{stat.description}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="font-heading font-semibold text-dark-text mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Head Office
                  </h4>
                  <p className="text-sm text-muted-text leading-relaxed">
                    D-25, 1st Floor, Office No. 10,<br />
                    Lajpat Nagar Part-II,<br />
                    New Delhi – 110024
                  </p>
                  <p className="text-xs text-muted-text mt-2">
                    🚇 Nearest Metro: Lajpat Nagar Metro Station
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-text">📞 Phone</p>
                    <a href="tel:01141033588" className="text-sm font-medium text-primary hover:underline">
                      011-41033588
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-text">📧 Email</p>
                    <a href="mailto:sm@traavelbug.com" className="text-sm font-medium text-primary hover:underline">
                      sm@traavelbug.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-accent text-dark-text px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <TrendingUp className="w-4 h-4" />
                Trusted Since 2011
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}