import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { QuantumPaper } from "../Paper/Paper";
import { QuantumTextField } from "../TextField/TextField";
import { QuantumTypography } from "../Typography/Typography";
import { QuantumButton } from "./Button";

const meta: Meta<typeof QuantumButton> = {
  title: "Components/Button",
  component: QuantumButton,
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
type Story = StoryObj<typeof QuantumButton>;

export const Default: Story = {
  args: {
    children: "Analyze Business Performance",
    intent: "primary",
  },
};

export const BusinessActionsByIntent: Story = {
  render: () => (
    <Stack spacing={4}>
      <QuantumTypography variant="h2" gutterBottom>
        Vritti AI Business Actions
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Button intents matched to real business scenarios and action importance
        levels
      </QuantumTypography>

      {/* Primary Actions - Critical Business Operations */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Primary Actions
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Critical business operations that drive revenue and growth
          </QuantumTypography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="primary" size="large">
                Generate Business Report
              </QuantumButton>
              <QuantumButton intent="primary" size="medium">
                Optimize Portfolio
              </QuantumButton>
              <QuantumButton intent="primary" size="small">
                Start AI Analysis
              </QuantumButton>
            </Stack>

            <QuantumTypography variant="caption" intent="secondary">
              Use for: Revenue analysis, portfolio optimization, critical
              business decisions
            </QuantumTypography>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Secondary Actions - Supporting Operations */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Secondary Actions
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Supporting operations and alternative choices
          </QuantumTypography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="secondary" size="large">
                View Detailed Metrics
              </QuantumButton>
              <QuantumButton intent="secondary" size="medium">
                Export Data
              </QuantumButton>
              <QuantumButton intent="secondary" size="small">
                Schedule Review
              </QuantumButton>
              <QuantumButton intent="secondary" size="medium" disabled>
                Sync in Progress
              </QuantumButton>
            </Stack>

            <QuantumTypography variant="caption" intent="secondary">
              Use for: Data exploration, export functions, scheduling, secondary
              paths
            </QuantumTypography>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Destructive Actions - High Risk Operations */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Destructive Actions
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            High-risk operations requiring user confirmation
          </QuantumTypography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="destructive" size="large">
                Remove Business
              </QuantumButton>
              <QuantumButton intent="destructive" size="medium">
                Delete Portfolio
              </QuantumButton>
              <QuantumButton intent="destructive" size="small">
                Clear Data
              </QuantumButton>
            </Stack>

            <QuantumTypography variant="caption" intent="secondary">
              Use for: Data deletion, business removal, irreversible actions
            </QuantumTypography>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Ghost Actions - Subtle Operations */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Ghost Actions
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Subtle operations and optional interactions
          </QuantumTypography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton intent="ghost" size="large">
                Maybe Later
              </QuantumButton>
              <QuantumButton intent="ghost" size="medium">
                Learn More
              </QuantumButton>
              <QuantumButton intent="ghost" size="small">
                Skip Tour
              </QuantumButton>
            </Stack>

            <QuantumTypography variant="caption" intent="secondary">
              Use for: Optional actions, help links, dismissible prompts
            </QuantumTypography>
          </Stack>
        </Box>
      </QuantumPaper>
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
      <QuantumTypography variant="h2" gutterBottom>
        Business Dashboard Interface
      </QuantumTypography>

      {/* Main Dashboard Actions */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mb={3}
          >
            <Box>
              <QuantumTypography variant="h3" gutterBottom>
                Portfolio Overview
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary">
                Real-time insights across 12 active businesses
              </QuantumTypography>
            </Box>
            <Stack direction="row" spacing={2}>
              <QuantumButton intent="secondary" size="small">
                Last 30 Days
              </QuantumButton>
              <QuantumButton intent="primary" size="small">
                Generate Report
              </QuantumButton>
            </Stack>
          </Stack>

          {/* Key Metrics Cards */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} mb={4}>
            <QuantumPaper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <QuantumTypography variant="h1" gutterBottom>
                  $847K
                </QuantumTypography>
                <QuantumTypography variant="h6" gutterBottom>
                  Total Revenue
                </QuantumTypography>
                <QuantumTypography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  ↑ 23% from last month
                </QuantumTypography>
                <QuantumButton intent="ghost" size="small" fullWidth>
                  View Breakdown
                </QuantumButton>
              </Box>
            </QuantumPaper>

            <QuantumPaper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <QuantumTypography variant="h1" gutterBottom>
                  89%
                </QuantumTypography>
                <QuantumTypography variant="h6" gutterBottom>
                  Satisfaction
                </QuantumTypography>
                <QuantumTypography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  Across all locations
                </QuantumTypography>
                <QuantumButton intent="ghost" size="small" fullWidth>
                  Customer Feedback
                </QuantumButton>
              </Box>
            </QuantumPaper>

            <QuantumPaper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <QuantumTypography variant="h1" gutterBottom>
                  47
                </QuantumTypography>
                <QuantumTypography variant="h6" gutterBottom>
                  AI Insights
                </QuantumTypography>
                <QuantumTypography
                  variant="body2"
                  intent="secondary"
                  gutterBottom
                >
                  Optimization opportunities
                </QuantumTypography>
                <QuantumButton intent="primary" size="small" fullWidth>
                  Review Insights
                </QuantumButton>
              </Box>
            </QuantumPaper>
          </Stack>

          {/* Action Bar */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <QuantumButton intent="primary" size="large">
              Optimize All Businesses
            </QuantumButton>
            <QuantumButton intent="secondary" size="large">
              Schedule Deep Analysis
            </QuantumButton>
            <QuantumButton intent="ghost" size="large">
              View Historical Trends
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Business Management Cards */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Salon Management */}
        <QuantumPaper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <QuantumTypography variant="h4" gutterBottom>
              Downtown Salon
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Premium beauty services with AI-optimized scheduling
            </QuantumTypography>

            <Stack spacing={2} mb={3}>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Today's Revenue:
                </QuantumTypography>
                <QuantumTypography variant="body2">$2,847</QuantumTypography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Appointments:
                </QuantumTypography>
                <QuantumTypography variant="body2">23/28</QuantumTypography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Wait Time:
                </QuantumTypography>
                <QuantumTypography variant="body2">8 min avg</QuantumTypography>
              </Box>
            </Stack>

            <Stack spacing={2}>
              <QuantumButton intent="primary" fullWidth>
                Optimize Schedule
              </QuantumButton>
              <Stack direction="row" spacing={2}>
                <QuantumButton intent="secondary" size="small" sx={{ flex: 1 }}>
                  View Calendar
                </QuantumButton>
                <QuantumButton intent="ghost" size="small" sx={{ flex: 1 }}>
                  Staff Reports
                </QuantumButton>
              </Stack>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Restaurant Management */}
        <QuantumPaper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <QuantumTypography variant="h4" gutterBottom>
              Riverside Restaurant
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Farm-to-table dining with AI menu optimization
            </QuantumTypography>

            <Stack spacing={2} mb={3}>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Today's Revenue:
                </QuantumTypography>
                <QuantumTypography variant="body2">$4,235</QuantumTypography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Tables Served:
                </QuantumTypography>
                <QuantumTypography variant="body2">67</QuantumTypography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <QuantumTypography variant="body2">
                  Avg Order Value:
                </QuantumTypography>
                <QuantumTypography variant="body2">$63</QuantumTypography>
              </Box>
            </Stack>

            <Stack spacing={2}>
              <QuantumButton intent="primary" fullWidth>
                Analyze Menu Performance
              </QuantumButton>
              <Stack direction="row" spacing={2}>
                <QuantumButton intent="secondary" size="small" sx={{ flex: 1 }}>
                  Inventory
                </QuantumButton>
                <QuantumButton intent="ghost" size="small" sx={{ flex: 1 }}>
                  Reviews
                </QuantumButton>
              </Stack>
            </Stack>
          </Box>
        </QuantumPaper>
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
      <QuantumTypography variant="h2" gutterBottom>
        Business Form Interactions
      </QuantumTypography>

      {/* Add New Business Form */}
      <QuantumPaper variant="glass">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            Add New Business to Portfolio
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Let Vritti AI analyze and optimize your new business venture
          </QuantumTypography>

          <Stack spacing={3} maxWidth={500}>
            <QuantumTextField
              label="Business Name"
              placeholder="Enter business name"
              fullWidth
            />

            <QuantumTextField
              label="Industry Type"
              placeholder="Salon, Restaurant, Clinic, etc."
              fullWidth
            />

            <QuantumTextField
              label="Monthly Revenue"
              placeholder="$0 - $100,000+"
              fullWidth
            />

            <QuantumTextField
              label="Number of Employees"
              placeholder="1-50+ employees"
              fullWidth
            />

            {/* Form Actions */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
              <QuantumButton intent="primary" size="large" sx={{ flex: 1 }}>
                Connect Business
              </QuantumButton>
              <QuantumButton intent="secondary" size="large" sx={{ flex: 1 }}>
                Save as Draft
              </QuantumButton>
            </Stack>

            <Stack direction="row" justifyContent="center">
              <QuantumButton intent="ghost" size="small">
                Cancel and Return to Dashboard
              </QuantumButton>
            </Stack>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Business Settings Form */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            Business Settings & Preferences
          </QuantumTypography>

          <Stack spacing={4} maxWidth={600}>
            {/* Notification Preferences */}
            <Box>
              <QuantumTypography variant="h5" gutterBottom>
                AI Notification Preferences
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Choose how often you want to receive AI insights and
                recommendations
              </QuantumTypography>

              <Stack direction="row" spacing={2} mb={2}>
                <QuantumButton intent="secondary" size="small">
                  Real-time
                </QuantumButton>
                <QuantumButton intent="ghost" size="small">
                  Daily Summary
                </QuantumButton>
                <QuantumButton intent="ghost" size="small">
                  Weekly Report
                </QuantumButton>
              </Stack>
            </Box>

            {/* Data Sharing Settings */}
            <Box>
              <QuantumTypography variant="h5" gutterBottom>
                Cross-Business Analytics
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Allow Vritti AI to analyze patterns across your business
                portfolio for better insights
              </QuantumTypography>

              <Stack direction="row" spacing={2} mb={2}>
                <QuantumButton intent="primary" size="small">
                  Enable Full Analysis
                </QuantumButton>
                <QuantumButton intent="secondary" size="small">
                  Limited Sharing
                </QuantumButton>
                <QuantumButton intent="ghost" size="small">
                  Individual Only
                </QuantumButton>
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={3}>
              <QuantumButton intent="primary" size="large">
                Save Preferences
              </QuantumButton>
              <QuantumButton intent="secondary" size="large">
                Reset to Defaults
              </QuantumButton>
              <QuantumButton intent="destructive" size="large">
                Delete Account
              </QuantumButton>
            </Stack>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Confirmation Dialog Simulation */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Confirmation Required
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Are you sure you want to remove "Downtown Salon" from your business
            portfolio? This action cannot be undone.
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            This will permanently delete all historical data, analytics, and AI
            insights for this business.
          </QuantumTypography>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <QuantumButton intent="ghost">Cancel</QuantumButton>
            <QuantumButton intent="destructive">
              Yes, Remove Business
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
          "Business forms showing button usage in form contexts, settings panels, and confirmation dialogs with proper action hierarchy.",
      },
    },
  },
};

export const ThemeAdaptiveButtons: Story = {
  render: () => (
    <Stack spacing={4}>
      <QuantumTypography variant="h2" gutterBottom>
        Theme-Adaptive Business Buttons
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Switch between light and dark themes using the Storybook toolbar to see
        button adaptation
      </QuantumTypography>

      {/* Primary Surface Testing */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            On Primary Surface
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Business dashboard main content area
          </QuantumTypography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary">Analyze Portfolio</QuantumButton>
            <QuantumButton intent="secondary">Export Reports</QuantumButton>
            <QuantumButton intent="destructive">Remove Business</QuantumButton>
            <QuantumButton intent="ghost">View Details</QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Secondary Surface Testing */}
      <QuantumPaper variant="glass">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            On Glass Surface
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Modal dialogs and overlay interfaces
          </QuantumTypography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary">Confirm Analysis</QuantumButton>
            <QuantumButton intent="secondary">Save Changes</QuantumButton>
            <QuantumButton intent="destructive">Delete Data</QuantumButton>
            <QuantumButton intent="ghost">Cancel</QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Elevated Surface Testing */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            On Elevated Surface
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Important cards and highlighted content
          </QuantumTypography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary">Optimize Now</QuantumButton>
            <QuantumButton intent="secondary">Schedule Later</QuantumButton>
            <QuantumButton intent="destructive">Reset Settings</QuantumButton>
            <QuantumButton intent="ghost">Learn More</QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Subtle Surface Testing */}
      <QuantumPaper variant="subtle">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            On Subtle Surface
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Background sections and less important content
          </QuantumTypography>

          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <QuantumButton intent="primary">Start Trial</QuantumButton>
            <QuantumButton intent="secondary">Contact Sales</QuantumButton>
            <QuantumButton intent="destructive">End Subscription</QuantumButton>
            <QuantumButton intent="ghost">Maybe Later</QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>
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
      <QuantumTypography variant="h2" gutterBottom>
        Interactive Business Scenarios
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Click buttons to experience realistic business workflows and feedback
      </QuantumTypography>

      {/* Revenue Optimization */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            Revenue Optimization Opportunity
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Vritti AI has identified a potential 18% revenue increase across
            your salon and restaurant operations through improved customer flow
            optimization.
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Implementation time: 2-3 weeks • Expected ROI: $12,400/month
          </QuantumTypography>

          <Stack direction="row" spacing={2}>
            <QuantumButton
              intent="primary"
              onClick={() =>
                alert(
                  "Optimization plan generated! Implementation timeline created for 3 weeks."
                )
              }
            >
              Implement Optimization
            </QuantumButton>
            <QuantumButton
              intent="secondary"
              onClick={() =>
                alert("Detailed analysis report downloaded to your dashboard.")
              }
            >
              Download Full Report
            </QuantumButton>
            <QuantumButton
              intent="ghost"
              onClick={() =>
                alert("Optimization opportunity saved for later review.")
              }
            >
              Review Later
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Business Alert */}
      <QuantumPaper variant="glass">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            🚨 Business Performance Alert
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Downtown Salon's customer satisfaction has dropped to 3.2/5 in the
            past week. Immediate attention recommended.
          </QuantumTypography>

          <Stack direction="row" spacing={2}>
            <QuantumButton
              intent="primary"
              onClick={() =>
                alert(
                  "Emergency response team notified. Detailed analysis initiated."
                )
              }
            >
              Address Immediately
            </QuantumButton>
            <QuantumButton
              intent="secondary"
              onClick={() =>
                alert("Staff meeting scheduled for tomorrow morning at 9 AM.")
              }
            >
              Schedule Staff Meeting
            </QuantumButton>
            <QuantumButton
              intent="ghost"
              onClick={() =>
                alert("Customer feedback analysis sent to your email.")
              }
            >
              View Customer Feedback
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Data Export Request */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            Data Export & Analytics
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Generate comprehensive reports for tax preparation, investor
            meetings, or strategic planning.
          </QuantumTypography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <QuantumButton
                intent="primary"
                onClick={() =>
                  alert(
                    "Full portfolio report generating... Estimated completion: 3 minutes"
                  )
                }
              >
                Generate Portfolio Report
              </QuantumButton>
              <QuantumButton
                intent="secondary"
                onClick={() =>
                  alert(
                    "Financial summary exported to Excel. Download started."
                  )
                }
              >
                Export Financial Data
              </QuantumButton>
              <QuantumButton
                intent="secondary"
                onClick={() =>
                  alert("Customer analytics dashboard opened in new tab.")
                }
              >
                Customer Analytics
              </QuantumButton>
            </Stack>

            <Stack direction="row" spacing={2}>
              <QuantumButton
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
              </QuantumButton>
              <QuantumButton
                intent="ghost"
                onClick={() => alert("Data retention policy document opened.")}
              >
                View Data Policy
              </QuantumButton>
            </Stack>
          </Stack>
        </Box>
      </QuantumPaper>
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
