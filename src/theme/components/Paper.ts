import type { Components, Theme } from "@mui/material/styles";

export const PaperTheme: Components<Theme>["MuiPaper"] = {
  styleOverrides: {
    root: {
      borderRadius: "var(--quantum-border-radius-medium)",
      transition: "all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",

      // Target data-variant attribute using CSS selector
      "&[data-variant='standard']": {
        backgroundColor: "var(--quantum-surface-primary)",
        border: "1px solid var(--quantum-border-default)",
        boxShadow: "var(--quantum-shadow-small)",
      },

      "&[data-variant='glass']": {
        backgroundColor: "var(--quantum-surface-glass)",
        backdropFilter: "var(--quantum-glass-backdrop)",
        border: "1px solid var(--quantum-border-glass)",
        boxShadow: "var(--quantum-shadow-glass)",
      },

      "&[data-variant='elevated']": {
        backgroundColor: "var(--quantum-surface-elevated)",
        border: "1px solid var(--quantum-border-subtle)",
        boxShadow: "var(--quantum-shadow-large)",

        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "var(--quantum-shadow-large)",
        },
      },

      "&[data-variant='subtle']": {
        backgroundColor: "var(--quantum-surface-secondary)",
        border: "1px solid var(--quantum-border-subtle)",
        boxShadow: "none",
      },
    },
  },
};
