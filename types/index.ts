// src/types/index.ts
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type SectionBackground = "white" | "light" | "primary" | "accent";
export type SectionPadding = "default" | "small" | "large" | "none";

export type CardVariant = "default" | "outline" | "primary";