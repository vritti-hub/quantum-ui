import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import MuiTypography from "@mui/material/Typography";
import React from "react";

export interface TypographyProps extends MuiTypographyProps {
  /**
   * Semantic intent for text color
   * - primary: Primary text color (default)
   * - secondary: Secondary text color
   * - disabled: Disabled text color
   * - success: Success/positive state color
   * - warning: Warning state color
   * - brand: Brand blue color for logos and highlights
   */
  intent?: "primary" | "secondary" | "disabled" | "success" | "warning" | "brand";

  /**
   * Typography content
   */
  children: React.ReactNode;
}

// ✅ Enhanced: CSS Variables mapping for theme-aware colors
const INTENT_TO_CSS_VAR_MAP = {
  primary: "var(--quantum-color-text-primary)",
  secondary: "var(--quantum-color-text-secondary)", 
  disabled: "var(--quantum-color-text-disabled)",
  success: "var(--quantum-color-feedback-success)", // Success green from CSS vars
  warning: "var(--quantum-color-feedback-warning)", // Warning from CSS vars
  brand: "var(--quantum-color-action-primary)", // Brand blue
} as const;


export const Typography = React.memo<TypographyProps>(
  ({ intent = "primary", color, children, variant = "body1", sx, ...props }) => {
    // Use CSS variable for theme-aware colors
    const cssVariableColor = INTENT_TO_CSS_VAR_MAP[intent];
    
    const finalSx = {
      // Use CSS variable for theme-aware colors
      color: color || cssVariableColor,
      // Ensure proper line height and font weights
      lineHeight: variant?.includes('h') ? 1.2 : variant === 'body1' ? 1.6 : 1.4,
      // Add theme transition
      transition: 'color 0.3s ease',
      ...sx,
    };

    return (
      <MuiTypography 
        variant={variant} 
        sx={finalSx}
        {...props}
      >
        {children}
      </MuiTypography>
    );
  }
);

Typography.displayName = "Typography";
