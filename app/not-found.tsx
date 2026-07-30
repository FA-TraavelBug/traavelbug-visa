// app/not-found.tsx
"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="relative">
            <div className="text-9xl font-bold text-primary/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center">
                <Search className="w-16 h-16 text-primary/30" />
              </div>
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-8 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-muted-text text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                <Home className="w-4 h-4" />
                Return Home
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-text mb-4">Need help? Try these pages:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/" className="text-primary hover:underline">Home</Link>
              <span className="text-border">|</span>
              <Link href="/#services" className="text-primary hover:underline">Visa Services</Link>
              <span className="text-border">|</span>
              <Link href="/#contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-muted-text">
            © {new Date().getFullYear()} Traavel Bug. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}