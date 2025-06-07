import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paper } from "../Paper/Paper";
import { TextField } from "../TextField/TextField";
import { Typography } from "../Typography/Typography";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic button component with intent-based styling for clear business purpose. Uses Space Grotesk font with optimized sizing for professional applications and excellent theme adaptation.",
      },
    },
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost"],
      description: "Semantic purpose of the button action",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Button size for different contexts",
    },
    disabled: {
      control: "boolean",
      description: "Disable button interaction",
    },
    fullWidth: {
      control: "boolean",
      description: "Make button span full container width",
    },
    children: {
      control: "text",
      description: "Button content and label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Analyze Business Performance",
    intent: "primary",
  },
};

export const BusinessActionsByIntent: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Vritti AI Business Actions
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Button intents matched to real business scenarios and action importance
        levels
      </Typography>

      {/* Primary Actions - Critical Business Operations */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Primary Actions
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Critical business operations that drive revenue and growth
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button intent="primary" size="large">
                Generate Business Report
              </Button>
              <Button intent="primary" size="medium">
                Optimize Portfolio
              </Button>
              <Button intent="primary" size="small">
                Start AI Analysis
              </Button>
            </Stack>

            <Typography variant="caption" intent="secondary">
              Use for: Revenue analysis, portfolio optimization, critical
              business decisions
            </Typography>
          </Stack>
        </Box>
      </Paper>

      {/* Secondary Actions - Supporting Operations */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Secondary Actions
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Supporting operations and alternative choices
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button intent="secondary" size="large">
                View Detailed Metrics
              </Button>
              <Button intent="secondary" size="medium">
                Export Data
              </Button>
              <Button intent="secondary" size="small">
                Schedule Review
              </Button>
              <Button intent="secondary" size="medium" disabled>
                Sync in Progress
              </Button>
            </Stack>

            <Typography variant="caption" intent="secondary">
              Use for: Data exploration, export functions, scheduling, secondary
              paths
            </Typography>
          </Stack>
        </Box>
      </Paper>

      {/* Destructive Actions - High Risk Operations */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Destructive Actions
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            High-risk operations requiring user confirmation
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button intent="destructive" size="large">
                Remove Business
              </Button>
              <Button intent="destructive" size="medium">
                Delete Portfolio
              </Button>
              <Button intent="destructive" size="small">
                Clear Data
              </Button>
            </Stack>

            <Typography variant="caption" intent="secondary">
              Use for: Data deletion, business removal, irreversible actions
            </Typography>
          </Stack>
        </Box>
      </Paper>

      {/* Ghost Actions - Subtle Operations */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Ghost Actions
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Subtle operations and optional interactions
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button intent="ghost" size="large">
                Maybe Later
              </Button>
              <Button intent="ghost" size="medium">
                Learn More
              </Button>
              <Button intent="ghost" size="small">
                Skip Tour
              </Button>
            </Stack>

            <Typography variant="caption" intent="secondary">
              Use for: Optional actions, help links, dismissible prompts
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive showcase of button intents with real Vritti AI business scenarios and appropriate usage context.",
      },
    },
  },
};

