import type { Components, Theme } from "@mui/material/styles";

export const ButtonTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-borderRadius-medium)",
      fontFamily: "var(--quantum-typography-fontFamily-display)", // Space Grotesk for buttons
      fontWeight: "var(--quantum-typography-fontWeight-medium)",
      fontSize: "var(--quantum-typography-variants-button-fontSize)",
      lineHeight: "var(--quantum-typography-variants-button-lineHeight)",
      textTransform: "none",
      transition:
        "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",

      "&:focus-visible": {
        outline: "2px solid var(--quantum-color-action-primary)",
        outlineOffset: "2px",
      },

      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
        transform: "none",

        // Disable all effects when disabled
        "&::before, &::after": {
          display: "none",
        },
      },

      "&:hover:not(:disabled)": {
        transform: "translateY(-1px)",
      },

      "&:active": {
        transform: "translateY(0)",
      },

      // ======================
      // PRIMARY: PROMINENT CONFIDENCE
      // ======================
      "&[data-intent='primary']": {
        backgroundColor: "var(--quantum-color-action-primary)",
        color: "var(--quantum-color-text-onPrimary)",
        border: "none",
        boxShadow:
          "0 4px 14px 0 rgba(var(--quantum-color-action-primaryRGB), 0.3)",

        // Confident energy field - slower rotating radial gradient with primary color only
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-2px",
          background: `
            radial-gradient(
              ellipse at top left,
              var(--quantum-color-action-primary) 0%,
              transparent 50%
            ), 
            radial-gradient(
              ellipse at bottom right,
              var(--quantum-color-action-primary) 0%,
              transparent 50%
            )
          `,
          borderRadius: "inherit",
          zIndex: -1,
          opacity: 0,
          animation: "quantumConfidenceRotate 6s linear infinite",
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        },

        "&:hover:not(:disabled)": {
          // ✅ FIXED: Using CSS color-mix instead of hardcoded values
          backgroundColor:
            "color-mix(in srgb, var(--quantum-color-action-primary) 85%, var(--quantum-color-text-primary))",
          boxShadow: `
            0 6px 10px 0 rgba(var(--quantum-color-action-primaryRGB), 0.4),
            0 0 10px rgba(var(--quantum-color-action-primaryRGB), 0.6),
            inset 0 0 10px var(--quantum-effects-shimmer)
          `,
          transform: "translateY(-2px)",

          "&::before": {
            opacity: 0.6,
          },
        },

        // ✅ UNIFIED: Click energy burst effect
        "&:active::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(var(--quantum-color-action-primaryRGB), 0.6) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) scale(0)",
          animation: "quantumEnergyBurst 0.5s ease-out",
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            opacity: 0,
          },
        },
      },

      // ======================
      // SECONDARY: NOTICEABLE INTELLIGENCE
      // ======================
      "&[data-intent='secondary']": {
        backgroundColor: "transparent",
        color: "var(--quantum-color-action-primary)",
        border: "1.5px solid var(--quantum-color-action-primary)",
        boxShadow: "none",

        "&:hover:not(:disabled)": {
          backgroundColor:
            "rgba(var(--quantum-color-action-secondaryRGB), 0.08)",
          borderColor: "var(--quantum-color-action-secondary)",
          boxShadow:
            "0 2px 8px rgba(var(--quantum-color-action-secondaryRGB), 0.5)",
          color: "var(--quantum-color-action-secondary)",
        },
      },

      // ======================
      // DESTRUCTIVE: PROMINENT WARNING (IDENTICAL TO PRIMARY)
      // ======================
      "&[data-intent='destructive']": {
        backgroundColor: "var(--quantum-color-feedback-error)",
        color: "var(--quantum-color-text-onDestructive)",
        border: "none",
        boxShadow:
          "0 4px 14px 0 rgba(var(--quantum-color-feedback-errorRGB), 0.3)",

        // ✅ UNIFIED: Identical confidence energy field effect (same as primary)
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-2px",
          background: `
            radial-gradient(
              ellipse at top left,
              var(--quantum-color-feedback-error) 0%,
              transparent 50%
            ), 
            radial-gradient(
              ellipse at bottom right,
              var(--quantum-color-feedback-error) 0%,
              transparent 50%
            )
          `,
          borderRadius: "inherit",
          zIndex: -1,
          opacity: 0,
          animation: "quantumConfidenceRotate 6s linear infinite", // ✅ UNIFIED: Same timing as primary
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        },

        "&:hover:not(:disabled)": {
          // ✅ UNIFIED: Same hover effects as primary
          backgroundColor:
            "color-mix(in srgb, var(--quantum-color-feedback-error) 85%, var(--quantum-color-text-primary))",
          boxShadow: `
            0 6px 10px 0 rgba(var(--quantum-color-feedback-errorRGB), 0.4),
            0 0 10px rgba(var(--quantum-color-feedback-errorRGB), 0.6),
            inset 0 0 10px var(--quantum-effects-shimmer)
          `,
          transform: "translateY(-2px)",

          "&::before": {
            opacity: 0.6,
          },
        },

        // ✅ UNIFIED: Identical click energy burst effect
        "&:active::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(var(--quantum-color-feedback-errorRGB), 0.6) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) scale(0)",
          animation: "quantumEnergyBurst 0.5s ease-out",
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            opacity: 0,
          },
        },
      },

      // ======================
      // GHOST: SUBTLE PRESENCE
      // ======================
      "&[data-intent='ghost']": {
        backgroundColor: "transparent",
        color: "var(--quantum-color-text-secondary)",
        border: "none",
        boxShadow: "none",

        // Subtle intelligence hint
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(
            circle at center,
            rgba(var(--quantum-color-action-primaryRGB), 0.05) 0%,
            transparent 70%
          )`,
          borderRadius: "inherit",
          opacity: 0,
          transition: "opacity 0.4s ease",
        },

        "&:hover:not(:disabled)": {
          backgroundColor: "var(--quantum-color-surface-secondary)",
          color: "var(--quantum-color-action-primary)",
          boxShadow:
            "0 2px 8px rgba(var(--quantum-color-action-primaryRGB), 0.1)",

          "&::before": {
            opacity: 1,
          },
        },
      },
    },

    // ✅ ENHANCED: Consistent size variants with proper scaling
    sizeSmall: {
      padding:
        "var(--quantum-spacing-tight) var(--quantum-spacing-comfortable)",
      fontSize: "var(--quantum-typography-variants-caption-fontSize)",
      lineHeight: "var(--quantum-typography-variants-caption-lineHeight)",
      minHeight: "32px",
    },

    sizeMedium: {
      padding: "var(--quantum-spacing-normal) var(--quantum-spacing-spacious)",
      fontSize: "var(--quantum-typography-variants-button-fontSize)",
      lineHeight: "var(--quantum-typography-variants-button-lineHeight)",
      minHeight: "40px",
    },

    sizeLarge: {
      padding:
        "var(--quantum-spacing-comfortable) var(--quantum-spacing-loose)",
      fontSize: "var(--quantum-typography-variants-body2-fontSize)",
      lineHeight: "var(--quantum-typography-variants-body2-lineHeight)",
      minHeight: "48px",
    },
  },
};
