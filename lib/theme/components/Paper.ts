import type { Components, Theme } from "@mui/material/styles";

export const PaperTheme: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-borderRadius-medium)",
      transition:
        "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",

      // ========================================
      // NEW: Universal variants for landing pages, apps, and forms
      // ========================================

      "&[data-variant='section']": {
        backgroundColor: "var(--quantum-color-surface-secondary)",
        borderRadius: "var(--quantum-borderRadius-medium)",
        padding: "var(--quantum-spacing-comfortable)",
        border: "1px solid var(--quantum-color-border-subtle)",
        boxShadow: "var(--quantum-shadows-small)",
        transition: "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
        
        // Responsive padding
        "@media (min-width: 768px)": {
          padding: "var(--quantum-spacing-spacious)",
          borderRadius: "var(--quantum-borderRadius-large)",
        },
        
        // Full-width for landing pages
        "&[data-fullwidth='true']": {
          borderRadius: "0",
          border: "none",
          padding: "var(--quantum-spacing-loose) var(--quantum-spacing-normal)",
        }
      },

      "&[data-variant='surface']": {
        backgroundColor: "var(--quantum-color-surface-primary)",
        borderRadius: "var(--quantum-borderRadius-large)",
        border: "1px solid var(--quantum-color-border-default)",
        boxShadow: "var(--quantum-shadows-medium)",
        padding: "var(--quantum-spacing-comfortable)",
        transition: "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
        
        // Interactive state for forms/apps
        "&:hover": {
          borderColor: "var(--quantum-color-border-glassAccent)",
          boxShadow: "var(--quantum-shadows-large)",
        },
        
        // Focus state for form containers
        "&:focus-within": {
          borderColor: "var(--quantum-color-action-primary)",
          boxShadow: "0 0 0 3px rgba(var(--quantum-color-action-primaryRGB), 0.1)",
        }
      },

      "&[data-variant='accent']": {
        background: "linear-gradient(135deg, rgba(var(--quantum-color-action-primaryRGB), 0.08) 0%, rgba(var(--quantum-color-action-primaryRGB), 0.12) 100%)",
        borderRadius: "var(--quantum-borderRadius-large)",
        border: "1px solid rgba(var(--quantum-color-action-primaryRGB), 0.2)",
        boxShadow: "var(--quantum-shadows-glass)",
        backdropFilter: "var(--quantum-glassmorphism-backdropLight)",
        padding: "var(--quantum-spacing-comfortable)",
        position: "relative",
        transition: "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",
        
        // Subtle glow effect
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(var(--quantum-color-action-primaryRGB), 0.3) 50%, transparent 100%)",
          borderRadius: "var(--quantum-borderRadius-large) var(--quantum-borderRadius-large) 0 0",
        },
        
        // Enhanced for landing page CTAs
        "&[data-emphasis='high']": {
          background: "linear-gradient(135deg, rgba(var(--quantum-color-action-primaryRGB), 0.15) 0%, rgba(var(--quantum-color-action-primaryRGB), 0.2) 100%)",
          border: "2px solid rgba(var(--quantum-color-action-primaryRGB), 0.3)",
          boxShadow: "var(--quantum-shadows-glass), 0 0 20px rgba(var(--quantum-color-action-primaryRGB), 0.15)",
        }
      },

      "&[data-variant='minimal']": {
        backgroundColor: "var(--quantum-color-surface-input)",
        borderRadius: "var(--quantum-borderRadius-medium)",
        border: "1px solid var(--quantum-color-border-subtle)",
        padding: "var(--quantum-spacing-normal)",
        transition: "all var(--quantum-animation-duration-fast) var(--quantum-animation-easing-standard)",
        
        // Form input styling
        "&[data-input='true']": {
          backgroundColor: "var(--quantum-color-surface-input)",
          padding: "var(--quantum-textField-spacing-paddingTop) var(--quantum-textField-spacing-paddingLeft)",
          minHeight: "var(--quantum-textField-height)",
          display: "flex",
          alignItems: "center",
        },
        
        // Hover state
        "&:hover": {
          backgroundColor: "var(--quantum-color-surface-secondary)",
          borderColor: "var(--quantum-color-border-default)",
        },
        
        // Navigation/sidebar styling
        "&[data-nav='true']": {
          backgroundColor: "var(--quantum-color-surface-glass)",
          backdropFilter: "var(--quantum-glassmorphism-backdrop)",
          border: "1px solid var(--quantum-color-border-glass)",
        }
      },

      "&[data-variant='feature']": {
        backgroundColor: "var(--quantum-color-surface-elevated)",
        borderRadius: "var(--quantum-borderRadius-large)",
        border: "1px solid var(--quantum-color-border-default)",
        boxShadow: "var(--quantum-shadows-large)",
        padding: "var(--quantum-spacing-spacious)",
        position: "relative",
        overflow: "hidden",
        transition: "all var(--quantum-animation-duration-slow) var(--quantum-animation-easing-standard)",
        
        // Premium shine effect
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
          transition: "left var(--quantum-animation-duration-slow) var(--quantum-animation-easing-standard)",
        },
        
        // Interactive hover state
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "var(--quantum-shadows-xl)",
          borderColor: "var(--quantum-color-border-glassAccent)",
          
          "&::before": {
            left: "100%",
          }
        },
        
        // Glass variant for landing pages
        "&[data-glass='true']": {
          backgroundColor: "var(--quantum-color-surface-glass)",
          backdropFilter: "var(--quantum-glassmorphism-backdrop)",
          border: "1px solid var(--quantum-color-border-glass)",
          boxShadow: "var(--quantum-shadows-glass)",
        },
        
        // Compact variant for app UI
        "&[data-compact='true']": {
          padding: "var(--quantum-spacing-comfortable)",
          borderRadius: "var(--quantum-borderRadius-large)",
        }
      },
    },
  },
};
