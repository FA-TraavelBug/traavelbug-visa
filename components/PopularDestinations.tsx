// components/PopularDestinations.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  MapPin, 
  Plane, 
  ChevronRight, 
  Star, 
  Sparkles, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const destinations = [
  { 
    flag: "🇦🇪", 
    name: "Dubai (UAE)", 
    description: "Perfect for holidays, family visits and business travel.",
    country: "United Arab Emirates",
    rating: 4.9,
    reviews: 234
  },
  { 
    flag: "🇸🇬", 
    name: "Singapore", 
    description: "Fast-growing destination for leisure and business travellers.",
    country: "Singapore",
    rating: 4.8,
    reviews: 189
  },
  { 
    flag: "🇹🇭", 
    name: "Thailand", 
    description: "A favourite destination for beach holidays and cultural experiences.",
    country: "Thailand",
    rating: 4.7,
    reviews: 312
  },
  { 
    flag: "🇬🇧", 
    name: "United Kingdom", 
    description: "Visitor visa assistance for tourism and family visits.",
    country: "United Kingdom",
    rating: 4.9,
    reviews: 156
  },
  { 
    flag: "🇪🇺", 
    name: "Schengen Countries", 
    description: "Travel across multiple European countries with one Schengen Visa.",
    country: "Europe",
    rating: 4.8,
    reviews: 278
  },
  { 
    flag: "🇯🇵", 
    name: "Japan", 
    description: "Experience Japan with professional visa guidance.",
    country: "Japan",
    rating: 4.9,
    reviews: 143
  },
  { 
    flag: "🇦🇺", 
    name: "Australia", 
    description: "Visa assistance for tourism and family visits.",
    country: "Australia",
    rating: 4.7,
    reviews: 201
  },
  { 
    flag: "🇨🇦", 
    name: "Canada", 
    description: "Travel with confidence through expert visa support.",
    country: "Canada",
    rating: 4.8,
    reviews: 167
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < fullStars 
                ? "text-accent fill-accent" 
                : i === fullStars && hasHalfStar
                ? "text-accent fill-accent/50"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-muted-text ml-1">{rating}</span>
    </div>
  );
};

export function PopularDestinations() {
  const scrollToForm = () => {
    // Scroll to Hero section where the form is
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section background="light" id="destinations" className="relative overflow-hidden py-16 md:py-20">
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
            <span className="text-sm font-medium text-primary tracking-wide">POPULAR DESTINATIONS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Visa Assistance for
            <br />
            <span className="text-primary">Popular Destinations</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            Wherever you're planning to travel, our team is here to guide you 
            through the visa application process with expert support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              className="group relative p-5 bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {dest.flag}
                    </span>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-dark-text group-hover:text-primary transition-colors duration-300">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-muted-text">{dest.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                </div>

                <p className="text-muted-text text-sm leading-relaxed mb-3 min-h-[36px]">
                  {dest.description}
                </p>

                <div className="mb-3">
                  <StarRating rating={dest.rating} />
                  <span className="text-xs text-muted-text ml-1">({dest.reviews} reviews)</span>
                </div>

                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-between w-full px-3.5 py-2 bg-light-bg text-dark-text rounded-lg border border-border/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/25 text-sm font-medium"
                >
                  <span>Get Visa Assistance</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative p-8 md:p-10 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Can't Find Your Destination?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We provide visa assistance for many international destinations. 
              Get in touch and we'll help you with your travel plans.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-all shadow-lg shadow-black/20 hover:shadow-black/30"
            >
              Contact Our Team
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}