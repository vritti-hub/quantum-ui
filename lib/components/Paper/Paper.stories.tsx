import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { Typography } from "../Typography/Typography";
import { Paper } from "./Paper";

const meta: Meta<typeof Paper> = {
  title: "Components/Paper",
  component: Paper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic paper component with variant-based styling for different surface types and business contexts. Features adaptive theming, glassmorphism effects, and optimized for professional business applications.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "glass", "elevated", "subtle"],
      description: "Visual style variant for different business use cases",
    },
    children: {
      control: false,
      description: "Content of the paper surface",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

// CSF3 Simple Stories - Individual variants
export const Default: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Business Performance Summary
        </Typography>
        <Typography variant="body2" intent="secondary">
          Your portfolio generated $847,392 in revenue this month.
        </Typography>
      </Box>
    ),
  },
};

export const Standard: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Standard Surface
        </Typography>
        <Typography variant="body2" intent="secondary">
          Perfect for main dashboard content and primary information displays.
        </Typography>
      </Box>
    ),
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Glass Surface
        </Typography>
        <Typography variant="body2" intent="secondary">
          Ideal for modal dialogs and overlay interfaces with glassmorphism effect.
        </Typography>
      </Box>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Elevated Surface
        </Typography>
        <Typography variant="body2" intent="secondary">
          Draws attention to important notifications and critical business insights.
        </Typography>
      </Box>
    ),
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>
          Subtle Surface
        </Typography>
        <Typography variant="body2" intent="secondary">
          Works well for background sections and supporting information.
        </Typography>
      </Box>
    ),
  },
};

// CSF3 Grouped Stories
export const VariantComparison: Story = {
  render: (args) => (
    <Stack spacing={3}>
      <Paper {...args} variant="standard">
        <Box p={3}>
          <Typography variant="h5" gutterBottom>Standard Surface</Typography>
          <Typography variant="body2" intent="secondary">Perfect for main dashboard content</Typography>
        </Box>
      </Paper>
      <Paper {...args} variant="glass">
        <Box p={3}>
          <Typography variant="h5" gutterBottom>Glass Surface</Typography>
          <Typography variant="body2" intent="secondary">Ideal for modal dialogs and overlays</Typography>
        </Box>
      </Paper>
      <Paper {...args} variant="elevated">
        <Box p={3}>
          <Typography variant="h5" gutterBottom>Elevated Surface</Typography>
          <Typography variant="body2" intent="secondary">Draws attention to important content</Typography>
        </Box>
      </Paper>
      <Paper {...args} variant="subtle">
        <Box p={3}>
          <Typography variant="h5" gutterBottom>Subtle Surface</Typography>
          <Typography variant="body2" intent="secondary">Works well for background sections</Typography>
        </Box>
      </Paper>
    </Stack>
  ),
  args: {
    children: "Surface content",
  },
};

// CSF3 Complex Examples
export const DashboardExample: Story = {
  render: () => (
    <Stack spacing={3}>
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Portfolio Performance
          </Typography>
          <Typography variant="body2" intent="secondary" gutterBottom>
            Real-time analytics across all business locations
          </Typography>

          <Stack direction="row" spacing={3} mb={3}>
            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h2" gutterBottom>$847K</Typography>
                <Typography variant="body2" intent="secondary">Total Revenue</Typography>
              </Box>
            </Paper>
            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h2" gutterBottom>4.8</Typography>
                <Typography variant="body2" intent="secondary">Avg Rating</Typography>
              </Box>
            </Paper>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button intent="primary">Generate Report</Button>
            <Button intent="secondary">View Details</Button>
          </Stack>
        </Box>
      </Paper>

      <Stack direction="row" spacing={3}>
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>Downtown Salon</Typography>
            <Typography variant="h2" gutterBottom>$28,450</Typography>
            <Typography variant="body2" intent="secondary">Monthly Revenue (↑ 15%)</Typography>
            <Button intent="primary" size="small" fullWidth sx={{ mt: 2 }}>Optimize</Button>
          </Box>
        </Paper>
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>Riverside Restaurant</Typography>
            <Typography variant="h2" gutterBottom>$45,230</Typography>
            <Typography variant="body2" intent="secondary">Monthly Revenue (↑ 18%)</Typography>
            <Button intent="primary" size="small" fullWidth sx={{ mt: 2 }}>Analyze</Button>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Business dashboard showing how paper variants work together in realistic layouts.",
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <Stack spacing={3}>
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Add New Business
          </Typography>
          <Typography variant="body2" intent="secondary" gutterBottom>
            Connect a business to your portfolio for analytics.
          </Typography>

          <Stack spacing={3} maxWidth={400}>
            <TextField label="Business Name" placeholder="Enter name" fullWidth />
            <TextField label="Industry Type" placeholder="Salon, Restaurant..." fullWidth />
            <TextField label="Location" placeholder="City, State" fullWidth />

            <Stack direction="row" spacing={2}>
              <Button intent="primary" sx={{ flex: 1 }}>Connect</Button>
              <Button intent="secondary" sx={{ flex: 1 }}>Save Draft</Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            ⚠️ Confirm Removal
          </Typography>
          <Typography variant="body1" gutterBottom>
            Remove "Downtown Salon" from your portfolio? This cannot be undone.
          </Typography>
          <Typography variant="body2" intent="secondary" gutterBottom>
            This will delete historical data and AI insights.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button intent="secondary">Keep Connected</Button>
            <Button intent="destructive">Remove</Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Form interfaces showing paper variants for user interactions.",
      },
    },
  },
};

