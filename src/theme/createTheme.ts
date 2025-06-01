import { createTheme } from "@mui/material/styles";
import { ButtonTheme, PaperTheme, TextFieldTheme } from "./components";
import { createDesignTokens, generateCSSVariables } from "./tokens";

export const createQuantumTheme = (mode: "light" | "dark") => {
  const lightModeVariables = generateCSSVariables("light", 1024);
  const darkModeVariables = generateCSSVariables("dark", 1024);

  // Get design tokens for palette values
  const designTokens = createDesignTokens(mode, 1024);

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
