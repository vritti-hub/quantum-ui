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

// ✅ Optimized: Constant mappings instead of functions
const STATE_TO_COLOR_MAP = {
  normal: "primary",
  error: "error",
  success: "success",
  warning: "warning",
} as const;

const DENSITY_TO_SIZE_MAP = {
  compact: "small",
  comfortable: "medium",
  spacious: "medium", // MUI doesn't have large, medium is largest
} as const;

export const QuantumTextField = React.memo<QuantumTextFieldProps>(
  ({
    state = "normal",
    density = "comfortable",
    message,
    fullWidth = true,
    ...props
  }) => {
    return (
      <MuiTextField
        variant="outlined"
        color={STATE_TO_COLOR_MAP[state]}
        size={DENSITY_TO_SIZE_MAP[density]}
        error={state === "error"}
        helperText={message}
        fullWidth={fullWidth}
        {...props}
      />
    );
  }
);

QuantumTextField.displayName = "QuantumTextField";
