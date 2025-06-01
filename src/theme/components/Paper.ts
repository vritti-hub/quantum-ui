import type { Components, Theme } from "@mui/material/styles";

export const PaperTheme: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-borderRadius-medium)",
      transition:
        "all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)",

      // Target data-variant attribute using CSS selector
      "&[data-variant='standard']": {
        backgroundColor: "var(--quantum-color-surface-primary)",
        border: "1px solid var(--quantum-color-border-default)",
        boxShadow: "var(--quantum-shadows-small)",
      },

      "&[data-variant='glass']": {
        backgroundColor: "var(--quantum-color-surface-secondary)",
        backdropFilter: "var(--quantum-glassmorphism-backdrop)",
        border: "1px solid var(--quantum-color-border-subtle)",
        boxShadow: "var(--quantum-shadows-glass)",
      },

      "&[data-variant='elevated']": {
        backgroundColor: "var(--quantum-color-surface-elevated)",
        border: "1px solid var(--quantum-color-border-subtle)",
        boxShadow: "var(--quantum-shadows-large)",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "var(--quantum-shadows-large)",
        },
      },

      "&[data-variant='subtle']": {
        backgroundColor: "var(--quantum-color-surface-secondary)",
        border: "1px solid var(--quantum-color-border-subtle)",
        boxShadow: "none",
      },
    },
  },
};
