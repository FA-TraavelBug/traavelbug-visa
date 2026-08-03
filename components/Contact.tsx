// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Globe,
  Sparkles,
  ChevronRight
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 72900 01545",
    sub: "+91 99109 99396",
    action: "tel:+91 72900 01545",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "+91 72900 01545",
    sub: "Chat with us",
    action: "https://wa.me/917290001545",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "sm@traavelbug.com",
    sub: "We'll respond within 24hrs",
    action: "mailto:sm@traavelbug.com",
    color: "from-primary to-primary/80"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Lajpat Nagar, New Delhi",
    sub: "D-25, 1st Floor, Office No. 10",
    action: "https://maps.google.com",
    color: "from-accent to-yellow-600"
  }
];

const socialLinks = [
  { icon: "📘", href: "https://facebook.com/traavelbug9", label: "Facebook" },
  { icon: "📸", href: "https://instagram.com/traavelbug9", label: "Instagram" },
  { icon: "🔗", href: "https://linkedin.com/company/traavelbug", label: "LinkedIn" },
  { icon: "▶️", href: "https://youtube.com", label: "YouTube" },
];

export function Contact() {
  return (
    <Section background="white" id="contact" className="relative overflow-hidden py-16 md:py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary tracking-wide">GET IN TOUCH</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            We're Here to
            <br />
            <span className="text-primary">Help You</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-text max-w-2xl mx-auto"
          >
            Reach out through any channel and we'll respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              target={info.icon === MapPin ? "_blank" : undefined}
              rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              className="group p-6 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${info.color} text-white shadow-md mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-dark-text mb-1">
                {info.title}
              </h3>
              <p className="text-sm font-medium text-primary">{info.details}</p>
              <p className="text-xs text-muted-text mt-1">{info.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* Working Hours & Social */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-light-bg rounded-xl border border-border/50"
          >
            <h3 className="font-heading font-semibold text-dark-text mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Working Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border/30">
                <span className="text-muted-text">Monday - Saturday</span>
                <span className="font-medium">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-text">Sunday</span>
                <span className="font-medium text-red-500">Closed</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-xs text-muted-text flex items-center gap-2">
                  🚇 Nearest Metro: Lajpat Nagar Metro Station
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-light-bg rounded-xl border border-border/50"
          >
            <h3 className="font-heading font-semibold text-dark-text mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Connect With Us
            </h3>
            <p className="text-sm text-muted-text mb-4">
              Follow us for travel inspiration and updates.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white border border-border/50 flex items-center justify-center text-xl hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 shadow-sm hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-text">
                📧 sm@traavelbug.com • 📞 +91 72900 01545
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}