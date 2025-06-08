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

// ✅ UPDATED: Business-optimized design system with better balanced typography
export const SEMANTIC_TOKENS = {
  colors: {
    // Action colors
    action: {
      primary: {
        light: palette.universalBlue[500],
        dark: palette.universalBlue[500],
        needsRGB: true,
      } as ColorDefinition,
      secondary: {
        light: palette.emeraldAccent[500],
        dark: palette.emeraldAccent[500],
        needsRGB: true,
      } as ColorDefinition,
      destructive: {
        light: palette.red[500],
        dark: palette.red[500],
        needsRGB: true,
      } as ColorDefinition,
    },

    // Surface colors
    surface: {
      primary: {
        light: palette.lightNeutral[50], // Pure white
        dark: palette.darkNeutral[900], // Deep dark
      } as ColorDefinition,
      input: {
        light: palette.universalBlue[25], // "#F8FAFF" - very subtle blue tint for inputs
        dark: palette.universalBlue[950], // "#000A14" - deep blue-black for inputs
      } as ColorDefinition,
      secondary: {
        light: palette.lightNeutral[100], // Very light gray
        dark: palette.darkNeutral[900], // Dark surface
      } as ColorDefinition,
      elevated: {
        light: palette.pure.white,
        dark: palette.darkNeutral[900],
      } as ColorDefinition,
    },

    // Text colors
    text: {
      primary: {
        light: palette.lightNeutral[900], // Pure black
        dark: palette.darkNeutral[50], // Pure white
        needsRGB: true,
      } as ColorDefinition,
      secondary: {
        light: palette.lightNeutral[700], // High contrast secondary
        dark: palette.darkNeutral[300], // High contrast secondary dark
      } as ColorDefinition,
      disabled: {
        light: palette.lightNeutral[500],
        dark: palette.darkNeutral[500],
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
        dark: palette.emerald[500],
        needsRGB: true,
      } as ColorDefinition,
      warning: {
        light: palette.amber[500],
        dark: palette.amber[500],
        needsRGB: true,
      } as ColorDefinition,
      error: {
        light: palette.red[500],
        dark: palette.red[500],
        needsRGB: true,
      } as ColorDefinition,
      info: {
        light: palette.blue[500],
        dark: palette.blue[500],
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
    textField: {
      light:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      dark: "0 4px 6px -1px rgba(187, 187, 187, 0.03), inset 0 1px 0 0 rgba(0, 0, 0, 0.4)",
    } as ColorDefinition,
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

  // ✅ UPDATED: Business-Optimized Typography System
  typography: {
    // Font families - Dual font approach: Inter + Space Grotesk
    fontFamily: {
      // Space Grotesk for display elements, headings, UI
      display:
        "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      // Inter for body text and readable content
      primary:
        "'Quicksand','Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    },

    // Font weights
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // ✅ UPDATED: Business-optimized typography variants
    variants: {
      // Display - Hero sections (REDUCED from 72px max to 56px max)
      display: {
        fontSize: {
          mobile: "2.25rem", // 36px (was 40px)
          tablet: "3rem", // 48px (was 56px)
          desktop: "3.5rem", // 56px (was 72px) - More reasonable for dashboards
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

      // H1 - Page titles (INCREASED from 40px max to 48px max)
      h1: {
        fontSize: {
          mobile: "2rem", // 32px (was 30px)
          tablet: "2.5rem", // 40px (was 36px)
          desktop: "3rem", // 48px (was 40px) - More impact for page titles
        },
        lineHeight: {
          mobile: 1.2,
          tablet: 1.2,
          desktop: 1.1,
        },
        fontWeight: 700, // INCREASED from 600 to 700 for more presence
        fontFamily: "display",
      } as TypographyVariant,

      // H2 - Section titles (SLIGHTLY INCREASED)
      h2: {
        fontSize: {
          mobile: "1.5rem", // 24px (same)
          tablet: "1.875rem", // 30px (was 28px)
          desktop: "2.25rem", // 36px (was 32px) - Better hierarchy
        },
        lineHeight: {
          mobile: 1.3,
          tablet: 1.3,
          desktop: 1.2,
        },
        fontWeight: 600,
        fontFamily: "display",
      } as TypographyVariant,

      // H3 - Subsection titles (INCREASED for better hierarchy)
      h3: {
        fontSize: {
          mobile: "1.25rem", // 20px (same)
          tablet: "1.5rem", // 24px (was 22px)
          desktop: "1.75rem", // 28px (was 24px) - Better gap from body text
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.3,
        },
        fontWeight: 600,
        fontFamily: "display", // CHANGED from "primary" to "display" for consistency
      } as TypographyVariant,

      // H4 - Component headers (INCREASED for clearer hierarchy)
      h4: {
        fontSize: {
          mobile: "1.125rem", // 18px (same)
          tablet: "1.25rem", // 20px (same)
          desktop: "1.5rem", // 24px (was 22px) - Better distinction from body
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 600, // INCREASED from 500 to 600 for more definition
        fontFamily: "display", // CHANGED from "primary" to "display"
      } as TypographyVariant,

      // H5 - Small headers (ADDED - was missing)
      h5: {
        fontSize: {
          mobile: "1rem", // 16px
          tablet: "1.125rem", // 18px
          desktop: "1.25rem", // 20px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 600,
        fontFamily: "display",
      } as TypographyVariant,

      // H6 - Smallest headers (ADDED - was missing)
      h6: {
        fontSize: {
          mobile: "0.875rem", // 14px
          tablet: "1rem", // 16px
          desktop: "1.125rem", // 18px
        },
        lineHeight: {
          mobile: 1.4,
          tablet: 1.4,
          desktop: 1.4,
        },
        fontWeight: 500,
        fontFamily: "display",
      } as TypographyVariant,

      // Body1 - Main content (OPTIMIZED - Inter font)
      body1: {
        fontSize: {
          mobile: "0.875rem", // 14px - more appropriate for web apps
          tablet: "1rem", // 16px - reduced from 18px
          desktop: "1rem", // 16px - reduced from 18px for better UI proportions
        },
        lineHeight: {
          mobile: 1.5,
          tablet: 1.6,
          desktop: 1.6,
        },
        fontWeight: 400,
        fontFamily: "primary", // Inter for readability
      } as TypographyVariant,

      // Body2 - Secondary content (OPTIMIZED)
      body2: {
        fontSize: {
          mobile: "0.8125rem", // 13px - reduced for form fields
          tablet: "0.875rem", // 14px - reduced from 16px
          desktop: "0.875rem", // 14px - better for form elements
        },
        lineHeight: {
          mobile: 1.5,
          tablet: 1.5,
          desktop: 1.5,
        },
        fontWeight: 400,
        fontFamily: "primary", // Inter for readability
      } as TypographyVariant,

      // Button - Interface elements (OPTIMIZED)
      button: {
        fontSize: {
          mobile: "0.75rem", // 12px - reduced for more compact buttons
          tablet: "0.8125rem", // 13px - reduced from 14px
          desktop: "0.8125rem", // 13px - more compact for business UI
        },
        lineHeight: {
          mobile: 1.3, // Tighter line height for buttons (was 1.4)
          tablet: 1.3,
          desktop: 1.3,
        },
        fontWeight: 500,
        fontFamily: "display",
      } as TypographyVariant,

      // Caption - Small text, metadata (REFINED for small buttons)
      caption: {
        fontSize: {
          mobile: "0.6875rem", // 11px - reduced for metadata
          tablet: "0.75rem", // 12px - reduced from 13px
          desktop: "0.75rem", // 12px - appropriate for helper text
        },
        lineHeight: {
          mobile: 1.3, // Tighter for small buttons (was 1.4)
          tablet: 1.3,
          desktop: 1.3,
        },
        fontWeight: 500, // Increased from 400 for better small text legibility
        fontFamily: "display", // Changed from "primary" to "display" for button consistency
      } as TypographyVariant,
    },
  },

  // TextField component tokens
  textField: {
    height: {
      mobile: "3rem", // 48px
      tablet: "3.25rem", // 52px
      desktop: "3.25rem", // 52px
    } as ResponsiveValue<string>,
    minWidth: {
      mobile: "280px", // Minimum mobile width
      tablet: "320px", // Minimum tablet width
      desktop: "360px", // Minimum desktop width
    } as ResponsiveValue<string>,
    fontSize: {
      mobile: "1rem", // 16px
      tablet: "1.1rem", // 20px
      desktop: "1.1rem", // 20px
    } as ResponsiveValue<string>,
    spacing: {
      paddingTop: {
        mobile: "20px",
        tablet: "24px",
        desktop: "24px",
      } as ResponsiveValue<string>,
      paddingBottom: {
        mobile: "8px",
        tablet: "4px",
        desktop: "4px",
      } as ResponsiveValue<string>,
      paddingLeft: {
        mobile: "12px",
        tablet: "12px",
        desktop: "12px",
      } as ResponsiveValue<string>,
    },
  },

  // Spacing system (unchanged - was already good)
  spacing: {
    tight: {
      mobile: "4px",
      tablet: "4px",
      desktop: "6px", // Slightly increased for desktop precision
    } as ResponsiveValue<string>,
    normal: {
      mobile: "6px", // Reduced from 8px for more compact buttons
      tablet: "8px",
      desktop: "10px", // More refined than 8px
    } as ResponsiveValue<string>,
    comfortable: {
      mobile: "12px",
      tablet: "14px", // Slightly increased for better button width
      desktop: "16px", // Reduced from 20px for more compact feel
    } as ResponsiveValue<string>,
    spacious: {
      mobile: "16px",
      tablet: "20px", // Reduced from 24px
      desktop: "24px", // Reduced from 32px for business interfaces
    } as ResponsiveValue<string>,
    loose: {
      mobile: "20px", // Reduced from 24px
      tablet: "28px", // Reduced from 32px
      desktop: "36px", // Reduced from 48px - better for business apps
    } as ResponsiveValue<string>,
  },
} as const;

// ========================================
// CSS VARIABLE GENERATION FUNCTIONS (unchanged)
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

interface ThemeVariables {
  lightMobile: Record<string, string>;
  lightTablet: Record<string, string>;
  lightDesktop: Record<string, string>;
  darkMobile: Record<string, string>;
  darkTablet: Record<string, string>;
  darkDesktop: Record<string, string>;
}

export const getAllThemeVariables = (): ThemeVariables => {
  const modes: ("light" | "dark")[] = ["light", "dark"];
  const breakpoints: ("mobile" | "tablet" | "desktop")[] = [
    "mobile",
    "tablet",
    "desktop",
  ];

  const result = {} as Record<string, Record<string, string>>;

  modes.forEach((mode) => {
    breakpoints.forEach((breakpoint) => {
      // Create tokens object for both static and responsive values
      const tokens = {
        color: {} as Record<string, Record<string, string>>,
        borderRadius: SEMANTIC_TOKENS.borderRadius,
        shadows: {} as Record<string, string>,
        glassmorphism: SEMANTIC_TOKENS.glassmorphism,
        animation: SEMANTIC_TOKENS.animation,
        typography: {
          fontFamily: SEMANTIC_TOKENS.typography.fontFamily,
          fontWeight: SEMANTIC_TOKENS.typography.fontWeight,
          variants: {} as Record<string, Record<string, string | number>>,
        },
        spacing: {} as Record<string, string>,
        textField: {} as Record<string, any>,
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

      // Add shadows (process theme-aware shadows)
      Object.entries(SEMANTIC_TOKENS.shadows).forEach(([name, shadowValue]) => {
        if (
          typeof shadowValue === "object" &&
          "light" in shadowValue &&
          "dark" in shadowValue
        ) {
          tokens.shadows[name] = shadowValue[mode];
        } else {
          tokens.shadows[name] = shadowValue as string;
        }
      });

      // Add TextField tokens
      tokens.textField = {
        height: SEMANTIC_TOKENS.textField.height[breakpoint],
        minWidth: SEMANTIC_TOKENS.textField.minWidth[breakpoint],
        fontSize: SEMANTIC_TOKENS.textField.fontSize[breakpoint],
        spacing: {
          paddingTop: SEMANTIC_TOKENS.textField.spacing.paddingTop[breakpoint],
          paddingBottom:
            SEMANTIC_TOKENS.textField.spacing.paddingBottom[breakpoint],
          paddingLeft:
            SEMANTIC_TOKENS.textField.spacing.paddingLeft[breakpoint],
        },
      };

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

  return result as unknown as ThemeVariables;
};
