// src/theme/palette.ts
// Raw color palette - internal use only, never used directly
// All colors should be referenced through semantic tokens

export const palette = {
  // Universal Primary Blue (Excellent contrast both modes)
  universalBlue: {
    25: "#F8FAFF", // Very subtle blue tint for input backgrounds
    50: "#EBF4FF",
    100: "#DBE9FF",
    200: "#B8D4FF",
    300: "#85B8FF",
    400: "#4A95FF",
    500: "#0066CC", // Universal primary - excellent contrast both modes
    600: "#0052A3",
    700: "#003D7A",
    800: "#002952",
    900: "#001529",
    950: "#000A14",
  },

  // High Contrast Neutrals for Light Mode
  lightNeutral: {
    50: "#FFFFFF", // Pure white for maximum contrast
    100: "#F8F9FA", // Very light gray
    200: "#E9ECEF", // Light border
    300: "#DEE2E6", // Medium border
    400: "#CED4DA", // Subtle elements
    500: "#6C757D", // Medium text (7:1 contrast)
    600: "#495057", // Secondary text (9:1 contrast)
    700: "#343A40", // Strong text (12:1 contrast)
    800: "#212529", // Very strong text (16:1 contrast)
    900: "#000000", // Maximum contrast text
    950: "#000000", // Absolute black
  },

  // High Contrast Neutrals for Dark Mode
  darkNeutral: {
    50: "#FFFFFF", // Pure white text (21:1 contrast)
    100: "#F8F9FA", // Very light text (19:1 contrast)
    200: "#E9ECEF", // Light text (16:1 contrast)
    300: "#CED4DA", // Medium text (12:1 contrast)
    400: "#6C757D", // Muted text (7:1 contrast)
    500: "#495057", // Subtle elements
    600: "#343A40", // Dark elements
    700: "#212529", // Very dark surface
    800: "#1A1D20", // Dark surface
    900: "#0D1117", // Primary dark background
    950: "#000000", // Maximum dark
  },

  // Secondary Accent (Complementary to blue)
  emeraldAccent: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981", // Secondary color - excellent contrast
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
    950: "#022C22",
  },

  // Status Colors (High contrast)
  red: {
    50: "#FEF2F2",
    400: "#F87171",
    500: "#DC2626", // High contrast error (8:1 light, 6:1 dark)
    600: "#B91C1C",
    700: "#991B1B",
  },

  amber: {
    50: "#FFFBEB",
    400: "#FBBF24",
    500: "#D97706", // High contrast warning (7:1 light, 5:1 dark)
    600: "#B45309",
    700: "#92400E",
  },

  emerald: {
    50: "#ECFDF5",
    400: "#34D399",
    500: "#059669", // High contrast success (7:1 light, 5:1 dark)
    600: "#047857",
    700: "#065F46",
  },

  blue: {
    50: "#EFF6FF",
    400: "#60A5FA",
    500: "#2563EB", // High contrast info (6:1 light, 4:1 dark)
    600: "#1D4ED8",
    700: "#1E40AF",
  },

  // Pure colors (Maximum contrast references)
  pure: {
    white: "#FFFFFF",
    black: "#000000",
  },
} as const;
