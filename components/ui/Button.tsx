"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className, fullWidth = false, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-lg font-medium transition-all duration-300",
          variants[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;