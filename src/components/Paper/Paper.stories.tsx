import { Box, Stack } from "@mui/material";
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

export const Default: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Business Performance Summary
        </Typography>
        <Typography variant="body2" intent="secondary" paragraph>
          Your portfolio generated $847,392 in revenue this month, representing
          a 23% increase over last month.
        </Typography>
        <Button intent="primary" size="small">
          View Full Report
        </Button>
      </Box>
    ),
  },
};

export const BusinessSurfaceVariants: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Vritti AI Surface Types
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Different paper variants optimized for business dashboard interfaces,
        forms, modals, and content cards. Switch themes to see adaptive styling.
      </Typography>

      <Stack spacing={4} sx={{ maxWidth: 600 }}>
        {/* Standard Surface - Main Content */}
        <Paper variant="standard">
          <Box p={4}>
            <Typography variant="h3" gutterBottom>
              Standard Business Card
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Perfect for main dashboard content, business summaries, and
              primary information displays.
            </Typography>

            <Box mb={3}>
              <Typography variant="h1" gutterBottom>
                $234,567
              </Typography>
              <Typography variant="h6" intent="secondary" gutterBottom>
                Monthly Portfolio Revenue
              </Typography>
              <Typography variant="body2" intent="primary">
                ↑ 15% increase from last month across all business locations
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button intent="primary" size="small">
                Analyze Trends
              </Button>
              <Button intent="secondary" size="small">
                Export Data
              </Button>
            </Stack>
          </Box>
        </Paper>

        {/* Glass Surface - Modals & Overlays */}
        <Paper variant="glass">
          <Box p={4}>
            <Typography variant="h3" gutterBottom>
              Glass Modal Interface
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Ideal for modal dialogs, floating panels, and overlay interfaces
              with glassmorphism effect.
            </Typography>

            <Stack spacing={3}>
              <TextField
                label="Business Name"
                placeholder="Enter business name"
                size="small"
              />

              <Box>
                <Typography variant="h5" gutterBottom>
                  AI Analysis Status
                </Typography>
                <Typography variant="body2" intent="secondary">
                  Vritti AI is currently analyzing customer patterns across your
                  salon and restaurant operations.
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                <Button intent="primary" size="small">
                  Continue Analysis
                </Button>
                <Button intent="ghost" size="small">
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>

        {/* Elevated Surface - Important Content */}
        <Paper variant="elevated">
          <Box p={4}>
            <Typography variant="h3" gutterBottom>
              Priority Business Alert
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Elevated surfaces draw attention to important notifications,
              featured content, and critical business insights.
            </Typography>

            <Box
              p={3}
              mb={3}
              sx={{
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                borderRadius: "var(--quantum-borderRadius-medium)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <Typography variant="h4" gutterBottom>
                🚀 Revenue Optimization Opportunity
              </Typography>
              <Typography variant="body1" paragraph>
                Cross-business analysis reveals 23% of your salon clients also
                visit your restaurant. Implementing a loyalty program could
                increase combined revenue by $12,400/month.
              </Typography>
              <Typography variant="body2" intent="secondary">
                Impact: High • Implementation: 2 weeks • ROI: 340%
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button intent="primary">Implement Strategy</Button>
              <Button intent="secondary">View Details</Button>
              <Button intent="ghost">Remind Later</Button>
            </Stack>
          </Box>
        </Paper>

        {/* Subtle Surface - Background Content */}
        <Paper variant="subtle">
          <Box p={4}>
            <Typography variant="h3" gutterBottom>
              Background Information
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Subtle surfaces work well for background sections, supporting
              information, and less critical content areas.
            </Typography>

            <Stack spacing={2}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2">
                  Last Data Sync:
                </Typography>
                <Typography variant="body2" intent="secondary">
                  2 minutes ago
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2">
                  Active Businesses:
                </Typography>
                <Typography variant="body2" intent="secondary">
                  12 connected
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2">
                  AI Analysis Mode:
                </Typography>
                <Typography variant="body2" intent="secondary">
                  Real-time monitoring
                </Typography>
              </Box>
            </Stack>

            <Box mt={3}>
              <Button intent="ghost" size="small" fullWidth>
                View System Status
              </Button>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive showcase of all paper variants with realistic Vritti AI business content showing their intended use cases and visual hierarchy.",
      },
    },
  },
};

