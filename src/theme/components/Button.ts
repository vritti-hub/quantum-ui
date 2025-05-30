import type { Components, Theme } from "@mui/material/styles";

export const ButtonTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-border-radius-medium)",
      fontFamily: "var(--quantum-font-family)",
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
      padding:
        "var(--quantum-spacing-normal) var(--quantum-spacing-comfortable)",
      transition: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
      lineHeight: 1.5,

      "&:hover": {
        transform: "translateY(-1px)",
      },

      "&:active": {
        transform: "translateY(0)",
      },

      "&:focus-visible": {
        outline: "2px solid var(--quantum-action-primary)",
        outlineOffset: "2px",
      },

      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
        transform: "none",
      },
    },

    // Size variants
    sizeSmall: {
      padding: "6px 12px",
      fontSize: "0.75rem",
    },

    sizeLarge: {
      padding: "12px 24px",
      fontSize: "1rem",
    },

    // Contained variant (emphasis: high)
    contained: {
      boxShadow: "var(--quantum-shadow-small)",
      "&:hover": {
        boxShadow: "var(--quantum-shadow-medium)",
      },
    },

    // Outlined variant (emphasis: medium)
    outlined: {
      borderWidth: "1.5px",
      "&:hover": {
        borderWidth: "1.5px",
        backgroundColor: "rgba(var(--quantum-action-primary-rgb), 0.04)",
      },
    },

    // Text variant (emphasis: low)
    text: {
      "&:hover": {
        backgroundColor: "rgba(var(--quantum-action-primary-rgb), 0.04)",
      },
    },
  },

  variants: [
    // Semantic intent variants
    {
      props: { color: "primary" },
      style: {
        "&.MuiButton-contained": {
          backgroundColor: "var(--quantum-action-primary)",
          color: "var(--quantum-text-inverse)",
          "&:hover": {
            backgroundColor: "var(--quantum-action-primary)",
            opacity: 0.9,
          },
        },
        "&.MuiButton-outlined": {
          borderColor: "var(--quantum-action-primary)",
          color: "var(--quantum-action-primary)",
          "&:hover": {
            borderColor: "var(--quantum-action-primary)",
          },
        },
        "&.MuiButton-text": {
          color: "var(--quantum-action-primary)",
        },
      },
    },

    {
      props: { color: "secondary" },
      style: {
        "&.MuiButton-contained": {
          backgroundColor: "var(--quantum-action-secondary)",
          color: "var(--quantum-text-primary)",
          "&:hover": {
            backgroundColor: "var(--quantum-action-secondary)",
            opacity: 0.9,
          },
        },
        "&.MuiButton-outlined": {
          borderColor: "var(--quantum-action-secondary)",
          color: "var(--quantum-action-secondary)",
        },
        "&.MuiButton-text": {
          color: "var(--quantum-action-secondary)",
        },
      },
    },

    {
      props: { color: "error" },
      style: {
        "&.MuiButton-contained": {
          backgroundColor: "var(--quantum-feedback-error)",
          color: "var(--quantum-text-inverse)",
          "&:hover": {
            backgroundColor: "var(--quantum-feedback-error)",
            opacity: 0.9,
          },
        },
        "&.MuiButton-outlined": {
          borderColor: "var(--quantum-feedback-error)",
          color: "var(--quantum-feedback-error)",
        },
        "&.MuiButton-text": {
          color: "var(--quantum-feedback-error)",
        },
      },
    },
  ],
};
