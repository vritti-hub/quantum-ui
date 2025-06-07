import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";

export interface TypographyProps extends MuiTypographyProps {
  /**
   * Semantic intent for text color
   * - primary: Primary text color (default)
   * - secondary: Secondary text color
   * - disabled: Disabled text color
   */
  intent?: "primary" | "secondary" | "disabled";

  /**
   * Typography content
   */
  children: React.ReactNode;
}

// ✅ Optimized: Constant mapping for performance
const INTENT_TO_COLOR_MAP = {
  primary: "text.primary",
  secondary: "text.secondary",
  disabled: "text.disabled",
} as const;

export const Typography = React.memo<TypographyProps>(
  ({ intent = "primary", color, children, ...props }) => {
    // Use intent color if no explicit color provided
    const finalColor = color || INTENT_TO_COLOR_MAP[intent];

    return (
      <MuiTypography color={finalColor} {...props}>
        {children}
      </MuiTypography>
    );
  }
);

Typography.displayName = "Typography";
