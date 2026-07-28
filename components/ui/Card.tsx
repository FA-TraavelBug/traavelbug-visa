import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-gray-200 p-6",
        "shadow-sm transition-all duration-300",
        hoverable && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}