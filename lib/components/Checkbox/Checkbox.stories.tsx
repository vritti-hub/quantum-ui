import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Label } from '../../../shadcn/shadcnLabel';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when initially rendered',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents the user from interacting with the checkbox',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Event handler called when the checked state changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const WithLabelChecked: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Checkbox id='terms-checked' defaultChecked />
      <Label htmlFor='terms-checked' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const WithLabelDisabled: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Checkbox id='terms-disabled' disabled />
      <Label htmlFor='terms-disabled' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        Accept terms and conditions
      </Label>
    </div>
  ),
};

// With Description
export const WithText: Story = {
  render: () => (
    <div className='flex items-start gap-3'>
      <Checkbox id='terms-text' />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor='terms-text' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Accept terms and conditions
        </Label>
        <p className='text-sm text-muted-foreground'>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const WithTextChecked: Story = {
  render: () => (
    <div className='flex items-start gap-3'>
      <Checkbox id='terms-text-checked' defaultChecked />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor='terms-text-checked' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Accept terms and conditions
        </Label>
        <p className='text-sm text-muted-foreground'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  ),
};

// Card Style
export const WithCard: Story = {
  render: () => (
    <Label className='flex items-start gap-3 rounded-lg border p-3 cursor-pointer hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950'>
      <Checkbox
        id='card-checkbox'
        defaultChecked
        className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700'
      />
      <div className='grid gap-1.5 font-normal'>
        <p className='text-sm leading-none font-medium'>
          Enable notifications
        </p>
        <p className='text-sm text-muted-foreground'>
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
  ),
};

// All States
export const AllStates: Story = {
  render: () => (
    <div className='flex flex-col gap-4 w-80'>
      <div className='flex items-center gap-2'>
        <Checkbox id='state-default' />
        <Label htmlFor='state-default' className='text-sm font-medium'>
          Default (unchecked)
        </Label>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='state-checked' defaultChecked />
        <Label htmlFor='state-checked' className='text-sm font-medium'>
          Checked
        </Label>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='state-disabled' disabled />
        <Label htmlFor='state-disabled' className='text-sm font-medium'>
          Disabled (unchecked)
        </Label>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='state-disabled-checked' disabled defaultChecked />
        <Label htmlFor='state-disabled-checked' className='text-sm font-medium'>
          Disabled (checked)
        </Label>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className='space-y-4 w-96'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>Preferences</h3>
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Checkbox id='pref-email' defaultChecked />
            <Label htmlFor='pref-email' className='text-sm font-medium'>
              Email notifications
            </Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='pref-sms' />
            <Label htmlFor='pref-sms' className='text-sm font-medium'>
              SMS notifications
            </Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='pref-push' defaultChecked />
            <Label htmlFor='pref-push' className='text-sm font-medium'>
              Push notifications
            </Label>
          </div>
        </div>
      </div>
      <div className='pt-2 border-t'>
        <div className='flex items-start gap-3'>
          <Checkbox id='pref-marketing' />
          <div className='grid gap-1.5 leading-none'>
            <Label htmlFor='pref-marketing' className='text-sm font-medium'>
              Marketing emails
            </Label>
            <p className='text-sm text-muted-foreground'>
              Receive emails about new products, features, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

// Controlled Example
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <Checkbox id='controlled' checked={checked} onCheckedChange={(value) => setChecked(value as boolean)} />
          <Label htmlFor='controlled' className='text-sm font-medium'>
            Controlled checkbox
          </Label>
        </div>
        <div className='text-sm text-muted-foreground'>
          Checkbox is {checked ? 'checked' : 'unchecked'}
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// Multiple Checkboxes with State
export const MultipleWithState: Story = {
  render: () => {
    const [selections, setSelections] = React.useState({
      javascript: true,
      typescript: false,
      react: true,
      vue: false,
      angular: false,
    });

    const handleChange = (key: keyof typeof selections) => (checked: boolean) => {
      setSelections((prev) => ({ ...prev, [key]: checked }));
    };

    return (
      <div className='space-y-4 w-80'>
        <div>
          <h3 className='text-sm font-semibold mb-3'>Select your skills</h3>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='skill-js'
                checked={selections.javascript}
                onCheckedChange={handleChange('javascript')}
              />
              <Label htmlFor='skill-js' className='text-sm font-medium'>
                JavaScript
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='skill-ts'
                checked={selections.typescript}
                onCheckedChange={handleChange('typescript')}
              />
              <Label htmlFor='skill-ts' className='text-sm font-medium'>
                TypeScript
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='skill-react'
                checked={selections.react}
                onCheckedChange={handleChange('react')}
              />
              <Label htmlFor='skill-react' className='text-sm font-medium'>
                React
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='skill-vue'
                checked={selections.vue}
                onCheckedChange={handleChange('vue')}
              />
              <Label htmlFor='skill-vue' className='text-sm font-medium'>
                Vue
              </Label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                id='skill-angular'
                checked={selections.angular}
                onCheckedChange={handleChange('angular')}
              />
              <Label htmlFor='skill-angular' className='text-sm font-medium'>
                Angular
              </Label>
            </div>
          </div>
        </div>
        <div className='pt-2 border-t text-sm text-muted-foreground'>
          Selected: {Object.entries(selections).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <Checkbox
          id='custom-1'
          defaultChecked
          className='data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600'
        />
        <Label htmlFor='custom-1' className='text-sm font-medium'>
          Success styled checkbox
        </Label>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox
          id='custom-2'
          defaultChecked
          className='data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600'
        />
        <Label htmlFor='custom-2' className='text-sm font-medium'>
          Error styled checkbox
        </Label>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox
          id='custom-3'
          defaultChecked
          className='data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 rounded-full'
        />
        <Label htmlFor='custom-3' className='text-sm font-medium'>
          Round checkbox
        </Label>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