export const ThemeVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h3" gutterBottom>
        Theme-Adaptive Surfaces
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Switch themes to see automatic styling adaptation.
      </Typography>

      <Stack direction="row" spacing={3}>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Paper variant="standard">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>Performance Insights</Typography>
              <Typography variant="body2" intent="secondary">
                AI identified optimization opportunities across your portfolio.
              </Typography>
              <Button intent="primary" size="small" sx={{ mt: 2 }}>View Analysis</Button>
            </Box>
          </Paper>

          <Paper variant="elevated">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>Revenue Alert</Typography>
              <Typography variant="body2" intent="secondary">
                High priority opportunity could increase revenue by $18,400/month.
              </Typography>
              <Stack direction="row" spacing={1} mt={2}>
                <Button intent="primary" size="small">Implement</Button>
                <Button intent="ghost" size="small">Later</Button>
              </Stack>
            </Box>
          </Paper>
        </Stack>

        <Stack spacing={2} sx={{ flex: 1 }}>
          <Paper variant="glass">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>Quick Actions</Typography>
              <Stack spacing={1}>
                <Button intent="primary" size="small" fullWidth>Add Business</Button>
                <Button intent="secondary" size="small" fullWidth>Export Report</Button>
                <Button intent="ghost" size="small" fullWidth>View Insights</Button>
              </Stack>
            </Box>
          </Paper>

          <Paper variant="subtle">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>System Status</Typography>
              <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Data Sync:</Typography>
                  <Typography variant="body2" sx={{ color: "success.main" }}>✓ Active</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">Businesses:</Typography>
                  <Typography variant="body2" intent="secondary">12 connected</Typography>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Paper variants adapting across light and dark themes.",
      },
    },
  },
};

export const InteractiveExample: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h3" gutterBottom>
        Interactive Business Workflows
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Click buttons to experience realistic business workflows.
      </Typography>

      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            🚨 Performance Alert
          </Typography>
          <Typography variant="body1" gutterBottom>
            Customer satisfaction dropped to 3.1/5. Immediate action required.
          </Typography>

          <Paper variant="glass">
            <Box p={3} mb={3}>
              <Typography variant="h6" gutterBottom>AI Analysis</Typography>
              <Typography variant="body2" gutterBottom>
                Issues with wait times during peak hours (2-6 PM).
              </Typography>
              <Typography variant="body2">
                • Wait time increased from 8 to 23 minutes
              </Typography>
              <Typography variant="body2">
                • 3 staff members called in sick
              </Typography>
            </Box>
          </Paper>

          <Stack direction="row" spacing={2}>
            <Button
              intent="primary"
              onClick={() => alert("Emergency meeting scheduled for 8 AM tomorrow.")}
            >
              Schedule Meeting
            </Button>
            <Button
              intent="secondary"
              onClick={() => alert("Backup staff will be deployed.")}
            >
              Deploy Staff
            </Button>
          </Stack>
        </Box>
      </Paper>

      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            💡 Revenue Opportunity
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cross-business synergy could increase monthly revenue by $15,600.
          </Typography>

          <Paper variant="subtle">
            <Box p={3} mb={3}>
              <Typography variant="h6" gutterBottom>Strategy Details</Typography>
              <Typography variant="body2" gutterBottom>
                27% of salon customers work within 2 blocks of restaurant.
              </Typography>
              <Typography variant="body2">
                Implement "Beauty Break" lunch packages for 40% traffic increase.
              </Typography>
            </Box>
          </Paper>

          <Stack direction="row" spacing={2}>
            <Button
              intent="primary"
              onClick={() => alert("Implementation plan created!")}
            >
              Implement
            </Button>
            <Button
              intent="secondary"
              onClick={() => alert("Financial projections sent to dashboard.")}
            >
              View Projections
            </Button>
            <Button
              intent="ghost"
              onClick={() => alert("Saved for later review.")}
            >
              Save Later
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Interactive workflows showing paper surfaces supporting user interactions.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Business Performance Card
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Use controls to experiment with different paper variants.
        </Typography>

        <Box mb={3}>
          <Typography variant="h2" gutterBottom>$45,230</Typography>
          <Typography variant="body2" intent="secondary" gutterBottom>
            Monthly Revenue
          </Typography>
          <Typography variant="body2" intent="primary">
            ↑ 18% increase from last month
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button intent="primary" size="small">Analyze</Button>
          <Button intent="secondary" size="small">Export</Button>
          <Button intent="ghost" size="small">Details</Button>
        </Stack>
      </Box>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Experiment with paper variants using the controls panel.",
      },
    },
  },
};
