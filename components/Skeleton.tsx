// components/Skeleton.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "rect" | "circle" | "text";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className, variant = "rect", width, height }: SkeletonProps) {
  const variants = {
    rect: "rounded-lg",
    circle: "rounded-full",
    text: "rounded h-4",
  };

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200",
        "bg-[length:200%_100%] animate-shimmer",
        variants[variant],
        className
      )}
      style={{ width, height }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    />
  );
}