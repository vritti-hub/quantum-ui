import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { QuantumButton } from "../Button/Button";
import { QuantumPaper } from "./Paper";

const meta: Meta<typeof QuantumPaper> = {
  title: "Components/Paper",
  component: QuantumPaper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic paper component with variant-based styling for different surface types and usage contexts. Fully integrated with the Quantum theme system.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "glass", "elevated", "subtle"],
      description: "Visual style variant for different use cases",
    },
    children: {
      control: false,
      description: "Content of the paper surface",
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantumPaper>;

export const Default: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Default Paper
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
        >
          This is the standard paper variant with default styling.
        </Typography>
      </Box>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6">Paper Variants</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        All paper variants showing their different visual styles and intended
        use cases. Try switching themes to see adaptive colors.
      </Typography>
      <Stack spacing={3} sx={{ maxWidth: 500 }}>
        <QuantumPaper variant="standard">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Standard Surface
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--quantum-color-text-secondary)" }}
            >
              Adapts border and shadow
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="glass">
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Glass
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--quantum-color-text-secondary)" }}
            >
              Adapts transparency and blur
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="elevated">
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Elevated
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--quantum-color-text-secondary)" }}
            >
              Adapts shadow depth
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="subtle">
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Subtle
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "var(--quantum-color-text-secondary)" }}
            >
              Minimal adaptation
            </Typography>
          </Box>
        </QuantumPaper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how Paper variants automatically adapt to different themes.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h6" gutterBottom>
          Playground Paper
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--quantum-color-text-secondary)" }}
          mb={2}
        >
          Use the controls to experiment with different variants and see how
          they affect the paper's appearance.
        </Typography>
        <Stack direction="row" spacing={2}>
          <QuantumButton intent="primary" size="small">
            Primary Action
          </QuantumButton>
          <QuantumButton intent="secondary" size="small">
            Secondary Action
          </QuantumButton>
        </Stack>
      </Box>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with all Paper variants and props.",
      },
    },
  },
};
