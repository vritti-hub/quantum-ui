import type { Components, Theme } from "@mui/material/styles";

export const ButtonTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-borderRadius-medium)",
      fontFamily: "var(--quantum-typography-fontFamily)",
      fontWeight: "var(--quantum-typography-fontWeight-medium)",
      textTransform: "none",
      transition:
        "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
      lineHeight: "var(--quantum-typography-lineHeight-normal)",
      cursor: "pointer",

      "&:focus-visible": {
        outline: "2px solid var(--quantum-color-action-primary)",
        outlineOffset: "2px",
      },

      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
        transform: "none",
      },

      "&:hover:not(:disabled)": {
        transform: "translateY(-1px)",
      },

      "&:active": {
        transform: "translateY(0)",
      },

      "&[data-intent='primary']": {
        backgroundColor: "var(--quantum-color-action-primary)",
        color: "var(--quantum-color-text-onPrimary)",
        border: "none",
        boxShadow: "var(--quantum-shadows-small)",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-color-action-primary)",
          opacity: 0.9,
          boxShadow: "var(--quantum-shadows-medium)",
        },

        "&:active": {
          boxShadow: "var(--quantum-shadows-small)",
        },
      },

      "&[data-intent='secondary']": {
        backgroundColor: "transparent",
        color: "var(--quantum-color-action-primary)",
        border: "1.5px solid var(--quantum-color-action-primary)",
        boxShadow: "none",

        "&:hover:not(:disabled)": {
          backgroundColor:
            "rgba(var(--quantum-color-action-primaryRGBA), 0.04)",
          borderColor: "var(--quantum-color-action-primary)",
        },
      },

      "&[data-intent='destructive']": {
        backgroundColor: "var(--quantum-color-feedback-error)",
        color: "var(--quantum-color-text-onDestructive)",
        border: "none",
        boxShadow: "var(--quantum-shadows-small)",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-color-feedback-error)",
          opacity: 0.9,
          boxShadow: "var(--quantum-shadows-medium)",
        },

        "&:active": {
          boxShadow: "var(--quantum-shadows-small)",
        },
      },

      // ✅ Ghost intent uses secondary text color (unchanged)
      "&[data-intent='ghost']": {
        backgroundColor: "transparent",
        color: "var(--quantum-color-text-secondary)",
        border: "none",
        boxShadow: "none",

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-color-surface-secondary)",
          color: "var(--quantum-color-text-primary)",
        },

        "&:active": {
          backgroundColor: "var(--quantum-color-surface-secondary)",
        },
      },
    },

    sizeSmall: {
      padding: "6px 16px",
      fontSize: "var(--quantum-typography-fontSize-body)",
    },

    sizeMedium: {
      padding: "10px 20px",
      fontSize: "var(--quantum-typography-fontSize-body)",
    },

    sizeLarge: {
      padding: "14px 28px",
      fontSize: "var(--quantum-typography-fontSize-body)",
    },
  },
};
