// .storybook/preview.tsx - SIMPLE BACKGROUND FIX
import type { Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import { ThemeProvider } from "../src/index";

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
          value: "#0B1426",
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

      // ✅ Sync Storybook's background with theme
      useEffect(() => {
        // Update the background parameter to match theme
        const canvas = document.querySelector(".sb-show-main") as HTMLElement;
        const root = document.getElementById("storybook-root") as HTMLElement;

        const backgroundColor = themeMode === "dark" ? "#0B1426" : "#FFFFFF";

        if (canvas) {
          canvas.style.backgroundColor = backgroundColor;
        }
        if (root) {
          root.style.backgroundColor = backgroundColor;
        }

        // Update document data-theme
        document.documentElement.setAttribute("data-theme", themeMode);
      }, [themeMode]);

      // ✅ Also update Storybook's background tool
      context.parameters.backgrounds = {
        ...context.parameters.backgrounds,
        default: themeMode,
      };

      return (
        <ThemeProvider
          defaultColorScheme={themeMode as "light" | "dark"}
          key={themeMode}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
