import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Paper } from "../Paper/Paper";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Enhanced Typography component using Inter for body text and Space Grotesk for display elements. Features responsive scaling, semantic intents, and optimized readability for business applications.",
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
      description: "Typography variant (uses MUI variants with Quantum styling)",
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
type Story = StoryObj<typeof Typography>;

// CSF3 Simple Stories - Individual variants
export const Default: Story = {
  args: {
    variant: "body1",
    children: "Vritti AI helps entrepreneurs manage multiple businesses with intelligent insights.",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Business Portfolio Analytics",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Revenue Optimization Insights",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Customer Satisfaction Metrics",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Downtown Salon Performance",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Vritti AI analyzes data across all your businesses to identify opportunities that traditional single-business tools miss.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "Join over 2,500 serial entrepreneurs who have increased their portfolio revenue by an average of 34% within the first six months.",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Last updated: 2 minutes ago • Data synced across 12 businesses",
  },
};

export const Overline: Story = {
  args: {
    variant: "overline",
    children: "SPACE GROTESK - DISPLAY & UI",
  },
};

export const ButtonText: Story = {
  args: {
    variant: "button",
    children: "Analyze Business",
  },
};

// CSF3 Intent Variants
export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Primary text color for main content",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Secondary text color for supporting content",
  },
};

export const Disabled: Story = {
  args: {
    intent: "disabled",
    children: "Disabled text color for inactive content",
  },
};

// CSF3 Grouped Stories
export const HeadingVariants: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Typography {...args} variant="h1">Heading 1 - Page Title</Typography>
      <Typography {...args} variant="h2">Heading 2 - Section Title</Typography>
      <Typography {...args} variant="h3">Heading 3 - Subsection</Typography>
      <Typography {...args} variant="h4">Heading 4 - Component Header</Typography>
      <Typography {...args} variant="h5">Heading 5 - Small Header</Typography>
      <Typography {...args} variant="h6">Heading 6 - Smallest Header</Typography>
    </Stack>
  ),
  args: {
    children: "Sample heading text",
  },
};

export const BodyVariants: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Typography {...args} variant="body1">
        Body 1 - Main content text with optimal readability for business applications.
      </Typography>
      <Typography {...args} variant="body2">
        Body 2 - Secondary content text for supporting information and details.
      </Typography>
      <Typography {...args} variant="caption">
        Caption - Small text for metadata and additional context.
      </Typography>
    </Stack>
  ),
  args: {
    children: "Sample body text",
  },
};

export const IntentVariants: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Typography {...args} intent="primary">Primary intent - Main content</Typography>
      <Typography {...args} intent="secondary">Secondary intent - Supporting content</Typography>
      <Typography {...args} intent="disabled">Disabled intent - Inactive content</Typography>
    </Stack>
  ),
  args: {
    variant: "body1",
    children: "Sample text showing intent variations",
  },
};

export const FontVariants: Story = {
  render: () => (
    <Stack spacing={4}>
      <Paper variant="glass">
        <Box p={3}>
          <Typography variant="overline" intent="secondary" gutterBottom>
            SPACE GROTESK - DISPLAY & UI
          </Typography>
          <Stack spacing={2}>
            <Typography variant="h1">Vritti AI Dashboard</Typography>
            <Typography variant="h2">Business Portfolio Analytics</Typography>
            <Typography variant="h3">Revenue Optimization Insights</Typography>
            <Typography variant="button">Analyze Business</Typography>
          </Stack>
        </Box>
      </Paper>

      <Paper variant="standard">
        <Box p={3}>
          <Typography variant="overline" intent="secondary" gutterBottom>
            INTER - BODY TEXT & CONTENT
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">
              Vritti AI is an AI-powered business orchestration platform designed for serial entrepreneurs.
            </Typography>
            <Typography variant="body2" intent="secondary">
              The platform integrates data from salons, restaurants, clinics, and design studios.
            </Typography>
            <Typography variant="caption" intent="secondary">
              Last updated: 2 minutes ago • Data synced across 12 businesses
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the dual font system: Space Grotesk for display elements, Inter for body text.",
      },
    },
  },
};

