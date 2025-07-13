import { createTheme } from '@mui/material/styles';
import { ButtonTheme, PaperTheme, TextFieldTheme } from './components';
import { getAllThemeVariables, SEMANTIC_TOKENS } from './semanticTokens';

export const createQuantumTheme = (mode: 'light' | 'dark') => {
  // Generate CSS variables for all breakpoints
  const { lightDesktop, lightMobile, lightTablet, darkDesktop, darkMobile, darkTablet } = getAllThemeVariables();

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
    // Note: Material-UI cssVariables disabled to prevent interference with our theme persistence
    // Our CSS variables are injected via MuiCssBaseline styleOverrides instead

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
      h1: {
        fontFamily: 'var(--quantum-typography-fontFamily-display)',
        fontSize: 'var(--quantum-typography-variants-display-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-display-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-display-fontWeight)',
        letterSpacing: 'var(--quantum-typography-variants-display-letterSpacing)',
        color: 'var(--quantum-color-text-primary)',
      },
      h2: {
        fontFamily: 'var(--quantum-typography-fontFamily-display)',
        fontSize: 'var(--quantum-typography-variants-h1-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-h1-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-h1-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
      },
      h3: {
        fontFamily: 'var(--quantum-typography-fontFamily-display)',
        fontSize: 'var(--quantum-typography-variants-h2-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-h2-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-h2-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
      },
      h4: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-h3-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-h3-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-h3-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
      },
      h5: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-h4-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-h4-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-h4-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
      },
      h6: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-caption-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-caption-lineHeight)',
        fontWeight: 'var(--quantum-typography-fontWeight-medium)',
        color: 'var(--quantum-color-text-secondary)',
      },
      body1: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-body1-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-body1-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-body1-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
      },
      body2: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-body2-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-body2-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-body2-fontWeight)',
        color: 'var(--quantum-color-text-secondary)',
      },
      button: {
        fontFamily: 'var(--quantum-typography-fontFamily-display)',
        fontSize: 'var(--quantum-typography-variants-button-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-button-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-button-fontWeight)',
        color: 'var(--quantum-color-text-primary)',
        textTransform: 'none',
      },
      caption: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontSize: 'var(--quantum-typography-variants-caption-fontSize)',
        lineHeight: 'var(--quantum-typography-variants-caption-lineHeight)',
        fontWeight: 'var(--quantum-typography-variants-caption-fontWeight)',
        color: 'var(--quantum-color-text-secondary)',
      },
      overline: {
        fontFamily: 'var(--quantum-typography-fontFamily-primary)',
        fontWeight: 'var(--quantum-typography-fontWeight-medium)',
        color: 'var(--quantum-color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      },
    },

    shape: {
      borderRadius: 8,
    },

    components: {
      // CSS Variables injection
      MuiCssBaseline: {
        styleOverrides: {
          '@keyframes quantumConfidenceRotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },

          // Energy burst animation for button clicks
          '@keyframes quantumEnergyBurst': {
            '0%': {
              transform: 'translate(-50%, -50%) scale(0)',
              opacity: 1,
            },
            '100%': {
              transform: 'translate(-50%, -50%) scale(2)',
              opacity: 0,
            },
          },

          // Warning rotate animation for destructive buttons (similar to primary)
          '@keyframes quantumWarningRotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },

          // Respect reduced motion preferences
          '@media (prefers-reduced-motion: reduce)': {
            '*': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.01ms !important',
            },
          },
          // Add Space Grotesk font loading
          '@font-face': {
            fontFamily: 'Space Grotesk',
            fontDisplay: 'swap',
          },

          // Light mode - mobile first (base styles)
          ':root': {
            ...lightMobile,
            // Ensure font is loaded
            fontFamily: SEMANTIC_TOKENS.typography.fontFamily.primary,
          },

          // Dark mode - mobile first
          '[data-theme="dark"]': darkMobile,

          // Light mode - tablet and up & Dark mode - tablet and up
          '@media (min-width: 768px)': {
            ':root': lightTablet,
            '[data-theme="dark"]': darkTablet,
          },

          // Light mode - desktop and up & Dark mode - desktop and up
          '@media (min-width: 1024px)': {
            ':root': lightDesktop,
            '[data-theme="dark"]': darkDesktop,
          },

          // Ensure all text uses Space Grotesk by default
          'html, body': {
            fontFamily: SEMANTIC_TOKENS.typography.fontFamily.primary,
            fontDisplay: 'swap',
          },
        },
      },

      // Component theme overrides
      MuiButton: ButtonTheme,
      MuiPaper: PaperTheme,
      MuiTextField: TextFieldTheme,
    },
  });

  return theme;
};
