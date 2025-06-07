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
          "Semantic text field component with state-based styling, density options, and full theme integration for business forms.",
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["normal", "error", "success", "warning"],
      description: "Validation state of the field",
    },
    density: {
      control: "select",
      options: ["compact", "comfortable", "spacious"],
      description: "Visual density and spacing",
    },
    label: {
      control: "text",
      description: "Field label",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    message: {
      control: "text",
      description: "Helper or error message",
    },
    required: {
      control: "boolean",
      description: "Whether field is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether field is disabled",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether field takes full width",
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
  },
};

export const Normal: Story = {
  args: {
    state: "normal",
    label: "Business Name",
    placeholder: "Enter business name",
    message: "This will be displayed on your portfolio",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    label: "Email Address",
    placeholder: "Enter email",
    message: "Please enter a valid email address",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    label: "Business Registration",
    placeholder: "Registration number",
    message: "Valid registration number confirmed",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    label: "Revenue Estimate",
    placeholder: "$0 - $100,000+",
    message: "Consider providing more accurate estimate for better insights",
  },
};

export const Compact: Story = {
  args: {
    density: "compact",
    label: "Quick Entry",
    placeholder: "Compact field",
  },
};

export const Comfortable: Story = {
  args: {
    density: "comfortable",
    label: "Standard Field",
    placeholder: "Comfortable spacing",
  },
};

export const Spacious: Story = {
  args: {
    density: "spacious",
    label: "Detailed Input",
    placeholder: "Spacious field layout",
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Business Owner Name",
    placeholder: "Required field",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Account ID",
    value: "VRITTI-2024-001",
    message: "This field is automatically generated",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: "Business Description",
    placeholder: "Describe your business...",
    multiline: true,
    rows: 3,
  },
};

// CSF3 Grouped Stories
export const StateVariants: Story = {
  render: (args) => (
    <Stack spacing={3}>
      <TextField {...args} state="normal" label="Normal State" placeholder="Enter text" />
      <TextField {...args} state="error" label="Error State" placeholder="Enter text" message="This field has an error" />
      <TextField {...args} state="success" label="Success State" placeholder="Enter text" message="Input validated successfully" />
      <TextField {...args} state="warning" label="Warning State" placeholder="Enter text" message="Please review this input" />
    </Stack>
  ),
  args: {
    placeholder: "State demonstration",
  },
};

export const DensityVariants: Story = {
  render: (args) => (
    <Stack spacing={3}>
      <TextField {...args} density="compact" label="Compact Density" />
      <TextField {...args} density="comfortable" label="Comfortable Density" />
      <TextField {...args} density="spacious" label="Spacious Density" />
    </Stack>
  ),
  args: {
    placeholder: "Density comparison",
  },
};

export const LabelVariants: Story = {
  render: (args) => (
    <Stack spacing={3}>
      <TextField {...args} label="With Label" />
      <TextField {...args} placeholder="No label, just placeholder" />
      <TextField {...args} label="Required Field" required />
    </Stack>
  ),
  args: {
    placeholder: "Enter some text",
  },
};

// CSF3 Complex Examples
export const FormExample: Story = {
  render: () => (
    <Paper variant="elevated">
      <Box p={4}>
        <Typography variant="h3" gutterBottom>
          Add Business to Portfolio
        </Typography>
        <Typography variant="body2" intent="secondary" gutterBottom>
          Provide details about your business for AI analysis
        </Typography>

        <Stack spacing={3} maxWidth={500}>
          <TextField
            label="Business Name"
            placeholder="e.g., Downtown Salon"
            required
            state="normal"
            message="This will appear in your portfolio dashboard"
          />

          <TextField
            label="Industry Category"
            placeholder="Salon, Restaurant, Clinic, etc."
            required
          />

          <TextField
            label="Monthly Revenue"
            placeholder="$0 - $100,000+"
            state="warning"
            message="Estimates help AI provide better insights"
          />

          <TextField
            label="Number of Employees"
            placeholder="1-50+ employees"
            density="compact"
          />

          <TextField
            label="Business Description"
            placeholder="Describe your business model and services..."
            multiline
            rows={3}
            fullWidth
            message="Optional: Helps AI understand your business context"
          />

          <Stack direction="row" spacing={2} pt={2}>
            <Button intent="primary" fullWidth>Connect Business</Button>
            <Button intent="secondary" fullWidth>Save Draft</Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete business form showing TextField usage in realistic context with proper validation states.",
      },
    },
  },
};

