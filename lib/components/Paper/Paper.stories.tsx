import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Paper } from './Paper';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['section', 'surface', 'accent', 'minimal', 'feature', 'container'],
      description: 'The visual variant of the paper',
    },
    glass: {
      control: 'boolean',
      description: 'Whether to apply glass effect',
    },
    compact: {
      control: 'boolean',
      description: 'Whether to use compact spacing',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether to take full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Section: Story = {
  args: {
    variant: 'section',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Section Paper</h3>
        <p>This is a section paper variant with default background and subtle styling.</p>
      </div>
    ),
  },
};

export const Surface: Story = {
  args: {
    variant: 'surface',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Surface Paper</h3>
        <p>This is a surface paper variant, great for cards and content areas.</p>
      </div>
    ),
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Accent Paper</h3>
        <p>This is an accent paper variant that stands out from the background.</p>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Minimal Paper</h3>
        <p>This is a minimal paper variant with no background or borders.</p>
      </div>
    ),
  },
};

export const Feature: Story = {
  args: {
    variant: 'feature',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Feature Paper</h3>
        <p>This is a feature paper variant with gradient background for highlighting important content.</p>
      </div>
    ),
  },
};

export const Container: Story = {
  args: {
    variant: 'container',
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Container Paper</h3>
        <p>This is a container paper variant, perfect for grouping content.</p>
      </div>
    ),
  },
};

// Spacing variants
export const Compact: Story = {
  args: {
    variant: 'surface',
    compact: true,
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Compact Spacing</h3>
        <p>This paper uses compact spacing (padding: 12px).</p>
      </div>
    ),
  },
};

export const Regular: Story = {
  args: {
    variant: 'surface',
    compact: false,
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Regular Spacing</h3>
        <p>This paper uses regular spacing (padding: 24px).</p>
      </div>
    ),
  },
};

// Glass effect
export const Glass: Story = {
  args: {
    variant: 'surface',
    glass: true,
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Glass Effect</h3>
        <p>This paper has a glass effect with backdrop blur and opacity.</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div
        className='p-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400'
        style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
};

// Width variants
export const FullWidth: Story = {
  args: {
    variant: 'surface',
    fullWidth: true,
    children: (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Full Width</h3>
        <p>This paper takes the full width of its container.</p>
      </div>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

// Content examples
export const ArticleCard: Story = {
  render: () => (
    <Paper variant='surface' className='w-96'>
      <div className='mb-4'>
        <div className='w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md mb-4'></div>
        <Typography variant='h4' className='mb-2'>
          Understanding Design Systems
        </Typography>
        <Typography variant='body2' intent='secondary' className='mb-4'>
          Learn how to build and maintain consistent design systems for modern web applications.
        </Typography>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            <div>
              <Typography variant='caption'>John Doe</Typography>
              <Typography variant='caption' intent='muted'>
                Dec 15, 2023
              </Typography>
            </div>
          </div>
          <Button intent='outline' size='sm'>
            Read More
          </Button>
        </div>
      </div>
    </Paper>
  ),
};

export const StatsPanel: Story = {
  render: () => (
    <Paper variant='feature' className='w-80'>
      <Typography variant='h5' className='mb-6 text-center'>
        Dashboard Overview
      </Typography>
      <div className='grid grid-cols-2 gap-4'>
        <div className='text-center'>
          <Typography variant='h3' intent='primary' className='mb-1'>
            1,234
          </Typography>
          <Typography variant='caption' intent='muted'>
            Total Users
          </Typography>
        </div>
        <div className='text-center'>
          <Typography variant='h3' intent='success' className='mb-1'>
            $45.2k
          </Typography>
          <Typography variant='caption' intent='muted'>
            Revenue
          </Typography>
        </div>
        <div className='text-center'>
          <Typography variant='h3' intent='warning' className='mb-1'>
            23
          </Typography>
          <Typography variant='caption' intent='muted'>
            Pending
          </Typography>
        </div>
        <div className='text-center'>
          <Typography variant='h3' intent='error' className='mb-1'>
            5
          </Typography>
          <Typography variant='caption' intent='muted'>
            Issues
          </Typography>
        </div>
      </div>
    </Paper>
  ),
};

export const NotificationCard: Story = {
  render: () => (
    <Paper variant='accent' className='w-80'>
      <div className='flex items-start gap-3'>
        <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
          <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <div className='flex-1'>
          <Typography variant='subtitle2' className='mb-1'>
            System Update Available
          </Typography>
          <Typography variant='body2' intent='secondary' className='mb-3'>
            A new system update is available. Please update to get the latest features and security improvements.
          </Typography>
          <div className='flex gap-2'>
            <Button intent='primary' size='sm'>
              Update Now
            </Button>
            <Button intent='ghost' size='sm'>
              Later
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  ),
};

export const FormSection: Story = {
  render: () => (
    <Paper variant='container' className='w-96'>
      <Typography variant='h6' className='mb-4'>
        Personal Information
      </Typography>
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-medium mb-1 block'>First Name</label>
            <input
              type='text'
              className='w-full px-3 py-2 border border-input rounded-md bg-background'
              placeholder='John'
            />
          </div>
          <div>
            <label className='text-sm font-medium mb-1 block'>Last Name</label>
            <input
              type='text'
              className='w-full px-3 py-2 border border-input rounded-md bg-background'
              placeholder='Doe'
            />
          </div>
        </div>
        <div>
          <label className='text-sm font-medium mb-1 block'>Email</label>
          <input
            type='email'
            className='w-full px-3 py-2 border border-input rounded-md bg-background'
            placeholder='john.doe@example.com'
          />
        </div>
        <div>
          <label className='text-sm font-medium mb-1 block'>Phone</label>
          <input
            type='tel'
            className='w-full px-3 py-2 border border-input rounded-md bg-background'
            placeholder='+1 (555) 000-0000'
          />
        </div>
      </div>
    </Paper>
  ),
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl'>
      <Paper variant='section'>
        <Typography variant='h6' className='mb-2'>
          Section
        </Typography>
        <Typography variant='body2'>Default background with subtle styling</Typography>
      </Paper>
      <Paper variant='surface'>
        <Typography variant='h6' className='mb-2'>
          Surface
        </Typography>
        <Typography variant='body2'>Card-like appearance</Typography>
      </Paper>
      <Paper variant='accent'>
        <Typography variant='h6' className='mb-2'>
          Accent
        </Typography>
        <Typography variant='body2'>Stands out with accent colors</Typography>
      </Paper>
      <Paper variant='minimal'>
        <Typography variant='h6' className='mb-2'>
          Minimal
        </Typography>
        <Typography variant='body2'>No background or borders</Typography>
      </Paper>
      <Paper variant='feature'>
        <Typography variant='h6' className='mb-2'>
          Feature
        </Typography>
        <Typography variant='body2'>Gradient background for highlights</Typography>
      </Paper>
      <Paper variant='container'>
        <Typography variant='h6' className='mb-2'>
          Container
        </Typography>
        <Typography variant='body2'>Perfect for grouping content</Typography>
      </Paper>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
