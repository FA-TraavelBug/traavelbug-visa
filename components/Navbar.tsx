"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl">
          Traavel <span className="text-primary">Bug</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-gray-600 hover:text-primary">Visa Services</Link>
          <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-primary">How It Works</Link>
          <Link href="#faqs" className="text-sm text-gray-600 hover:text-primary">FAQs</Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4">
          <div className="flex flex-col gap-4">
            <Link href="#services" className="text-gray-600 hover:text-primary">Visa Services</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link>
            <Link href="#faqs" className="text-gray-600 hover:text-primary">FAQs</Link>
          </div>
        </div>
      )}
    </header>
  );
}