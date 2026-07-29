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
  Building2,
  MessageCircle,
  Globe,
  Sparkles,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    items: [
      "011-41033588",
      "+91 99109 99396",
      "+91 80105 88588",
    ],
    action: "tel:01141033588",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    items: ["+91 72900 01545"],
    action: "https://wa.me/917290001545",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    items: ["sm@traavelbug.com", "rm@traavelbug.com"],
    action: "mailto:sm@traavelbug.com",
    color: "from-primary to-primary/80"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    items: [
      "D-25, 1st Floor, Office No. 10,",
      "Lajpat Nagar Part-II,",
      "New Delhi – 110024"
    ],
    action: "https://maps.google.com",
    color: "from-accent to-yellow-600"
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/traavelbug9", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/traavelbug9", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/traavelbug", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Contact() {
  return (
    <Section background="white" id="contact" className="relative overflow-hidden">
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
            Contact us through any of the following channels and we'll get back to you 
            as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.action}
              target={info.icon === MapPin ? "_blank" : undefined}
              rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              className="group relative p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-dark-text mb-2 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <ul className="space-y-1">
                  {info.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-text group-hover:text-dark-text/80 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Working Hours & Social */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-light-bg rounded-2xl border border-border/50"
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
                <p className="text-xs text-muted-text">
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
            className="p-6 bg-light-bg rounded-2xl border border-border/50"
          >
            <h3 className="font-heading font-semibold text-dark-text mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Connect With Us
            </h3>
            <p className="text-sm text-muted-text mb-4">
              Follow us on social media for travel inspiration, updates, and exclusive offers.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-border/50 flex items-center justify-center text-muted-text hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 shadow-sm hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-text">
                📧 Email: sm@traavelbug.com
              </p>
              <p className="text-xs text-muted-text mt-1">
                📞 Phone: 011-41033588
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-text mb-4">
            Have questions or need assistance? We're just a message away.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              Book a Consultation
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/917290001545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}