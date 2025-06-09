type TokenValue = string | number | Record<string, unknown>;

export const generateCSSVariablesFromTokens = (
  tokens: Record<string, TokenValue>,
  prefix: string = "quantum"
): Record<string, string> => {
  const cssVariables: Record<string, string> = {};

  const traverse = (obj: TokenValue, path: string[] = []) => {
    if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        const currentPath = [...path, key];

        if (typeof value === "string" || typeof value === "number") {
          const variableName = `--${prefix}-${currentPath.join("-")}`;
          cssVariables[variableName] = String(value);
        } else if (typeof value === "object" && value !== null) {
          traverse(value as TokenValue, currentPath);
        }
      });
    }
  };

  traverse(tokens);
  return cssVariables;
};
