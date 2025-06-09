// .storybook/preview.tsx - FIXED: Direct MuiThemeProvider approach
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import { createQuantumTheme } from "../lib/theme/createTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    // ✅ Enable backgrounds with your theme colors
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#FFFFFF",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const themeMode = context.globals.theme || "light";

      // ✅ Create theme directly using your createQuantumTheme function
      const theme = createQuantumTheme(themeMode as "light" | "dark");

      // ✅ Sync Storybook's background with theme
      useEffect(() => {
        // Update the background parameter to match theme
        const canvas = document.querySelector(".sb-show-main") as HTMLElement;
        const root = document.getElementById("storybook-root") as HTMLElement;

        const backgroundColor = themeMode === "dark" ? "#000000" : "#FFFFFF";

        if (canvas) {
          canvas.style.backgroundColor = backgroundColor;
        }
        if (root) {
          root.style.backgroundColor = backgroundColor;
        }

        // ✅ Update document data-theme for CSS variables
        document.documentElement.setAttribute("data-theme", themeMode);
      }, [themeMode]);

      // ✅ Update Storybook's background tool to match current theme
      context.parameters.backgrounds = {
        ...context.parameters.backgrounds,
        default: themeMode,
      };

      // ✅ Use MuiThemeProvider directly - much cleaner!
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </MuiThemeProvider>
      );
    },
  ],
};

export default preview;
