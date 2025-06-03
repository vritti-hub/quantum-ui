import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuantumButton } from "../Button/Button";
import { QuantumTextField } from "../TextField/TextField";
import { QuantumTypography } from "../Typography/Typography";
import { QuantumPaper } from "./Paper";

const meta: Meta<typeof QuantumPaper> = {
  title: "Components/Paper",
  component: QuantumPaper,
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
type Story = StoryObj<typeof QuantumPaper>;

export const Default: Story = {
  args: {
    variant: "standard",
    children: (
      <Box p={3}>
        <QuantumTypography variant="h4" gutterBottom>
          Business Performance Summary
        </QuantumTypography>
        <QuantumTypography variant="body2" intent="secondary" paragraph>
          Your portfolio generated $847,392 in revenue this month, representing
          a 23% increase over last month.
        </QuantumTypography>
        <QuantumButton intent="primary" size="small">
          View Full Report
        </QuantumButton>
      </Box>
    ),
  },
};

export const BusinessSurfaceVariants: Story = {
  render: () => (
    <Stack spacing={4}>
      <QuantumTypography variant="h2" gutterBottom>
        Vritti AI Surface Types
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Different paper variants optimized for business dashboard interfaces,
        forms, modals, and content cards. Switch themes to see adaptive styling.
      </QuantumTypography>

      <Stack spacing={4} sx={{ maxWidth: 600 }}>
        {/* Standard Surface - Main Content */}
        <QuantumPaper variant="standard">
          <Box p={4}>
            <QuantumTypography variant="h3" gutterBottom>
              Standard Business Card
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Perfect for main dashboard content, business summaries, and
              primary information displays.
            </QuantumTypography>

            <Box mb={3}>
              <QuantumTypography variant="h1" gutterBottom>
                $234,567
              </QuantumTypography>
              <QuantumTypography variant="h6" intent="secondary" gutterBottom>
                Monthly Portfolio Revenue
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="primary">
                ↑ 15% increase from last month across all business locations
              </QuantumTypography>
            </Box>

            <Stack direction="row" spacing={2}>
              <QuantumButton intent="primary" size="small">
                Analyze Trends
              </QuantumButton>
              <QuantumButton intent="secondary" size="small">
                Export Data
              </QuantumButton>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Glass Surface - Modals & Overlays */}
        <QuantumPaper variant="glass">
          <Box p={4}>
            <QuantumTypography variant="h3" gutterBottom>
              Glass Modal Interface
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Ideal for modal dialogs, floating panels, and overlay interfaces
              with glassmorphism effect.
            </QuantumTypography>

            <Stack spacing={3}>
              <QuantumTextField
                label="Business Name"
                placeholder="Enter business name"
                size="small"
              />

              <Box>
                <QuantumTypography variant="h5" gutterBottom>
                  AI Analysis Status
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  Vritti AI is currently analyzing customer patterns across your
                  salon and restaurant operations.
                </QuantumTypography>
              </Box>

              <Stack direction="row" spacing={2}>
                <QuantumButton intent="primary" size="small">
                  Continue Analysis
                </QuantumButton>
                <QuantumButton intent="ghost" size="small">
                  Cancel
                </QuantumButton>
              </Stack>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Elevated Surface - Important Content */}
        <QuantumPaper variant="elevated">
          <Box p={4}>
            <QuantumTypography variant="h3" gutterBottom>
              Priority Business Alert
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Elevated surfaces draw attention to important notifications,
              featured content, and critical business insights.
            </QuantumTypography>

            <Box
              p={3}
              mb={3}
              sx={{
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                borderRadius: "var(--quantum-borderRadius-medium)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <QuantumTypography variant="h4" gutterBottom>
                🚀 Revenue Optimization Opportunity
              </QuantumTypography>
              <QuantumTypography variant="body1" paragraph>
                Cross-business analysis reveals 23% of your salon clients also
                visit your restaurant. Implementing a loyalty program could
                increase combined revenue by $12,400/month.
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary">
                Impact: High • Implementation: 2 weeks • ROI: 340%
              </QuantumTypography>
            </Box>

            <Stack direction="row" spacing={2}>
              <QuantumButton intent="primary">Implement Strategy</QuantumButton>
              <QuantumButton intent="secondary">View Details</QuantumButton>
              <QuantumButton intent="ghost">Remind Later</QuantumButton>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Subtle Surface - Background Content */}
        <QuantumPaper variant="subtle">
          <Box p={4}>
            <QuantumTypography variant="h3" gutterBottom>
              Background Information
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Subtle surfaces work well for background sections, supporting
              information, and less critical content areas.
            </QuantumTypography>

            <Stack spacing={2}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <QuantumTypography variant="body2">
                  Last Data Sync:
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  2 minutes ago
                </QuantumTypography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <QuantumTypography variant="body2">
                  Active Businesses:
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  12 connected
                </QuantumTypography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <QuantumTypography variant="body2">
                  AI Analysis Mode:
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  Real-time monitoring
                </QuantumTypography>
              </Box>
            </Stack>

            <Box mt={3}>
              <QuantumButton intent="ghost" size="small" fullWidth>
                View System Status
              </QuantumButton>
            </Box>
          </Box>
        </QuantumPaper>
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
      <QuantumTypography variant="h2" gutterBottom>
        Business Dashboard Cards
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Real-world dashboard implementation showing how different paper variants
        work together in business interfaces.
      </QuantumTypography>

      {/* Main Performance Card */}
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
                Portfolio Performance Overview
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary">
                Real-time analytics across all business locations
              </QuantumTypography>
            </Box>
            <QuantumButton intent="secondary" size="small">
              Last 30 Days
            </QuantumButton>
          </Stack>

          {/* Metrics Grid */}
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
                  ↑ 23% vs last month
                </QuantumTypography>
                <QuantumButton intent="ghost" size="small" fullWidth>
                  Revenue Breakdown
                </QuantumButton>
              </Box>
            </QuantumPaper>

            <QuantumPaper variant="glass" sx={{ flex: 1 }}>
              <Box p={3} textAlign="center">
                <QuantumTypography variant="h1" gutterBottom>
                  4.8
                </QuantumTypography>
                <QuantumTypography variant="h6" gutterBottom>
                  Avg Rating
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
                  67
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

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <QuantumButton intent="primary" size="large">
              Generate Full Report
            </QuantumButton>
            <QuantumButton intent="secondary" size="large">
              Schedule Deep Analysis
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Individual Business Cards */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Salon Business Card */}
        <QuantumPaper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <QuantumTypography variant="h4" gutterBottom>
              Downtown Beauty Salon
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Premium beauty services with AI-optimized appointment scheduling
            </QuantumTypography>

            <Stack spacing={2} mb={3}>
              <Box>
                <QuantumTypography variant="h2" gutterBottom>
                  $28,450
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  Monthly Revenue (↑ 15%)
                </QuantumTypography>
              </Box>

              <Stack direction="row" spacing={4}>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    89%
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Booking Rate
                  </QuantumTypography>
                </Box>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    4.9
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Customer Rating
                  </QuantumTypography>
                </Box>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    12m
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Avg Wait Time
                  </QuantumTypography>
                </Box>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <QuantumButton intent="primary" fullWidth>
                Optimize Schedule
              </QuantumButton>
              <Stack direction="row" spacing={2}>
                <QuantumButton intent="secondary" size="small" sx={{ flex: 1 }}>
                  Staff Analytics
                </QuantumButton>
                <QuantumButton intent="ghost" size="small" sx={{ flex: 1 }}>
                  View Calendar
                </QuantumButton>
              </Stack>
            </Stack>
          </Box>
        </QuantumPaper>

        {/* Restaurant Business Card */}
        <QuantumPaper variant="standard" sx={{ flex: 1 }}>
          <Box p={3}>
            <QuantumTypography variant="h4" gutterBottom>
              Riverside Restaurant
            </QuantumTypography>
            <QuantumTypography variant="body2" intent="secondary" paragraph>
              Farm-to-table dining with AI-powered menu optimization
            </QuantumTypography>

            <Stack spacing={2} mb={3}>
              <Box>
                <QuantumTypography variant="h2" gutterBottom>
                  $45,230
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary">
                  Monthly Revenue (↑ 18%)
                </QuantumTypography>
              </Box>

              <Stack direction="row" spacing={4}>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    76
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Tables/Day Avg
                  </QuantumTypography>
                </Box>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    $63
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Avg Order Value
                  </QuantumTypography>
                </Box>
                <Box>
                  <QuantumTypography variant="h5" gutterBottom>
                    4.7
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    Food Rating
                  </QuantumTypography>
                </Box>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <QuantumButton intent="primary" fullWidth>
                Menu Analysis
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
          "Complete business dashboard showing how paper variants work together in realistic business card layouts with metrics, actions, and hierarchical information.",
      },
    },
  },
};

