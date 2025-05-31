import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";
import React from "react";

export interface QuantumButtonProps
  extends Omit<MuiButtonProps, "variant" | "color"> {
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

export const QuantumButton: React.FC<QuantumButtonProps> = ({
  intent = "primary",
  size = "medium",
  children,
  ...props
}) => {
  // Map semantic intent to MUI props for theme targeting
  const getMuiProps = () => {
    switch (intent) {
      case "primary":
        return { variant: "contained" as const, color: "primary" as const };
      case "secondary":
        return { variant: "outlined" as const, color: "primary" as const };
      case "destructive":
        return { variant: "contained" as const, color: "error" as const };
      case "ghost":
        return { variant: "text" as const, color: "inherit" as const };
      default:
        return { variant: "contained" as const, color: "primary" as const };
    }
  };

  const muiProps = getMuiProps();

  return (
    <MuiButton
      {...muiProps}
      size={size}
      // Pass intent as data attribute for theme targeting
      data-intent={intent}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default QuantumButton;
