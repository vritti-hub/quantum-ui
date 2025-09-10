// .storybook/preview.tsx - Updated for shadcn/ui
import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import '../src/index.css';

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
    // Enable backgrounds with theme colors
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'hsl(0 0% 100%)',
        },
        {
          name: 'dark',
          value: 'hsl(240 10% 3.9%)',
        },
      ],
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const themeMode = context.globals.theme || 'light';

      // Apply theme class to document
      useEffect(() => {
        if (themeMode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        // Update Storybook canvas background
        const canvas = document.querySelector('.sb-show-main') as HTMLElement;
        const root = document.getElementById('storybook-root') as HTMLElement;

        const backgroundColor = themeMode === 'dark' ? 'hsl(240 10% 3.9%)' : 'hsl(0 0% 100%)';

        if (canvas) {
          canvas.style.backgroundColor = backgroundColor;
        }
        if (root) {
          root.style.backgroundColor = backgroundColor;
        }
      }, [themeMode]);

      // Update Storybook's background tool to match current theme
      context.parameters.backgrounds = {
        ...context.parameters.backgrounds,
        default: themeMode,
      };

      return <Story />;
    },
  ],
};
