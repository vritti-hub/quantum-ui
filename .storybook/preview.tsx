import type { Preview } from "@storybook/react-vite";
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
    backgrounds: {
      disable: true,
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

      return (
        <ThemeProvider defaultColorScheme={themeMode} key={themeMode}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
