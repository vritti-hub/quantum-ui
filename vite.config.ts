// vite.config.ts - This WILL work with Vite's builtin Rollup
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        // Simple, flat entry points that match package.json
        index: "src/index.ts",
        Button: "src/components/Button/index.ts",
        TextField: "src/components/TextField/index.ts",
        Paper: "src/components/Paper/index.ts",
        Typography: "src/components/Typography/index.ts",
      },
      name: "QuantumUI",
      formats: ["es"], // ESM only for modern packages
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // External dependencies (don't bundle these)
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
        exports: "named", // Better tree-shaking
        // Vite handles globals automatically for externals
      },
    },
    sourcemap: true, // Generate source maps
    minify: "esbuild", // Fast minification
    target: "es2020", // Modern target
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
