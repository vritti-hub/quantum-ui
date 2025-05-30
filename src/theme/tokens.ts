import { colorPalette } from "./colors";
import { createSemanticColors } from "./semanticColors";

export const designTokens = {
  // Spacing (8px base unit)
  spacing: {
    tight: "4px",
    normal: "8px",
    comfortable: "16px",
    spacious: "24px",
    loose: "32px",
  },

  // Typography
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      caption: "0.75rem", // 12px
      body: "0.875rem", // 14px
      label: "0.875rem", // 14px
      button: "0.875rem", // 14px
      heading: "1rem", // 16px
      display: "1.125rem", // 18px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      comfortable: 1.5,
      relaxed: 1.6,
    },
  },

  // Border radius
  borderRadius: {
    none: "0px",
    small: "4px",
    medium: "8px",
    large: "12px",
    full: "9999px",
  },

  // Shadows
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    glow: "0 0 0 1px rgba(192, 132, 252, 0.1), 0 4px 12px rgba(192, 132, 252, 0.15)", // Updated to purple glow
  },

  // Animation
  animation: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
    },
    easing: {
      standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      accelerate: "cubic-bezier(0.4, 0.0, 1, 1)",
    },
  },

  // Breakpoints (semantic)
  breakpoints: {
    compact: "480px",
    comfortable: "768px",
    spacious: "1024px",
    expansive: "1200px",
  },
};

// Generate CSS variables
export const generateCSSVariables = (
  semanticColors: ReturnType<typeof createSemanticColors>
) => {
  const cssVars: Record<string, string> = {};

  // Color variables
  Object.entries(semanticColors).forEach(([category, colors]) => {
    Object.entries(colors).forEach(([variant, color]) => {
      cssVars[`--quantum-${category}-${variant}`] = color;
    });
  });

  // Design token variables
  Object.entries(designTokens.spacing).forEach(([key, value]) => {
    cssVars[`--quantum-spacing-${key}`] = value;
  });

  Object.entries(designTokens.borderRadius).forEach(([key, value]) => {
    cssVars[`--quantum-border-radius-${key}`] = value;
  });

  // Typography variables
  cssVars["--quantum-font-family"] = designTokens.typography.fontFamily;

  return cssVars;
};

// Export for developer experience (Dark Tech Theme)
export const quantumColors = {
  palette: colorPalette,
  light: createSemanticColors("light"),
  dark: createSemanticColors("dark"),
  primary: colorPalette.darkBlue[700], // Your chosen deep blue #1E40AF
  secondary: colorPalette.cyan[500], // Futuristic cyan accent #06B6D4
  accent: colorPalette.cyan[400], // Neon highlights #22D3EE
  vritti: colorPalette.vritti,
};
