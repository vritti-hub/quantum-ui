import type { Components, Theme } from "@mui/material/styles";

export const ButtonTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-borderRadius-medium)",
      fontFamily: "var(--quantum-typography-fontFamily-display)", // Space Grotesk for buttons
      fontWeight: "var(--quantum-typography-fontWeight-medium)",
      fontSize: "var(--quantum-typography-variants-button-fontSize)", // Use button variant size
      lineHeight: "var(--quantum-typography-variants-button-lineHeight)",
      textTransform: "none",
      transition:
        "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
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

    // ✅ UPDATED: More compact sizes using CSS variables
    sizeSmall: {
      padding:
        "var(--quantum-spacing-tight) var(--quantum-spacing-comfortable)", // 4px 12px on mobile, scales up
      fontSize: "var(--quantum-typography-variants-caption-fontSize)", // Smaller text for compact buttons
      lineHeight: "var(--quantum-typography-variants-caption-lineHeight)",
      minHeight: "32px", // Ensure good touch target
    },

    sizeMedium: {
      padding: "var(--quantum-spacing-normal) var(--quantum-spacing-spacious)", // 8px 16px on mobile, scales up
      fontSize: "var(--quantum-typography-variants-button-fontSize)", // Standard button text size
      lineHeight: "var(--quantum-typography-variants-button-lineHeight)",
      minHeight: "40px", // Good balance for business interfaces
    },

    sizeLarge: {
      padding:
        "var(--quantum-spacing-comfortable) var(--quantum-spacing-loose)", // 12px 24px on mobile, scales up
      fontSize: "var(--quantum-typography-variants-body2-fontSize)", // Slightly larger for emphasis
      lineHeight: "var(--quantum-typography-variants-body2-lineHeight)",
      minHeight: "48px", // Prominent buttons
    },
  },
};
