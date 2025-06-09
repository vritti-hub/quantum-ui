// ❌ Components removed from barrel - force direct imports for performance
// Use: import { Button, ButtonProps } from 'quantum-ui/Button'
// Use: import { TextField, TextFieldProps } from 'quantum-ui/TextField'
// Use: import { Paper, PaperProps } from 'quantum-ui/Paper'
// Use: import { Typography, TypographyProps } from 'quantum-ui/Typography'

// ✅ Theme system utilities (high value, often used together)
export { createQuantumTheme } from "./theme/createTheme";
export { ThemeProvider } from "./theme/ThemeProvider";
export type { ThemeProviderProps } from "./theme/ThemeProvider";
export { useTheme, useIsClient } from "./theme/useTheme";
export type { ThemeContextType } from "./theme/useTheme";
export { ThemeScript, getThemeScript } from "./theme/ThemeScript";

// ✅ Design tokens (utility, small impact)
export { SEMANTIC_TOKENS } from "./theme/semanticTokens";