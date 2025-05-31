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
          "Semantic paper component with variant-based styling for different surface types and usage contexts.",
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
        <Typography variant="body2" color="text.secondary">
          This is the standard paper variant with default styling.
        </Typography>
      </Box>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Paper Variants
      </Typography>
      <Stack spacing={3} sx={{ maxWidth: 500 }}>
        <QuantumPaper variant="standard">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Standard Surface
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Default paper with subtle border and shadow. Perfect for main
              content cards, forms, and panels.
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="glass">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Glass Surface
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Glassmorphism effect with backdrop blur. Great for overlays,
              modals, and floating elements.
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="elevated">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Elevated Surface
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Higher prominence with larger shadow. Perfect for important
              highlighted content and interactive cards.
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="subtle">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Subtle Surface
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Minimal styling for background sections and less important content
              areas.
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
          "All paper variants showing their different visual styles and intended use cases.",
      },
    },
  },
};

export const UsageExamples: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6" color="text.primary">
        Usage Examples
      </Typography>

      {/* Contact Form Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Contact Form (Glass Variant)
        </Typography>
        <QuantumPaper variant="glass">
          <Box p={4}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Send us a message and we'll get back to you.
            </Typography>
            <Stack direction="row" spacing={2}>
              <QuantumButton intent="primary">Send Message</QuantumButton>
              <QuantumButton intent="secondary">Cancel</QuantumButton>
            </Stack>
          </Box>
        </QuantumPaper>
      </Box>

      {/* Feature Card Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Feature Card (Elevated Variant)
        </Typography>
        <QuantumPaper variant="elevated">
          <Box p={4}>
            <Typography variant="h6" gutterBottom>
              Premium Feature
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              This elevated card draws attention to important content with
              enhanced shadow and hover effects.
            </Typography>
            <QuantumButton intent="primary" size="small">
              Learn More
            </QuantumButton>
          </Box>
        </QuantumPaper>
      </Box>

      {/* Information Section Example */}
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Information Section (Subtle Variant)
        </Typography>
        <QuantumPaper variant="subtle">
          <Box p={3}>
            <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This subtle variant is perfect for background sections that need
              minimal visual emphasis.
            </Typography>
          </Box>
        </QuantumPaper>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world usage examples showing how different variants work in context.",
      },
    },
  },
};

export const InteractiveBehavior: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Interactive Behavior
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Hover over the elevated card to see the interaction effect.
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} maxWidth={600}>
        <QuantumPaper variant="standard">
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Standard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No hover effect
            </Typography>
          </Box>
        </QuantumPaper>

        <QuantumPaper variant="elevated">
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Elevated
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hover to lift
            </Typography>
          </Box>
        </QuantumPaper>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates interactive behavior differences between variants.",
      },
    },
  },
};

export const LayeredGlass: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Layered Glass Effects
      </Typography>

      {/* Background for glass effect */}
      <QuantumPaper variant="standard">
        <Box p={4} position="relative" minHeight={200}>
          <Typography variant="h6" gutterBottom>
            Background Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This background content shows through the glass overlay above,
            demonstrating the glassmorphism effect.
          </Typography>

          {/* Glass overlay */}
          <QuantumPaper variant="glass">
            <Box position="absolute" top={16} right={16} width={200} p={2}>
              <Typography variant="subtitle2" gutterBottom>
                Glass Overlay
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Beautiful blur effect
              </Typography>
            </Box>
          </QuantumPaper>
        </Box>
      </QuantumPaper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows how glass surfaces work when layered over other content.",
      },
    },
  },
};

export const NavigationBar: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Navigation Bar Example
      </Typography>

      <QuantumPaper variant="glass">
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Brand Name</Typography>
          <Stack direction="row" spacing={1}>
            <QuantumButton intent="ghost" size="small">
              Home
            </QuantumButton>
            <QuantumButton intent="ghost" size="small">
              About
            </QuantumButton>
            <QuantumButton intent="ghost" size="small">
              Contact
            </QuantumButton>
            <QuantumButton intent="primary" size="small">
              Sign In
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of using glass variant for navigation bars and headers.",
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
        <Typography variant="body2" color="text.secondary" mb={2}>
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
