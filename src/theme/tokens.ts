import { colorPalette } from "./colors";
import { createSemanticColors } from "./semanticColors";

export const designTokens = {
  // Spacing (8px base unit)
  spacing: {
    tight: "4px",
    normal: "8px",
    comfortable: "16px",
    spacious: "24px",
    loose: "32px",
  },

  // Typography
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      caption: "0.75rem", // 12px
      body: "0.875rem", // 14px
      label: "0.875rem", // 14px
      button: "0.875rem", // 14px
      heading: "1rem", // 16px
      display: "1.125rem", // 18px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      comfortable: 1.5,
      relaxed: 1.6,
    },
  },

  // Border radius
  borderRadius: {
    none: "0px",
    small: "4px",
    medium: "8px",
    large: "12px",
    full: "9999px",
  },

  // Shadows (Updated for glassmorphism)
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // Glassmorphism shadow
    glassInset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)", // Inner highlight
  },

  // Glassmorphism effects
  glassmorphism: {
    backdrop: "blur(16px)", // Background blur
    backdropLight: "blur(8px)", // Lighter blur
    backdropHeavy: "blur(24px)", // Stronger blur
  },

  // Animation
  animation: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
    },
    easing: {
      standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      accelerate: "cubic-bezier(0.4, 0.0, 1, 1)",
    },
  },

  // Breakpoints (semantic)
  breakpoints: {
    compact: "480px",
    comfortable: "768px",
    spacious: "1024px",
    expansive: "1200px",
  },
};

// ✅ Optimized: Single efficient mapping function
export const generateCSSVariables = (
  semanticColors: ReturnType<typeof createSemanticColors>
) => {
  // Define all mappings with their transformers
  const mappings = [
    // Semantic colors (nested objects)
    {
      source: semanticColors,
      transform: (category: string, variant: string, value: string) => [
        `--quantum-${category}-${variant}`,
        value,
      ],
      isNested: true,
    },
    // Design tokens (flat objects)
    {
      source: designTokens.spacing,
      transform: (key: string, _: string, value: string) => [
        `--quantum-spacing-${key}`,
        value,
      ],
      isNested: false,
    },
    {
      source: designTokens.borderRadius,
      transform: (key: string, _: string, value: string) => [
        `--quantum-border-radius-${key}`,
        value,
      ],
      isNested: false,
    },
    {
      source: designTokens.shadows,
      transform: (key: string, _: string, value: string) => [
        `--quantum-shadow-${key}`,
        value,
      ],
      isNested: false,
    },
    {
      source: designTokens.glassmorphism,
      transform: (key: string, _: string, value: string) => [
        `--quantum-glass-${key}`,
        value,
      ],
      isNested: false,
    },
  ];

  // ✅ Single efficient loop for all mappings
  const cssVarEntries = mappings.flatMap(({ source, transform, isNested }) => {
    if (isNested) {
      return Object.entries(source).flatMap(([category, colors]) =>
        Object.entries(colors as Record<string, string>).map(
          ([variant, value]) => transform(category, variant, value)
        )
      );
    } else {
      return Object.entries(source).map(([key, value]) =>
        transform(key, "", value as string)
      );
    }
  });

  // Add typography and additional variables
  cssVarEntries.push(
    ["--quantum-font-family", designTokens.typography.fontFamily],
    ["--quantum-action-primary-rgb", "0, 102, 204"] // For rgba usage
  );

  return Object.fromEntries(cssVarEntries);
};

// ✅ Optimized: Memoized color exports
const memoizedColors = {
  get light() {
    return createSemanticColors("light");
  },
  get dark() {
    return createSemanticColors("dark");
  },
};

// Export for developer experience (High Contrast Universal Theme)
export const quantumColors = {
  palette: colorPalette,
  light: memoizedColors.light,
  dark: memoizedColors.dark,
  primary: colorPalette.universalBlue[500], // Universal #0066CC
  secondary: colorPalette.emeraldAccent[500], // Complementary emerald #10B981
  accent: colorPalette.universalBlue[400], // Bright blue accent
  vritti: colorPalette.vritti,
};
