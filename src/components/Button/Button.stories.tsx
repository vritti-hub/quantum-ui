import type { Meta, StoryObj } from '@storybook/react';

import { Box, Stack, Typography } from '@mui/material';
import { QuantumButton, ThemeProvider } from '..';

const meta: Meta<typeof QuantumButton> = {
  title: 'Components/Button',
  component: QuantumButton,
  decorators: [
    (Story, context) => (
      <ThemeProvider defaultColorScheme={context.globals.theme || 'light'}>
        <Box sx={{ p: 3, minHeight: '200px', bgcolor: 'background.default' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enhanced Material-UI Button with quantum effects, gradients, and glow animations.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text', 'gradient'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Theme color',
    },
    glow: {
      control: 'boolean',
      description: 'Enable glow effect on hover',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantumButton>;

export const Default: Story = {
  args: {
    children: 'Quantum Button',
    variant: 'contained',
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">Button Variants</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton variant="contained">Contained</QuantumButton>
        <QuantumButton variant="outlined">Outlined</QuantumButton>
        <QuantumButton variant="text">Text</QuantumButton>
        <QuantumButton variant="gradient">Gradient</QuantumButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants including the special gradient variant.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>Contained Buttons</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton color="primary">Primary</QuantumButton>
          <QuantumButton color="secondary">Secondary</QuantumButton>
          <QuantumButton color="error">Error</QuantumButton>
          <QuantumButton color="warning">Warning</QuantumButton>
          <QuantumButton color="info">Info</QuantumButton>
          <QuantumButton color="success">Success</QuantumButton>
        </Stack>
      </Box>
      
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>Outlined Buttons</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton variant="outlined" color="primary">Primary</QuantumButton>
          <QuantumButton variant="outlined" color="secondary">Secondary</QuantumButton>
          <QuantumButton variant="outlined" color="error">Error</QuantumButton>
          <QuantumButton variant="outlined" color="warning">Warning</QuantumButton>
          <QuantumButton variant="outlined" color="info">Info</QuantumButton>
          <QuantumButton variant="outlined" color="success">Success</QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">Button Sizes</Typography>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
        <QuantumButton size="small">Small</QuantumButton>
        <QuantumButton size="medium">Medium</QuantumButton>
        <QuantumButton size="large">Large</QuantumButton>
      </Stack>
    </Stack>
  ),
};

export const GlowEffects: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">Glow Effects</Typography>
      <Typography variant="body2" color="text.secondary">
        Hover over buttons to see the glow animation
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton glow>Contained Glow</QuantumButton>
        <QuantumButton variant="outlined" glow>Outlined Glow</QuantumButton>
        <QuantumButton variant="gradient" glow>Gradient Glow</QuantumButton>
        <QuantumButton variant="text" glow>Text Glow</QuantumButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with glow effects that appear on hover. The glow creates an animated border gradient.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>Normal vs Disabled</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton>Normal</QuantumButton>
          <QuantumButton disabled>Disabled</QuantumButton>
        </Stack>
      </Box>
      
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>Outlined</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton variant="outlined">Normal</QuantumButton>
          <QuantumButton variant="outlined" disabled>Disabled</QuantumButton>
        </Stack>
      </Box>
      
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>Gradient</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton variant="gradient">Normal</QuantumButton>
          <QuantumButton variant="gradient" disabled>Disabled</QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Typography variant="h6" color="text.primary">Full Width Buttons</Typography>
      <QuantumButton fullWidth>Full Width Contained</QuantumButton>
      <QuantumButton variant="outlined" fullWidth>Full Width Outlined</QuantumButton>
      <QuantumButton variant="gradient" fullWidth glow>Full Width Gradient with Glow</QuantumButton>
    </Stack>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">Interactive Demo</Typography>
      <Typography variant="body2" color="text.secondary">
        Click buttons to see alerts and hover for animations
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton 
          variant="contained"
          onClick={() => alert('Contained button clicked!')}
        >
          Click Me!
        </QuantumButton>
        <QuantumButton 
          variant="gradient"
          glow
          onClick={() => alert('Gradient glow button clicked!')}
        >
          Gradient Glow
        </QuantumButton>
        <QuantumButton 
          variant="outlined"
          color="secondary"
          onClick={() => alert('Secondary outlined clicked!')}
        >
          Secondary
        </QuantumButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers to demonstrate functionality.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Customize Me!',
    variant: 'gradient',
    glow: true,
    color: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls panel to customize this button and see all available props in action.',
      },
    },
  },
};