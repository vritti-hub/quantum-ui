import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper } from '../Paper/Paper';
import { TextField } from '../TextField/TextField';
import { Typography } from '../Typography/Typography';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Semantic button component with intent-based styling for clear business purpose. Uses Space Grotesk font with optimized sizing for professional applications and excellent theme adaptation.',
      },
    },
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost'],
      description: 'Semantic purpose of the button action',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size for different contexts',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button span full container width',
    },
    children: {
      control: 'text',
      description: 'Button content and label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// CSF3 Simple Stories - Individual variants
export const Default: Story = {
  args: {
    children: 'Analyze Business Performance',
    intent: 'primary',
  },
};

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Primary Action',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Secondary Action',
  },
};

export const Destructive: Story = {
  args: {
    intent: 'destructive',
    children: 'Destructive Action',
  },
};

export const Ghost: Story = {
  args: {
    intent: 'ghost',
    children: 'Ghost Action',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// CSF3 Grouped Stories - Multiple variants
export const IntentVariants: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Button {...args} intent='primary'>
        Primary Action
      </Button>
      <Button {...args} intent='secondary'>
        Secondary Action
      </Button>
      <Button {...args} intent='destructive'>
        Destructive Action
      </Button>
      <Button {...args} intent='ghost'>
        Ghost Action
      </Button>
    </Stack>
  ),
  args: {
    children: 'Button Text',
  },
};

export const SizeVariants: Story = {
  render: (args) => (
    <Stack direction='row' spacing={2} alignItems='center'>
      <Button {...args} size='small'>
        Small
      </Button>
      <Button {...args} size='medium'>
        Medium
      </Button>
      <Button {...args} size='large'>
        Large
      </Button>
    </Stack>
  ),
  args: {
    intent: 'primary',
  },
};

export const StateVariants: Story = {
  render: (args) => (
    <Stack direction='row' spacing={2}>
      <Button {...args}>Normal</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
    </Stack>
  ),
  args: {
    intent: 'primary',
    children: 'Button',
  },
};

// CSF3 Complex Examples - Real-world usage
export const DashboardExample: Story = {
  render: () => (
    <Paper variant='surface'>
      <Box p={4}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' mb={3}>
          <Typography variant='h3'>Portfolio Overview</Typography>
          <Stack direction='row' spacing={2}>
            <Button intent='secondary' size='small'>
              Export
            </Button>
            <Button intent='primary' size='small'>
              Generate Report
            </Button>
          </Stack>
        </Stack>

        <Stack direction='row' spacing={2} justifyContent='center'>
          <Button intent='primary' size='large'>
            Optimize All Businesses
          </Button>
          <Button intent='secondary' size='large'>
            Schedule Analysis
          </Button>
          <Button intent='ghost' size='large'>
            View Trends
          </Button>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Business dashboard showing buttons in realistic context with proper hierarchy.',
      },
    },
  },
};

export const FormActions: Story = {
  render: () => (
    <Paper variant='surface' glass>
      <Box p={4}>
        <Typography variant='h4' gutterBottom>
          Add New Business
        </Typography>
        <Stack spacing={3} maxWidth={400}>
          <TextField label='Business Name' placeholder='Enter business name' />
          <TextField label='Industry Type' placeholder='Salon, Restaurant, etc.' />

          <Stack direction='row' spacing={2}>
            <Button intent='primary' fullWidth>
              Connect Business
            </Button>
            <Button intent='secondary' fullWidth>
              Save Draft
            </Button>
          </Stack>

          <Stack direction='row' justifyContent='center'>
            <Button intent='ghost' size='small'>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Form context showing proper button hierarchy and usage in business forms.',
      },
    },
  },
};

export const ThemeVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Paper variant='surface'>
        <Box p={3}>
          <Typography variant='h6' gutterBottom>
            Standard Surface
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button intent='primary'>Primary</Button>
            <Button intent='secondary'>Secondary</Button>
            <Button intent='destructive'>Destructive</Button>
            <Button intent='ghost'>Ghost</Button>
          </Stack>
        </Box>
      </Paper>

      <Paper variant='surface' glass>
        <Box p={3}>
          <Typography variant='h6' gutterBottom>
            Glass Surface
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button intent='primary'>Primary</Button>
            <Button intent='secondary'>Secondary</Button>
            <Button intent='destructive'>Destructive</Button>
            <Button intent='ghost'>Ghost</Button>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates button adaptation across different surface types and themes.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => (
    <Paper variant='surface'>
      <Box p={4}>
        <Typography variant='h4' gutterBottom>
          Revenue Optimization
        </Typography>
        <Typography variant='body1' gutterBottom>
          AI identified 18% revenue increase opportunity across your operations.
        </Typography>

        <Stack direction='row' spacing={2}>
          <Button intent='primary' onClick={() => alert('Optimization plan generated!')}>
            Implement Now
          </Button>
          <Button intent='secondary' onClick={() => alert('Report downloaded!')}>
            Download Report
          </Button>
          <Button intent='ghost' onClick={() => alert('Saved for later review.')}>
            Review Later
          </Button>
        </Stack>
      </Box>
    </Paper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive business scenario demonstrating realistic button functionality.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    children: 'Optimize Business Portfolio',
    intent: 'primary',
    size: 'medium',
    disabled: false,
    fullWidth: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with all button props using the controls panel.',
      },
    },
  },
};
