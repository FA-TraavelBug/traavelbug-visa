// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: "Visa Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
          "border-b border-transparent",
          isScrolled && [
            "bg-white/80 backdrop-blur-xl backdrop-saturate-150",
            "border-border/50",
            "shadow-sm",
          ]
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative text-muted-text hover:text-dark-text transition-colors duration-200",
                  "font-medium text-sm tracking-wide",
                  "group py-1"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-primary",
                  "transform scale-x-0 transition-transform duration-300",
                  "group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2"
              href="tel:01141033588"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              className="gap-2 bg-[#25D366] hover:bg-[#20b85f] shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/35"
              href="https://wa.me/917290001545"
              target="_blank"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-light-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dark-text" />
            ) : (
              <Menu className="w-6 h-6 text-dark-text" />
            )}
          </button>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute top-20 left-0 right-0 bottom-0 bg-white shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200 
              }}
            >
              <div className="flex flex-col min-h-full">
                <nav className="flex-1 px-6 pt-8" aria-label="Mobile navigation">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-4 text-lg font-medium text-dark-text hover:text-primary transition-colors duration-200 border-b border-border/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="px-6 pb-8 pt-4 space-y-3 bg-light-bg/50">
                  <Button 
                    variant="primary" 
                    fullWidth
                    className="gap-2 text-base py-4"
                    href="tel:01141033588"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth
                    className="gap-2 text-base py-4 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                    href="https://wa.me/917290001545"
                    target="_blank"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="px-6 pb-6 text-center">
                  <p className="text-xs text-muted-text">
                    © {new Date().getFullYear()} Traavel Bug. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
}