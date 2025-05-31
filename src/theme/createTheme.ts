import { createTheme } from "@mui/material/styles";
import { ButtonTheme, PaperTheme, TextFieldTheme } from "./components";
import { createSemanticColors } from "./semanticColors";
import { generateCSSVariables } from "./tokens";

// ✅ Optimized: Pre-computed color constants
const COMMON_OVERRIDES = {
  "--quantum-action-primary-rgb": "0, 102, 204", // #0066CC RGB for both modes
  "--quantum-shadow-small": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "--quantum-shadow-medium": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  "--quantum-shadow-large": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
} as const;

// ✅ Optimized: Memoized semantic colors for dark mode
let darkModeColors: ReturnType<typeof createSemanticColors> | null = null;
const getDarkModeColors = () => {
  if (!darkModeColors) {
    darkModeColors = createSemanticColors("dark");
  }
  return darkModeColors;
};

export const createQuantumTheme = (mode: "light" | "dark") => {
  const semanticColors = createSemanticColors(mode);
  const lightModeVariables = generateCSSVariables(semanticColors);

  // ✅ Optimized: Only generate dark mode variables when needed
  const darkModeVariables =
    mode === "light" ? generateCSSVariables(getDarkModeColors()) : {};

  return createTheme({
    cssVariables: {
      colorSchemeSelector: '[data-theme="%s"]',
      disableCssColorScheme: true,
    },

    palette: {
      mode,
      primary: {
        main: semanticColors.action.primary, // Universal #0066CC in both modes
        contrastText: semanticColors.text.inverse,
      },
      secondary: {
        main: semanticColors.action.secondary, // Emerald green #10B981
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
            ...lightModeVariables,
            ...COMMON_OVERRIDES,
          },
          // ✅ Optimized: Conditional dark mode styles
          ...(mode === "light" && {
            '[data-theme="dark"]': {
              ...darkModeVariables,
              ...COMMON_OVERRIDES,
            },
          }),
        },
      },

      MuiButton: ButtonTheme,
      MuiPaper: PaperTheme,
      MuiTextField: TextFieldTheme,
    },
  });
};
