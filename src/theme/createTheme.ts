// src/theme/createTheme.ts

import { createTheme } from "@mui/material/styles";
import { ButtonTheme, PaperTheme, TextFieldTheme } from "./components";
import { createDesignTokens, generateCSSVariables } from "./tokens";

const getScreenWidth = (): number => {
  if (typeof window !== "undefined") {
    return window.innerWidth;
  }
  return 1024; // Default for SSR
};

export const createQuantumTheme = (mode: "light" | "dark") => {
  const screenWidth = getScreenWidth();

  const lightModeVariables = generateCSSVariables("light", screenWidth);
  const darkModeVariables = generateCSSVariables("dark", screenWidth);

  // Get design tokens for palette values using actual screen width
  const designTokens = createDesignTokens(mode, screenWidth);

  console.log(lightModeVariables);
  // Log the design tokens for debugging

  return createTheme({
    cssVariables: {
      colorSchemeSelector: '[data-theme="%s"]',
      disableCssColorScheme: true,
    },

    palette: {
      mode,
      primary: {
        main: designTokens.color.action.primary,
        contrastText: designTokens.color.text.primary,
      },
      secondary: {
        main: designTokens.color.action.secondary,
        contrastText: designTokens.color.text.primary,
      },
      error: {
        main: designTokens.color.feedback.error,
        contrastText: designTokens.color.text.primary,
      },
      warning: {
        main: designTokens.color.feedback.warning,
        contrastText: designTokens.color.text.primary,
      },
      info: {
        main: designTokens.color.feedback.info,
        contrastText: designTokens.color.text.primary,
      },
      success: {
        main: designTokens.color.feedback.success,
        contrastText: designTokens.color.text.primary,
      },
      background: {
        default: designTokens.color.surface.primary,
        paper: designTokens.color.surface.secondary,
      },
      text: {
        primary: designTokens.color.text.primary,
        secondary: designTokens.color.text.secondary,
        disabled: designTokens.color.text.disabled,
      },
      divider: designTokens.color.border.default,
    },

    typography: {
      fontFamily: "var(--quantum-typography-fontFamily)",
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": lightModeVariables,
          '[data-theme="dark"]': darkModeVariables,
        },
      },

      MuiButton: ButtonTheme,
      MuiPaper: PaperTheme,
      MuiTextField: TextFieldTheme,
    },
  });
};