export const BusinessFormsAndModals: Story = {
  render: () => (
    <Stack spacing={4}>
      <QuantumTypography variant="h2" gutterBottom>
        Business Forms & Modal Interfaces
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Paper variants optimized for form interfaces, modal dialogs, and data
        entry contexts in business applications.
      </QuantumTypography>

      {/* Business Registration Form */}
      <QuantumPaper variant="glass">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            Add New Business to Portfolio
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Connect a new business to your Vritti AI portfolio for comprehensive
            cross-business analytics and optimization.
          </QuantumTypography>

          <Stack spacing={3} maxWidth={500}>
            <QuantumTextField
              label="Business Name"
              placeholder="Enter your business name"
              fullWidth
            />

            <QuantumTextField
              label="Industry Type"
              placeholder="Salon, Restaurant, Clinic, Retail..."
              fullWidth
            />

            <QuantumTextField
              label="Location"
              placeholder="City, State or Full Address"
              fullWidth
            />

            <QuantumTextField
              label="Monthly Revenue Range"
              placeholder="$5K - $50K+ per month"
              fullWidth
            />

            <QuantumTextField
              label="Number of Employees"
              placeholder="1-50+ employees"
              fullWidth
            />

            <Box>
              <QuantumTypography variant="h5" gutterBottom>
                AI Analysis Preferences
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Choose how comprehensive you want the AI analysis to be
              </QuantumTypography>

              <Stack direction="row" spacing={2}>
                <QuantumButton intent="secondary" size="small">
                  Basic Analytics
                </QuantumButton>
                <QuantumButton intent="primary" size="small">
                  Full AI Analysis
                </QuantumButton>
                <QuantumButton intent="ghost" size="small">
                  Custom Setup
                </QuantumButton>
              </Stack>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={2}>
              <QuantumButton intent="primary" size="large" sx={{ flex: 1 }}>
                Connect Business
              </QuantumButton>
              <QuantumButton intent="secondary" size="large" sx={{ flex: 1 }}>
                Save as Draft
              </QuantumButton>
            </Stack>

            <QuantumButton intent="ghost" size="small" fullWidth>
              Cancel and Return to Dashboard
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Settings Panel */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            Portfolio Settings & Notifications
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Configure how Vritti AI monitors and reports on your business
            portfolio performance.
          </QuantumTypography>

          <Stack spacing={4} maxWidth={600}>
            {/* Notification Settings */}
            <QuantumPaper variant="subtle">
              <Box p={3}>
                <QuantumTypography variant="h5" gutterBottom>
                  AI Insight Notifications
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary" paragraph>
                  Control when and how you receive AI-generated business
                  insights and recommendations.
                </QuantumTypography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <QuantumButton intent="primary" size="small">
                      Real-time Alerts
                    </QuantumButton>
                    <QuantumButton intent="secondary" size="small">
                      Daily Summary
                    </QuantumButton>
                    <QuantumButton intent="ghost" size="small">
                      Weekly Reports
                    </QuantumButton>
                  </Stack>

                  <QuantumTypography variant="caption" intent="secondary">
                    Current: Real-time alerts for critical insights, daily
                    summaries for performance metrics
                  </QuantumTypography>
                </Stack>
              </Box>
            </QuantumPaper>

            {/* Data Sharing Settings */}
            <QuantumPaper variant="subtle">
              <Box p={3}>
                <QuantumTypography variant="h5" gutterBottom>
                  Cross-Business Analytics
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary" paragraph>
                  Allow Vritti AI to analyze patterns across your entire
                  business portfolio for enhanced insights.
                </QuantumTypography>

                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <QuantumButton intent="primary" size="small">
                      Full Portfolio Analysis
                    </QuantumButton>
                    <QuantumButton intent="secondary" size="small">
                      Limited Cross-Analysis
                    </QuantumButton>
                    <QuantumButton intent="ghost" size="small">
                      Individual Only
                    </QuantumButton>
                  </Stack>

                  <QuantumTypography variant="caption" intent="secondary">
                    Current: Full portfolio analysis enabled - identifying
                    cross-business opportunities
                  </QuantumTypography>
                </Stack>
              </Box>
            </QuantumPaper>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <QuantumButton intent="primary" size="large">
                Save All Settings
              </QuantumButton>
              <QuantumButton intent="secondary" size="large">
                Reset to Defaults
              </QuantumButton>
              <QuantumButton intent="destructive" size="large">
                Export & Delete Account
              </QuantumButton>
            </Stack>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Confirmation Modal */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <QuantumTypography variant="h4" gutterBottom>
            ⚠️ Confirm Business Removal
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Are you sure you want to remove "Downtown Beauty Salon" from your
            Vritti AI portfolio? This action cannot be undone.
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            This will permanently delete:
          </QuantumTypography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <QuantumTypography variant="body2" component="li" gutterBottom>
              18 months of historical performance data
            </QuantumTypography>
            <QuantumTypography variant="body2" component="li" gutterBottom>
              67 AI-generated insights and recommendations
            </QuantumTypography>
            <QuantumTypography variant="body2" component="li" gutterBottom>
              Cross-business analytics connections
            </QuantumTypography>
            <QuantumTypography variant="body2" component="li">
              Customer pattern analysis and trends
            </QuantumTypography>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <QuantumButton intent="secondary">
              Keep Business Connected
            </QuantumButton>
            <QuantumButton intent="destructive">
              Yes, Remove Permanently
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
          "Business forms and modal interfaces showing how paper variants provide the right visual context for different types of user interactions and data entry scenarios.",
      },
    },
  },
};

