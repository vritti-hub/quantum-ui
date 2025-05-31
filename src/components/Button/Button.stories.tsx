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
          "Semantic button component with intent-based styling for clear purpose and usage.",
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
      <Typography variant="h6" color="text.primary">
        Button Intents
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton intent="primary">Primary</QuantumButton>
        <QuantumButton intent="secondary">Secondary</QuantumButton>
        <QuantumButton intent="destructive">Destructive</QuantumButton>
        <QuantumButton intent="ghost">Ghost</QuantumButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different semantic intents for buttons based on their purpose.",
      },
    },
  },
};

export const ButtonPurposes: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6" color="text.primary">
        Button Usage by Intent
      </Typography>

      {/* Primary Actions */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Primary Intent
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
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
        <Typography variant="body2" color="text.secondary" gutterBottom>
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
        <Typography variant="body2" color="text.secondary" gutterBottom>
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
        <Typography variant="body2" color="text.secondary" gutterBottom>
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

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Button Sizes
      </Typography>
      <Stack spacing={2}>
        {/* Primary sizes */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Primary Intent - All Sizes
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <QuantumButton intent="primary" size="small">
              Small
            </QuantumButton>
            <QuantumButton intent="primary" size="medium">
              Medium
            </QuantumButton>
            <QuantumButton intent="primary" size="large">
              Large
            </QuantumButton>
          </Stack>
        </Box>

        {/* Secondary sizes */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Secondary Intent - All Sizes
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <QuantumButton intent="secondary" size="small">
              Small
            </QuantumButton>
            <QuantumButton intent="secondary" size="medium">
              Medium
            </QuantumButton>
            <QuantumButton intent="secondary" size="large">
              Large
            </QuantumButton>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button sizes for different layout contexts.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Button States
      </Typography>

      <Stack spacing={3}>
        {/* Normal vs Disabled */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Normal vs Disabled
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary">Normal</QuantumButton>
            <QuantumButton intent="primary" disabled>
              Disabled
            </QuantumButton>
            <QuantumButton intent="secondary">Normal</QuantumButton>
            <QuantumButton intent="secondary" disabled>
              Disabled
            </QuantumButton>
          </Stack>
        </Box>

        {/* All intents disabled */}
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            All Intents - Disabled State
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary" disabled>
              Primary
            </QuantumButton>
            <QuantumButton intent="secondary" disabled>
              Secondary
            </QuantumButton>
            <QuantumButton intent="destructive" disabled>
              Destructive
            </QuantumButton>
            <QuantumButton intent="ghost" disabled>
              Ghost
            </QuantumButton>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different button states including disabled state across all intents.",
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Typography variant="h6" color="text.primary">
        Full Width Buttons
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Useful for forms and mobile layouts
      </Typography>

      <QuantumButton intent="primary" fullWidth>
        Save Changes
      </QuantumButton>
      <QuantumButton intent="secondary" fullWidth>
        Cancel
      </QuantumButton>
      <QuantumButton intent="destructive" fullWidth>
        Delete Account
      </QuantumButton>
      <QuantumButton intent="ghost" fullWidth>
        Skip for now
      </QuantumButton>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Full width buttons for forms and mobile interfaces.",
      },
    },
  },
};

export const InteractiveExamples: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Interactive Examples
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Click buttons to see alerts and experience hover animations
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton
            intent="primary"
            onClick={() => alert("Primary action completed!")}
          >
            Save
          </QuantumButton>
          <QuantumButton
            intent="secondary"
            onClick={() => alert("Secondary action!")}
          >
            Preview
          </QuantumButton>
          <QuantumButton
            intent="destructive"
            onClick={() => alert("Are you sure you want to delete?")}
          >
            Delete
          </QuantumButton>
          <QuantumButton intent="ghost" onClick={() => alert("Ghost action!")}>
            Skip
          </QuantumButton>
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive buttons with click handlers to demonstrate functionality and hover effects.",
      },
    },
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6" color="text.primary">
        Real World Examples
      </Typography>

      {/* Form Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Form Actions
        </Typography>
        <Stack direction="row" spacing={2}>
          <QuantumButton intent="primary">Submit Form</QuantumButton>
          <QuantumButton intent="secondary">Save Draft</QuantumButton>
          <QuantumButton intent="ghost">Cancel</QuantumButton>
        </Stack>
      </Box>

      {/* E-commerce Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          E-commerce Actions
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Add to Cart</QuantumButton>
          <QuantumButton intent="secondary">Add to Wishlist</QuantumButton>
          <QuantumButton intent="ghost">View Details</QuantumButton>
        </Stack>
      </Box>

      {/* Account Management */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Account Management
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Update Profile</QuantumButton>
          <QuantumButton intent="secondary">Change Password</QuantumButton>
          <QuantumButton intent="destructive">Delete Account</QuantumButton>
        </Stack>
      </Box>

      {/* Navigation Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Navigation Actions
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Sign Up</QuantumButton>
          <QuantumButton intent="ghost">Home</QuantumButton>
          <QuantumButton intent="ghost">About</QuantumButton>
          <QuantumButton intent="ghost">Contact</QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world button usage patterns showing how to combine different intents effectively.",
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
