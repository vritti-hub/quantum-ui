import { createTheme } from "@mui/material";
import { pigment } from "@pigment-css/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const pigmentConfig = {
  theme: createTheme({
    cssVariables: true,
    colorSchemes: { light: true, dark: true },
  }),
  transformLibraries: ["@mui/material"],
};

export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
  optimizeDeps: {
    include: ["prop-types", "react-is", "hoist-non-react-statics"],
  },
});
