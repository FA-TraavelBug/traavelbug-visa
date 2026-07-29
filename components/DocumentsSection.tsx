// components/DocumentsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  CheckCircle, 
  FileText, 
  Sparkles, 
  Shield, 
  Clock, 
  Users,
  AlertCircle 
} from "lucide-react";

const documents = [
  { icon: "📋", label: "Passport (valid for at least 6 months)" },
  { icon: "📸", label: "Passport-size Photographs" },
  { icon: "📄", label: "Completed Visa Application Form" },
  { icon: "🏦", label: "Bank Statements (last 3-6 months)" },
  { icon: "✈️", label: "Flight Itinerary (if applicable)" },
  { icon: "🏨", label: "Hotel Booking (if applicable)" },
  { icon: "🛡️", label: "Travel Insurance (if required)" },
  { icon: "💼", label: "Employment or Business Proof" },
  { icon: "📎", label: "Additional Supporting Documents" },
];

const stats = [
  { icon: Shield, label: "Success Rate", value: "95%" },
  { icon: Clock, label: "Response Time", value: "24 Hours" },
  { icon: Users, label: "Happy Travellers", value: "10,000+" },
];

export function DocumentsSection() {
  return (
    <Section id="documents" className="relative overflow-hidden">
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
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">DOCUMENT CHECKLIST</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Common Documents Required for
            <br />
            <span className="text-primary">Visa Applications</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            The required documents may vary depending on the destination and visa category. 
            Below are some of the most commonly requested documents.
          </motion.p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 lg:p-10 bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-2xl border border-border/50">
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              </div>

              <div className="relative">
                {/* Main Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-4 h-4 text-dark-text" />
                    </div>
                  </div>
                </div>

                <h3 className="text-center text-2xl font-heading font-semibold text-dark-text mb-3">
                  Document Preparation Guide
                </h3>
                <p className="text-center text-muted-text mb-6">
                  Our team helps you prepare and review all required documents before submission.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-border/50"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-xl font-heading font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-text">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-3 border border-border/50"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Shield className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-3 border border-border/50"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Clock className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </div>

            {/* Supporting Info */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-text">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Trusted by 10,000+ travellers</span>
              </div>
              <div className="w-px h-3 bg-border" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Updated checklists</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 sm:p-8 bg-white border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 pb-4 border-b border-border/50">
                <h3 className="text-lg font-heading font-semibold text-dark-text flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Document Checklist
                </h3>
                <p className="text-sm text-muted-text mt-1">
                  Commonly requested documents for visa applications
                </p>
              </div>

              <div className="space-y-0.5">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center gap-3 py-3 border-b border-border/50 last:border-0 hover:pl-1 transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <span className="text-xl flex-shrink-0">{doc.icon}</span>
                    <span className="text-sm text-dark-text group-hover:text-primary transition-colors duration-300">
                      {doc.label}
                    </span>
                    <div className="ml-auto flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notice Card */}
            <motion.div
              className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-dark-text">Requirements May Vary</h4>
                <p className="text-xs text-muted-text mt-0.5">
                  Document requirements depend on the destination, visa category and traveller profile. 
                  Our team will guide you with the latest checklist based on your travel plans.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}