export const BusinessDashboardActions: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Business Dashboard Interface
      </Typography>

      {/* Main Dashboard Actions */}
      <Paper variant="elevated">
        <Box p={4}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mb={3}
          >
            <Box>
              <Typography variant="h3" gutterBottom>
                Portfolio Overview
              </Typography>
              <Typography variant="body2" intent="secondary">
                Real-time insights across 12 active businesses
              </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button intent="secondary" size="small">
                Last 30 Days
              </Button>
              <Button intent="primary" size="small">
                Generate Report
              </Button>
            </Stack>
          </Stack>

          {/* Key Metrics Cards */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h1" gutterBottom>
                  $847K
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Revenue
                </Typography>
                <Typography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  ↑ 23% from last month
                </Typography>
                <Button intent="ghost" size="small" fullWidth>
                  View Breakdown
                </Button>
              </Box>
            </Paper>

            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h1" gutterBottom>
                  89%
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Satisfaction
                </Typography>
                <Typography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  Across all locations
                </Typography>
                <Button intent="ghost" size="small" fullWidth>
                  Customer Feedback
                </Button>
              </Box>
            </Paper>

            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h1" gutterBottom>
                  47
                </Typography>
                <Typography variant="h6" gutterBottom>
                  AI Insights
                </Typography>
                <Typography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  Optimization opportunities
                </Typography>
                <Button intent="primary" size="small" fullWidth>
                  Review Insights
                </Button>
              </Box>
            </Paper>
          </Stack>

          {/* Action Bar */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button intent="primary" size="large">
              Optimize All Businesses
            </Button>
            <Button intent="secondary" size="large">
              Schedule Deep Analysis
            </Button>
            <Button intent="ghost" size="large">
              View Historical Trends
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Business Management Cards */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Salon Management */}
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Downtown Salon
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Premium beauty services with AI-optimized scheduling
            </Typography>

            <Stack spacing={2} mb={3}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Today's Revenue:
                </Typography>
                <Typography variant="body2">$2,847</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Appointments:
                </Typography>
                <Typography variant="body2">23/28</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Wait Time:
                </Typography>
                <Typography variant="body2">8 min avg</Typography>
              </Box>
            </Stack>

            <Stack spacing={2}>
              <Button intent="primary" fullWidth>
                Optimize Schedule
              </Button>
              <Stack direction="row" spacing={2}>
                <Button intent="secondary" size="small" sx={{ flex: 1 }}>
                  View Calendar
                </Button>
                <Button intent="ghost" size="small" sx={{ flex: 1 }}>
                  Staff Reports
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>

        {/* Restaurant Management */}
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Riverside Restaurant
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Farm-to-table dining with AI menu optimization
            </Typography>

            <Stack spacing={2} mb={3}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Today's Revenue:
                </Typography>
                <Typography variant="body2">$4,235</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Tables Served:
                </Typography>
                <Typography variant="body2">67</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">
                  Avg Order Value:
                </Typography>
                <Typography variant="body2">$63</Typography>
              </Box>
            </Stack>

            <Stack spacing={2}>
              <Button intent="primary" fullWidth>
                Analyze Menu Performance
              </Button>
              <Stack direction="row" spacing={2}>
                <Button intent="secondary" size="small" sx={{ flex: 1 }}>
                  Inventory
                </Button>
                <Button intent="ghost" size="small" sx={{ flex: 1 }}>
                  Reviews
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete business dashboard showing buttons in realistic context with cards, metrics, and business management interfaces.",
      },
    },
  },
};

export const BusinessFormActions: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Business Form Interactions
      </Typography>

      {/* Add New Business Form */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Add New Business to Portfolio
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Let Vritti AI analyze and optimize your new business venture
          </Typography>

          <Stack spacing={3} maxWidth={500}>
            <TextField
              label="Business Name"
              placeholder="Enter business name"
              fullWidth
            />

            <TextField
              label="Industry Type"
              placeholder="Salon, Restaurant, Clinic, etc."
              fullWidth
            />

            <TextField
              label="Monthly Revenue"
              placeholder="$0 - $100,000+"
              fullWidth
            />

            <TextField
              label="Number of Employees"
              placeholder="1-50+ employees"
              fullWidth
            />

            {/* Form Actions */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
              <Button intent="primary" size="large" sx={{ flex: 1 }}>
                Connect Business
              </Button>
              <Button intent="secondary" size="large" sx={{ flex: 1 }}>
                Save as Draft
              </Button>
            </Stack>

            <Stack direction="row" justifyContent="center">
              <Button intent="ghost" size="small">
                Cancel and Return to Dashboard
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      {/* Business Settings Form */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Business Settings & Preferences
          </Typography>

          <Stack spacing={4} maxWidth={600}>
            {/* Notification Preferences */}
            <Box>
              <Typography variant="h5" gutterBottom>
                AI Notification Preferences
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Choose how often you want to receive AI insights and
                recommendations
              </Typography>

              <Stack direction="row" spacing={2} mb={2}>
                <Button intent="secondary" size="small">
                  Real-time
                </Button>
                <Button intent="ghost" size="small">
                  Daily Summary
                </Button>
                <Button intent="ghost" size="small">
                  Weekly Report
                </Button>
              </Stack>
            </Box>

            {/* Data Sharing Settings */}
            <Box>
              <Typography variant="h5" gutterBottom>
                Cross-Business Analytics
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Allow Vritti AI to analyze patterns across your business
                portfolio for better insights
              </Typography>

              <Stack direction="row" spacing={2} mb={2}>
                <Button intent="primary" size="small">
                  Enable Full Analysis
                </Button>
                <Button intent="secondary" size="small">
                  Limited Sharing
                </Button>
                <Button intent="ghost" size="small">
                  Individual Only
                </Button>
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={3}>
              <Button intent="primary" size="large">
                Save Preferences
              </Button>
              <Button intent="secondary" size="large">
                Reset to Defaults
              </Button>
              <Button intent="destructive" size="large">
                Delete Account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      {/* Confirmation Dialog Simulation */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Confirmation Required
          </Typography>
          <Typography variant="body1" paragraph>
            Are you sure you want to remove "Downtown Salon" from your business
            portfolio? This action cannot be undone.
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            This will permanently delete all historical data, analytics, and AI
            insights for this business.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button intent="ghost">Cancel</Button>
            <Button intent="destructive">
              Yes, Remove Business
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Business forms showing button usage in form contexts, settings panels, and confirmation dialogs with proper action hierarchy.",
      },
    },
  },
};

