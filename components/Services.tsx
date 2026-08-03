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
  Globe,
  Sparkles,
  ChevronRight,
  AlertCircle
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
    services: ["International Holidays", "Domestic Tours", "Customised Holidays", "Honeymoon Packages"]
  },
  {
    icon: Building2,
    title: "Corporate Travel",
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
    services: ["Travel Insurance", "Foreign Exchange", "Airport Assistance", "Car Rentals"]
  },
  {
    icon: Globe,
    title: "Complete Service",
    services: ["End-to-End Travel Assistance", "Customised Itineraries", "Group Tours"]
  }
];

export function Services() {
  return (
    <Section background="light" id="services" className="relative overflow-hidden py-16 md:py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary tracking-wide">OUR SERVICES</span>
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
            From visa assistance to complete travel planning, we make your journey smooth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                <category.icon className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-heading font-semibold text-dark-text mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <ul className="space-y-1.5">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-text">
                    <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ✅ GOOGLE ADS DISCLAIMER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-4 bg-white rounded-xl border border-primary/10"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-dark-text">Important Notice</p>
              <p className="text-xs text-muted-text">
                <strong>Disclaimer:</strong> Traavel Bug provides visa guidance and document review only. 
                We do not guarantee visa approval. All visa decisions are made by the respective embassy 
                or immigration authority.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}