// CSF3 Complex Examples
export const DashboardExample: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h1" gutterBottom color="primary">$847,392</Typography>
        <Typography variant="h4" gutterBottom>Total Portfolio Revenue</Typography>
        <Typography variant="body1">
          Your business portfolio generated $847,392 in revenue this month, representing a 23% increase.
        </Typography>

        <Stack direction="row" spacing={4} mt={3}>
          <Box>
            <Typography variant="h3" color="success.main">↑ 23%</Typography>
            <Typography variant="caption">Month over Month</Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="primary">12</Typography>
            <Typography variant="caption">Active Businesses</Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="warning.main">5</Typography>
            <Typography variant="caption">Optimization Alerts</Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Real-world business dashboard showing typography hierarchy in context.",
      },
    },
  },
};

export const ChatInterface: Story = {
  render: () => (
    <Paper variant="glass">
      <Box p={3}>
        <Typography variant="h5" gutterBottom>Vritti AI Assistant</Typography>
        <Typography variant="body2" color="success.main" gutterBottom>
          Online • Analyzing 12 businesses
        </Typography>

        <Stack spacing={2} mt={3}>
          <Paper variant="subtle">
            <Box p={2}>
              <Typography variant="body1">
                How is my salon performing compared to last month?
              </Typography>
              <Typography variant="caption" intent="secondary">2:34 PM</Typography>
            </Box>
          </Paper>

          <Paper variant="standard">
            <Box p={2}>
              <Typography variant="h6" gutterBottom color="primary">
                Downtown Salon Performance Analysis
              </Typography>
              <Typography variant="body1">
                Your salon is performing exceptionally well this month with 15% revenue increase.
              </Typography>
              <Typography variant="caption" intent="secondary">
                2:34 PM • Analysis based on last 30 days
              </Typography>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Chat interface showing typography in conversational AI context.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h1" gutterBottom>
          Vritti AI Business Intelligence
        </Typography>
        <Typography variant="h3" gutterBottom>
          Transform your multi-business portfolio with AI-powered insights
        </Typography>
        <Typography variant="body1">
          Vritti AI analyzes data across all your businesses to identify opportunities 
          that traditional single-business tools miss.
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Join over 2,500 serial entrepreneurs who have increased their portfolio revenue 
          by an average of 34% within the first six months.
        </Typography>

        <Stack direction="row" spacing={2} mt={3}>
          <Button intent="primary">Start Free Trial</Button>
          <Button intent="secondary">Schedule Demo</Button>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates responsive typography scaling across different viewport sizes.",
      },
    },
  },
};

export const HierarchyShowcase: Story = {
  render: () => (
    <Paper variant="standard">
      <Box p={4}>
        <Typography variant="overline" intent="primary" gutterBottom>
          BUSINESS INSIGHTS
        </Typography>
        <Typography variant="h1" gutterBottom>
          The Future of Multi-Business Management
        </Typography>
        <Typography variant="h4" intent="secondary" gutterBottom>
          How AI is revolutionizing the way serial entrepreneurs scale their ventures
        </Typography>

        <Stack direction="row" spacing={2} mb={3}>
          <Typography variant="caption" intent="secondary">By Vritti AI Research Team</Typography>
          <Typography variant="caption" intent="secondary">•</Typography>
          <Typography variant="caption" intent="secondary">8 min read</Typography>
          <Typography variant="caption" intent="secondary">•</Typography>
          <Typography variant="caption" intent="secondary">Published Dec 15, 2024</Typography>
        </Stack>

        <Typography variant="h2" gutterBottom mt={4}>
          The Challenge of Portfolio Management
        </Typography>
        <Typography variant="body1">
          Serial entrepreneurs face a unique challenge that traditional business tools weren't designed to solve.
        </Typography>

        <Typography variant="h3" gutterBottom mt={3}>
          The Power of Cross-Business Intelligence
        </Typography>
        <Typography variant="body1">
          Vritti AI's breakthrough comes from analyzing data patterns across entire business portfolios.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For instance, the platform might discover that 40% of salon customers also frequent 
          the owner's restaurant during lunch hours.
        </Typography>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comprehensive content hierarchy example showing clear information structure.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "body1",
    intent: "primary",
    children: "Vritti AI empowers serial entrepreneurs with intelligent business insights across their entire portfolio.",
  },
  parameters: {
    docs: {
      description: {
        story: "Experiment with different typography variants and intents using the controls panel.",
      },
    },
  },
};