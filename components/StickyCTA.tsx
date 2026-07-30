// components/StickyCTA.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-border/50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            {/* Left - Text */}
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-dark-text">
                Ready to Travel?
              </p>
              <p className="text-xs text-muted-text">
                Get expert visa assistance today
              </p>
            </div>

            {/* Right - Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="tel:01141033588"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call Now</span>
              </a>
              <a
                href="https://wa.me/917290001545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20b85f] transition-all shadow-lg shadow-[#25D366]/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              
              {/* Dismiss Button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="hidden sm:flex w-8 h-8 rounded-full hover:bg-light-bg transition-colors items-center justify-center text-muted-text hover:text-dark-text"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}