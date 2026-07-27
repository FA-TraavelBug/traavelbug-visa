// src/components/ui/Card.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "primary";
  hoverable?: boolean;
}

const variantStyles = {
  default: cn(
    "bg-white border border-border",
    "shadow-md hover:shadow-xl"
  ),
  outline: cn(
    "bg-transparent border-2 border-border",
    "hover:border-primary hover:shadow-lg"
  ),
  primary: cn(
    "bg-primary text-white border border-primary/20",
    "shadow-lg shadow-primary/20 hover:shadow-primary/30"
  ),
};

export function Card({ 
  children, 
  className,
  variant = "default",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg transition-all duration-300",
        "p-6 md:p-8",
        variantStyles[variant],
        hoverable && "hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}