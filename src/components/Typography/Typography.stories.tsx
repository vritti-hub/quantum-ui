import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Paper } from "../Paper/Paper";
import { TextField } from "../TextField/TextField";
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
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body1",
    children:
      "Vritti AI helps entrepreneurs manage multiple businesses with intelligent insights.",
  },
};

export const DualFontSystem: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Dual Font System
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        Space Grotesk for display elements and Inter for body text, optimized
        for business applications
      </Typography>

      {/* Space Grotesk Examples */}
      <Paper variant="glass">
        <Box p={4}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            SPACE GROTESK - DISPLAY & UI
          </Typography>

          <Stack spacing={3}>
            <Typography variant="h1" gutterBottom>
              Vritti AI Dashboard
            </Typography>
            <Typography variant="h2" gutterBottom>
              Business Portfolio Analytics
            </Typography>
            <Typography variant="h3" gutterBottom>
              Revenue Optimization Insights
            </Typography>
            <Typography variant="h4" gutterBottom>
              Customer Satisfaction Metrics
            </Typography>

            <Stack direction="row" spacing={2} mt={2}>
              <Button intent="primary">Analyze Business</Button>
              <Button intent="secondary">View Reports</Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>

      {/* Inter Examples */}
      <Paper variant="standard">
        <Box p={4}>
          <Typography variant="overline" intent="secondary" gutterBottom>
            INTER - BODY TEXT & CONTENT
          </Typography>

          <Stack spacing={2}>
            <Typography variant="body1" paragraph>
              Vritti AI is an AI-powered business orchestration platform
              designed for serial entrepreneurs managing multiple businesses.
              Unlike traditional business software, Vritti acts as a dominant AI
              partner that rivals the business owner's intelligence, providing
              strategic insights and challenging business decisions across an
              entire business portfolio.
            </Typography>

            <Typography variant="body2" intent="secondary" paragraph>
              The platform integrates data from salons, restaurants, clinics,
              and design studios to identify cross-business opportunities,
              optimize resource allocation, and provide actionable intelligence
              that transforms how entrepreneurs scale their ventures.
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
        story:
          "Demonstrates the dual font system: Space Grotesk for headlines and UI elements, Inter for body text and readable content.",
      },
    },
  },
};

export const BusinessDashboardExample: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Vritti AI Business Dashboard
      </Typography>

      {/* Main Dashboard Card */}
      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h1" gutterBottom color="primary">
            $847,392
          </Typography>
          <Typography variant="h4" gutterBottom>
            Total Portfolio Revenue
          </Typography>
          <Typography variant="body1" paragraph>
            Your business portfolio generated $847,392 in revenue this month,
            representing a 23% increase over last month. This growth is driven
            by optimization recommendations implemented across your salon and
            restaurant locations.
          </Typography>

          <Stack direction="row" spacing={4} mt={3}>
            <Box>
              <Typography variant="h3" color="success.main">
                ↑ 23%
              </Typography>
              <Typography variant="caption">Month over Month</Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="primary">
                12
              </Typography>
              <Typography variant="caption">Active Businesses</Typography>
            </Box>
            <Box>
              <Typography variant="h3" color="warning.main">
                5
              </Typography>
              <Typography variant="caption">Optimization Alerts</Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>

      {/* Business Cards Grid */}
      <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
        <Paper variant="standard" sx={{ flex: 1, minWidth: 280 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Downtown Salon
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Beauty salon specializing in premium hair services and wellness
              treatments
            </Typography>
            <Typography variant="body1" paragraph>
              Customer satisfaction increased 15% after implementing
              AI-recommended appointment scheduling. Average service time
              reduced by 12 minutes while maintaining quality standards.
            </Typography>
            <Typography variant="caption" color="success.main">
              Performance: Excellent
            </Typography>
          </Box>
        </Paper>

        <Paper variant="standard" sx={{ flex: 1, minWidth: 280 }}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              Riverside Restaurant
            </Typography>
            <Typography variant="body2" intent="secondary" paragraph>
              Farm-to-table restaurant featuring locally sourced ingredients
            </Typography>
            <Typography variant="body1" paragraph>
              Menu optimization resulted in 18% increase in average order value.
              Popular dishes identified through AI analysis now drive 34% of
              evening revenue.
            </Typography>
            <Typography variant="caption" color="warning.main">
              Performance: Good
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world business dashboard showing typography hierarchy in a Vritti AI context with revenue metrics and business cards.",
      },
    },
  },
};

