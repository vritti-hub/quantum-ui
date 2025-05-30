import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";
import React from "react";

export interface QuantumButtonProps
  extends Omit<MuiButtonProps, "variant" | "color"> {
  /**
   * The intent of the button - determines its semantic meaning and styling
   */
  intent?: "primary" | "secondary" | "destructive" | "subtle";

  /**
   * The visual emphasis level of the button
   * - high: Contained style (most prominent)
   * - medium: Outlined style (moderate prominence)
   * - low: Text style (least prominent)
   */
  emphasis?: "high" | "medium" | "low";

  /**
   * Size of the button
   */
  size?: "small" | "medium" | "large";

  /**
   * Whether the button should take the full width of its container
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

const mapIntentToColor = (
  intent: QuantumButtonProps["intent"]
): MuiButtonProps["color"] => {
  switch (intent) {
    case "secondary":
      return "secondary";
    case "destructive":
      return "error";
    case "subtle":
      return "inherit";
    case "primary":
    default:
      return "primary";
  }
};

const mapEmphasisToVariant = (
  emphasis: QuantumButtonProps["emphasis"]
): MuiButtonProps["variant"] => {
  switch (emphasis) {
    case "medium":
      return "outlined";
    case "low":
      return "text";
    case "high":
    default:
      return "contained";
  }
};

export const QuantumButton: React.FC<QuantumButtonProps> = ({
  intent = "primary",
  emphasis = "high",
  size = "medium",
  children,
  ...props
}) => {
  return (
    <MuiButton
      variant={mapEmphasisToVariant(emphasis)}
      color={mapIntentToColor(intent)}
      size={size}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default QuantumButton;
