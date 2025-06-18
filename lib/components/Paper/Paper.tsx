import type { PaperProps as MuiPaperProps } from "@mui/material/Paper";
import MuiPaper from "@mui/material/Paper";
import React from "react";

export interface PaperProps extends Omit<MuiPaperProps, "variant"> {
  /**
   * Visual style variant - Universal variants that work across landing pages, applications, and forms
   * 
   * - **section**: Universal section containers
   * - **surface**: Clean backgrounds for forms and applications
   * - **accent**: Highlight containers for important content
   * - **minimal**: Subtle containers for backgrounds and inputs
   * - **feature**: Premium containers for showcasing content
   */
  variant?: "section" | "surface" | "accent" | "minimal" | "feature";

  /**
   * Content of the paper
   */
  children: React.ReactNode;

  /**
   * Full-width styling for landing page sections (removes border radius and borders)
   * Available for all variants
   */
  fullWidth?: boolean;

  /**
   * High emphasis styling with enhanced effects (stronger gradients, glow)
   * Particularly effective with accent variant for CTAs
   */
  highEmphasis?: boolean;

  /**
   * Glass effect with backdrop blur and transparent backgrounds
   * Great for modern UI and landing page showcases
   */
  glass?: boolean;

  /**
   * Compact styling with reduced padding for application UI
   * Useful for smaller cards and dashboard components
   */
  compact?: boolean;

  /**
   * Input field styling for form backgrounds
   * Optimized for text field containers
   */
  input?: boolean;

  /**
   * Navigation panel styling with glass effect
   * Perfect for sidebars and navigation components
   */
  nav?: boolean;
}

export const Paper = React.memo<PaperProps>(
  ({ variant = "section", children, fullWidth, highEmphasis, glass, compact, input, nav, ...props }) => {
    return (
      <MuiPaper 
        data-variant={variant}
        data-fullwidth={fullWidth ? "true" : undefined}
        data-emphasis={highEmphasis ? "high" : undefined}
        data-glass={glass ? "true" : undefined}
        data-compact={compact ? "true" : undefined}
        data-input={input ? "true" : undefined}
        data-nav={nav ? "true" : undefined}
        elevation={0} 
        {...props}
      >
        {children}
      </MuiPaper>
    );
  }
);

Paper.displayName = "Paper";
