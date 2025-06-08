import {
  TextField as MuiTextField,
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import React from "react";

export interface TextFieldProps
  extends Omit<MuiTextFieldProps, "variant" | "color"> {
  /**
   * The current state of the field for validation feedback
   */
  state?: "normal" | "error" | "success" | "warning";

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

export const TextField = React.memo<TextFieldProps>(
  ({
    state = "normal",
    message,
    fullWidth = true,
    ...props
  }) => {
    return (
      <MuiTextField
        variant="filled"
        color={STATE_TO_COLOR_MAP[state]}
        error={state === "error"}
        helperText={message}
        fullWidth={fullWidth}
        {...props}
      />
    );
  }
);

TextField.displayName = "TextField";
