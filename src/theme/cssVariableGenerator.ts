export const generateCSSVariablesFromTokens = (
  tokens: Record<string, any>,
  prefix: string = "quantum"
): Record<string, string> => {
  const cssVariables: Record<string, string> = {};

  const traverse = (obj: any, path: string[] = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      const currentPath = [...path, key];

      if (typeof value === "string" || typeof value === "number") {
        const variableName = `--${prefix}-${currentPath.join("-")}`;
        cssVariables[variableName] = String(value);
      } else if (typeof value === "object" && value !== null) {
        traverse(value, currentPath);
      }
    });
  };

  traverse(tokens);
  return cssVariables;
};
