import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Card/Card';
import { Typography } from '../Typography/Typography';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle button',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Theme Toggle
export const Default: Story = {
  args: {},
};

// Small Size
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

// Medium Size (Default)
export const Medium: Story = {
  args: {
    size: 'md',
  },
};

// Large Size
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// In Card Header
export const InCardHeader: Story = {
  render: () => (
    <Card className='w-full max-w-md'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-4'>
        <div>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </div>
        <ThemeToggle />
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <Typography variant='body1'>Dark mode</Typography>
            <Typography variant='caption' intent='muted'>
              Toggle between light and dark themes
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

// In Navigation Bar
export const InNavBar: Story = {
  render: () => (
    <div className='w-full max-w-4xl'>
      <nav className='flex items-center justify-between p-4 bg-background border-b'>
        <div className='flex items-center space-x-4'>
          <Typography variant='h5'>Quantum UI</Typography>
          <div className='hidden md:flex space-x-4'>
            <a href='#' className='text-muted-foreground hover:text-foreground'>
              Components
            </a>
            <a href='#' className='text-muted-foreground hover:text-foreground'>
              Documentation
            </a>
            <a href='#' className='text-muted-foreground hover:text-foreground'>
              Examples
            </a>
          </div>
        </div>
        <ThemeToggle />
      </nav>

      <div className='p-4'>
        <Typography variant='body1'>
          This is an example of how the theme toggle might appear in a navigation bar. Try clicking the toggle to switch
          between light and dark modes.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <div className='text-center'>
        <ThemeToggle size='sm' />
        <Typography variant='caption' className='block mt-2'>
          Small
        </Typography>
      </div>
      <div className='text-center'>
        <ThemeToggle size='md' />
        <Typography variant='caption' className='block mt-2'>
          Medium
        </Typography>
      </div>
      <div className='text-center'>
        <ThemeToggle size='lg' />
        <Typography variant='caption' className='block mt-2'>
          Large
        </Typography>
      </div>
    </div>
  ),
};

// Theme Showcase
export const ThemeShowcase: Story = {
  render: () => (
    <div className='w-full max-w-4xl space-y-6'>
      <div className='flex items-center justify-between'>
        <Typography variant='h2'>Theme Toggle Demo</Typography>
        <ThemeToggle />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>Light Theme Features</CardTitle>
            <CardDescription>Benefits of the light theme</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full' />
                <Typography variant='body2'>Better readability in bright environments</Typography>
              </li>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full' />
                <Typography variant='body2'>Reduced eye strain during daytime</Typography>
              </li>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full' />
                <Typography variant='body2'>Professional appearance</Typography>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dark Theme Features</CardTitle>
            <CardDescription>Benefits of the dark theme</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-blue-500 rounded-full' />
                <Typography variant='body2'>Reduced eye strain in low light</Typography>
              </li>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-blue-500 rounded-full' />
                <Typography variant='body2'>Better battery life on OLED screens</Typography>
              </li>
              <li className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-blue-500 rounded-full' />
                <Typography variant='body2'>Modern, sleek appearance</Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className='pt-6'>
          <Typography variant='body1' align='center' intent='muted'>
            Click the theme toggle above to see how the interface adapts to different themes. Your preference is
            automatically saved to localStorage.
          </Typography>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
