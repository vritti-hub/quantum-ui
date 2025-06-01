// src/theme/tokens.ts

import {
  calculateFontSize,
  calculateLineHeight,
  calculateSpacing,
} from "./calculations";
import { generateCSSVariablesFromTokens } from "./cssVariableGenerator";
import { createSemanticColors } from "./semanticColors";

export const createDesignTokens = (
  mode: "light" | "dark",
  screenWidth: number
) => ({
  color: createSemanticColors(mode),

  spacing: {
    tight: calculateSpacing(screenWidth, {
      mobile: "4px",
      tablet: "4px",
      desktop: "4px",
    }),
    normal: calculateSpacing(screenWidth, {
      mobile: "8px",
      tablet: "8px",
      desktop: "8px",
    }),
    comfortable: calculateSpacing(screenWidth, {
      mobile: "12px",
      tablet: "16px",
      desktop: "20px",
    }),
    spacious: calculateSpacing(screenWidth, {
      mobile: "16px",
      tablet: "24px",
      desktop: "32px",
    }),
    loose: calculateSpacing(screenWidth, {
      mobile: "24px",
      tablet: "32px",
      desktop: "48px",
    }),
  },

  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

    fontSize: {
      caption: calculateFontSize(screenWidth, {
        mobile: "0.75rem",
        tablet: "0.75rem",
        desktop: "0.75rem",
      }),
      body: calculateFontSize(screenWidth, {
        mobile: "0.875rem",
        tablet: "1rem",
        desktop: "1rem",
      }),
      heading: calculateFontSize(screenWidth, {
        mobile: "1.25rem",
        tablet: "1.5rem",
        desktop: "1.875rem",
      }),
      display: calculateFontSize(screenWidth, {
        mobile: "1.875rem",
        tablet: "2.25rem",
        desktop: "3rem",
      }),
    },

    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    lineHeight: {
      tight: calculateLineHeight(screenWidth, {
        mobile: 1.2,
        tablet: 1.2,
        desktop: 1.1,
      }),
      normal: calculateLineHeight(screenWidth, {
        mobile: 1.4,
        tablet: 1.4,
        desktop: 1.4,
      }),
      comfortable: calculateLineHeight(screenWidth, {
        mobile: 1.5,
        tablet: 1.5,
        desktop: 1.6,
      }),
      relaxed: calculateLineHeight(screenWidth, {
        mobile: 1.6,
        tablet: 1.7,
        desktop: 1.7,
      }),
    },
  },

  borderRadius: {
    none: "0px",
    small: "4px",
    medium: "8px",
    large: "12px",
    full: "9999px",
  },

  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    glassInset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
  },

  glassmorphism: {
    backdrop: "blur(16px)",
    backdropLight: "blur(8px)",
    backdropHeavy: "blur(24px)",
  },

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
});

export const generateCSSVariables = (
  mode: "light" | "dark",
  screenWidth: number
): Record<string, string> => {
  return generateCSSVariablesFromTokens(createDesignTokens(mode, screenWidth));
};
