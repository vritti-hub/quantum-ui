import { Box, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { QuantumTextField } from "./TextField";

const meta: Meta<typeof QuantumTextField> = {
  title: "Components/TextField",
  component: QuantumTextField,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic text field component with state-based styling and density options.",
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
    message: {
      control: "text",
      description: "Helper or validation message",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
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
type Story = StoryObj<typeof QuantumTextField>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const AllStates: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Field States
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <QuantumTextField
          label="Normal Field"
          state="normal"
          placeholder="This is a normal field"
          message="This is helper text"
        />
        <QuantumTextField
          label="Success Field"
          state="success"
          value="john@example.com"
          message="Email is valid"
        />
        <QuantumTextField
          label="Warning Field"
          state="warning"
          value="john@"
          message="Please complete your email address"
        />
        <QuantumTextField
          label="Error Field"
          state="error"
          value="invalid-email"
          message="Please enter a valid email address"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different validation states with appropriate styling and messaging.",
      },
    },
  },
};

export const DensityLevels: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Density Levels
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <QuantumTextField
          label="Compact Density"
          density="compact"
          placeholder="Smaller padding and text"
          message="Compact density for tight layouts"
        />
        <QuantumTextField
          label="Comfortable Density"
          density="comfortable"
          placeholder="Standard padding and text"
          message="Comfortable density for most use cases"
        />
        <QuantumTextField
          label="Spacious Density"
          density="spacious"
          placeholder="Larger padding and text"
          message="Spacious density for touch interfaces"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different density levels affect padding and visual spacing.",
      },
    },
  },
};

export const FormFields: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Common Form Fields
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <QuantumTextField
          label="First Name"
          required
          placeholder="Enter your first name"
        />
        <QuantumTextField
          label="Last Name"
          required
          placeholder="Enter your last name"
        />
        <QuantumTextField
          label="Email Address"
          type="email"
          required
          placeholder="Enter your email"
          message="We'll never share your email"
        />
        <QuantumTextField
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          message="Optional: for account security"
        />
        <QuantumTextField
          label="Company"
          placeholder="Enter your company name"
        />
      </Stack>
    </Stack>
  ),
};

export const FieldTypes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" color="text.primary">
        Input Types
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <QuantumTextField
          label="Text Input"
          type="text"
          placeholder="Regular text input"
        />
        <QuantumTextField
          label="Email Input"
          type="email"
          placeholder="email@example.com"
        />
        <QuantumTextField
          label="Password Input"
          type="password"
          placeholder="Enter password"
        />
        <QuantumTextField
          label="Number Input"
          type="number"
          placeholder="Enter a number"
        />
        <QuantumTextField label="Date Input" type="date" />
        <QuantumTextField
          label="Multiline Text"
          multiline
          rows={3}
          placeholder="Enter multiple lines of text..."
        />
      </Stack>
    </Stack>
  ),
};

export const DisabledAndRequired: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Required Fields
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <QuantumTextField
            label="Required Field"
            required
            placeholder="This field is required"
          />
          <QuantumTextField
            label="Required with Error"
            required
            state="error"
            message="This field is required"
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Disabled Fields
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <QuantumTextField
            label="Disabled Empty"
            disabled
            placeholder="This field is disabled"
          />
          <QuantumTextField
            label="Disabled with Value"
            disabled
            value="This field has a value but is disabled"
          />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    label: "Playground Field",
    placeholder: "Experiment with props",
    state: "normal",
    density: "comfortable",
    message: "Use controls to customize this field",
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls panel to experiment with all TextField props.",
      },
    },
  },
};
