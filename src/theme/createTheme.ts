import { createTheme } from "@mui/material/styles";
import { ButtonTheme, PaperTheme, TextFieldTheme } from "./components";
import { SEMANTIC_TOKENS, getAllVariables } from "./semanticTokens";

const themeCache = new Map<string, ReturnType<typeof createTheme>>();

const generateThemeCacheKey = (
  mode: "light" | "dark",
  screenWidth: number
): string => {
  // Round screen width to reduce cache entries
  const roundedWidth = Math.round(screenWidth / 50) * 50;
  return `${mode}-${roundedWidth}`;
};

export const createQuantumTheme = (
  mode: "light" | "dark",
  screenWidth: number
) => {
  const width = screenWidth;
  const cacheKey = generateThemeCacheKey(mode, width);

  // Return cached theme if available
  if (themeCache.has(cacheKey)) {
    return themeCache.get(cacheKey)!;
  }

  // Generate CSS variables for both modes
  const lightModeVariables = getAllVariables("light", width);
  const darkModeVariables = getAllVariables("dark", width);

  // Get current mode colors for MUI palette
  const colors = SEMANTIC_TOKENS.color;
  const currentModeColors = {
    actionPrimary: colors.action.primary[mode],
    actionSecondary: colors.action.secondary[mode],
    feedbackError: colors.feedback.error[mode],
    feedbackWarning: colors.feedback.warning[mode],
    feedbackInfo: colors.feedback.info[mode],
    feedbackSuccess: colors.feedback.success[mode],
    surfacePrimary: colors.surface.primary[mode],
    surfaceSecondary: colors.surface.secondary[mode],
    textPrimary: colors.text.primary[mode],
    textSecondary: colors.text.secondary[mode],
    textDisabled: colors.text.disabled[mode],
    borderDefault: colors.border.default[mode],
  };

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: '[data-theme="%s"]',
      disableCssColorScheme: true,
    },

    palette: {
      mode,
      primary: {
        main: currentModeColors.actionPrimary,
        contrastText: currentModeColors.textPrimary,
      },
      secondary: {
        main: currentModeColors.actionSecondary,
        contrastText: currentModeColors.textPrimary,
      },
      error: {
        main: currentModeColors.feedbackError,
        contrastText: currentModeColors.textPrimary,
      },
      warning: {
        main: currentModeColors.feedbackWarning,
        contrastText: currentModeColors.textPrimary,
      },
      info: {
        main: currentModeColors.feedbackInfo,
        contrastText: currentModeColors.textPrimary,
      },
      success: {
        main: currentModeColors.feedbackSuccess,
        contrastText: currentModeColors.textPrimary,
      },
      background: {
        default: currentModeColors.surfacePrimary,
        paper: currentModeColors.surfaceSecondary,
      },
      text: {
        primary: currentModeColors.textPrimary,
        secondary: currentModeColors.textSecondary,
        disabled: currentModeColors.textDisabled,
      },
      divider: currentModeColors.borderDefault,
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

  themeCache.set(cacheKey, theme);
  return theme;
};