export const BusinessDashboardCards: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Business Dashboard Cards
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Real-world dashboard implementation showing how different paper variants
        work together in business interfaces.
      </Typography>

      {/* Main Performance Card */}
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
                Portfolio Performance Overview
              </Typography>
              <Typography variant="body2" intent="secondary">
                Real-time analytics across all business locations
              </Typography>
            </Box>
            <Button intent="secondary" size="small">
              Last 30 Days
            </Button>
          </Stack>

          {/* Metrics Grid */}
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
                  ↑ 23% vs last month
                </Typography>
                <Button intent="ghost" size="small" fullWidth>
                  Revenue Breakdown
                </Button>
              </Box>
            </Paper>

            <Paper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <Typography variant="h1" gutterBottom>
                  4.8
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Avg Rating
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
                  67
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

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button intent="primary" size="large">
              Generate Full Report
            </Button>
            <Button intent="secondary" size="large">
              Schedule Deep Analysis
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Individual Business Cards */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Salon Business Card */}
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Downtown Beauty Salon
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Premium beauty services with AI-optimized appointment scheduling
            </Typography>

            <Stack spacing={2} mb={3}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  $28,450
                </Typography>
                <Typography variant="body2" intent="secondary">
                  Monthly Revenue (↑ 15%)
                </Typography>
              </Box>

              <Stack direction="row" spacing={4}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    89%
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Booking Rate
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    4.9
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Customer Rating
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    12m
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Avg Wait Time
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Button intent="primary" fullWidth>
                Optimize Schedule
              </Button>
              <Stack direction="row" spacing={2}>
                <Button intent="secondary" size="small" sx={{ flex: 1 }}>
                  Staff Analytics
                </Button>
                <Button intent="ghost" size="small" sx={{ flex: 1 }}>
                  View Calendar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>

        {/* Restaurant Business Card */}
        <Paper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Riverside Restaurant
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Farm-to-table dining with AI-powered menu optimization
            </Typography>

            <Stack spacing={2} mb={3}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  $45,230
                </Typography>
                <Typography variant="body2" intent="secondary">
                  Monthly Revenue (↑ 18%)
                </Typography>
              </Box>

              <Stack direction="row" spacing={4}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    76
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Tables/Day Avg
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    $63
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Avg Order Value
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    4.7
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    Food Rating
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Button intent="primary" fullWidth>
                Menu Analysis
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
          "Complete business dashboard showing how paper variants work together in realistic business card layouts with metrics, actions, and hierarchical information.",
      },
    },
  },
};

