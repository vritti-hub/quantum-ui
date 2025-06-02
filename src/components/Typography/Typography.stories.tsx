import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { QuantumTypography } from "./Typography";

const meta: Meta<typeof QuantumTypography> = {
  title: "Components/Typography",
  component: QuantumTypography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Enhanced Typography component using Space Grotesk variable font with semantic intent-based styling and responsive scaling across mobile, tablet, and desktop viewports.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
      ],
      description:
        "Typography variant (uses MUI variants with Quantum styling)",
    },
    intent: {
      control: "select",
      options: ["primary", "secondary", "disabled"],
      description: "Semantic intent for text color",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuantumTypography>;

export const Default: Story = {
  args: {
    variant: "body1",
    children: "Default typography using Space Grotesk",
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h3" gutterBottom>
        Typography Hierarchy
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        All typography variants using Space Grotesk variable font with
        responsive scaling
      </Typography>

      <Stack spacing={2}>
        {/* Headings */}
        <Box>
          <Typography variant="overline" color="text.secondary">
            HEADINGS
          </Typography>
          <Typography variant="h1" gutterBottom>
            H1 - Main Headlines (Display Size)
          </Typography>
          <Typography variant="h2" gutterBottom>
            H2 - Page Titles
          </Typography>
          <Typography variant="h3" gutterBottom>
            H3 - Section Titles
          </Typography>
          <Typography variant="h4" gutterBottom>
            H4 - Subsection Titles
          </Typography>
          <Typography variant="h5" gutterBottom>
            H5 - Component Headers
          </Typography>
          <Typography variant="h6" gutterBottom>
            H6 - Small Headers
          </Typography>
        </Box>

        {/* Body Text */}
        <Box>
          <Typography variant="overline" color="text.secondary">
            BODY TEXT
          </Typography>
          <Typography variant="body1" paragraph>
            Body1 - This is the primary body text variant, perfect for main
            content and paragraphs. It uses a comfortable font size and line
            height optimized for reading across all devices.
          </Typography>
          <Typography variant="body2" paragraph>
            Body2 - This is the secondary body text variant, ideal for
            supporting content, descriptions, and less prominent text that
            complements the main content.
          </Typography>
        </Box>

        {/* Interface Text */}
        <Box>
          <Typography variant="overline" color="text.secondary">
            INTERFACE TEXT
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            Button - Interface Element Text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Caption - Small text for metadata and labels
          </Typography>
          <Typography variant="overline" display="block">
            Overline - Category labels and breadcrumbs
          </Typography>
        </Box>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete typography hierarchy showing all available variants with Space Grotesk.",
      },
    },
  },
};

export const ResponsiveScaling: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h3" gutterBottom>
        Responsive Typography Demo
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Resize your browser to see how typography scales across mobile, tablet,
        and desktop breakpoints
      </Typography>

      <Box
        sx={{
          p: 3,
          border: "1px solid var(--quantum-color-border-default)",
          borderRadius: "var(--quantum-borderRadius-medium)",
          backgroundColor: "var(--quantum-color-surface-secondary)",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Hero Headline
        </Typography>
        <Typography variant="h3" gutterBottom color="text.secondary">
          Responsive Subheading
        </Typography>
        <Typography variant="body1" paragraph>
          This content demonstrates how typography automatically scales based on
          viewport width. The font sizes are optimized for each breakpoint:
          mobile (touch-friendly), tablet (arm's length reading), and desktop
          (comfortable desk viewing).
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Secondary content that maintains readability across all screen sizes
          while providing appropriate visual hierarchy.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="caption" color="text.secondary">
            {`Mobile (< 768px)`}
          </Typography>
          <Typography variant="body2">Touch-optimized sizes</Typography>
        </Box>
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="caption" color="text.secondary">
            Tablet (768px+)
          </Typography>
          <Typography variant="body2">Arm's length reading</Typography>
        </Box>
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="caption" color="text.secondary">
            Desktop (1024px+)
          </Typography>
          <Typography variant="body2">Desk viewing comfort</Typography>
        </Box>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates responsive typography scaling across different viewport sizes.",
      },
    },
  },
};

export const IntentColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h4" gutterBottom>
        Typography Intent Colors
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Semantic color intents that automatically adapt to light and dark themes
      </Typography>

      <Stack spacing={2}>
        <QuantumTypography variant="body1" intent="primary">
          Primary Intent - Main content text with highest emphasis
        </QuantumTypography>
        <QuantumTypography variant="body1" intent="secondary">
          Secondary Intent - Supporting text with medium emphasis
        </QuantumTypography>
        <QuantumTypography variant="body1" intent="disabled">
          Disabled Intent - Inactive or disabled text with low emphasis
        </QuantumTypography>
      </Stack>

      <Box
        sx={{
          p: 3,
          backgroundColor: "var(--quantum-color-surface-secondary)",
          borderRadius: "var(--quantum-borderRadius-medium)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          On Secondary Surface
        </Typography>
        <Stack spacing={1}>
          <QuantumTypography variant="body1" intent="primary">
            Primary text maintains contrast on different surfaces
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary">
            Secondary text adapts appropriately to surface changes
          </QuantumTypography>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Typography with semantic color intents that adapt to themes and surface backgrounds.",
      },
    },
  },
};

export const BusinessContent: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h3" gutterBottom>
        Business Application Example
      </Typography>

      {/* Business Card */}
      <Box
        sx={{
          p: 4,
          backgroundColor: "var(--quantum-color-surface-secondary)",
          borderRadius: "var(--quantum-borderRadius-large)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Vritti AI Dashboard
        </Typography>
        <Typography variant="body1" paragraph color="text.secondary">
          AI-powered business orchestration platform for serial entrepreneurs
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Business Portfolio Overview
            </Typography>
            <Typography variant="body1" paragraph>
              Manage multiple businesses with intelligent insights and
              cross-business analytics.
            </Typography>

            <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Active Businesses
                </Typography>
                <Typography variant="h3" color="primary">
                  12
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Across 4 industries
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Monthly Revenue
                </Typography>
                <Typography variant="h3" color="success.main">
                  $284K
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ↑ 23% from last month
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  AI Insights
                </Typography>
                <Typography variant="h3" color="warning.main">
                  47
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Optimization opportunities
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              Recent Business Updates
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Downtown Salon
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Customer satisfaction increased by 15% after implementing
                  AI-recommended appointment scheduling optimization.
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  Updated 2 hours ago
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Riverside Restaurant
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Menu optimization suggestions resulted in 12% increase in
                  average order value during dinner service.
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  Updated 5 hours ago
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Form Example */}
      <Box
        sx={{
          p: 3,
          backgroundColor: "var(--quantum-color-surface-primary)",
          borderRadius: "var(--quantum-borderRadius-medium)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add New Business
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Let Vritti AI analyze and optimize your new business venture
        </Typography>

        <Stack spacing={2}>
          <Box>
            <Typography variant="h6" component="label" gutterBottom>
              Business Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter the name of your business as it appears legally
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="label" gutterBottom>
              Industry Type
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Select the primary industry for AI-powered insights
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="button"
              sx={{
                display: "inline-block",
                px: 3,
                py: 1.5,
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 1,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Connect Business
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world business application example showing typography in context of Vritti AI platform.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "body1",
    intent: "primary",
    children: "Customize this typography example",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with different typography variants and intents.",
      },
    },
  },
};
