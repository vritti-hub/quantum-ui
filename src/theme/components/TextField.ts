import type { Components, Theme } from "@mui/material/styles";

export const TextFieldTheme: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: {
      fontFamily: "var(--quantum-typography-fontFamily)",
      minWidth: "var(--quantum-textField-minWidth)",

      "& .MuiInputLabel-root": {
        fontFamily: "var(--quantum-typography-fontFamily-display)",
        fontSize: "var(--quantum-textField-fontSize)",
        fontWeight: "var(--quantum-typography-fontWeight-normal)",
        color: "var(--quantum-color-text-secondary)",

        "&.Mui-focused": {
          fontWeight: "var(--quantum-typography-fontWeight-normal)",
          color: "var(--quantum-color-text-secondary)",
        },

        "&.MuiInputLabel-shrunk": {
          fontSize: "var(--quantum-typography-fontSize-caption)",
          fontWeight: "var(--quantum-typography-fontWeight-normal)",
        },

        "&.Mui-disabled": {
          color: "var(--quantum-color-text-disabled)",
        },
      },

      "& .MuiFilledInput-root": {
        borderRadius: "var(--quantum-borderRadius-large)",
        backgroundColor: "var(--quantum-color-surface-input)",
        fontSize: "var(--quantum-textField-fontSize)",
        transition: "none",
        border: "1px solid var(--quantum-color-border-subtle)",
        minHeight: "var(--quantum-textField-height)",
        backdropFilter: "blur(8px)",
        boxShadow: "var(--quantum-shadows-textField)",

        "&:before": {
          display: "none",
        },

        "&:hover:not(.Mui-disabled):before": {
          display: "none",
        },

        "&:after": {
          display: "none",
        },

        "&:hover:not(.Mui-focused):not(.Mui-disabled)": {
          borderColor: "var(--quantum-color-action-primary)",
          boxShadow: "var(--quantum-shadows-textField)",
        },

        "&.Mui-focused": {
          backgroundColor: "var(--quantum-color-surface-input)",
          borderColor: "var(--quantum-color-action-primary)",
          boxShadow:
            "var(--quantum-shadows-large), 0 0 20px rgba(var(--quantum-color-action-primaryRGB), 0.15)",
        },

        "&.Mui-error": {
          borderColor: "var(--quantum-color-feedback-error)",
          boxShadow:
            "0 0 12px rgba(var(--quantum-color-feedback-errorRGB), 0.2)",
        },

        "&.Mui-disabled": {
          backgroundColor: "var(--quantum-color-surface-secondary)",
          borderColor: "var(--quantum-color-border-subtle)",
          opacity: 0.6,
        },
      },

      "& .MuiFilledInput-input": {
        paddingTop: "var(--quantum-textField-spacing-paddingTop)",
        paddingBottom: "var(--quantum-textField-spacing-paddingBottom)",
        paddingLeft: "var(--quantum-textField-spacing-paddingLeft)",
        paddingRight: "0px",
        height: "auto",
        color: "var(--quantum-color-text-primary)",
        fontSize: "var(--quantum-textField-fontSize)",
        fontWeight: "var(--quantum-typography-fontWeight-medium)",
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        letterSpacing: "-0.01em",

        "&::placeholder": {
          color: "var(--quantum-color-text-primary)",
          opacity: 0.6,
          fontWeight: "var(--quantum-typography-fontWeight-normal)",
        },

        "&:focus::placeholder": {
          color: "var(--quantum-color-text-primary)",
          opacity: 0.4,
          fontWeight: "var(--quantum-typography-fontWeight-light)",
        },

        "&:disabled": {
          color: "var(--quantum-color-text-disabled)",
          WebkitTextFillColor: "var(--quantum-color-text-disabled)",
        },
      },

      "& .MuiFormHelperText-root": {
        fontFamily: "var(--quantum-typography-variants-caption-fontFamily)",
        fontSize: "var(--quantum-typography-variants-caption-fontSize)",
        fontWeight: "var(--quantum-typography-variants-caption-fontWeight)",
        lineHeight: "var(--quantum-typography-variants-caption-lineHeight)",
        letterSpacing:
          "var(--quantum-typography-variants-caption-letterSpacing)",
        marginTop: "6px",
        marginLeft: "12px",
        color: "var(--quantum-color-text-secondary)",

        "&.Mui-error": {
          color: "var(--quantum-color-feedback-error)",
        },

        "&.Mui-disabled": {
          color: "var(--quantum-color-text-disabled)",
        },
      },
    },
  },

  variants: [
    // State variants with proper color theming
    {
      props: { color: "success" },
      style: {
        "& .MuiFilledInput-root": {
          borderColor: "var(--quantum-color-feedback-success)",
          boxShadow:
            "0 0 12px rgba(var(--quantum-color-feedback-successRGB), 0.2)",

          "&.Mui-focused": {
            borderColor: "var(--quantum-color-feedback-success)",
            boxShadow:
              "var(--quantum-shadows-large), 0 0 20px rgba(var(--quantum-color-feedback-successRGB), 0.15)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-feedback-success)",
        },

        "& .MuiFormHelperText-root:not(.Mui-error)": {
          color: "var(--quantum-color-feedback-success)",
        },
      },
    },

    {
      props: { color: "warning" },
      style: {
        "& .MuiFilledInput-root": {
          borderColor: "var(--quantum-color-feedback-warning)",
          boxShadow:
            "0 0 12px rgba(var(--quantum-color-feedback-warningRGB), 0.2)",

          "&.Mui-focused": {
            borderColor: "var(--quantum-color-feedback-warning)",
            boxShadow:
              "var(--quantum-shadows-large), 0 0 20px rgba(var(--quantum-color-feedback-warningRGB), 0.15)",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-feedback-warning)",
        },

        "& .MuiFormHelperText-root:not(.Mui-error)": {
          color: "var(--quantum-color-feedback-warning)",
        },
      },
    },

    {
      props: { color: "error" },
      style: {
        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-feedback-error)",
        },
      },
    },

    {
      props: { color: "primary" },
      style: {
        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quantum-color-action-primary)",
        },
      },
    },
  ],
};
