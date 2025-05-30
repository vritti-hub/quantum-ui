import type { Components, Theme } from "@mui/material/styles";

export const TextFieldTheme: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: {
      fontFamily: "var(--quantum-font-family)",

      "& .MuiInputLabel-root": {
        fontFamily: "inherit",
        fontSize: "0.875rem",
        fontWeight: 500,

        "&.Mui-focused": {
          fontWeight: 600,
        },

        "&.MuiInputLabel-shrunk": {
          fontSize: "0.75rem",
        },
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: "var(--quantum-border-radius-medium)",
        fontSize: "0.875rem",
        transition: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",

        "& fieldset": {
          borderColor: "var(--quantum-border-default)",
          transition: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
        },

        "&:hover fieldset": {
          borderColor: "var(--quantum-border-emphasis)",
        },

        "&.Mui-focused fieldset": {
          borderColor: "var(--quantum-action-primary)",
          borderWidth: "2px",
        },

        "&.Mui-error fieldset": {
          borderColor: "var(--quantum-feedback-error)",
        },

        "&.Mui-disabled": {
          backgroundColor: "var(--quantum-surface-secondary)",

          "& fieldset": {
            borderColor: "var(--quantum-border-subtle)",
          },
        },
      },

      "& .MuiFormHelperText-root": {
        fontFamily: "inherit",
        fontSize: "0.75rem",
        marginTop: "6px",
        marginLeft: "4px",

        "&.Mui-error": {
          color: "var(--quantum-feedback-error)",
        },
      },

      "& .MuiInputBase-input": {
        color: "var(--quantum-text-primary)",

        "&::placeholder": {
          color: "var(--quantum-text-disabled)",
          opacity: 1,
        },

        "&:disabled": {
          color: "var(--quantum-text-disabled)",
          WebkitTextFillColor: "var(--quantum-text-disabled)",
        },
      },
    },
  },

  variants: [
    // Size variants
    {
      props: { size: "small" },
      style: {
        "& .MuiOutlinedInput-root": {
          fontSize: "0.75rem",

          "& .MuiOutlinedInput-input": {
            padding: "8px 12px",
          },
        },

        "& .MuiInputLabel-root": {
          fontSize: "0.75rem",

          "&.MuiInputLabel-shrunk": {
            fontSize: "0.625rem",
          },
        },
      },
    },

    {
      props: { size: "medium" },
      style: {
        "& .MuiOutlinedInput-input": {
          padding: "12px 14px",
        },
      },
    },

    // State variants
    {
      props: { color: "success" },
      style: {
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "var(--quantum-feedback-success)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-feedback-success)",
        },
      },
    },

    {
      props: { color: "warning" },
      style: {
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "var(--quantum-feedback-warning)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-feedback-warning)",
        },
      },
    },
  ],
};
