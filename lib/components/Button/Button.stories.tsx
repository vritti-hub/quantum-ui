import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'ghost', 'outline'],
      description: 'The intent/purpose of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'icon'],
      description: 'Size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    intent: 'destructive',
    children: 'Delete Account',
  },
};

export const Ghost: Story = {
  args: {
    intent: 'ghost',
    children: 'Ghost Button',
  },
};

export const Outline: Story = {
  args: {
    intent: 'outline',
    children: 'Outline Button',
  },
};

// Size variants
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'default',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// State variants
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

// With icons
export const WithIcon: Story = {
  args: {
    intent: 'primary',
    children: (
      <>
        <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
        </svg>
        Add Item
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    intent: 'ghost',
    size: 'sm',
    children: (
      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
      </svg>
    ),
    'aria-label': 'Close',
  },
};

// Interactive examples
export const AllIntents: Story = {
  render: () => (
    <div className='flex flex-wrap gap-2'>
      <Button intent='primary'>Primary</Button>
      <Button intent='secondary'>Secondary</Button>
      <Button intent='destructive'>Destructive</Button>
      <Button intent='ghost'>Ghost</Button>
      <Button intent='outline'>Outline</Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Button size='sm'>Small</Button>
      <Button size='default'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const LoadingExample: Story = {
  render: () => (
    <div className='flex gap-2'>
      <Button intent='primary'>
        <svg
          className='animate-spin -ml-1 mr-3 h-4 w-4 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
        Loading...
      </Button>
      <Button intent='outline' disabled>
        <svg
          className='animate-spin -ml-1 mr-3 h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
        Processing...
      </Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