export const ValidationExample: Story = {
  render: () => (
    <Paper variant="glass">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Business Settings Validation
        </Typography>

        <Stack spacing={3} maxWidth={400}>
          <TextField
            label="Business Email"
            placeholder="business@company.com"
            state="success"
            message="Email verified and connected to notifications"
          />

          <TextField
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            state="error"
            message="Please enter a valid phone number"
          />

          <TextField
            label="Website URL"
            placeholder="https://yourwebsite.com"
            state="warning"
            message="Website is not responding - please check URL"
          />

          <TextField
            label="Business Address"
            placeholder="123 Main St, City, State"
            state="normal"
            message="Address helps with local market analysis"
          />

          <TextField
            label="Tax ID"
            placeholder="XX-XXXXXXX"
            disabled
            value="Verified"
            message="Tax ID has been verified with IRS"
          />
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Validation states demonstration showing different feedback types for business data.",
      },
    },
  },
};

export const ThemeVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Paper variant="standard">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Standard Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="On standard surface" />
            <TextField label="Error Example" state="error" placeholder="Error state" message="Field has an error" />
          </Stack>
        </Box>
      </Paper>

      <Paper variant="glass">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Glass Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="On glass surface" />
            <TextField label="Success Example" state="success" placeholder="Success state" message="Validation passed" />
          </Stack>
        </Box>
      </Paper>

      <Paper variant="elevated">
        <Box p={3}>
          <Typography variant="h6" gutterBottom>Elevated Surface</Typography>
          <Stack spacing={2}>
            <TextField label="Business Name" placeholder="On elevated surface" />
            <TextField label="Warning Example" state="warning" placeholder="Warning state" message="Please review" />
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "TextField adaptation across different surface types and theme modes.",
      },
    },
  },
};

export const DensityComparison: Story = {
  render: () => (
    <Paper variant="standard">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          Density Comparison for Business Forms
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Compact</Typography>
            <Typography variant="body2" intent="secondary" gutterBottom>
              Space-efficient for data entry
            </Typography>
            <Stack spacing={2}>
              <TextField density="compact" label="Business Name" placeholder="Compact field" />
              <TextField density="compact" label="Industry" placeholder="Category" />
              <TextField density="compact" label="Revenue" placeholder="Monthly estimate" />
            </Stack>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Comfortable</Typography>
            <Typography variant="body2" intent="secondary" gutterBottom>
              Balanced for most use cases
            </Typography>
            <Stack spacing={2}>
              <TextField density="comfortable" label="Business Name" placeholder="Comfortable field" />
              <TextField density="comfortable" label="Industry" placeholder="Category" />
              <TextField density="comfortable" label="Revenue" placeholder="Monthly estimate" />
            </Stack>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" gutterBottom>Spacious</Typography>
            <Typography variant="body2" intent="secondary" gutterBottom>
              Accessible for important forms
            </Typography>
            <Stack spacing={2}>
              <TextField density="spacious" label="Business Name" placeholder="Spacious field" />
              <TextField density="spacious" label="Industry" placeholder="Category" />
              <TextField density="spacious" label="Revenue" placeholder="Monthly estimate" />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of density options for different business form contexts.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    label: "Business Field",
    placeholder: "Enter business information",
    state: "normal",
    density: "comfortable",
    required: false,
    disabled: false,
    fullWidth: false,
    message: "Helper text for the field",
  },
  parameters: {
    docs: {
      description: {
        story: "Experiment with all TextField props using the controls panel.",
      },
    },
  },
};