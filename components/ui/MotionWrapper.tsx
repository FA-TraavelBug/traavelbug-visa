"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}