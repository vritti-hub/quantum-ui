import { colorPalette } from "./colors";

// Helper function to create 8-character hex from hex color and opacity percentage
const createHex = (hexColor: string, opacity: number): string => {
  // Convert opacity percentage (0-100) to hex (00-FF)
  const alpha = Math.round((opacity / 100) * 255);
  const alphaHex = alpha.toString(16).padStart(2, "0").toUpperCase();

  // Remove # if present and add alpha channel
  const cleanHex = hexColor.replace("#", "");
  return `#${cleanHex}${alphaHex}`;
};

export const createSemanticColors = (mode: "light" | "dark") => ({
  surface: {
    primary:
      mode === "light"
        ? colorPalette.lightNeutral[50] // Pure white for maximum contrast
        : colorPalette.darkNeutral[900], // Deep dark for maximum contrast
    secondary:
      mode === "light"
        ? colorPalette.lightNeutral[100] // Very light gray
        : colorPalette.darkNeutral[800], // Dark surface
    elevated:
      mode === "light"
        ? createHex(colorPalette.pure.white, colorPalette.glass.light.elevated) // High-opacity glass
        : createHex(
            colorPalette.darkNeutral[800],
            colorPalette.glass.dark.elevated
          ), // High-opacity dark glass
    glass:
      mode === "light"
        ? createHex(colorPalette.pure.white, colorPalette.glass.light.subtle) // Clear glass
        : createHex(
            colorPalette.darkNeutral[800],
            colorPalette.glass.dark.subtle
          ), // Clear dark glass
    inverse:
      mode === "light"
        ? colorPalette.darkNeutral[900] // Pure black on light
        : colorPalette.pure.white, // Pure white on dark
  },

  action: {
    primary: colorPalette.universalBlue[500], // #0066CC - Universal excellent contrast
    secondary: colorPalette.emeraldAccent[500], // Complementary emerald green
    destructive:
      mode === "light" ? colorPalette.red[500] : colorPalette.red[400],
    subtle:
      mode === "light"
        ? colorPalette.lightNeutral[500] // High contrast subtle
        : colorPalette.darkNeutral[300], // High contrast subtle dark
  },

  text: {
    primary:
      mode === "light"
        ? colorPalette.lightNeutral[900] // Pure black for maximum readability
        : colorPalette.darkNeutral[50], // Pure white for maximum readability
    secondary:
      mode === "light"
        ? colorPalette.lightNeutral[700] // High contrast secondary (12:1)
        : colorPalette.darkNeutral[300], // High contrast secondary dark (12:1)
    inverse:
      mode === "light"
        ? colorPalette.pure.white // White text on dark backgrounds
        : colorPalette.pure.black, // Black text on light backgrounds
    disabled:
      mode === "light"
        ? colorPalette.lightNeutral[500] // 7:1 contrast minimum
        : colorPalette.darkNeutral[400], // 7:1 contrast minimum
  },

  feedback: {
    success: colorPalette.emerald[500], // High contrast success
    warning: colorPalette.amber[500], // High contrast warning
    error: colorPalette.red[500], // High contrast error
    info: colorPalette.blue[500], // High contrast info
  },

  border: {
    subtle:
      mode === "light"
        ? colorPalette.lightNeutral[200] // Clearly visible borders
        : colorPalette.darkNeutral[700], // Clearly visible dark borders
    default:
      mode === "light"
        ? colorPalette.lightNeutral[300] // Strong border contrast
        : colorPalette.darkNeutral[600], // Strong dark border contrast
    emphasis:
      mode === "light"
        ? colorPalette.lightNeutral[400] // Maximum border contrast
        : colorPalette.darkNeutral[500], // Maximum dark border contrast
    glass:
      mode === "light"
        ? createHex(colorPalette.lightNeutral[300], 60) // Light gray border with 60% opacity (visible on white)
        : createHex(colorPalette.pure.white, colorPalette.glass.dark.border), // White border for dark mode
  },

  // High Contrast Tech Colors
  tech: {
    neon: colorPalette.universalBlue[400], // Bright accent
    contrast:
      mode === "light" ? colorPalette.pure.black : colorPalette.pure.white,
    primary: colorPalette.universalBlue[500], // Your universal primary
    secondary: colorPalette.emeraldAccent[500], // Complementary accent
  },
});

export type SemanticColors = ReturnType<typeof createSemanticColors>;
