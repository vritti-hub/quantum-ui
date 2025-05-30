import { colorPalette } from "./colors";

export const createSemanticColors = (mode: "light" | "dark") => ({
  surface: {
    primary:
      mode === "light"
        ? colorPalette.vritti.lightSpace // Blue-tinted white for light mode
        : colorPalette.vritti.deepSpace, // Deep charcoal for dark mode (primary)
    secondary:
      mode === "light"
        ? colorPalette.lightNeutral[100] // Light blue-gray
        : colorPalette.vritti.charcoal, // Charcoal surface for dark
    elevated:
      mode === "light"
        ? colorPalette.vritti.white // Pure white for light mode cards
        : colorPalette.darkNeutral[800], // Elevated dark surface
    inverse:
      mode === "light"
        ? colorPalette.vritti.deepSpace // Dark text on light
        : colorPalette.vritti.white, // Light text on dark
  },

  action: {
    primary:
      mode === "light"
        ? colorPalette.darkBlue[700] // Your chosen deep blue #1E40AF
        : colorPalette.darkBlue[700], // Same deep blue #1E40AF in both modes
    secondary:
      mode === "light"
        ? colorPalette.cyan[600] // Cyan accent for light
        : colorPalette.cyan[400], // Brighter cyan for dark
    destructive:
      mode === "light" ? colorPalette.red[600] : colorPalette.red[500],
    subtle:
      mode === "light"
        ? colorPalette.lightNeutral[500] // Subtle actions in light
        : colorPalette.darkNeutral[400], // Subtle actions in dark
  },

  text: {
    primary:
      mode === "light"
        ? colorPalette.lightNeutral[900] // Deep blue-charcoal for light mode
        : colorPalette.darkNeutral[50], // Light text for dark mode
    secondary:
      mode === "light"
        ? colorPalette.lightNeutral[600] // Blue-steel for light secondary
        : colorPalette.darkNeutral[300], // Medium steel for dark secondary
    inverse:
      mode === "light"
        ? colorPalette.vritti.white
        : colorPalette.vritti.deepSpace,
    disabled:
      mode === "light"
        ? colorPalette.lightNeutral[400] // Muted for light
        : colorPalette.darkNeutral[500], // Muted for dark
  },

  feedback: {
    success:
      mode === "light" ? colorPalette.emerald[600] : colorPalette.emerald[400],
    warning:
      mode === "light" ? colorPalette.amber[600] : colorPalette.amber[400],
    error: mode === "light" ? colorPalette.red[600] : colorPalette.red[400],
    info: mode === "light" ? colorPalette.blue[600] : colorPalette.blue[400],
  },

  border: {
    subtle:
      mode === "light"
        ? colorPalette.lightNeutral[200] // Light blue-gray borders
        : colorPalette.darkNeutral[700], // Dark charcoal borders
    default:
      mode === "light"
        ? colorPalette.lightNeutral[300]
        : colorPalette.darkNeutral[600],
    emphasis:
      mode === "light"
        ? colorPalette.lightNeutral[400]
        : colorPalette.darkNeutral[500],
  },

  // Dark Tech Specific Colors
  tech: {
    neon: colorPalette.cyan[400], // Futuristic highlights
    steel:
      mode === "light"
        ? colorPalette.lightNeutral[500]
        : colorPalette.darkNeutral[400],
    deepBlue: colorPalette.darkBlue[700], // Your #1E40AF primary in both modes
    charcoal:
      mode === "light"
        ? colorPalette.lightNeutral[800]
        : colorPalette.darkNeutral[800],
  },
});

export type SemanticColors = ReturnType<typeof createSemanticColors>;
