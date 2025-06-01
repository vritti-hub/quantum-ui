import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { QuantumButton } from "./Button";

const meta: Meta<typeof QuantumButton> = {
  title: "Components/Button",
  component: QuantumButton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic button component with intent-based styling for clear purpose and usage. Fully integrated with the Quantum theme system.",
      },
    },
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost"],
      description: "Semantic purpose of the button",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disable button interaction",
    },
    fullWidth: {
      control: "boolean",
      description: "Make button full width",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantumButton>;

export const Default: Story = {
  args: {
    children: "Button",
    intent: "primary",
  },
};

export const AllIntents: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6">Button Intents</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton intent="primary">Primary</QuantumButton>
        <QuantumButton intent="secondary">Secondary</QuantumButton>
        <QuantumButton intent="destructive">Destructive</QuantumButton>
        <QuantumButton intent="ghost">Ghost</QuantumButton>
      </Stack>

      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Switch between light and dark themes to see how buttons adapt to
        different backgrounds.
      </Typography>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different semantic intents for buttons based on their purpose. Try switching themes to see the adaptive colors.",
      },
    },
  },
};

export const ButtonPurposes: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6">Button Usage by Intent</Typography>

      {/* Primary Actions */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Primary Intent
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
          gutterBottom
        >
          Main actions, CTAs, form submissions
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Save Changes</QuantumButton>
          <QuantumButton intent="primary">Sign Up</QuantumButton>
          <QuantumButton intent="primary">Purchase</QuantumButton>
          <QuantumButton intent="primary">Submit</QuantumButton>
        </Stack>
      </Box>

      {/* Secondary Actions */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Secondary Intent
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
          gutterBottom
        >
          Secondary actions, alternatives to primary
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="secondary">Cancel</QuantumButton>
          <QuantumButton intent="secondary">Learn More</QuantumButton>
          <QuantumButton intent="secondary">Preview</QuantumButton>
          <QuantumButton intent="secondary">Edit</QuantumButton>
        </Stack>
      </Box>

      {/* Destructive Actions */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Destructive Intent
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
          gutterBottom
        >
          Dangerous actions requiring confirmation
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="destructive">Delete Account</QuantumButton>
          <QuantumButton intent="destructive">Remove Item</QuantumButton>
          <QuantumButton intent="destructive">Clear All</QuantumButton>
          <QuantumButton intent="destructive">Reset</QuantumButton>
        </Stack>
      </Box>

      {/* Ghost Actions */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Ghost Intent
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
          gutterBottom
        >
          Subtle actions, less important options
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="ghost">Skip</QuantumButton>
          <QuantumButton intent="ghost">Maybe Later</QuantumButton>
          <QuantumButton intent="ghost">View Details</QuantumButton>
          <QuantumButton intent="ghost">Help</QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Examples of how each intent should be used based on the action's purpose and importance.",
      },
    },
  },
};

export const ThemeAdaptive: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6">Theme-Adaptive Buttons</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Use the theme switcher in the toolbar to see how buttons automatically
        adapt to light and dark themes.
      </Typography>

      <Box
        sx={{
          p: 3,
          borderRadius: "var(--quantum-borderRadius-medium)",
          border: "1px solid var(--quantum-color-border-default)",
          backgroundColor: "var(--quantum-color-surface-secondary)",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          On Secondary Surface
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Primary</QuantumButton>
          <QuantumButton intent="secondary">Secondary</QuantumButton>
          <QuantumButton intent="ghost">Ghost</QuantumButton>
        </Stack>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: "var(--quantum-borderRadius-medium)",
          backgroundColor: "var(--quantum-color-surface-primary)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          On Primary Surface
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Primary</QuantumButton>
          <QuantumButton intent="secondary">Secondary</QuantumButton>
          <QuantumButton intent="ghost">Ghost</QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how buttons automatically adapt to different themes and surface backgrounds.",
      },
    },
  },
};

export const InteractiveShowcase: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6">Interactive Button Showcase</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Hover and click buttons to experience the micro-interactions and
        feedback
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton
            intent="primary"
            onClick={() => alert("Primary action completed!")}
          >
            Save Document
          </QuantumButton>
          <QuantumButton
            intent="secondary"
            onClick={() => alert("Opening preview...")}
          >
            Preview Changes
          </QuantumButton>
          <QuantumButton
            intent="destructive"
            onClick={() => {
              if (confirm("Are you sure you want to delete this item?")) {
                alert("Item deleted!");
              }
            }}
          >
            Delete Item
          </QuantumButton>
          <QuantumButton intent="ghost" onClick={() => alert("Help opened!")}>
            Need Help?
          </QuantumButton>
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive buttons with click handlers to demonstrate functionality, hover effects, and user feedback.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: "Customize Me!",
    intent: "primary",
    size: "medium",
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with all button props and see the theme-based styling in action.",
      },
    },
  },
};
