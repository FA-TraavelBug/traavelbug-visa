// src/components/ui/MotionWrapper.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
}

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function MotionWrapper({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animations[animation]}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}