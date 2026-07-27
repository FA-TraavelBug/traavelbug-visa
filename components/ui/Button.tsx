// src/components/ui/Button.tsx - Updated
"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = "primary", 
    size = "md", 
    className,
    fullWidth = false,
    ...props 
  }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "text-sm sm:text-base",
      fullWidth && "w-full"
    );

    const variants = {
      primary: cn(
        "bg-primary text-white hover:bg-primary/90 active:bg-primary/95",
        "shadow-lg shadow-primary/25 hover:shadow-primary/35",
        "border border-primary/20"
      ),
      secondary: cn(
        "bg-light-bg text-dark-text hover:bg-light-bg/80 active:bg-light-bg/90",
        "shadow-sm hover:shadow-md",
        "border border-border"
      ),
      outline: cn(
        "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        "hover:shadow-lg hover:shadow-primary/20",
        "bg-transparent"
      ),
      ghost: cn(
        "text-primary hover:bg-primary/10 active:bg-primary/15",
        "hover:shadow-md",
        "bg-transparent"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-xs sm:text-sm",
      md: "px-6 py-2.5 text-sm sm:text-base",
      lg: "px-8 py-3.5 text-base sm:text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;