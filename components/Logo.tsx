// components/Logo.tsx
"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className, showText = true, size = "md", variant = "dark" }: LogoProps) {
  const sizes = {
    sm: {
      container: "w-8 h-8",
      icon: "w-4 h-4",
      text: "text-base",
    },
    md: {
      container: "w-10 h-10",
      icon: "w-5 h-5",
      text: "text-xl",
    },
    lg: {
      container: "w-12 h-12",
      icon: "w-6 h-6",
      text: "text-2xl",
    },
  };

  const textColor = variant === "light" ? "text-white" : "text-dark-text";
  const primaryColor = variant === "light" ? "text-accent" : "text-primary";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 group", className)}>
      <div className={cn(
        "relative rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105",
        sizes[size].container
      )}>
        <Globe className={cn("text-white", sizes[size].icon)} />
        
        {/* Decorative ring on hover */}
        <div className="absolute inset-0 rounded-xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {showText && (
        <div className="flex items-baseline">
          <span className={cn(
            "font-heading font-bold tracking-tight",
            sizes[size].text,
            textColor
          )}>
            Traavel
          </span>
          <span className={cn(
            "font-heading font-bold tracking-tight",
            sizes[size].text,
            primaryColor
          )}>
            Bug
          </span>
        </div>
      )}
    </Link>
  );
}