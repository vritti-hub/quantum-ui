import type { Components, Theme } from "@mui/material/styles";

export const TypographyTheme: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    root: {
      fontFamily: "var(--quantum-typography-fontFamily-primary)",
      fontDisplay: "swap",
    },
  },

  variants: [
    // ========================================
    // ENHANCED MUI VARIANTS - Override defaults with our tokens
    // ========================================

    // H1 - Page titles (Space Grotesk) - Use this as our "Display" variant
    {
      props: { variant: "h1" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-display)",
        fontSize: "var(--quantum-typography-variants-display-fontSize)", // Use display tokens for h1
        lineHeight: "var(--quantum-typography-variants-display-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-display-fontWeight)",
        letterSpacing:
          "var(--quantum-typography-variants-display-letterSpacing)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // H2 - Section titles (Space Grotesk)
    {
      props: { variant: "h2" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-display)",
        fontSize: "var(--quantum-typography-variants-h1-fontSize)", // Use h1 tokens for h2
        lineHeight: "var(--quantum-typography-variants-h1-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-h1-fontWeight)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // H3 - Subsection titles (Space Grotesk)
    {
      props: { variant: "h3" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-display)",
        fontSize: "var(--quantum-typography-variants-h2-fontSize)", // Use h2 tokens for h3
        lineHeight: "var(--quantum-typography-variants-h2-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-h2-fontWeight)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // H4 - Component headers (Space Grotesk)
    {
      props: { variant: "h4" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-h3-fontSize)", // Use h3 tokens for h4
        lineHeight: "var(--quantum-typography-variants-h3-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-h3-fontWeight)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // H5 - Small headers (Space Grotesk)
    {
      props: { variant: "h5" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-h4-fontSize)", // Use h4 tokens for h5
        lineHeight: "var(--quantum-typography-variants-h4-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-h4-fontWeight)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // H6 - Smallest headers (Space Grotesk)
    {
      props: { variant: "h6" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-caption-fontSize)", // Use caption size for h6
        lineHeight: "var(--quantum-typography-variants-caption-lineHeight)",
        fontWeight: "var(--quantum-typography-fontWeight-medium)",
        color: "var(--quantum-color-text-secondary)",
      },
    },

    // Body1 - Main content text (Space Grotesk)
    {
      props: { variant: "body1" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-body1-fontSize)",
        lineHeight: "var(--quantum-typography-variants-body1-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-body1-fontWeight)",
        color: "var(--quantum-color-text-primary)",
      },
    },

    // Body2 - Secondary content (Space Grotesk)
    {
      props: { variant: "body2" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-body2-fontSize)",
        lineHeight: "var(--quantum-typography-variants-body2-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-body2-fontWeight)",
        color: "var(--quantum-color-text-secondary)",
      },
    },

    // Button - Interface elements (Space Grotesk)
    {
      props: { variant: "button" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-display)",
        fontSize: "var(--quantum-typography-variants-button-fontSize)",
        lineHeight: "var(--quantum-typography-variants-button-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-button-fontWeight)",
        color: "var(--quantum-color-text-primary)",
        textTransform: "none", // Override MUI default uppercase
      },
    },

    // Caption - Small text (Space Grotesk)
    {
      props: { variant: "caption" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontSize: "var(--quantum-typography-variants-caption-fontSize)",
        lineHeight: "var(--quantum-typography-variants-caption-lineHeight)",
        fontWeight: "var(--quantum-typography-variants-caption-fontWeight)",
        color: "var(--quantum-color-text-secondary)",
      },
    },

    // Overline - Keep MUI default but use our font
    {
      props: { variant: "overline" },
      style: {
        fontFamily: "var(--quantum-typography-fontFamily-primary)",
        fontWeight: "var(--quantum-typography-fontWeight-medium)",
        color: "var(--quantum-color-text-secondary)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      },
    },
  ],
};
