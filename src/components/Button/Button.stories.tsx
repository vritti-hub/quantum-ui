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
          "Semantic button component with intent-based styling and emphasis levels.",
      },
    },
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "destructive", "subtle"],
      description: "Semantic purpose of the button",
    },
    emphasis: {
      control: "select",
      options: ["high", "medium", "low"],
      description: "Visual prominence level",
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
    emphasis: "high",
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
        <QuantumButton intent="subtle">Subtle</QuantumButton>
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

export const AllEmphasisLevels: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Primary Intent - Different Emphasis
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary" emphasis="high">
            High Emphasis
          </QuantumButton>
          <QuantumButton intent="primary" emphasis="medium">
            Medium Emphasis
          </QuantumButton>
          <QuantumButton intent="primary" emphasis="low">
            Low Emphasis
          </QuantumButton>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Destructive Intent - Different Emphasis
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="destructive" emphasis="high">
            Delete
          </QuantumButton>
          <QuantumButton intent="destructive" emphasis="medium">
            Remove
          </QuantumButton>
          <QuantumButton intent="destructive" emphasis="low">
            Clear
          </QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Visual emphasis levels: high (contained), medium (outlined), low (text).",
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
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
      >
        <QuantumButton size="small">Small</QuantumButton>
        <QuantumButton size="medium">Medium</QuantumButton>
        <QuantumButton size="large">Large</QuantumButton>
      </Stack>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Normal vs Disabled
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="primary">Normal</QuantumButton>
          <QuantumButton intent="primary" disabled>
            Disabled
          </QuantumButton>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Secondary Intent
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <QuantumButton intent="secondary">Normal</QuantumButton>
          <QuantumButton intent="secondary" disabled>
            Disabled
          </QuantumButton>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Typography variant="h6" color="text.primary">
        Full Width Buttons
      </Typography>
      <QuantumButton intent="primary" emphasis="high" fullWidth>
        Save Changes
      </QuantumButton>
      <QuantumButton intent="secondary" emphasis="medium" fullWidth>
        Cancel
      </QuantumButton>
      <QuantumButton intent="destructive" emphasis="low" fullWidth>
        Delete Account
      </QuantumButton>
    </Stack>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Interactive Examples
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Click buttons to see alerts and experience hover animations
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <QuantumButton
          intent="primary"
          emphasis="high"
          onClick={() => alert("Primary action completed!")}
        >
          Save
        </QuantumButton>
        <QuantumButton
          intent="secondary"
          emphasis="medium"
          onClick={() => alert("Secondary action!")}
        >
          Preview
        </QuantumButton>
        <QuantumButton
          intent="destructive"
          emphasis="low"
          onClick={() => alert("Are you sure you want to delete?")}
        >
          Delete
        </QuantumButton>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive buttons with click handlers to demonstrate functionality.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: "Customize Me!",
    intent: "primary",
    emphasis: "high",
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls panel to experiment with all button props.",
      },
    },
  },
};
