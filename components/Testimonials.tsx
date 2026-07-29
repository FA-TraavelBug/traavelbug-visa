// components/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Sparkles,
  MessageCircle,
  Award
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    destination: "Dubai",
    rating: 5,
    review: "The team at Traavel Bug made my visa application process so smooth. I got my Dubai tourist visa in just 3 days! Highly recommend their services. They handled everything professionally and kept me updated throughout.",
    avatarColor: "bg-primary/10 text-primary",
    initials: "SM"
  },
  {
    id: 2,
    name: "Rahul S.",
    destination: "Singapore",
    rating: 5,
    review: "Excellent service! They guided me through every document requirement and I received my Singapore visa without any hassle. Their attention to detail is impressive. Will definitely use again for future travel.",
    avatarColor: "bg-accent/10 text-accent",
    initials: "RS"
  },
  {
    id: 3,
    name: "Priya K.",
    destination: "Schengen Countries",
    rating: 5,
    review: "I was worried about the Schengen visa process, but Traavel Bug made it so easy. Their team was professional and responsive throughout. They answered all my questions promptly and made the process stress-free.",
    avatarColor: "bg-green-100 text-green-600",
    initials: "PK"
  },
  {
    id: 4,
    name: "Michael R.",
    destination: "United Kingdom",
    rating: 5,
    review: "Got my UK visitor visa with their help. The document review was thorough and I felt confident throughout the process. Their expertise in visa applications is truly commendable. Thank you, Traavel Bug!",
    avatarColor: "bg-purple-100 text-purple-600",
    initials: "MR"
  },
  {
    id: 5,
    name: "Ananya P.",
    destination: "Australia",
    rating: 5,
    review: "Professional, efficient, and trustworthy. They handled my Australian tourist visa application perfectly. Couldn't be happier with the service. Their team went above and beyond to ensure everything was perfect.",
    avatarColor: "bg-blue-100 text-blue-600",
    initials: "AP"
  },
  {
    id: 6,
    name: "James W.",
    destination: "Canada",
    rating: 5,
    review: "Outstanding support throughout my Canadian visa application. The team was knowledgeable, patient, and extremely helpful. They made a complex process feel simple and straightforward. Highly recommended!",
    avatarColor: "bg-red-100 text-red-600",
    initials: "JW"
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-accent fill-accent" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
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
    }, 6000);

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

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // If less than itemsPerView, pad with empty cards
  while (visibleTestimonials.length < itemsPerView) {
    visibleTestimonials.push({
      id: `empty-${visibleTestimonials.length}`,
      name: "",
      destination: "",
      rating: 0,
      review: "",
      avatarColor: "",
      initials: ""
    });
  }

  return (
    <Section background="light" id="testimonials" className="relative overflow-hidden">
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
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">TRUSTED BY TRAVELLERS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            What Our <span className="text-primary">Travellers Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            Real feedback from our satisfied customers who travelled with confidence.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    {testimonial.id !== "" ? (
                      <motion.div
                        className="p-6 bg-white rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                        whileHover={{ y: -4 }}
                      >
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-primary/20 mb-3 flex-shrink-0" />
                        
                        {/* Rating */}
                        <StarRating rating={testimonial.rating} />
                        
                        {/* Review */}
                        <p className="text-muted-text text-sm leading-relaxed mt-3 mb-4 flex-1">
                          "{testimonial.review}"
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center gap-3 pt-3 border-t border-border/50 flex-shrink-0">
                          <div className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center font-semibold text-sm`}>
                            {testimonial.initials}
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{testimonial.name}</div>
                            <div className="text-xs text-muted-text">{testimonial.destination}</div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="h-full opacity-0" />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border/50 shadow-md hover:shadow-lg flex items-center justify-center text-dark-text hover:text-primary transition-all hover:scale-110 hidden md:flex focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border/50 shadow-md hover:shadow-lg flex items-center justify-center text-dark-text hover:text-primary transition-all hover:scale-110 hidden md:flex focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index * itemsPerView);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index * itemsPerView
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-text"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-border/50 shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Based on 500+ Reviews</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}