export const BusinessFormsAndModals: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Business Forms & Modal Interfaces
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Paper variants optimized for form interfaces, modal dialogs, and data
        entry contexts in business applications.
      </Typography>

      {/* Business Registration Form */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Add New Business to Portfolio
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Connect a new business to your Vritti AI portfolio for comprehensive
            cross-business analytics and optimization.
          </Typography>

          <Stack spacing={3} maxWidth={500}>
            <TextField
              label="Business Name"
              placeholder="Enter your business name"
              fullWidth
            />

            <TextField
              label="Industry Type"
              placeholder="Salon, Restaurant, Clinic, Retail..."
              fullWidth
            />

            <TextField
              label="Location"
              placeholder="City, State or Full Address"
              fullWidth
            />

            <TextField
              label="Monthly Revenue Range"
              placeholder="$5K - $50K+ per month"
              fullWidth
            />

            <TextField
              label="Number of Employees"
              placeholder="1-50+ employees"
              fullWidth
            />

            <Box>
              <Typography variant="h5" gutterBottom>
                AI Analysis Preferences
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Choose how comprehensive you want the AI analysis to be
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button intent="secondary" size="small">
                  Basic Analytics
                </Button>
                <Button intent="primary" size="small">
                  Full AI Analysis
                </Button>
                <Button intent="ghost" size="small">
                  Custom Setup
                </Button>
              </Stack>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
              <Button intent="primary" size="large" sx={{ flex: 1 }}>
                Connect Business
              </Button>
              <Button intent="secondary" size="large" sx={{ flex: 1 }}>
                Save as Draft
              </Button>
            </Stack>

            <Button intent="ghost" size="small" fullWidth>
              Cancel and Return to Dashboard
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Settings Panel */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            Portfolio Settings & Notifications
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Configure how Vritti AI monitors and reports on your business
            portfolio performance.
          </Typography>

          <Stack spacing={4} maxWidth={600}>
            {/* Notification Settings */}
            <Paper variant="subtle">
              <Box p={3}>
                <Typography variant="h5" gutterBottom>
                  AI Insight Notifications
                </Typography>
                <Typography variant="body2" intent="secondary" paragraph>
                  Control when and how you receive AI-generated business
                  insights and recommendations.
                </Typography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <Button intent="primary" size="small">
                      Real-time Alerts
                    </Button>
                    <Button intent="secondary" size="small">
                      Daily Summary
                    </Button>
                    <Button intent="ghost" size="small">
                      Weekly Reports
                    </Button>
                  </Stack>

                  <Typography variant="caption" intent="secondary">
                    Current: Real-time alerts for critical insights, daily
                    summaries for performance metrics
                  </Typography>
                </Stack>
              </Box>
            </Paper>

            {/* Data Sharing Settings */}
            <Paper variant="subtle">
              <Box p={3}>
                <Typography variant="h5" gutterBottom>
                  Cross-Business Analytics
                </Typography>
                <Typography variant="body2" intent="secondary" paragraph>
                  Allow Vritti AI to analyze patterns across your entire
                  business portfolio for enhanced insights.
                </Typography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <Button intent="primary" size="small">
                      Full Portfolio Analysis
                    </Button>
                    <Button intent="secondary" size="small">
                      Limited Cross-Analysis
                    </Button>
                    <Button intent="ghost" size="small">
                      Individual Only
                    </Button>
                  </Stack>

                  <Typography variant="caption" intent="secondary">
                    Current: Full portfolio analysis enabled - identifying
                    cross-business opportunities
                  </Typography>
                </Stack>
              </Box>
            </Paper>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button intent="primary" size="large">
                Save All Settings
              </Button>
              <Button intent="secondary" size="large">
                Reset to Defaults
              </Button>
              <Button intent="destructive" size="large">
                Export & Delete Account
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      {/* Confirmation Modal */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            ⚠️ Confirm Business Removal
          </Typography>
          <Typography variant="body1" paragraph>
            Are you sure you want to remove "Downtown Beauty Salon" from your
            Vritti AI portfolio? This action cannot be undone.
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            This will permanently delete:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography variant="body2" component="li" gutterBottom>
              18 months of historical performance data
            </Typography>
            <Typography variant="body2" component="li" gutterBottom>
              67 AI-generated insights and recommendations
            </Typography>
            <Typography variant="body2" component="li" gutterBottom>
              Cross-business analytics connections
            </Typography>
            <Typography variant="body2" component="li">
              Customer pattern analysis and trends
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button intent="secondary">
              Keep Business Connected
            </Button>
            <Button intent="destructive">
              Yes, Remove Permanently
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
          "Business forms and modal interfaces showing how paper variants provide the right visual context for different types of user interactions and data entry scenarios.",
      },
    },
  },
};

