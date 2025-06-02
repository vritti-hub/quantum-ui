import { createTheme } from "@mui/material/styles";
import {
  ButtonTheme,
  PaperTheme,
  TextFieldTheme,
  TypographyTheme,
} from "./components";
import { getAllThemeVariables, SEMANTIC_TOKENS } from "./semanticTokens";

export const createQuantumTheme = (mode: "light" | "dark") => {
  // Generate CSS variables for all breakpoints
  const {
    lightDesktop,
    lightMobile,
    lightTablet,
    darkDesktop,
    darkMobile,
    darkTablet,
  } = getAllThemeVariables();

  // Get current mode colors for MUI palette
  const colors = SEMANTIC_TOKENS.colors;
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
      // Base typography settings - Space Grotesk for everything
      fontFamily: SEMANTIC_TOKENS.typography.fontFamily.primary,
      fontWeightLight: SEMANTIC_TOKENS.typography.fontWeight.light,
      fontWeightRegular: SEMANTIC_TOKENS.typography.fontWeight.normal,
      fontWeightMedium: SEMANTIC_TOKENS.typography.fontWeight.medium,
      fontWeightBold: SEMANTIC_TOKENS.typography.fontWeight.bold,

      // Override MUI's default responsive font sizes to use our tokens
      // These will be overridden by our Typography component theme
      fontSize: 16, // Base font size
      htmlFontSize: 16,
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      // CSS Variables injection
      MuiCssBaseline: {
        styleOverrides: {
          // Add Space Grotesk font loading
          "@font-face": {
            fontFamily: "Space Grotesk",
            fontDisplay: "swap",
          },

          // Light mode - mobile first (base styles)
          ":root": {
            ...lightMobile,
            // Ensure font is loaded
            fontFamily: SEMANTIC_TOKENS.typography.fontFamily.primary,
          },

          // Dark mode - mobile first
          '[data-theme="dark"]': darkMobile,

          // Light mode - tablet and up & Dark mode - tablet and up
          "@media (min-width: 768px)": {
            ":root": lightTablet,
            '[data-theme="dark"]': darkTablet,
          },

          // Light mode - desktop and up & Dark mode - desktop and up
          "@media (min-width: 1024px)": {
            ":root": lightDesktop,
            '[data-theme="dark"]': darkDesktop,
          },

          // Ensure all text uses Space Grotesk by default
          "html, body": {
            fontFamily: SEMANTIC_TOKENS.typography.fontFamily.primary,
            fontDisplay: "swap",
          },
        },
      },

      // Component theme overrides
      MuiButton: ButtonTheme,
      MuiPaper: PaperTheme,
      MuiTextField: TextFieldTheme,
      MuiTypography: TypographyTheme, // ✅ Add Typography theme
    },
  });

  return theme;
};
