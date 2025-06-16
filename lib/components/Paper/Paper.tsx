import type { PaperProps as MuiPaperProps } from "@mui/material/Paper";
import MuiPaper from "@mui/material/Paper";
import React from "react";

export interface PaperProps extends Omit<MuiPaperProps, "variant"> {
  /**
   * Visual style variant
   * - standard: Default paper styling
   * - glass: Glassmorphism effect with backdrop blur
   * - elevated: Higher shadow and prominence
   * - subtle: Minimal styling for backgrounds
   * - glassCard: Glass card with low opacity background
   * - glassCardHover: Glass card with slightly higher opacity for hover states
   * - interactive: Interactive surface for buttons and controls
   * - overlay: High opacity overlay for modals and popups
   */
  variant?: "standard" | "glass" | "elevated" | "subtle" | "glassCard" | "glassCardHover" | "interactive" | "overlay";

  /**
   * Content of the paper
   */
  children: React.ReactNode;
}

export const Paper = React.memo<PaperProps>(
  ({ variant = "standard", children, ...props }) => {
    return (
      <MuiPaper data-variant={variant} elevation={0} {...props}>
        {children}
      </MuiPaper>
    );
  }
);

Paper.displayName = "Paper";
