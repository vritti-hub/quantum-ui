// src/theme/index.ts
// Single export file for all theme functionality

import { SEMANTIC_TOKENS } from "./semanticTokens";

// Semantic tokens and utilities
export {
  getAllVariables,
  getResponsiveVariables,
  getStaticVariables,
  SEMANTIC_TOKENS,
} from "./semanticTokens";

// Legacy exports for backwards compatibility
export const designTokens = SEMANTIC_TOKENS;
export const quantumColors = SEMANTIC_TOKENS.color;
