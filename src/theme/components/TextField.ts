import type { Components, Theme } from "@mui/material/styles";

export const TextFieldTheme: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: {
      fontFamily: "var(--quantum-typography-fontFamily)",

      "& .MuiInputLabel-root": {
        fontFamily: "inherit",
        fontSize: "var(--quantum-typography-fontSize-body)",
        fontWeight: "var(--quantum-typography-fontWeight-medium)",

        "&.Mui-focused": {
          fontWeight: "var(--quantum-typography-fontWeight-semibold)",
        },

        "&.MuiInputLabel-shrunk": {
          fontSize: "var(--quantum-typography-fontSize-caption)",
        },
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: "var(--quantum-borderRadius-medium)",
        fontSize: "var(--quantum-typography-fontSize-body)",
        transition:
          "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",

        "& fieldset": {
          borderColor: "var(--quantum-color-border-default)",
          transition:
            "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
        },

        "&:hover fieldset": {
          borderColor: "var(--quantum-color-border-subtle)",
        },

        "&.Mui-focused fieldset": {
          borderColor: "var(--quantum-color-action-primary)",
          borderWidth: "2px",
        },

        "&.Mui-error fieldset": {
          borderColor: "var(--quantum-color-feedback-error)",
        },

        "&.Mui-disabled": {
          backgroundColor: "var(--quantum-color-surface-secondary)",

          "& fieldset": {
            borderColor: "var(--quantum-color-border-subtle)",
          },
        },
      },

      "& .MuiFormHelperText-root": {
        fontFamily: "inherit",
        fontSize: "var(--quantum-typography-fontSize-caption)",
        marginTop: "6px",
        marginLeft: "4px",

        "&.Mui-error": {
          color: "var(--quantum-color-feedback-error)",
        },
      },

      "& .MuiInputBase-input": {
        color: "var(--quantum-color-text-primary)",

        "&::placeholder": {
          color: "var(--quantum-color-text-disabled)",
          opacity: 1,
        },

        "&:disabled": {
          color: "var(--quantum-color-text-disabled)",
          WebkitTextFillColor: "var(--quantum-color-text-disabled)",
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
          fontSize: "var(--quantum-typography-fontSize-caption)",

          "& .MuiOutlinedInput-input": {
            padding:
              "var(--quantum-spacing-normal) var(--quantum-spacing-comfortable)",
          },
        },

        "& .MuiInputLabel-root": {
          fontSize: "var(--quantum-typography-fontSize-caption)",

          "&.MuiInputLabel-shrunk": {
            fontSize: "calc(var(--quantum-typography-fontSize-caption) * 0.85)",
          },
        },
      },
    },

    {
      props: { size: "medium" },
      style: {
        "& .MuiOutlinedInput-input": {
          padding:
            "var(--quantum-spacing-comfortable) var(--quantum-spacing-spacious)",
        },
      },
    },

    // State variants
    {
      props: { color: "success" },
      style: {
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "var(--quantum-color-feedback-success)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-feedback-success)",
        },
      },
    },

    {
      props: { color: "warning" },
      style: {
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "var(--quantum-color-feedback-warning)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-feedback-warning)",
        },
      },
    },
  ],
};
