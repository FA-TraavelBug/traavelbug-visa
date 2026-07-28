import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "primary";
  padding?: "default" | "large";
}

export function Section({ 
  children, 
  className, 
  id,
  background = "white",
  padding = "default",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    primary: "bg-primary text-white",
  };
  
  const paddings = {
    default: "py-16 md:py-24",
    large: "py-20 md:py-32",
  };
  
  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      {children}
    </section>
  );
}