export const ThemeAdaptiveButtons: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Theme-Adaptive Business Buttons
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Switch between light and dark themes using the Storybook toolbar to see
        button adaptation
      </Typography>

      {/* Primary Surface Testing */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            On Primary Surface
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Business dashboard main content area
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button intent="primary">Analyze Portfolio</Button>
            <Button intent="secondary">Export Reports</Button>
            <Button intent="destructive">Remove Business</Button>
            <Button intent="ghost">View Details</Button>
          </Stack>
        </Box>
      </Paper>

      {/* Secondary Surface Testing */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            On Glass Surface
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Modal dialogs and overlay interfaces
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button intent="primary">Confirm Analysis</Button>
            <Button intent="secondary">Save Changes</Button>
            <Button intent="destructive">Delete Data</Button>
            <Button intent="ghost">Cancel</Button>
          </Stack>
        </Box>
      </Paper>

      {/* Elevated Surface Testing */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            On Elevated Surface
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Important cards and highlighted content
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button intent="primary">Optimize Now</Button>
            <Button intent="secondary">Schedule Later</Button>
            <Button intent="destructive">Reset Settings</Button>
            <Button intent="ghost">Learn More</Button>
          </Stack>
        </Box>
      </Paper>

      {/* Subtle Surface Testing */}
      <Paper variant="subtle">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            On Subtle Surface
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Background sections and less important content
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button intent="primary">Start Trial</Button>
            <Button intent="secondary">Contact Sales</Button>
            <Button intent="destructive">End Subscription</Button>
            <Button intent="ghost">Maybe Later</Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how buttons automatically adapt their styling when used on different surface types and theme modes.",
      },
    },
  },
};

export const InteractiveBusinessScenarios: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Interactive Business Scenarios
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Click buttons to experience realistic business workflows and feedback
      </Typography>

      {/* Revenue Optimization */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Revenue Optimization Opportunity
          </Typography>
          <Typography variant="body1" paragraph>
            Vritti AI has identified a potential 18% revenue increase across
            your salon and restaurant operations through improved customer flow
            optimization.
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Implementation time: 2-3 weeks • Expected ROI: $12,400/month
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              intent="primary"
              onClick={() =>
                alert(
                  "Optimization plan generated! Implementation timeline created for 3 weeks."
                )
              }
            >
              Implement Optimization
            </Button>
            <Button
              intent="secondary"
              onClick={() =>
                alert("Detailed analysis report downloaded to your dashboard.")
              }
            >
              Download Full Report
            </Button>
            <Button
              intent="ghost"
              onClick={() =>
                alert("Optimization opportunity saved for later review.")
              }
            >
              Review Later
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Business Alert */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            🚨 Business Performance Alert
          </Typography>
          <Typography variant="body1" paragraph>
            Downtown Salon's customer satisfaction has dropped to 3.2/5 in the
            past week. Immediate attention recommended.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              intent="primary"
              onClick={() =>
                alert(
                  "Emergency response team notified. Detailed analysis initiated."
                )
              }
            >
              Address Immediately
            </Button>
            <Button
              intent="secondary"
              onClick={() =>
                alert("Staff meeting scheduled for tomorrow morning at 9 AM.")
              }
            >
              Schedule Staff Meeting
            </Button>
            <Button
              intent="ghost"
              onClick={() =>
                alert("Customer feedback analysis sent to your email.")
              }
            >
              View Customer Feedback
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Data Export Request */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Data Export & Analytics
          </Typography>
          <Typography variant="body1" paragraph>
            Generate comprehensive reports for tax preparation, investor
            meetings, or strategic planning.
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button
                intent="primary"
                onClick={() =>
                  alert(
                    "Full portfolio report generating... Estimated completion: 3 minutes"
                  )
                }
              >
                Generate Portfolio Report
              </Button>
              <Button
                intent="secondary"
                onClick={() =>
                  alert(
                    "Financial summary exported to Excel. Download started."
                  )
                }
              >
                Export Financial Data
              </Button>
              <Button
                intent="secondary"
                onClick={() =>
                  alert("Customer analytics dashboard opened in new tab.")
                }
              >
                Customer Analytics
              </Button>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                intent="destructive"
                onClick={() => {
                  if (
                    confirm(
                      "This will permanently delete all historical data. Are you sure?"
                    )
                  ) {
                    alert(
                      "Data deletion process initiated. This may take several minutes."
                    );
                  }
                }}
              >
                Clear All Historical Data
              </Button>
              <Button
                intent="ghost"
                onClick={() => alert("Data retention policy document opened.")}
              >
                View Data Policy
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive button scenarios with realistic business workflows, alerts, and user feedback to demonstrate functional behavior.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: "Optimize Business Portfolio",
    intent: "primary",
    size: "medium",
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with all button props and see how they work in a business context.",
      },
    },
  },
};
