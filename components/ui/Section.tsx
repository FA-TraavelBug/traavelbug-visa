// src/components/ui/Section.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "primary" | "accent";
  padding?: "default" | "small" | "large" | "none";
}

const backgroundStyles = {
  white: "bg-background",
  light: "bg-light-bg",
  primary: "bg-primary text-white",
  accent: "bg-accent text-dark-text",
};

const paddingStyles = {
  default: "py-section-mobile md:py-section-tablet lg:py-section-desktop",
  small: "py-12 md:py-16 lg:py-20",
  large: "py-20 md:py-28 lg:py-40",
  none: "py-0",
};

export function Section({ 
  children, 
  className, 
  id,
  background = "white",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </section>
  );
}