export const ThemeAdaptiveSurfaces: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Theme-Adaptive Business Surfaces
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Switch between light and dark themes using the Storybook toolbar to see
        how paper surfaces automatically adapt their styling.
      </Typography>

      {/* Navigation Interface */}
      <Paper variant="glass">
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Box>
            <Typography variant="h4">
              Vritti AI Dashboard
            </Typography>
            <Typography variant="caption" intent="secondary">
              Portfolio Management • Real-time Analytics
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button intent="ghost" size="small">
              Notifications (3)
            </Button>
            <Button intent="secondary" size="small">
              Settings
            </Button>
            <Button intent="primary" size="small">
              Generate Report
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Content Sections with Different Surfaces */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Left Column - Primary Content */}
        <Stack spacing={3} sx={{ flex: 2 }}>
          <Paper variant="standard">
            <Box p={4}>
              <Typography variant="h3" gutterBottom>
                Business Performance Insights
              </Typography>
              <Typography variant="body1" paragraph>
                Vritti AI has identified several optimization opportunities
                across your business portfolio that could result in significant
                revenue improvements.
              </Typography>

              <Paper variant="subtle">
                <Box p={3} mb={3}>
                  <Typography variant="h5" gutterBottom>
                    Cross-Business Customer Analysis
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Analysis shows 31% customer overlap between your salon and
                    restaurant operations, presenting unique cross-promotion
                    opportunities.
                  </Typography>
                  <Button intent="primary" size="small">
                    Implement Cross-Promotion Strategy
                  </Button>
                </Box>
              </Paper>

              <Stack direction="row" spacing={2}>
                <Button intent="primary">
                  View Detailed Analysis
                </Button>
                <Button intent="secondary">
                  Schedule Implementation
                </Button>
              </Stack>
            </Box>
          </Paper>

          <Paper variant="elevated">
            <Box p={4}>
              <Typography variant="h3" gutterBottom>
                📈 Revenue Opportunity Alert
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>High Priority:</strong> Implementing dynamic pricing
                strategies could increase revenue by an estimated $18,400 per
                month across your restaurant locations.
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                AI Confidence: 94% • Implementation Time: 1-2 weeks • ROI
                Timeline: Immediate
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button intent="primary">
                  Implement Strategy
                </Button>
                <Button intent="secondary">Learn More</Button>
                <Button intent="ghost">Remind Tomorrow</Button>
              </Stack>
            </Box>
          </Paper>
        </Stack>

        {/* Right Column - Supporting Content */}
        <Stack spacing={3} sx={{ flex: 1 }}>
          <Paper variant="glass">
            <Box p={3}>
              <Typography variant="h4" gutterBottom>
                Quick Actions
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Common business management tasks and shortcuts
              </Typography>

              <Stack spacing={2}>
                <Button intent="primary" size="small" fullWidth>
                  Add New Business
                </Button>
                <Button intent="secondary" size="small" fullWidth>
                  Export Monthly Report
                </Button>
                <Button intent="secondary" size="small" fullWidth>
                  Schedule AI Review
                </Button>
                <Button intent="ghost" size="small" fullWidth>
                  View All Insights
                </Button>
              </Stack>
            </Box>
          </Paper>

          <Paper variant="subtle">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>
                System Status
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Real-time monitoring of your business data connections
              </Typography>

              <Stack spacing={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">
                    Data Sync Status:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "success.main" }}
                  >
                    ✓ Active
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">
                    Connected Businesses:
                  </Typography>
                  <Typography variant="body2" intent="secondary">
                    12 of 12
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">
                    AI Analysis Mode:
                  </Typography>
                  <Typography variant="body2" intent="secondary">
                    Real-time
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2">
                    Last Full Analysis:
                  </Typography>
                  <Typography variant="body2" intent="secondary">
                    3 hours ago
                  </Typography>
                </Box>
              </Stack>

              <Box mt={3}>
                <Button intent="ghost" size="small" fullWidth>
                  View Detailed Status
                </Button>
              </Box>
            </Box>
          </Paper>

          <Paper variant="standard">
            <Box p={3}>
              <Typography variant="h5" gutterBottom>
                Recent AI Insights
              </Typography>
              <Typography variant="body2" intent="secondary" paragraph>
                Latest recommendations from your AI business assistant
              </Typography>

              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Optimize salon appointment slots during 2-4 PM for 12%
                    revenue increase
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    2 hours ago • Downtown Salon
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" gutterBottom>
                    Menu item "Seasonal Risotto" shows 89% customer satisfaction
                    - consider promoting
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    4 hours ago • Riverside Restaurant
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2" gutterBottom>
                    Staff scheduling optimization could reduce overtime costs by
                    $2,400/month
                  </Typography>
                  <Typography variant="caption" intent="secondary">
                    6 hours ago • Portfolio-wide
                  </Typography>
                </Box>
              </Stack>

              <Box mt={3}>
                <Button intent="primary" size="small" fullWidth>
                  View All Insights
                </Button>
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive layout showing how paper variants automatically adapt their styling across light and dark themes while maintaining proper contrast and readability.",
      },
    },
  },
};

