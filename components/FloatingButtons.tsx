// components/FloatingButtons.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp - Always Visible */}
      <motion.a
        href="https://wa.me/917290001545"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20b85f] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-300"></span>
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:01141033588"
        className="fixed bottom-36 right-6 z-50 flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Call Now</span>
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-white hover:bg-gray-50 text-dark-text p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}