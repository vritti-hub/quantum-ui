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
        main: semanticColors.action.primary, // Your #1E40AF in both modes
        contrastText: semanticColors.text.inverse, // White/light text
      },
      secondary: {
        main: semanticColors.action.secondary,
        contrastText: semanticColors.text.inverse,
      },
      error: {
        main: semanticColors.feedback.error,
        contrastText: semanticColors.text.inverse,
      },
      warning: {
        main: semanticColors.feedback.warning,
        contrastText: semanticColors.text.inverse,
      },
      info: {
        main: semanticColors.feedback.info,
        contrastText: semanticColors.text.inverse,
      },
      success: {
        main: semanticColors.feedback.success,
        contrastText: semanticColors.text.inverse,
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
          ":root": {
            ...cssVariables,
            // Force RGB values for rgba usage
            "--quantum-action-primary-rgb":
              mode === "light" ? "30, 64, 175" : "30, 64, 175", // #1E40AF RGB
            "--quantum-shadow-small": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            "--quantum-shadow-medium": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "--quantum-shadow-large": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },

          '[data-theme="dark"]': {
            ...generateCSSVariables(createSemanticColors("dark")),
            "--quantum-action-primary-rgb": "30, 64, 175", // Same RGB in dark mode
          },
        },
      },

      MuiButton: ButtonTheme,

      MuiTextField: TextFieldTheme,
    },
  });
};