export const ThemeAdaptiveSurfaces: Story = {
  render: () => (
    <Stack spacing={4}>
      <QuantumTypography variant="h2" gutterBottom>
        Theme-Adaptive Business Surfaces
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Switch between light and dark themes using the Storybook toolbar to see
        how paper surfaces automatically adapt their styling.
      </QuantumTypography>

      {/* Navigation Interface */}
      <QuantumPaper variant="glass">
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Box>
            <QuantumTypography variant="h4">
              Vritti AI Dashboard
            </QuantumTypography>
            <QuantumTypography variant="caption" intent="secondary">
              Portfolio Management • Real-time Analytics
            </QuantumTypography>
          </Box>

          <Stack direction="row" spacing={1}>
            <QuantumButton intent="ghost" size="small">
              Notifications (3)
            </QuantumButton>
            <QuantumButton intent="secondary" size="small">
              Settings
            </QuantumButton>
            <QuantumButton intent="primary" size="small">
              Generate Report
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Content Sections with Different Surfaces */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
        {/* Left Column - Primary Content */}
        <Stack spacing={3} sx={{ flex: 2 }}>
          <QuantumPaper variant="standard">
            <Box p={4}>
              <QuantumTypography variant="h3" gutterBottom>
                Business Performance Insights
              </QuantumTypography>
              <QuantumTypography variant="body1" paragraph>
                Vritti AI has identified several optimization opportunities
                across your business portfolio that could result in significant
                revenue improvements.
              </QuantumTypography>

              <QuantumPaper variant="subtle">
                <Box p={3} mb={3}>
                  <QuantumTypography variant="h5" gutterBottom>
                    Cross-Business Customer Analysis
                  </QuantumTypography>
                  <QuantumTypography variant="body2" paragraph>
                    Analysis shows 31% customer overlap between your salon and
                    restaurant operations, presenting unique cross-promotion
                    opportunities.
                  </QuantumTypography>
                  <QuantumButton intent="primary" size="small">
                    Implement Cross-Promotion Strategy
                  </QuantumButton>
                </Box>
              </QuantumPaper>

              <Stack direction="row" spacing={2}>
                <QuantumButton intent="primary">
                  View Detailed Analysis
                </QuantumButton>
                <QuantumButton intent="secondary">
                  Schedule Implementation
                </QuantumButton>
              </Stack>
            </Box>
          </QuantumPaper>

          <QuantumPaper variant="elevated">
            <Box p={4}>
              <QuantumTypography variant="h3" gutterBottom>
                📈 Revenue Opportunity Alert
              </QuantumTypography>
              <QuantumTypography variant="body1" paragraph>
                <strong>High Priority:</strong> Implementing dynamic pricing
                strategies could increase revenue by an estimated $18,400 per
                month across your restaurant locations.
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                AI Confidence: 94% • Implementation Time: 1-2 weeks • ROI
                Timeline: Immediate
              </QuantumTypography>

              <Stack direction="row" spacing={2}>
                <QuantumButton intent="primary">
                  Implement Strategy
                </QuantumButton>
                <QuantumButton intent="secondary">Learn More</QuantumButton>
                <QuantumButton intent="ghost">Remind Tomorrow</QuantumButton>
              </Stack>
            </Box>
          </QuantumPaper>
        </Stack>

        {/* Right Column - Supporting Content */}
        <Stack spacing={3} sx={{ flex: 1 }}>
          <QuantumPaper variant="glass">
            <Box p={3}>
              <QuantumTypography variant="h4" gutterBottom>
                Quick Actions
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Common business management tasks and shortcuts
              </QuantumTypography>

              <Stack spacing={2}>
                <QuantumButton intent="primary" size="small" fullWidth>
                  Add New Business
                </QuantumButton>
                <QuantumButton intent="secondary" size="small" fullWidth>
                  Export Monthly Report
                </QuantumButton>
                <QuantumButton intent="secondary" size="small" fullWidth>
                  Schedule AI Review
                </QuantumButton>
                <QuantumButton intent="ghost" size="small" fullWidth>
                  View All Insights
                </QuantumButton>
              </Stack>
            </Box>
          </QuantumPaper>

          <QuantumPaper variant="subtle">
            <Box p={3}>
              <QuantumTypography variant="h5" gutterBottom>
                System Status
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Real-time monitoring of your business data connections
              </QuantumTypography>

              <Stack spacing={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <QuantumTypography variant="body2">
                    Data Sync Status:
                  </QuantumTypography>
                  <QuantumTypography
                    variant="body2"
                    sx={{ color: "success.main" }}
                  >
                    ✓ Active
                  </QuantumTypography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <QuantumTypography variant="body2">
                    Connected Businesses:
                  </QuantumTypography>
                  <QuantumTypography variant="body2" intent="secondary">
                    12 of 12
                  </QuantumTypography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <QuantumTypography variant="body2">
                    AI Analysis Mode:
                  </QuantumTypography>
                  <QuantumTypography variant="body2" intent="secondary">
                    Real-time
                  </QuantumTypography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <QuantumTypography variant="body2">
                    Last Full Analysis:
                  </QuantumTypography>
                  <QuantumTypography variant="body2" intent="secondary">
                    3 hours ago
                  </QuantumTypography>
                </Box>
              </Stack>

              <Box mt={3}>
                <QuantumButton intent="ghost" size="small" fullWidth>
                  View Detailed Status
                </QuantumButton>
              </Box>
            </Box>
          </QuantumPaper>

          <QuantumPaper variant="standard">
            <Box p={3}>
              <QuantumTypography variant="h5" gutterBottom>
                Recent AI Insights
              </QuantumTypography>
              <QuantumTypography variant="body2" intent="secondary" paragraph>
                Latest recommendations from your AI business assistant
              </QuantumTypography>

              <Stack spacing={2}>
                <Box>
                  <QuantumTypography variant="body2" gutterBottom>
                    Optimize salon appointment slots during 2-4 PM for 12%
                    revenue increase
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    2 hours ago • Downtown Salon
                  </QuantumTypography>
                </Box>

                <Box>
                  <QuantumTypography variant="body2" gutterBottom>
                    Menu item "Seasonal Risotto" shows 89% customer satisfaction
                    - consider promoting
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    4 hours ago • Riverside Restaurant
                  </QuantumTypography>
                </Box>

                <Box>
                  <QuantumTypography variant="body2" gutterBottom>
                    Staff scheduling optimization could reduce overtime costs by
                    $2,400/month
                  </QuantumTypography>
                  <QuantumTypography variant="caption" intent="secondary">
                    6 hours ago • Portfolio-wide
                  </QuantumTypography>
                </Box>
              </Stack>

              <Box mt={3}>
                <QuantumButton intent="primary" size="small" fullWidth>
                  View All Insights
                </QuantumButton>
              </Box>
            </Box>
          </QuantumPaper>
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
      <QuantumTypography variant="h2" gutterBottom>
        Interactive Business Workflows
      </QuantumTypography>
      <QuantumTypography variant="body2" intent="secondary" gutterBottom>
        Click buttons to experience realistic business workflows and see how
        paper surfaces support different interaction patterns.
      </QuantumTypography>

      {/* Performance Alert Workflow */}
      <QuantumPaper variant="elevated">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            🚨 Performance Alert: Immediate Action Required
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Customer satisfaction at Downtown Salon has dropped to 3.1/5 over
            the past 48 hours. This requires immediate investigation and
            response.
          </QuantumTypography>

          <QuantumPaper variant="glass">
            <Box p={3} mb={3}>
              <QuantumTypography variant="h5" gutterBottom>
                AI Analysis Summary
              </QuantumTypography>
              <QuantumTypography variant="body2" paragraph>
                Analysis of recent customer feedback reveals issues with wait
                times and service quality during peak hours (2-6 PM).
              </QuantumTypography>
              <Stack spacing={1}>
                <QuantumTypography variant="body2">
                  • Average wait time increased from 8 to 23 minutes
                </QuantumTypography>
                <QuantumTypography variant="body2">
                  • 3 staff members called in sick this week
                </QuantumTypography>
                <QuantumTypography variant="body2">
                  • Equipment maintenance delayed appointment schedules
                </QuantumTypography>
              </Stack>
            </Box>
          </QuantumPaper>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <QuantumButton
              intent="primary"
              onClick={() =>
                alert(
                  "Emergency staff meeting scheduled for 8 AM tomorrow. All managers notified."
                )
              }
            >
              Schedule Emergency Meeting
            </QuantumButton>
            <QuantumButton
              intent="secondary"
              onClick={() =>
                alert(
                  "Temporary staff from other locations will be reassigned to Downtown Salon."
                )
              }
            >
              Deploy Backup Staff
            </QuantumButton>
            <QuantumButton
              intent="secondary"
              onClick={() =>
                alert(
                  "Detailed customer feedback analysis report sent to your email."
                )
              }
            >
              Analyze Customer Feedback
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Revenue Optimization Workflow */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            💡 Revenue Optimization Opportunity
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Vritti AI has identified a cross-business synergy that could
            increase your combined monthly revenue by $15,600.
          </QuantumTypography>

          <QuantumPaper variant="subtle">
            <Box p={3} mb={3}>
              <QuantumTypography variant="h5" gutterBottom>
                Opportunity Details
              </QuantumTypography>
              <QuantumTypography variant="body2" paragraph>
                <strong>Discovery:</strong> 27% of your salon customers work
                within 2 blocks of your restaurant location.
              </QuantumTypography>
              <QuantumTypography variant="body2" paragraph>
                <strong>Strategy:</strong> Implement a "Beauty Break" lunch
                package offering express salon services + restaurant meal
                combinations.
              </QuantumTypography>
              <QuantumTypography variant="body2" paragraph>
                <strong>Projected Impact:</strong> 40% increase in weekday lunch
                traffic, 15% boost in salon midday bookings.
              </QuantumTypography>
            </Box>
          </QuantumPaper>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <QuantumButton
              intent="primary"
              onClick={() =>
                alert(
                  "Implementation plan created! Marketing materials will be ready in 5 business days."
                )
              }
            >
              Implement Strategy
            </QuantumButton>
            <QuantumButton
              intent="secondary"
              onClick={() =>
                alert(
                  "Detailed financial projections and timeline sent to your dashboard."
                )
              }
            >
              View Financial Projections
            </QuantumButton>
            <QuantumButton
              intent="ghost"
              onClick={() =>
                alert(
                  "Opportunity saved to your review queue for later consideration."
                )
              }
            >
              Save for Later Review
            </QuantumButton>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Business Addition Workflow */}
      <QuantumPaper variant="glass">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            🏢 Add New Business Location
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="secondary" paragraph>
            Expand your portfolio by connecting a new business to Vritti AI's
            analytics and optimization platform.
          </QuantumTypography>

          <Stack spacing={3} maxWidth={400}>
            <QuantumTextField
              label="Business Name"
              placeholder="e.g., Westside Wellness Clinic"
            />

            <QuantumTextField
              label="Business Type"
              placeholder="e.g., Health & Wellness"
            />

            <Box>
              <QuantumTypography variant="h6" gutterBottom>
                Select Integration Level
              </QuantumTypography>
              <Stack direction="row" spacing={2} mb={2}>
                <QuantumButton intent="secondary" size="small">
                  Basic Analytics
                </QuantumButton>
                <QuantumButton intent="primary" size="small">
                  Full AI Integration
                </QuantumButton>
              </Stack>
              <QuantumTypography variant="caption" intent="secondary">
                Full integration enables cross-business insights and
                optimization recommendations
              </QuantumTypography>
            </Box>

            <Stack direction="row" spacing={2}>
              <QuantumButton
                intent="primary"
                sx={{ flex: 1 }}
                onClick={() =>
                  alert(
                    "Business connection initiated! Setup wizard will guide you through the integration process."
                  )
                }
              >
                Connect Business
              </QuantumButton>
              <QuantumButton
                intent="ghost"
                sx={{ flex: 1 }}
                onClick={() =>
                  alert(
                    "Form data saved as draft. You can continue setup later from your dashboard."
                  )
                }
              >
                Save Draft
              </QuantumButton>
            </Stack>
          </Stack>
        </Box>
      </QuantumPaper>

      {/* Data Export Workflow */}
      <QuantumPaper variant="standard">
        <Box p={4}>
          <QuantumTypography variant="h3" gutterBottom>
            📊 Export Business Data
          </QuantumTypography>
          <QuantumTypography variant="body1" paragraph>
            Generate comprehensive reports for tax preparation, investor
            meetings, or strategic planning sessions.
          </QuantumTypography>

          <Stack spacing={3}>
            <Box>
              <QuantumTypography variant="h5" gutterBottom>
                Select Export Type
              </QuantumTypography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <QuantumButton
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Financial summary report generating... Download will start in 30 seconds."
                    )
                  }
                >
                  Financial Summary
                </QuantumButton>
                <QuantumButton
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Customer analytics report generating... Estimated completion: 2 minutes."
                    )
                  }
                >
                  Customer Analytics
                </QuantumButton>
                <QuantumButton
                  intent="secondary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Performance metrics exported to Excel format. Check your downloads folder."
                    )
                  }
                >
                  Performance Metrics
                </QuantumButton>
                <QuantumButton
                  intent="primary"
                  size="small"
                  onClick={() =>
                    alert(
                      "Comprehensive portfolio report generating... This may take 5-10 minutes for complete analysis."
                    )
                  }
                >
                  Full Portfolio Report
                </QuantumButton>
              </Stack>
            </Box>

            <QuantumPaper variant="subtle">
              <Box p={3}>
                <QuantumTypography variant="h6" gutterBottom>
                  ⚠️ Data Management Options
                </QuantumTypography>
                <QuantumTypography variant="body2" intent="secondary" paragraph>
                  Advanced data management and privacy controls for your
                  business information.
                </QuantumTypography>
                <Stack direction="row" spacing={2}>
                  <QuantumButton
                    intent="ghost"
                    size="small"
                    onClick={() =>
                      alert(
                        "Data retention policy document opened. Review your current settings and retention periods."
                      )
                    }
                  >
                    View Data Policy
                  </QuantumButton>
                  <QuantumButton
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
                  </QuantumButton>
                </Stack>
              </Box>
            </QuantumPaper>
          </Stack>
        </Box>
      </QuantumPaper>
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
        <QuantumTypography variant="h4" gutterBottom>
          Playground Business Card
        </QuantumTypography>
        <QuantumTypography variant="body2" intent="secondary" paragraph>
          Use the controls panel to experiment with different paper variants and
          see how they affect the visual presentation of business content.
        </QuantumTypography>

        <Box mb={3}>
          <QuantumTypography variant="h2" gutterBottom>
            $45,230
          </QuantumTypography>
          <QuantumTypography variant="h6" intent="secondary" gutterBottom>
            Monthly Revenue
          </QuantumTypography>
          <QuantumTypography variant="body2" intent="primary">
            ↑ 18% increase from last month
          </QuantumTypography>
        </Box>

        <Stack direction="row" spacing={2}>
          <QuantumButton intent="primary" size="small">
            Analyze Performance
          </QuantumButton>
          <QuantumButton intent="secondary" size="small">
            Export Data
          </QuantumButton>
          <QuantumButton intent="ghost" size="small">
            View Details
          </QuantumButton>
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
