import { colorPalette } from "./colors";

export const createSemanticColors = (mode: "light" | "dark") => ({
  surface: {
    primary:
      mode === "light"
        ? colorPalette.vritti.white
        : colorPalette.vritti.deepSpace,
    secondary:
      mode === "light"
        ? colorPalette.slate[50]
        : colorPalette.vritti.midnightBlue,
    elevated:
      mode === "light" ? colorPalette.vritti.white : colorPalette.slate[800],
    inverse:
      mode === "light" ? colorPalette.slate[900] : colorPalette.vritti.white,
  },

  action: {
    primary:
      mode === "light" ? colorPalette.indigo[500] : colorPalette.indigo[400],
    secondary:
      mode === "light" ? colorPalette.cyan[500] : colorPalette.cyan[400],
    destructive:
      mode === "light" ? colorPalette.red[500] : colorPalette.red[400],
    subtle:
      mode === "light" ? colorPalette.slate[500] : colorPalette.slate[400],
  },

  text: {
    primary:
      mode === "light" ? colorPalette.slate[900] : colorPalette.vritti.white,
    secondary:
      mode === "light"
        ? colorPalette.slate[600]
        : colorPalette.vritti.steelBlue,
    inverse:
      mode === "light" ? colorPalette.vritti.white : colorPalette.slate[900],
    disabled:
      mode === "light" ? colorPalette.slate[400] : colorPalette.slate[500],
  },

  feedback: {
    success: colorPalette.emerald[500],
    warning: colorPalette.amber[500],
    error: colorPalette.red[500],
    info: colorPalette.blue[500],
  },

  border: {
    subtle:
      mode === "light" ? colorPalette.slate[200] : colorPalette.slate[700],
    default:
      mode === "light" ? colorPalette.slate[300] : colorPalette.slate[600],
    emphasis:
      mode === "light" ? colorPalette.slate[400] : colorPalette.slate[500],
  },
});

export type SemanticColors = ReturnType<typeof createSemanticColors>;
