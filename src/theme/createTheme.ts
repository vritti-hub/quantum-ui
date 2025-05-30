import { createTheme } from "@mui/material/styles";
import { ButtonTheme, TextFieldTheme } from "./components";
import { createSemanticColors } from "./semanticColors";
import { generateCSSVariables } from "./tokens";

export const createQuantumTheme = (mode: "light" | "dark") => {
  const semanticColors = createSemanticColors(mode);
  const cssVariables = generateCSSVariables(semanticColors);

  return createTheme({
    cssVariables: {
      colorSchemeSelector: '[data-theme="%s"]',
      disableCssColorScheme: true,
    },

    palette: {
      mode,
      primary: {
        main: semanticColors.action.primary,
      },
      secondary: {
        main: semanticColors.action.secondary,
      },
      error: {
        main: semanticColors.feedback.error,
      },
      warning: {
        main: semanticColors.feedback.warning,
      },
      info: {
        main: semanticColors.feedback.info,
      },
      success: {
        main: semanticColors.feedback.success,
      },
      background: {
        default: semanticColors.surface.primary,
        paper: semanticColors.surface.secondary,
      },
      text: {
        primary: semanticColors.text.primary,
        secondary: semanticColors.text.secondary,
        disabled: semanticColors.text.disabled,
      },
      divider: semanticColors.border.default,
    },

    typography: {
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '[data-theme="dark"]': generateCSSVariables(
            createSemanticColors("dark")
          ),

          // CSS variables for RGB values (for rgba usage)
          ":root": {
            ...cssVariables,
            "--quantum-action-primary-rgb":
              mode === "light" ? "99, 102, 241" : "139, 143, 255",
            "--quantum-shadow-small": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            "--quantum-shadow-medium": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "--quantum-shadow-large": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },
        },
      },

      MuiButton: ButtonTheme,
      MuiTextField: TextFieldTheme,
    },
  });
};
