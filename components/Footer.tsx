// components/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Globe,
  ArrowUpRight,
  Shield,
  Clock,
  AlertCircle
} from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const quickLinks = [
  { href: "#services", label: "Visa Services" },
  { href: "#about", label: "About Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { 
    href: "https://facebook.com/traavelbug9", 
    icon: <Facebook className="w-5 h-5" />, 
    label: "Facebook" 
  },
  { 
    href: "https://instagram.com/traavelbug9", 
    icon: <Instagram className="w-5 h-5" />, 
    label: "Instagram" 
  },
  { 
    href: "https://linkedin.com/company/traavelbug", 
    icon: <Linkedin className="w-5 h-5" />, 
    label: "LinkedIn" 
  },
  { 
    href: "https://youtube.com", 
    icon: <Youtube className="w-5 h-5" />, 
    label: "YouTube" 
  },
];

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "w-10 h-10 rounded-full",
        "bg-white/5 hover:bg-white/10",
        "flex items-center justify-center",
        "text-gray-400 hover:text-white",
        "border border-white/5 hover:border-white/10",
        "transition-all duration-300",
        "hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.a>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] overflow-hidden" role="contentinfo" aria-label="Footer">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 - Logo & About */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Logo variant="light" showText={true} size="sm" />

              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Traavel Bug provides personalised visa assistance and travel planning 
                to help travellers explore international destinations with confidence.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  <span>Trusted & Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-heading font-semibold text-sm tracking-wide uppercase">
                Quick Links
              </h3>
              <nav aria-label="Quick links">
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-1.5 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Column 3 - Contact */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-heading font-semibold text-sm tracking-wide uppercase">
                Contact
              </h3>
              <ul className="space-y-3">
                {/* ✅ Phone 1: 7290001545 */}
                <li>
                  <a
                    href="tel:7290001545"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 72900 01545</span>
                  </a>
                </li>
                {/* ✅ Phone 2: 9711144428 */}
                <li>
                  <a
                    href="tel:9711144428"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 97111 44428</span>
                  </a>
                </li>
                {/* Email */}
                <li>
                  <a
                    href="mailto:sm@traavelbug.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>sm@traavelbug.com</span>
                  </a>
                </li>
                {/* Address */}
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed">
                    D-25, 1st Floor, Office No. 10,<br />
                    Lajpat Nagar Part-II,<br />
                    New Delhi – 110024
                  </span>
                </li>
                {/* Working Hours */}
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="leading-relaxed">
                    Mon-Sat: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Column 4 - Social */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-heading font-semibold text-sm tracking-wide uppercase">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} {...social} />
                ))}
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-gray-500 text-xs">
                  <span className="text-gray-400 font-medium">📧 Email:</span>
                  <br />
                  <span className="text-gray-500">sm@traavelbug.com</span>
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  <span className="text-gray-400 font-medium">📍 Address:</span>
                  <br />
                  <span className="text-gray-500">D-25, Lajpat Nagar Part-II,</span>
                  <br />
                  <span className="text-gray-500">New Delhi – 110024</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/5 pt-6 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Traavel Bug. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link 
                href="/terms" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-700">|</span>
              <Link 
                href="/disclaimer" 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-primary/50" />
              <p>
                <strong>Disclaimer:</strong> Traavel Bug is a private consultancy. 
                We provide guidance and document review only. 
                Visa approval is at embassy's discretion.
              </p>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-8 bottom-8 lg:bottom-12 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -2 }}
          >
            <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
          </motion.button>
        </motion.div>
      </Container>
    </footer>
  );
}