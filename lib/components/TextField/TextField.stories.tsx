import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['normal', 'error', 'success', 'warning'],
      description: 'The current state of the field for validation feedback',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the field',
    },
    label: {
      control: 'text',
      description: 'Label for the field',
    },
    message: {
      control: 'text',
      description: 'Helper or error message to display below the field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    defaultValue: 'john.doe@example.com',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    required: true,
  },
};

export const WithMessage: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    message: 'Username must be at least 3 characters long',
  },
};

// State variants
export const ErrorState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    defaultValue: 'invalid-email',
    state: 'error',
    message: 'Please enter a valid email address',
  },
};

export const SuccessState: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    defaultValue: 'john.doe@example.com',
    state: 'success',
    message: 'Email address is valid',
  },
};

export const WarningState: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    defaultValue: 'weak',
    state: 'warning',
    message: 'Consider using a stronger password',
  },
};

// Size variants
export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium size (default)',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
  },
};

// Different input types
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    required: true,
  },
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    min: 0,
    max: 120,
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for anything...',
    type: 'search',
  },
};

export const Tel: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 000-0000',
    type: 'tel',
  },
};

export const URL: Story = {
  args: {
    label: 'Website',
    placeholder: 'https://example.com',
    type: 'url',
  },
};

// State examples
export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    defaultValue: 'Cannot edit this',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Field',
    defaultValue: 'This is read only',
    readOnly: true,
  },
};

// Form example
export const LoginForm: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <TextField label='Email Address' placeholder='Enter your email' type='email' required />
      <TextField label='Password' placeholder='Enter your password' type='password' required />
      <TextField
        label='Confirm Password'
        placeholder='Confirm your password'
        type='password'
        state='error'
        message='Passwords do not match'
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const ContactForm: Story = {
  render: () => (
    <div className='w-96 space-y-4'>
      <div className='grid grid-cols-2 gap-4'>
        <TextField label='First Name' placeholder='John' required />
        <TextField label='Last Name' placeholder='Doe' required />
      </div>
      <TextField label='Email Address' placeholder='john.doe@example.com' type='email' required />
      <TextField label='Phone Number' placeholder='+1 (555) 000-0000' type='tel' />
      <TextField label='Company' placeholder='Acme Corp' />
      <TextField
        label='Website'
        placeholder='https://example.com'
        type='url'
        message='Optional: Include your company website'
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <TextField label='Small Size' placeholder='Small input field' size='sm' />
      <TextField label='Medium Size (Default)' placeholder='Medium input field' size='md' />
      <TextField label='Large Size' placeholder='Large input field' size='lg' />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className='w-80 space-y-4'>
      <TextField label='Normal State' placeholder='Normal input' state='normal' />
      <TextField
        label='Success State'
        placeholder='Success input'
        defaultValue='Valid input'
        state='success'
        message='This input is valid'
      />
      <TextField
        label='Warning State'
        placeholder='Warning input'
        defaultValue='Potentially problematic input'
        state='warning'
        message='Please double-check this input'
      />
      <TextField
        label='Error State'
        placeholder='Error input'
        defaultValue='Invalid input'
        state='error'
        message='This input contains errors'
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
