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
          "Semantic text field component with state-based styling, density options, and full theme integration.",
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
      <Typography variant="h6">Field States</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Different validation states with appropriate styling and messaging. Try
        switching themes to see adaptive colors.
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
      <Typography variant="h6">Density Levels</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Choose the right density for your layout context and user interface
        needs.
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

export const ThemeAdaptiveFields: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6">Theme-Adaptive Text Fields</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        Text fields automatically adapt their colors, borders, and focus states
        to match the current theme.
      </Typography>

      <Box
        sx={{
          p: 3,
          borderRadius: "var(--quantum-borderRadius-medium)",
          backgroundColor: "var(--quantum-color-surface-secondary)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          On Secondary Surface
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <QuantumTextField label="Username" placeholder="Enter username" />
          <QuantumTextField
            label="Password"
            type="password"
            placeholder="Enter password"
          />
        </Stack>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: "var(--quantum-borderRadius-medium)",
          backgroundColor: "var(--quantum-color-surface-primary)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          On Primary Surface
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <QuantumTextField
            label="Email Address"
            type="email"
            placeholder="your@email.com"
          />
          <QuantumTextField
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how text fields adapt to different themes and surface backgrounds.",
      },
    },
  },
};

export const CompleteForm: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6">Complete Form Example</Typography>
      <Typography
        variant="body2"
        sx={{ color: "var(--quantum-color-text-secondary)" }}
      >
        A realistic form demonstrating various field types, states, and layouts
        working together.
      </Typography>

      <Box
        component="form"
        sx={{
          maxWidth: 500,
          p: 3,
          borderRadius: "var(--quantum-borderRadius-medium)",
          backgroundColor: "var(--quantum-color-surface-secondary)",
          border: "1px solid var(--quantum-color-border-default)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          User Registration
        </Typography>

        <Stack spacing={2}>
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
            state="success"
            value="john@example.com"
            message="Email is available"
          />
          <QuantumTextField
            label="Password"
            type="password"
            required
            state="warning"
            message="Password should be stronger"
          />
          <QuantumTextField
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            message="Optional: for account security"
          />
          <QuantumTextField
            label="Company"
            placeholder="Enter your company name"
          />
          <QuantumTextField
            label="Bio"
            multiline
            rows={3}
            placeholder="Tell us about yourself..."
            message="Optional: help others know you better"
          />
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete form example showing how different field types, states, and densities work together in a real-world scenario.",
      },
    },
  },
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