export const InteractiveBusinessWorkflows: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Interactive Business Workflows
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Click buttons to experience realistic business workflows and see how
        paper surfaces support different interaction patterns.
      </Typography>

      {/* Performance Alert Workflow */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            🚨 Performance Alert: Immediate Action Required
          </Typography>
          <Typography variant="body1" paragraph>
            Customer satisfaction at Downtown Salon has dropped to 3.1/5 over
            the past 48 hours. This requires immediate investigation and
            response.
          </Typography>

          <Paper variant="glass">
            <Box p={3} mb={3}>
              <Typography variant="h5" gutterBottom>
                AI Analysis Summary
              </Typography>
              <Typography variant="body2" paragraph>
                Analysis of recent customer feedback reveals issues with wait
                times and service quality during peak hours (2-6 PM).
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">
                  • Average wait time increased from 8 to 23 minutes
                </Typography>
                <Typography variant="body2">
                  • 3 staff members called in sick this week
                </Typography>
                <Typography variant="body2">
                  • Equipment maintenance delayed appointment schedules
                </Typography>
              </Stack>
            </Box>
          </Paper>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              intent="primary"
              onClick={() =>
                alert(
                  "Emergency staff meeting scheduled for 8 AM tomorrow. All managers notified."
                )
              }
            >
              Schedule Emergency Meeting
            </Button>
            <Button
              intent="secondary"
              onClick={() =>
                alert(
                  "Temporary staff from other locations will be reassigned to Downtown Salon."
                )
              }
            >
              Deploy Backup Staff
            </Button>
            <Button
              intent="secondary"
              onClick={() =>
                alert(
                  "Detailed customer feedback analysis report sent to your email."
                )
              }
            >
              Analyze Customer Feedback
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Revenue Optimization Workflow */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            💡 Revenue Optimization Opportunity
          </Typography>
          <Typography variant="body1" paragraph>
            Vritti AI has identified a cross-business synergy that could
            increase your combined monthly revenue by $15,600.
          </Typography>

          <Paper variant="subtle">
            <Box p={3} mb={3}>
              <Typography variant="h5" gutterBottom>
                Opportunity Details
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Discovery:</strong> 27% of your salon customers work
                within 2 blocks of your restaurant location.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Strategy:</strong> Implement a "Beauty Break" lunch
                package offering express salon services + restaurant meal
                combinations.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Projected Impact:</strong> 40% increase in weekday lunch
                traffic, 15% boost in salon midday bookings.
              </Typography>
            </Box>
          </Paper>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              intent="primary"
              onClick={() =>
                alert(
                  "Implementation plan created! Marketing materials will be ready in 5 business days."
                )
              }
            >
              Implement Strategy
            </Button>
            <Button
              intent="secondary"
              onClick={() =>
                alert(
                  "Detailed financial projections and timeline sent to your dashboard."
                )
              }
            >
              View Financial Projections
            </Button>
            <Button
              intent="ghost"
              onClick={() =>
                alert(
                  "Opportunity saved to your review queue for later consideration."
                )
              }
            >
              Save for Later Review
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Business Addition Workflow */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            🏢 Add New Business Location
          </Typography>
          <Typography variant="body2" intent="secondary" paragraph>
            Expand your portfolio by connecting a new business to Vritti AI's
            analytics and optimization platform.
          </Typography>

          <Stack spacing={3} maxWidth={400}>
            <TextField
              label="Business Name"
              placeholder="e.g., Westside Wellness Clinic"
            />

            <TextField
              label="Business Type"
              placeholder="e.g., Health & Wellness"
            />

            <Box>
              <Typography variant="h6" gutterBottom>
                Select Integration Level
              </Typography>
              <Stack direction="row" spacing={2} mb={2}>
                <Button intent="secondary" size="small">
                  Basic Analytics
                </Button>
                <Button intent="primary" size="small">
                  Full AI Integration
                </Button>
              </Stack>
              <Typography variant="caption" intent="secondary">
                Full integration enables cross-business insights and
                optimization recommendations
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button
                intent="primary"
                sx={{ flex: 1 }}
                onClick={() =>
                  alert(
                    "Business connection initiated! Setup wizard will guide you through the integration process."
                  )
                }
              >
                Connect Business
              </Button>
              <Button
                intent="ghost"
                sx={{ flex: 1 }}
                onClick={() =>
                  alert(
                    "Form data saved as draft. You can continue setup later from your dashboard."
                  )
                }
              >
                Save Draft
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      {/* Data Export Workflow */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="h3" gutterBottom>
            📊 Export Business Data
          </Typography>
          <Typography variant="body1" paragraph>
            Generate comprehensive reports for tax preparation, investor
            meetings, or strategic planning sessions.
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography variant="h5" gutterBottom>
                Select Export Type
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Financial summary report generating... Download will start in 30 seconds."
                    )
                  }
                >
                  Financial Summary
                </Button>
                <Button
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Customer analytics report generating... Estimated completion: 2 minutes."
                    )
                  }
                >
                  Customer Analytics
                </Button>
                <Button
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Performance metrics exported to Excel format. Check your downloads folder."
                    )
                  }
                >
                  Performance Metrics
                </Button>
                <Button
                  intent="primary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Comprehensive portfolio report generating... This may take 5-10 minutes for complete analysis."
                    )
                  }
                >
                  Full Portfolio Report
                </Button>
              </Stack>
            </Box>

            <Paper variant="subtle">
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  ⚠️ Data Management Options
                </Typography>
                <Typography variant="body2" intent="secondary" paragraph>
                  Advanced data management and privacy controls for your
                  business information.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    intent="ghost"
                    size="small"
                    onClick={() =>
                      alert(
                        "Data retention policy document opened. Review your current settings and retention periods."
                      )
                    }
                  >
                    View Data Policy
                  </Button>
                  <Button
                    intent="destructive"
                    size="small"
                    onClick={() => {
                      if (
                        confirm(
                          "This will permanently delete ALL business data. This action cannot be undone. Are you absolutely sure?"
                        )
                      ) {
                        alert(
                          "Data deletion request submitted. You will receive email confirmation and a 7-day grace period to cancel."
                        );
                      }
                    }}
                  >
                    Delete All Data
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive business workflows demonstrating how paper surfaces support different types of user interactions, from alerts and opportunities to data management tasks.",
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
          Playground Business Card
        </Typography>
        <Typography variant="body2" intent="secondary" paragraph>
          Use the controls panel to experiment with different paper variants and
          see how they affect the visual presentation of business content.
        </Typography>

        <Box mb={3}>
          <Typography variant="h2" gutterBottom>
            $45,230
          </Typography>
          <Typography variant="h6" intent="secondary" gutterBottom>
            Monthly Revenue
          </Typography>
          <Typography variant="body2" intent="primary">
            ↑ 18% increase from last month
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button intent="primary" size="small">
            Analyze Performance
          </Button>
          <Button intent="secondary" size="small">
            Export Data
          </Button>
          <Button intent="ghost" size="small">
            View Details
          </Button>
        </Stack>
      </Box>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with all paper variants and props to see how they work in different business contexts.",
      },
    },
  },
};
