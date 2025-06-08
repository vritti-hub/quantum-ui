import { Box, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Paper } from "../Paper/Paper";
import { Typography } from "../Typography/Typography";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Enhanced filled TextField with responsive sizing and semantic states. Features dynamic height and padding that adapts across mobile, tablet, and desktop breakpoints. Optimized for business forms with clear visual feedback for success, error, and warning states.",
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["normal", "error", "success", "warning"],
      description: "Semantic validation state with visual feedback",
    },
    label: {
      control: "text",
      description: "Field label with proper color coordination",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for empty fields",
    },
    message: {
      control: "text",
      description: "Helper text or validation feedback",
    },
    required: {
      control: "boolean",
      description: "Mark field as required with visual indicator",
    },
    disabled: {
      control: "boolean",
      description: "Disable field interaction with subtle styling",
    },
    fullWidth: {
      control: "boolean",
      description: "Expand field to full container width",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// CSF3 Simple Stories - Individual variants
export const Default: Story = {
  args: {
    label: "Business Name",
    placeholder: "Enter your business name",
    state: "normal",
  },
};

export const Primary: Story = {
  args: {
    state: "normal",
    label: "Company Registration",
    placeholder: "e.g., Tech Solutions LLC",
    message: "This will appear on all business documents",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    label: "Business Email Verification",
    placeholder: "business@company.com",
    message: "Email verified and connected to notifications",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    label: "Tax Identification Number",
    placeholder: "XX-XXXXXXX",
    message: "Invalid format. Please use XX-XXXXXXX format",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    label: "Monthly Revenue Estimate",
    placeholder: "$10,000 - $50,000",
    message: "Estimates help AI provide more accurate insights",
  },
};


export const Required: Story = {
  args: {
    required: true,
    label: "Business Owner Name",
    placeholder: "Required for registration",
    message: "This field is required to continue",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Account Status",
    value: "Active - Premium",
    message: "Account status is managed by our system",
  },
};

export const Multiline: Story = {
  args: {
    label: "Business Description",
    placeholder: "Describe your business model, services, and target market...",
    multiline: true,
    rows: 4,
    fullWidth: true,
    message: "Detailed descriptions help AI provide better insights",
  },
};

// CSF3 Grouped Stories - Multiple variants
export const StateVariants: Story = {
  render: (args) => (
    <Stack spacing={3}>
      <TextField {...args} state="normal" label="Normal State" placeholder="Standard field appearance" />
      <TextField {...args} state="success" label="Success State" placeholder="Validated successfully" message="Field validation passed" />
      <TextField {...args} state="warning" label="Warning State" placeholder="Requires attention" message="Please review this information" />
      <TextField {...args} state="error" label="Error State" placeholder="Invalid input" message="This field contains an error" />
    </Stack>
  ),
  args: {
    state: "normal",
  },
};


export const ResponsiveSizing: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Automatic Responsive Sizing
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          TextField automatically adapts height, padding, and font size across breakpoints using semantic tokens
        </Typography>

        <Stack spacing={4} mt={3}>
          <Box>
            <Typography variant="h6" gutterBottom>Responsive Behavior</Typography>
            <Typography variant="caption" intent="secondary" gutterBottom>
              Mobile: 48px height → Tablet/Desktop: 52px height with optimized padding and typography
            </Typography>
            <Stack spacing={2}>
              <TextField label="Business Name" placeholder="Automatically sizes for optimal mobile and desktop experience" />
              <TextField label="Contact Information" placeholder="Height and padding adjust seamlessly across devices" />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>State Variations</Typography>
            <Typography variant="caption" intent="secondary" gutterBottom>
              All validation states maintain consistent responsive behavior
            </Typography>
            <Stack spacing={2}>
              <TextField label="Normal State" placeholder="Responsive sizing with standard styling" state="normal" />
              <TextField label="Success State" placeholder="Validated field with responsive design" state="success" message="Field validated successfully" />
              <TextField label="Warning State" placeholder="Warning styling maintains responsiveness" state="warning" message="Please review this information" />
              <TextField label="Error State" placeholder="Error styling with consistent sizing" state="error" message="This field contains an error" />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates automatic responsive sizing behavior powered by semantic design tokens. No manual density selection needed.",
      },
    },
  },
};