export const ChatInterfaceExample: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h3" gutterBottom>
        AI Business Assistant Chat
      </Typography>

      <Paper variant="glass">
        <Box p={3}>
          {/* Chat Header */}
          <Box borderBottom="1px solid" borderColor="divider" pb={2} mb={3}>
            <Typography variant="h5" gutterBottom>
              Vritti AI Assistant
            </Typography>
            <Typography variant="body2" color="success.main">
              Online • Analyzing 12 businesses
            </Typography>
          </Box>

          {/* Chat Messages */}
          <Stack spacing={3}>
            {/* User Message */}
            <Box display="flex" justifyContent="flex-end">
              <Box maxWidth="70%">
                <Paper variant="subtle">
                  <Box p={2}>
                    <Typography variant="body1">
                      How is my salon performing compared to last month?
                    </Typography>
                    <Typography
                      variant="caption"
                      intent="secondary"
                      mt={1}
                    >
                      2:34 PM
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>

            {/* AI Response */}
            <Box display="flex" justifyContent="flex-start">
              <Box maxWidth="80%">
                <Paper variant="standard">
                  <Box p={3}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Downtown Salon Performance Analysis
                    </Typography>

                    <Typography variant="body1" paragraph>
                      Your salon is performing exceptionally well this month.
                      Here are the key metrics:
                    </Typography>

                    <Typography variant="body2" component="div" sx={{ pl: 2 }}>
                      • Revenue: $28,450 (↑ 15% vs last month)
                      <br />
                      • Customer satisfaction: 4.8/5 (↑ 0.3 points)
                      <br />
                      • Appointment efficiency: 89% (↑ 12%)
                      <br />• New customer acquisition: 34 clients
                    </Typography>

                    <Typography variant="body1" paragraph mt={2}>
                      The AI-recommended scheduling optimization has reduced
                      wait times by 12 minutes and improved customer flow during
                      peak hours.
                    </Typography>

                    <Typography
                      variant="body2"
                      intent="secondary"
                      paragraph
                    >
                      <strong>Recommendation:</strong> Consider extending your
                      most popular service packages based on current booking
                      patterns.
                    </Typography>

                    <Typography variant="caption" intent="secondary">
                      2:34 PM • Analysis based on last 30 days
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>

            {/* User Follow-up */}
            <Box display="flex" justifyContent="flex-end">
              <Box maxWidth="70%">
                <Paper variant="subtle">
                  <Box p={2}>
                    <Typography variant="body1">
                      What about cross-selling opportunities with my restaurant?
                    </Typography>
                    <Typography
                      variant="caption"
                      intent="secondary"
                      mt={1}
                    >
                      2:35 PM
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>

            {/* AI Strategic Response */}
            <Box display="flex" justifyContent="flex-start">
              <Box maxWidth="80%">
                <Paper variant="standard">
                  <Box p={3}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Cross-Business Opportunity Analysis
                    </Typography>

                    <Typography variant="body1" paragraph>
                      I've identified significant synergy potential between your
                      salon and restaurant:
                    </Typography>

                    <Typography variant="body2" paragraph>
                      <strong>Customer Overlap:</strong> 23% of your salon
                      clients have also dined at Riverside Restaurant in the
                      past 6 months.
                    </Typography>

                    <Typography variant="body2" paragraph>
                      <strong>Proposed Strategy:</strong> Launch a "Pamper &
                      Dine" package offering 15% restaurant discount for salon
                      appointments over $150. Projected impact:
                    </Typography>

                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ pl: 2, color: "success.main" }}
                    >
                      • Salon revenue increase: $2,300/month
                      <br />
                      • Restaurant revenue increase: $1,800/month
                      <br />• Customer retention improvement: 31%
                    </Typography>

                    <Typography
                      variant="caption"
                      intent="secondary"
                      mt={2}
                    >
                      2:35 PM • Cross-business analysis complete
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Stack>

          {/* Chat Input */}
          <Box mt={3} pt={2} borderTop="1px solid" borderColor="divider">
            <Stack direction="row" spacing={2}>
              <TextField
                placeholder="Ask Vritti AI about your businesses..."
                fullWidth
                size="small"
              />
              <Button intent="primary" size="small">
                Send
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Realistic chat interface showing typography in conversational AI context with business insights and recommendations.",
      },
    },
  },
};

export const ResponsiveTypographyDemo: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Responsive Typography Scaling
      </Typography>
      <Typography variant="body2" intent="secondary" gutterBottom>
        {`Resize your browser to see typography scale across mobile (< 768px), tablet (768px+), and desktop (1024px+) breakpoints`}
      </Typography>

      <Paper variant="elevated">
        <Box p={4}>
          <Typography variant="h1" gutterBottom>
            Vritti AI Business Intelligence
          </Typography>
          <Typography variant="h3" gutterBottom>
            Transform your multi-business portfolio with AI-powered insights
          </Typography>
          <Typography variant="body1" paragraph>
            Vritti AI analyzes data across all your businesses to identify
            opportunities that traditional single-business tools miss. Our
            platform integrates seamlessly with salons, restaurants, clinics,
            and retail operations to provide cross-business intelligence that
            drives growth.
          </Typography>
          <Typography variant="body2" paragraph color="text.secondary">
            Join over 2,500 serial entrepreneurs who have increased their
            portfolio revenue by an average of 34% within the first six months
            of using Vritti AI's business orchestration platform.
          </Typography>

          <Stack direction="row" spacing={2} mt={3}>
            <Button intent="primary">Start Free Trial</Button>
            <Button intent="secondary">Schedule Demo</Button>
          </Stack>
        </Box>
      </Paper>

      {/* Responsive Breakdown */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Paper variant="glass" sx={{ flex: 1 }}>
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              📱 Mobile
            </Typography>
            <Typography
              variant="caption"
              intent="secondary"
              gutterBottom
            >
              {`< 768px`}
            </Typography>
            <Typography variant="body2">
              Touch-optimized sizes for on-the-go business management
            </Typography>
          </Box>
        </Paper>

        <Paper variant="glass" sx={{ flex: 1 }}>
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              💻 Tablet
            </Typography>
            <Typography
              variant="caption"
              intent="secondary"
              gutterBottom
            >
              768px - 1024px
            </Typography>
            <Typography variant="body2">
              Balanced for arm's length reading and touch interaction
            </Typography>
          </Box>
        </Paper>

        <Paper variant="glass" sx={{ flex: 1 }}>
          <Box p={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              🖥️ Desktop
            </Typography>
            <Typography
              variant="caption"
              intent="secondary"
              gutterBottom
            >
              1024px+
            </Typography>
            <Typography variant="body2">
              Optimized for desk viewing and detailed analysis
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates responsive typography scaling with Vritti AI business context showing how text adapts across different viewport sizes.",
      },
    },
  },
};

