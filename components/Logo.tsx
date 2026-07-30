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
    sm: { container: "w-8 h-8", text: "text-base" },
    md: { container: "w-10 h-10", text: "text-xl" },
    lg: { container: "w-12 h-12", text: "text-2xl" },
  };

  const textColor = variant === "light" ? "text-white" : "text-dark-text";
  const primaryColor = variant === "light" ? "text-accent" : "text-primary";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 group", className)}>
      {/* Logo Image */}
      <div className={cn(
        "relative rounded-xl overflow-hidden bg-primary flex items-center justify-center",
        sizes[size].container
      )}>
        <Image
          src="/logo.png"
          alt="Traavel Bug"
          width={40}
          height={40}
          className="object-contain"
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