import type { Components, Theme } from "@mui/material/styles";

export const ButtonTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-border-radius-medium)",
      fontFamily: "var(--quantum-font-family)",
      fontWeight: 500,
      textTransform: "none",
      transition: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
      lineHeight: 1.5,
      cursor: "pointer",

      "&:focus-visible": {
        outline: "2px solid var(--quantum-action-primary)",
        outlineOffset: "2px",
      },

      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
        transform: "none",
      },

      // Hover animation for all buttons
      "&:hover:not(:disabled)": {
        transform: "translateY(-1px)",
      },

      "&:active": {
        transform: "translateY(0)",
      },

      // Target data-intent attribute using CSS selector
      "&[data-intent='primary']": {
        backgroundColor: "var(--quantum-action-primary)",
        color: "#FFFFFF",
        border: "none",
        boxShadow: "var(--quantum-shadow-small)",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-action-primary)",
          opacity: 0.9,
          boxShadow: "var(--quantum-shadow-medium)",
        },

        "&:active": {
          boxShadow: "var(--quantum-shadow-small)",
        },
      },

      "&[data-intent='secondary']": {
        backgroundColor: "transparent",
        color: "var(--quantum-action-primary)",
        border: "1.5px solid var(--quantum-action-primary)",
        boxShadow: "none",

        "&:hover:not(:disabled)": {
          backgroundColor: "rgba(var(--quantum-action-primary-rgb), 0.04)",
          borderColor: "var(--quantum-action-primary)",
        },
      },

      "&[data-intent='destructive']": {
        backgroundColor: "var(--quantum-feedback-error)",
        color: "#FFFFFF",
        border: "none",
        boxShadow: "var(--quantum-shadow-small)",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-feedback-error)",
          opacity: 0.9,
          boxShadow: "var(--quantum-shadow-medium)",
        },

        "&:active": {
          boxShadow: "var(--quantum-shadow-small)",
        },
      },

      "&[data-intent='ghost']": {
        backgroundColor: "transparent",
        color: "var(--quantum-text-secondary)",
        border: "none",
        boxShadow: "none",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-surface-secondary)",
          color: "var(--quantum-text-primary)",
        },

        "&:active": {
          backgroundColor: "var(--quantum-surface-secondary)",
        },
      },
    },

    // Size variants
    sizeSmall: {
      padding: "6px 16px",
      fontSize: "0.75rem",
    },

    sizeMedium: {
      padding: "10px 20px",
      fontSize: "0.875rem",
    },

    sizeLarge: {
      padding: "14px 28px",
      fontSize: "1rem",
    },
  },
};