export const ContentHierarchyShowcase: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h2" gutterBottom>
        Content Hierarchy & Readability
      </Typography>

      <Paper variant="standard">
        <Box p={4}>
          {/* Article Header */}
          <Typography variant="overline" intent="primary" gutterBottom>
            BUSINESS INSIGHTS
          </Typography>
          <Typography variant="h1" gutterBottom>
            The Future of Multi-Business Management
          </Typography>
          <Typography variant="h4" intent="secondary" gutterBottom>
            How AI is revolutionizing the way serial entrepreneurs scale their
            ventures
          </Typography>

          <Stack direction="row" spacing={2} mb={3}>
            <Typography variant="caption" intent="secondary">
              By Vritti AI Research Team
            </Typography>
            <Typography variant="caption" intent="secondary">
              •
            </Typography>
            <Typography variant="caption" intent="secondary">
              8 min read
            </Typography>
            <Typography variant="caption" intent="secondary">
              •
            </Typography>
            <Typography variant="caption" intent="secondary">
              Published Dec 15, 2024
            </Typography>
          </Stack>

          <Box borderLeft="3px solid" borderColor="primary.main" pl={3} mb={4}>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "Managing multiple businesses isn't just about juggling different
              operations—it's about orchestrating them into a symphony of mutual
              growth and shared intelligence."
            </Typography>
          </Box>

          {/* Article Content */}
          <Typography variant="h2" gutterBottom mt={4}>
            The Challenge of Portfolio Management
          </Typography>

          <Typography variant="body1" paragraph>
            Serial entrepreneurs face a unique challenge that traditional
            business tools weren't designed to solve. While single-business
            platforms excel at managing individual operations, they create
            information silos that prevent owners from seeing the bigger picture
            across their portfolio.
          </Typography>

          <Typography variant="body1" paragraph>
            Consider Sarah Chen, who owns three salons, two restaurants, and a
            boutique fitness studio in Portland. Before implementing Vritti AI,
            she managed each business separately, missing crucial insights about
            shared customer bases, seasonal patterns that affected multiple
            ventures, and opportunities for cross-promotion.
          </Typography>

          <Typography variant="h3" gutterBottom mt={3}>
            The Power of Cross-Business Intelligence
          </Typography>

          <Typography variant="body1" paragraph>
            Vritti AI's breakthrough comes from analyzing data patterns across
            entire business portfolios. The platform doesn't just track
            individual business performance—it identifies relationships,
            synergies, and optimization opportunities that span multiple
            ventures.
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            For instance, the platform might discover that 40% of salon
            customers also frequent the owner's restaurant during lunch hours,
            revealing an opportunity for a "Beauty & Bite" lunch package that
            could increase revenue for both businesses.
          </Typography>

          <Typography variant="h4" gutterBottom mt={3}>
            Key Benefits for Portfolio Owners
          </Typography>

          <Typography variant="body1" component="div">
            <Box component="ul" sx={{ pl: 3 }}>
              <Box component="li" mb={1}>
                <strong>Unified Analytics:</strong> See performance metrics
                across all businesses in one dashboard
              </Box>
              <Box component="li" mb={1}>
                <strong>Cross-Business Insights:</strong> Identify customer
                overlap and shared opportunities
              </Box>
              <Box component="li" mb={1}>
                <strong>Resource Optimization:</strong> Allocate staff,
                inventory, and capital more efficiently
              </Box>
              <Box component="li" mb={1}>
                <strong>Predictive Intelligence:</strong> AI forecasts trends
                that affect multiple businesses
              </Box>
            </Box>
          </Typography>

          <Typography
            variant="caption"
            intent="secondary"
            mt={4}
            display="block"
          >
            Want to learn how Vritti AI can transform your business portfolio?
            Schedule a personalized demo with our team.
          </Typography>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive content hierarchy example showing how typography creates clear information structure in long-form business content.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "body1",
    intent: "primary",
    children:
      "Vritti AI empowers serial entrepreneurs with intelligent business insights across their entire portfolio.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with different typography variants and intents in a business context.",
      },
    },
  },
};
