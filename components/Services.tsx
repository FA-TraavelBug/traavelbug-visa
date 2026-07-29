// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  FileCheck, 
  Plane, 
  Hotel, 
  Shield,
  Building2,
  GraduationCap,
  Users,
  Sailboat,
  PlaneTakeoff,
  Car,
  Landmark,
  Phone,
  Globe,
  Sparkles,
  ChevronRight,
  Passport
} from "lucide-react";

const serviceCategories = [
  {
    icon: FileCheck,
    title: "Visa & Passport",
    services: ["Visa Assistance", "Passport Assistance"]
  },
  {
    icon: Plane,
    title: "Holiday Packages",
    services: ["International Holidays", "Domestic Tour Packages", "Customised Holidays", "Honeymoon Packages", "Group Tours"]
  },
  {
    icon: Building2,
    title: "Corporate & Business",
    services: ["Corporate Travel Management", "MICE", "Student Travel"]
  },
  {
    icon: Hotel,
    title: "Bookings",
    services: ["Flight Bookings", "Hotel Reservations", "Cruise Holidays", "Luxury Train Journeys"]
  },
  {
    icon: Shield,
    title: "Travel Support",
    services: ["Travel Insurance", "Foreign Exchange", "Airport Assistance", "Car Rentals", "Global SIM Cards"]
  },
  {
    icon: Globe,
    title: "Complete Service",
    services: ["End-to-End Travel Assistance"]
  }
];

export function Services() {
  return (
    <Section background="light" id="services" className="relative overflow-hidden">
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
            <span className="text-sm font-medium text-primary tracking-wide">COMPLETE TRAVEL SOLUTIONS</span>
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
            <span className="text-primary">Under One Roof</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            From visa assistance to complete travel planning, we offer all services 
            to make your journey smooth and memorable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/25 mb-4">
                  <category.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-heading font-semibold text-dark-text mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-text group-hover:text-dark-text/80 transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-text mb-4">
            Need help planning your next trip?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35"
          >
            Contact Our Experts
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}