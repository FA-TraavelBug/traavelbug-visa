// components/Logo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className, showText = true, size = "md", variant = "dark" }: LogoProps) {
  const sizes = {
    sm: { container: "w-8 h-8", text: "text-base", icon: 32 },
    md: { container: "w-10 h-10", text: "text-xl", icon: 40 },
    lg: { container: "w-12 h-12", text: "text-2xl", icon: 48 },
  };

  const textColor = variant === "light" ? "text-white" : "text-dark-text";
  const primaryColor = variant === "light" ? "text-accent" : "text-primary";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 group", className)}>
      {/* Logo Image - Removed bg-primary and added transparent background */}
      <div className={cn(
        "relative rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0",
        sizes[size].container
      )}>
        <Image
          src="/logo.png"
          alt="Traavel Bug"
          width={sizes[size].icon}
          height={sizes[size].icon}
          className="object-contain"
          priority
        />
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