// src/components/Hero.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  MessageCircle, 
  Shield, 
  Clock,
  Plane,
  Briefcase,
  Users,
  Globe
} from "lucide-react";
import Button from "./ui/Button";
import { Container } from "./ui/Container";
import { MotionWrapper } from "./ui/MotionWrapper";
import { cn } from "@/lib/utils";

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
}

const trustBadges: TrustBadge[] = [
  { icon: <CheckCircle className="w-4 h-4 text-primary" />, label: "Expert Visa Assistance" },
  { icon: <CheckCircle className="w-4 h-4 text-primary" />, label: "Document Guidance" },
  { icon: <CheckCircle className="w-4 h-4 text-primary" />, label: "Fast Response" },
  { icon: <CheckCircle className="w-4 h-4 text-primary" />, label: "Dedicated Support" },
];

const destinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Schengen Countries",
  "United Arab Emirates",
  "Singapore",
  "Japan",
  "South Korea",
  "New Zealand",
];

const travelPurposes = [
  "Tourism",
  "Business",
  "Family Visit",
  "Medical",
  "Education",
  "Other",
];

export function Hero() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    destination: "",
    travelDate: "",
    purpose: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-light-bg via-white to-light-bg/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Abstract Shapes */}
        <svg className="absolute top-20 right-20 w-32 h-32 text-primary/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0L120 70L190 70L135 110L155 180L100 140L45 180L65 110L10 70L80 70L100 0Z" />
        </svg>
        <svg className="absolute bottom-32 left-20 w-24 h-24 text-accent/10" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      <Container className="relative z-10 min-h-screen flex items-center py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8 pt-8 lg:pt-0">
            {/* Badge */}
            <MotionWrapper animation="fadeUp" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">
                  Trusted by 10,000+ travellers
                </span>
              </div>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper animation="fadeUp" delay={0.15}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Your Visa Journey
                <br />
                <span className="text-primary">Starts Here</span>
              </h1>
            </MotionWrapper>

            {/* Description */}
            <MotionWrapper animation="fadeUp" delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-text leading-relaxed max-w-lg">
                Planning an international trip? Get professional assistance with tourist, 
                business and visit visa applications. Our experienced team will guide you 
                through every step of the process.
              </p>
            </MotionWrapper>

            {/* Trust Badges */}
            <MotionWrapper animation="fadeUp" delay={0.3}>
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm text-dark-text"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {badge.icon}
                    <span>{badge.label}</span>
                  </motion.div>
                ))}
              </div>
            </MotionWrapper>

            {/* CTA Buttons */}
            <MotionWrapper animation="fadeUp" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/35"
                >
                  Get Visa Assistance
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </MotionWrapper>

            {/* Trust Line */}
            <MotionWrapper animation="fadeUp" delay={0.45}>
              <p className="text-sm text-muted-text flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Helping travellers with international visa assistance.
              </p>
            </MotionWrapper>
          </div>

          {/* Right Column - Form */}
          <MotionWrapper animation="scaleIn" delay={0.2} className="w-full">
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-2xl border border-white/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                
                <div className="relative">
                  {/* Form Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-heading font-semibold text-dark-text">
                      Get Started Today
                    </h2>
                    <p className="text-sm text-muted-text mt-1">
                      Fill in your details and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-dark-text mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-dark-text mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text"
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text"
                        required
                      />
                    </div>

                    {/* Destination Country */}
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-dark-text mb-1.5">
                        Destination Country
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text appearance-none"
                        required
                      >
                        <option value="">Select destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Travel Date & Purpose - Two columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="travelDate" className="block text-sm font-medium text-dark-text mb-1.5">
                          Expected Travel Date
                        </label>
                        <input
                          type="date"
                          id="travelDate"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="purpose" className="block text-sm font-medium text-dark-text mb-1.5">
                          Purpose of Travel
                        </label>
                        <select
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none text-dark-text appearance-none"
                          required
                        >
                          <option value="">Select purpose</option>
                          {travelPurposes.map((purpose) => (
                            <option key={purpose} value={purpose}>
                              {purpose}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="mt-6 shadow-lg shadow-primary/25 hover:shadow-primary/35"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Request Assistance"
                      )}
                    </Button>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-text">
                        <Shield className="w-4 h-4 text-primary" />
                        Secure Enquiry
                      </div>
                      <div className="w-px h-4 bg-border" />
                      <div className="flex items-center gap-2 text-xs text-muted-text">
                        <Clock className="w-4 h-4 text-primary" />
                        We respond quickly
                      </div>
                      <div className="w-px h-4 bg-border" />
                      <div className="flex items-center gap-2 text-xs text-muted-text">
                        <Users className="w-4 h-4 text-primary" />
                        100% Free Consultation
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-3 -right-3 bg-accent text-dark-text px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Plane className="w-4 h-4" />
                Quick Response
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 bg-primary text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <Briefcase className="w-4 h-4" />
                Expert Guidance
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}