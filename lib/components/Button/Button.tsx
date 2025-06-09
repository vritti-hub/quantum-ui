import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import MuiButton from "@mui/material/Button";
import React from "react";

export interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  /**
   * The intent/purpose of the button
   * - primary: Main actions, CTAs (solid blue)
   * - secondary: Secondary actions (outlined blue)
   * - destructive: Dangerous actions (solid red)
   * - ghost: Subtle actions (text only)
   */
  intent?: "primary" | "secondary" | "destructive" | "ghost";

  /**
   * Size of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Button content
   */
  children: React.ReactNode;
}

// ✅ Optimized: Constant lookup instead of function calls
const INTENT_TO_MUI_PROPS = {
  primary: { variant: "contained" as const, color: "primary" as const },
  secondary: { variant: "outlined" as const, color: "primary" as const },
  destructive: { variant: "contained" as const, color: "error" as const },
  ghost: { variant: "text" as const, color: "inherit" as const },
} as const;

export const Button = React.memo<ButtonProps>(
  ({ intent = "primary", size = "medium", children, ...props }) => {
    // ✅ Direct lookup - no function calls
    const muiProps = INTENT_TO_MUI_PROPS[intent];

    return (
      <MuiButton {...muiProps} size={size} data-intent={intent} {...props}>
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = "Button";
