import { palette } from "./palette";

// Type definitions for semantic tokens
interface ColorDefinition {
  light: string;
  dark: string;
  needsRGB?: boolean;
}

interface ResponsiveValue<T> {
  mobile: T;
  tablet: T;
  desktop: T;
}

// Simplified typography variant definitions
interface TypographyVariant {
  fontSize: ResponsiveValue<string>;
  lineHeight: ResponsiveValue<number>;
  fontWeight: number;
  letterSpacing?: string;
  fontFamily: "display" | "primary";
}

// Simplified design system with essential typography only
export const SEMANTIC_TOKENS = {
  colors: {
    // Action colors
    action: {
      primary: {
        light: palette.universalBlue[500],
        dark: palette.universalBlue[400],
        needsRGB: true,
      } as ColorDefinition,
      secondary: {
        light: palette.emeraldAccent[500],
        dark: palette.emeraldAccent[400],
      } as ColorDefinition,
      destructive: {
        light: palette.red[500],
        dark: palette.red[400],
      } as ColorDefinition,
    },

    // Surface colors
    surface: {
      primary: {
        light: palette.lightNeutral[50], // Pure white
        dark: palette.darkNeutral[900], // Deep dark
      } as ColorDefinition,
      secondary: {
        light: palette.lightNeutral[100], // Very light gray
        dark: palette.darkNeutral[800], // Dark surface
      } as ColorDefinition,
      elevated: {
        light: palette.pure.white,
        dark: palette.darkNeutral[800],
      } as ColorDefinition,
    },

    // Text colors
    text: {
      primary: {
        light: palette.lightNeutral[900], // Pure black
        dark: palette.darkNeutral[50], // Pure white
      } as ColorDefinition,
      secondary: {
        light: palette.lightNeutral[700], // High contrast secondary
        dark: palette.darkNeutral[300], // High contrast secondary dark
      } as ColorDefinition,
      disabled: {
        light: palette.lightNeutral[500],
        dark: palette.darkNeutral[400],
      } as ColorDefinition,
      onPrimary: {
        light: palette.pure.white, // White text on primary blue
        dark: palette.pure.white, // White text on primary blue (both modes)
      } as ColorDefinition,
      onDestructive: {
        light: palette.pure.white, // White text on red background
        dark: palette.pure.white, // White text on red background (both modes)
      } as ColorDefinition,
    },

    // Feedback colors
    feedback: {
      success: {
        light: palette.emerald[500],
        dark: palette.emerald[400],
      } as ColorDefinition,
      warning: {
        light: palette.amber[500],
        dark: palette.amber[400],
      } as ColorDefinition,
      error: {
        light: palette.red[500],
        dark: palette.red[400],
      } as ColorDefinition,
      info: {
        light: palette.blue[500],
        dark: palette.blue[400],
      } as ColorDefinition,
    },

    // Border colors
    border: {
      default: {
        light: palette.lightNeutral[300],
        dark: palette.darkNeutral[600],
      } as ColorDefinition,
      subtle: {
        light: palette.lightNeutral[200],
        dark: palette.darkNeutral[700],
      } as ColorDefinition,
    },
  },

  // Border radius - static values
  borderRadius: {
    none: "0px",
    small: "4px",
    medium: "8px",
    large: "12px",
    full: "9999px",
  },

  // Shadows - static values
  shadows: {
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    glassInset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
  },

  // Glass effects - static values
  glassmorphism: {
    backdrop: "blur(16px)",
    backdropLight: "blur(8px)",
    backdropHeavy: "blur(24px)",
  },

  // Animation - static values
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

  // Simplified Typography System with Space Grotesk
  typography: {
    // Font families - Single font approach with Space Grotesk
    fontFamily: {
      // Space Grotesk variable font for everything
      display:
        "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      primary:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    },

    // Font weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Essential typography variants only
    variants: {
      // Display - Hero sections only
      display: {
        fontSize: {
          mobile: "2.5rem", // 40px
          tablet: "3.5rem", // 56px
          desktop: "4.5rem", // 72px
        },
        lineHeight: {
          mobile: 1.1,
          tablet: 1.1,
          desktop: 1.0,
        },
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily: "display",
      } as TypographyVariant,

      // H1 - Page titles
      h1: {
        fontSize: {
          mobile: "1.875rem", // 30px
          tablet: "2.25rem", // 36px
          desktop: "2.5rem", // 40px
        },
        lineHeight: {
          mobile: 1.2,
          tablet: 1.2,
          desktop: 1.1,
        },
        fontWeight: 600,
        fontFamily: "display",
      } as TypographyVariant,

      // H2 - Section titles
      h2: {
        fontSize: {
          mobile: "1.5rem", // 24px
          tablet: "1.75rem", // 28px
          desktop: "2rem", // 32px
        },
        lineHeight: {
          mobile: 1.3,
          tablet: 1.3,
          desktop: 1.2,
        },
        fontWeight: 600,
        fontFamily: "display",
      } as TypographyVariant,

      // H3 - Subsection titles
      h3: {
        fontSize: {
          mobile: "1.25rem", // 20px
          tablet: "1.375rem", // 22px
          desktop: "1.5rem", // 24px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.3,
        },
        fontWeight: 600,
        fontFamily: "primary",
      } as TypographyVariant,

      // H4 - Component headers
      h4: {
        fontSize: {
          mobile: "1.125rem", // 18px
          tablet: "1.25rem", // 20px
          desktop: "1.375rem", // 22px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 500,
        fontFamily: "primary",
      } as TypographyVariant,

      // Body1 - Main content
      body1: {
        fontSize: {
          mobile: "1rem", // 16px
          tablet: "1.125rem", // 18px
          desktop: "1.125rem", // 18px
        },
        lineHeight: {
          mobile: 1.5,
          tablet: 1.6,
          desktop: 1.6,
        },
        fontWeight: 400,
        fontFamily: "primary",
      } as TypographyVariant,

      // Body2 - Secondary content
      body2: {
        fontSize: {
          mobile: "0.875rem", // 14px
          tablet: "1rem", // 16px
          desktop: "1rem", // 16px
        },
        lineHeight: {
          mobile: 1.5,
          tablet: 1.5,
          desktop: 1.5,
        },
        fontWeight: 400,
        fontFamily: "primary",
      } as TypographyVariant,

      // Button - Interface elements
      button: {
        fontSize: {
          mobile: "0.875rem", // 14px
          tablet: "1rem", // 16px
          desktop: "1rem", // 16px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 500,
        fontFamily: "display",
      } as TypographyVariant,

      // Caption - Small text, metadata
      caption: {
        fontSize: {
          mobile: "0.75rem", // 12px
          tablet: "0.875rem", // 14px
          desktop: "0.875rem", // 14px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 400,
        fontFamily: "primary",
      } as TypographyVariant,
    },
  },

  // Spacing system
  spacing: {
    tight: {
      mobile: "4px",
      tablet: "4px",
      desktop: "4px",
    } as ResponsiveValue<string>,
    normal: {
      mobile: "8px",
      tablet: "8px",
      desktop: "8px",
    } as ResponsiveValue<string>,
    comfortable: {
      mobile: "12px",
      tablet: "16px",
      desktop: "20px",
    } as ResponsiveValue<string>,
    spacious: {
      mobile: "16px",
      tablet: "24px",
      desktop: "32px",
    } as ResponsiveValue<string>,
    loose: {
      mobile: "24px",
      tablet: "32px",
      desktop: "48px",
    } as ResponsiveValue<string>,
  },
} as const;

// ========================================
// CSS VARIABLE GENERATION FUNCTIONS
// ========================================

import { generateCSSVariablesFromTokens } from "./cssVariableGenerator";

// Helper function to convert hex to RGB (for RGBA support)
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 0, 0";

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ].join(", ");
};

export const getAllThemeVariables = (): {
  lightMobile: Record<string, string>;
  lightTablet: Record<string, string>;
  lightDesktop: Record<string, string>;
  darkMobile: Record<string, string>;
  darkTablet: Record<string, string>;
  darkDesktop: Record<string, string>;
} => {
  const modes: ("light" | "dark")[] = ["light", "dark"];
  const breakpoints: ("mobile" | "tablet" | "desktop")[] = [
    "mobile",
    "tablet",
    "desktop",
  ];

  const result = {} as any;

  modes.forEach((mode) => {
    breakpoints.forEach((breakpoint) => {
      // Create tokens object for both static and responsive values
      const tokens = {
        color: {} as any,
        borderRadius: SEMANTIC_TOKENS.borderRadius,
        shadows: SEMANTIC_TOKENS.shadows,
        glassmorphism: SEMANTIC_TOKENS.glassmorphism,
        animation: SEMANTIC_TOKENS.animation,
        typography: {
          fontFamily: SEMANTIC_TOKENS.typography.fontFamily,
          fontWeight: SEMANTIC_TOKENS.typography.fontWeight,
          variants: {} as any,
        },
        spacing: {} as any,
      };

      // Process colors with RGB support
      Object.entries(SEMANTIC_TOKENS.colors).forEach(([category, colors]) => {
        tokens.color[category] = {};
        Object.entries(colors).forEach(([name, colorDef]) => {
          tokens.color[category][name] = colorDef[mode];
          if (colorDef.needsRGB) {
            const colorValue = colorDef[mode];
            tokens.color[category][name + "RGB"] = hexToRgb(colorValue);
          }
        });
      });

      // Add spacing
      Object.entries(SEMANTIC_TOKENS.spacing).forEach(
        ([name, responsiveValue]) => {
          tokens.spacing[name] = responsiveValue[breakpoint];
        }
      );

      // Add typography variants with responsive values
      Object.entries(SEMANTIC_TOKENS.typography.variants).forEach(
        ([variantName, variant]) => {
          tokens.typography.variants[variantName] = {
            fontSize: variant.fontSize[breakpoint],
            lineHeight: variant.lineHeight[breakpoint],
            fontWeight: variant.fontWeight,
            fontFamily:
              SEMANTIC_TOKENS.typography.fontFamily[variant.fontFamily],
            ...(variant.letterSpacing && {
              letterSpacing: variant.letterSpacing,
            }),
          };
        }
      );

      // Generate variables and assign to result
      const key = `${mode}${breakpoint
        .charAt(0)
        .toUpperCase()}${breakpoint.slice(1)}`;
      result[key] = generateCSSVariablesFromTokens(tokens);
    });
  });

  return result;
};