export const ColorVariantShowcase: Story = {
  render: () => (
    <Paper variant="glass">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Filled TextField Color System
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Focus states and validation colors with filled background styling
        </Typography>

        <Stack spacing={3} mt={3} maxWidth={400}>
          <TextField
            label="Primary Action"
            placeholder="Focus to see primary blue"
            state="normal"
            message="Default primary color coordination"
          />
          <TextField
            label="Success Validation"
            placeholder="Successful input field"
            state="success"
            message="Data validated and accepted"
          />
          <TextField
            label="Warning Alert" 
            placeholder="Requires your attention"
            state="warning"
            message="Please review this information"
          />
          <TextField
            label="Error Indication"
            placeholder="Invalid data format"
            state="error"
            message="Please correct the errors above"
          />
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Showcases the filled variant with coordinated label and border colors for each state.",
      },
    },
  },
};

// CSF3 Complex Examples - Real-world usage
export const BusinessRegistrationForm: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h3" gutterBottom>
          Business Registration
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Add a new business to your Vritti AI portfolio
        </Typography>

        <Stack spacing={3} maxWidth={500} mt={3}>
          <TextField
            label="Business Legal Name"
            placeholder="e.g., Downtown Salon & Spa LLC"
            required
            state="normal"
            message="Official name as registered with state"
          />

          <TextField
            label="Industry Category"
            placeholder="Salon, Restaurant, Clinic, Design Studio"
            required
            state="normal" 
            message="Helps AI understand your business model"
          />

          <TextField
            label="Business Registration Number"
            placeholder="LLC/Corp registration ID"
            state="success"
            message="Valid registration confirmed with state database"
          />

          <TextField
            label="Federal Tax ID (EIN)"
            placeholder="XX-XXXXXXX"
            state="warning"
            message="EIN verification pending - you can continue without it"
          />

          <TextField
            label="Primary Business Address"
            placeholder="123 Main Street, City, State 12345"
            required
            multiline
            rows={2}
          />

          <TextField
            label="Estimated Monthly Revenue"
            placeholder="$10,000 - $50,000"
            message="Revenue estimates help AI provide tailored insights"
          />

          <Stack direction="row" spacing={2} pt={2}>
            <Button intent="primary" fullWidth>Register Business</Button>
            <Button intent="secondary" fullWidth>Save Draft</Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete business registration form showcasing TextField in realistic context with proper validation states.",
      },
    },
  },
};

export const DashboardQuickActions: Story = {
  render: () => (
    <Paper variant="glass">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Quick Business Analysis
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          AI-powered insights for your business portfolio
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3} mt={3}>
          <Box flex={1}>
            <Stack spacing={2}>
              <TextField
                label="Business Search"
                placeholder="Search by name or ID..."
                fullWidth
              />
              <TextField
                label="Date Range"
                placeholder="Last 30 days"
                fullWidth
              />
              <TextField
                label="Metric Type"
                placeholder="Revenue, Customers, Growth"
                fullWidth
              />
            </Stack>
          </Box>

          <Box flex={2}>
            <Stack spacing={2}>
              <TextField
                label="AI Query"
                placeholder="Ask about your business performance..."
                multiline
                rows={3}
                fullWidth
                message="Example: 'How is my salon performing compared to my restaurant?'"
              />
              <Button intent="primary" fullWidth>Generate Insights</Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dashboard quick actions showing TextField in compact and comfortable densities for business analytics.",
      },
    },
  },
};

export const ValidationWorkflow: Story = {
  render: () => (
    <Paper variant="standard">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Business Data Validation
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Real-time validation workflow for business information
        </Typography>

        <Stack spacing={3} maxWidth={400} mt={3}>
          <TextField
            label="Business Email"
            placeholder="business@company.com"
            state="success"
            message="✓ Email verified and notifications enabled"
          />

          <TextField
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            state="error"
            message="× Invalid format. Use +1 (XXX) XXX-XXXX"
          />

          <TextField
            label="Website URL"
            placeholder="https://yourwebsite.com"
            state="warning"
            message="⚠ Website is not responding - please verify URL"
          />

          <TextField
            label="Business Address"
            placeholder="123 Main St, City, State"
            state="normal"
            message="📍 Address helps with local market analysis"
          />

          <TextField
            label="Annual Revenue"
            placeholder="$500,000"
            state="success"
            message="✓ Revenue data helps optimize AI recommendations"
          />

          <Stack direction="row" spacing={2} pt={2}>
            <Button intent="primary" fullWidth>Save Changes</Button>
            <Button intent="ghost">Validate All</Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Progressive validation workflow showing how TextField states guide users through data entry.",
      },
    },
  },
};

