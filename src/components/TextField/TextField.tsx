import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import React from "react";

export interface QuantumTextFieldProps
  extends Omit<MuiTextFieldProps, "variant" | "color"> {
  /**
   * The current state of the field for validation feedback
   */
  state?: "normal" | "error" | "success" | "warning";

  /**
   * Visual density of the field
   * - compact: Smaller padding and font size
   * - comfortable: Standard padding and font size
   * - spacious: Larger padding and font size
   */
  density?: "compact" | "comfortable" | "spacious";

  /**
   * Label for the field
   */
  label?: string;

  /**
   * Helper or error message to display below the field
   */
  message?: string;

  /**
   * Placeholder text when field is empty
   */
  placeholder?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Whether the field is disabled
   */
  disabled?: boolean;

  /**
   * Whether the field should take full width
   */
  fullWidth?: boolean;
}

const mapStateToColor = (
  state: QuantumTextFieldProps["state"]
): MuiTextFieldProps["color"] => {
  switch (state) {
    case "error":
      return "error";
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "normal":
    default:
      return "primary";
  }
};

const mapDensityToSize = (
  density: QuantumTextFieldProps["density"]
): MuiTextFieldProps["size"] => {
  switch (density) {
    case "compact":
      return "small";
    case "spacious":
      return "medium"; // MUI doesn't have large, medium is the largest
    case "comfortable":
    default:
      return "medium";
  }
};

export const QuantumTextField: React.FC<QuantumTextFieldProps> = ({
  state = "normal",
  density = "comfortable",
  message,
  fullWidth = true,
  ...props
}) => {
  const hasError = state === "error";

  return (
    <MuiTextField
      variant="outlined"
      color={mapStateToColor(state)}
      size={mapDensityToSize(density)}
      error={hasError}
      helperText={message}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default QuantumTextField;
