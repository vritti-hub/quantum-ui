import { colorPalette } from "./colors";

interface ColorDefinition {
  light: string;
  dark: string;
  needsRgba?: boolean;
}

export const semanticColors = {
  surface: {
    primary: {
      light: colorPalette.lightNeutral[50], // Pure white
      dark: colorPalette.darkNeutral[900], // Deep dark
    } as ColorDefinition,
    secondary: {
      light: colorPalette.lightNeutral[100], // Very light gray
      dark: colorPalette.darkNeutral[800], // Dark surface
    } as ColorDefinition,
    elevated: {
      light: colorPalette.pure.white,
      dark: colorPalette.darkNeutral[800],
    } as ColorDefinition,
  },

  action: {
    primary: {
      light: colorPalette.universalBlue[500], // #0066CC
      dark: colorPalette.universalBlue[400], // Lighter for dark mode
      needsRgba: true,
    } as ColorDefinition,
    secondary: {
      light: colorPalette.emeraldAccent[500], // #10B981
      dark: colorPalette.emeraldAccent[400],
    } as ColorDefinition,
    destructive: {
      light: colorPalette.red[500],
      dark: colorPalette.red[400],
    } as ColorDefinition,
  },

  text: {
    primary: {
      light: colorPalette.lightNeutral[900], // Pure black
      dark: colorPalette.darkNeutral[50], // Pure white
    } as ColorDefinition,
    secondary: {
      light: colorPalette.lightNeutral[700], // High contrast secondary
      dark: colorPalette.darkNeutral[300], // High contrast secondary dark
    } as ColorDefinition,
    disabled: {
      light: colorPalette.lightNeutral[500],
      dark: colorPalette.darkNeutral[400],
    } as ColorDefinition,
  },

  feedback: {
    success: {
      light: colorPalette.emerald[500],
      dark: colorPalette.emerald[400],
    } as ColorDefinition,
    warning: {
      light: colorPalette.amber[500],
      dark: colorPalette.amber[400],
    } as ColorDefinition,
    error: {
      light: colorPalette.red[500],
      dark: colorPalette.red[400],
    } as ColorDefinition,
    info: {
      light: colorPalette.blue[500],
      dark: colorPalette.blue[400],
    } as ColorDefinition,
  },

  border: {
    default: {
      light: colorPalette.lightNeutral[300],
      dark: colorPalette.darkNeutral[600],
    } as ColorDefinition,
    subtle: {
      light: colorPalette.lightNeutral[200],
      dark: colorPalette.darkNeutral[700],
    } as ColorDefinition,
  },
};

export const createSemanticColors = (mode: "light" | "dark") => {
  const result: Record<string, Record<string, string>> = {};

  Object.entries(semanticColors).forEach(([category, colors]) => {
    result[category] = {};

    Object.entries(colors).forEach(([name, colorDef]) => {
      // Always add the base color based on mode
      result[category][name] =
        mode === "light" ? colorDef.light : colorDef.dark;

      // Add RGBA variant if needsRgba is true
      if (colorDef.needsRgba) {
        const colorValue = mode === "light" ? colorDef.light : colorDef.dark;
        result[category][name + "RGBA"] = hexToRgb(colorValue);
      }
    });
  });

  return result;
};

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 0, 0";

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ].join(", ");
};
