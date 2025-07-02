import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Professional theme toggle with smooth animations. Switches between light and dark themes with a beautiful sun/moon animation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default theme toggle button with professional animation.',
      },
    },
  },
};

export const CustomPosition: Story = {
  args: {
    style: {
      position: 'fixed',
      top: '20px',
      right: '20px',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle positioned in the top-right corner.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-theme-toggle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle with custom CSS class for additional styling.',
      },
    },
  },
};