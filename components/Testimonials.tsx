// src/components/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  ShieldCheck, 
  BadgeCheck, 
  Globe, 
  Headphones,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  MapPin,
  Quote
} from "lucide-react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";
import { cn } from "@/lib/utils";

// Types
interface Testimonial {
  id: string;
  name: string;
  destination: string;
  review: string;
  rating: number;
  avatarColor: string;
}

interface TrustHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Placeholder Data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    destination: "Dubai",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-primary/10 text-primary"
  },
  {
    id: "2",
    name: "Rahul S.",
    destination: "Singapore",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-accent/10 text-accent"
  },
  {
    id: "3",
    name: "Priya K.",
    destination: "Schengen",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-green-100 text-green-600"
  },
  {
    id: "4",
    name: "Michael R.",
    destination: "United Kingdom",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-purple-100 text-purple-600"
  },
  {
    id: "5",
    name: "Ananya P.",
    destination: "Australia",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-blue-100 text-blue-600"
  },
  {
    id: "6",
    name: "David L.",
    destination: "Canada",
    review: "Placeholder review. Replace with a real customer testimonial about their visa experience.",
    rating: 5,
    avatarColor: "bg-red-100 text-red-600"
  }
];

const trustHighlights: TrustHighlight[] = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Professional Guidance",
    description: "Support throughout your visa application journey."
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Customer Focused",
    description: "Dedicated assistance for every traveller."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International Destinations",
    description: "Visa assistance for multiple countries."
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Responsive Support",
    description: "Quick assistance whenever you need it."
  }
];

const trustStripItems = [
  "Dedicated Visa Assistance",
  "Personalised Support",
  "Multiple Destinations",
  "End-to-End Travel Planning"
];

// Components
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? "text-accent fill-accent" : "text-border"
          )}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      className={cn(
        "group relative p-6 bg-white rounded-2xl",
        "border border-border/50",
        "shadow-sm hover:shadow-xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1",
        "flex flex-col h-full"
      )}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className={cn(
              "w-12 h-12 rounded-full",
              "flex items-center justify-center",
              "font-semibold text-lg",
              testimonial.avatarColor,
              "transition-all duration-300",
              "group-hover:scale-110"
            )}>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-dark-text text-sm">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-muted-text">
                <MapPin className="w-3 h-3" />
                <span>{testimonial.destination}</span>
              </div>
            </div>
          </div>
          <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
        </div>

        {/* Rating */}
        <div className="mb-3">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Review */}
        <p className="text-sm text-muted-text leading-relaxed flex-1 group-hover:text-dark-text/80 transition-colors duration-300">
          "{testimonial.review}"
        </p>

        {/* Verified Badge */}
        <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5">
          <BadgeCheck className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-text">Verified Customer</span>
        </div>
      </div>
    </motion.div>
  );
};

const TrustHighlightCard = ({ highlight, index }: { highlight: TrustHighlight; index: number }) => {
  return (
    <motion.div
      className={cn(
        "group p-6 text-center bg-white rounded-2xl",
        "border border-border/50",
        "shadow-sm hover:shadow-xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1",
        "cursor-default"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * index,
        ease: "easeOut"
      }}
    >
      {/* Icon */}
      <div className={cn(
        "inline-flex items-center justify-center w-14 h-14 rounded-xl",
        "bg-primary/10 text-primary",
        "group-hover:bg-primary group-hover:text-white",
        "transition-all duration-300 ease-out",
        "shadow-sm group-hover:shadow-lg group-hover:shadow-primary/25",
        "mb-4"
      )}>
        {highlight.icon}
      </div>

      <h3 className="text-base font-heading font-semibold text-dark-text mb-2 group-hover:text-primary transition-colors duration-300">
        {highlight.title}
      </h3>
      <p className="text-sm text-muted-text leading-relaxed">
        {highlight.description}
      </p>
    </motion.div>
  );
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + 1 >= testimonials.length - itemsPerView + 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev + 1 >= testimonials.length - itemsPerView + 1 ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <Section 
      background="light" 
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(33,70,150,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,70,150,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <MotionWrapper animation="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                TRUSTED BY TRAVELLERS
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.15}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Helping Travellers Plan Their
              <br />
              <span className="text-primary">International Journeys</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fadeUp" delay={0.2}>
            <p className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              We're committed to providing professional visa assistance and 
              personalised travel support for every journey.
            </p>
          </MotionWrapper>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={handlePrevious}
                className={cn(
                  "absolute -left-3 top-1/2 -translate-y-1/2",
                  "w-10 h-10 rounded-full",
                  "bg-white border border-border/50",
                  "shadow-md hover:shadow-lg",
                  "flex items-center justify-center",
                  "text-dark-text hover:text-primary",
                  "transition-all duration-300",
                  "hover:scale-110",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50",
                  "hidden md:flex"
                )}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className={cn(
                  "absolute -right-3 top-1/2 -translate-y-1/2",
                  "w-10 h-10 rounded-full",
                  "bg-white border border-border/50",
                  "shadow-md hover:shadow-lg",
                  "flex items-center justify-center",
                  "text-dark-text hover:text-primary",
                  "transition-all duration-300",
                  "hover:scale-110",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50",
                  "hidden md:flex"
                )}
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(Math.ceil(testimonials.length / itemsPerView))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index * itemsPerView);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index * itemsPerView
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-text"
                )}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Highlights */}
        <div className="mt-16 lg:mt-20">
          <MotionWrapper animation="fadeUp" delay={0.3}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-semibold text-dark-text">
                Why Travellers Trust Us
              </h3>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustHighlights.map((highlight, index) => (
              <TrustHighlightCard
                key={index}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Trust Strip */}
        <MotionWrapper animation="fadeUp" delay={0.5}>
          <div className="mt-12 lg:mt-16">
            <div className={cn(
              "relative overflow-hidden rounded-2xl",
              "bg-gradient-to-br from-primary via-primary/95 to-primary/90",
              "p-6 md:p-8"
            )}>
              {/* Decorations */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
              </div>

              <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {trustStripItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2.5 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item}
                    </span>
                    {index < trustStripItems.length - 1 && (
                      <span className="w-px h-6 bg-white/20 hidden sm:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        {/* Bottom CTA */}
        <MotionWrapper animation="fadeUp" delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-muted-text mb-4">
              Ready to start your visa journey?
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all duration-300 cursor-pointer group">
              <span>Get started with Traavel Bug</span>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  );
}