export const ThemeAdaptation: Story = {
  render: () => (
    <Stack spacing={3}>
      <Paper variant="standard">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Standard Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="Filled input on standard background" />
            <TextField label="Success State" state="success" placeholder="Success styling" message="Validation passed" />
          </Stack>
        </Box>
      </Paper>

      <Paper variant="glass">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Glass Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="Filled input on glass background" />
            <TextField label="Warning State" state="warning" placeholder="Warning styling" message="Please review" />
          </Stack>
        </Box>
      </Paper>

      <Paper variant="elevated">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Elevated Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="Filled input on elevated background" />
            <TextField label="Error State" state="error" placeholder="Error styling" message="Field has an error" />
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "TextField adaptation across different surface types showing filled variant consistency.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Accessibility Features
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          TextField with proper labels, states, and focus behavior
        </Typography>

        <Stack spacing={3} maxWidth={500} mt={3}>
          <TextField
            label="Required Business Field"
            placeholder="This field is required"
            required
            message="Screen readers will announce this as required"
          />

          <TextField
            label="Field with Helper Text"
            placeholder="Accessible input"
            message="Helper text provides additional context for screen readers"
          />

          <TextField
            label="Error Field with Description"
            placeholder="Invalid input"
            state="error"
            message="Error messages are properly associated with the input"
          />

          <TextField
            label="Success with Confirmation"
            placeholder="Valid input"
            state="success"
            message="Success messages provide positive feedback"
          />

          <TextField
            label="Disabled Field"
            placeholder="Cannot be edited"
            disabled
            value="Read-only value"
            message="Disabled fields are properly indicated to assistive technology"
          />
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates TextField accessibility features including proper labeling, state announcements, and focus behavior.",
      },
    },
  },
};

export const InteractiveStateComparison: Story = {
  render: () => (
    <Paper variant="standard">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Interactive State Comparison
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Compare different TextField states and their responsive behavior
        </Typography>

        <Stack direction={{ xs: "column", lg: "row" }} spacing={4} mt={3}>
          <Box flex={1}>
            <Typography variant="h6" gutterBottom color="primary">Data Entry</Typography>
            <Typography variant="caption" intent="secondary" gutterBottom>
              Optimized for quick data input with clear validation
            </Typography>
            <Stack spacing={2} mt={2}>
              <TextField label="Customer ID" placeholder="CUST-001" />
              <TextField label="Order Number" placeholder="ORD-123456" state="success" />
              <TextField label="Product SKU" placeholder="SKU-ABC123" state="warning" />
            </Stack>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" gutterBottom color="primary">Business Forms</Typography>
            <Typography variant="caption" intent="secondary" gutterBottom>
              Perfect for standard business information collection
            </Typography>
            <Stack spacing={2} mt={2}>
              <TextField label="Business Name" placeholder="Tech Solutions LLC" />
              <TextField label="Contact Person" placeholder="John Smith" state="success" />
              <TextField label="Email Address" placeholder="john@company.com" state="error" />
            </Stack>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" gutterBottom color="primary">Legal Information</Typography>
            <Typography variant="caption" intent="secondary" gutterBottom>
              Important fields with clear validation feedback
            </Typography>
            <Stack spacing={2} mt={2}>
              <TextField label="Legal Name" placeholder="Full Business Legal Name" />
              <TextField label="Tax ID" placeholder="XX-XXXXXXX" state="success" />
              <TextField label="Registration" placeholder="Business Registration Number" state="warning" />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side interactive comparison of TextField states and use cases with automatic responsive sizing.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    label: "Business Information Field",
    placeholder: "Enter business details...",
    state: "normal",
    required: false,
    disabled: false,
    fullWidth: false,
    message: "Helper text providing context for the field",
  },
  parameters: {
    docs: {
      description: {
        story: "Experiment with all TextField props using the controls panel to test different combinations.",
      },
    },
  },
};