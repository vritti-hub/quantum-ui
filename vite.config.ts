import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        // Main bundle (utilities only - smaller)
        index: "src/index.ts",
        
        // Individual component bundles (performance optimized)
        "components/Button/index": "src/components/Button/index.ts",
        "components/TextField/index": "src/components/TextField/index.ts", 
        "components/Paper/index": "src/components/Paper/index.ts",
        "components/Typography/index": "src/components/Typography/index.ts",
      },
      name: "QuantumUI",
      formats: ["es"],
      fileName: (format, entryName) => {
        if (entryName === "index") {
          return `quantum-ui.${format}.js`;
        }
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@mui/material",
        "@mui/material/Button",
        "@mui/material/TextField", 
        "@mui/material/Paper",
        "@mui/material/Typography",
        "@mui/material/Box",
        "@mui/material/Stack",
        "@mui/material/CssBaseline",
        "@mui/material/styles",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "@mui/material": "MaterialUI",
          "@mui/material/Button": "MuiButton",
          "@mui/material/TextField": "MuiTextField",
          "@mui/material/Paper": "MuiPaper",
          "@mui/material/Typography": "MuiTypography",
          "@mui/material/Box": "MuiBox",
          "@mui/material/Stack": "MuiStack",
          "@mui/material/CssBaseline": "MuiCssBaseline",
          "@mui/material/styles": "MuiStyles",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
        },
        // Preserve directory structure for direct imports
        preserveModules: false,
        // Better tree-shaking support
        exports: "named",
      },
    },
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize for library usage
    minify: "esbuild",
    target: "es2020",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
