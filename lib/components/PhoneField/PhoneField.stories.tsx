import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { isValidPhoneNumber, type Value } from 'react-phone-number-input';
import { PhoneField } from './PhoneField';

const meta: Meta<typeof PhoneField> = {
  title: 'Components/PhoneField',
  component: PhoneField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the field',
    },
    message: {
      control: 'text',
      description: 'Helper or error message to display below the field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the message represents an error state',
    },
    defaultCountry: {
      control: { type: 'select' },
      options: ['US', 'IN', 'GB', 'DE', 'FR', 'AU', 'CA', 'JP'],
      description: 'Default country code',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories
export const Default: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return <PhoneField label="Phone Number" value={phone} onChange={setPhone} />;
  },
};

export const WithValue: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<E164Number>('+14155552671' );
    return <PhoneField label="Phone Number" value={phone} onChange={setPhone} />;
  },
};

export const WithHelperMessage: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        message="Enter your phone number with country code"
      />
    );
  },
};

// Different default countries
export const DefaultCountryUS: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="US Phone Number"
        value={phone}
        onChange={setPhone}
        defaultCountry="US"
        message="Default: United States"
      />
    );
  },
};

export const DefaultCountryIndia: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="Indian Phone Number"
        value={phone}
        onChange={setPhone}
        defaultCountry="IN"
        message="Default: India"
      />
    );
  },
};

export const DefaultCountryUK: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="UK Phone Number"
        value={phone}
        onChange={setPhone}
        defaultCountry="GB"
        message="Default: United Kingdom"
      />
    );
  },
};

export const DefaultCountryGermany: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="German Phone Number"
        value={phone}
        onChange={setPhone}
        defaultCountry="DE"
        message="Default: Germany"
      />
    );
  },
};

// State variants
export const ErrorState: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<E164Number>('+1234' );
    return (
      <PhoneField
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        error={true}
        message="Please enter a valid phone number"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<E164Number>('+14155552671' );
    return (
      <PhoneField
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        disabled={true}
        message="This field is disabled"
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    return (
      <PhoneField
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        required
        message="This field is required"
      />
    );
  },
};

// Interactive validation example
export const WithValidation: Story = {
  render: () => {
    const [phone, setPhone] = React.useState<Value>();
    const [touched, setTouched] = React.useState(false);

    const isValid = phone ? isValidPhoneNumber(phone) : null;
    const showError = touched && phone && !isValid;
    const showSuccess = touched && phone && isValid;

    return (
      <div className="w-80">
        <PhoneField
          label="Phone Number"
          value={phone}
          onChange={(value) => {
            setPhone(value);
            if (!touched) setTouched(true);
          }}
          error={showError}
          message={
            showError
              ? 'Invalid phone number'
              : showSuccess
                ? '✓ Valid phone number'
                : 'Enter a valid international phone number'
          }
          required
        />

        {phone && (
          <div className="mt-4 p-3 bg-muted rounded-lg text-xs space-y-1">
            <p>
              <strong>Value:</strong> {phone}
            </p>
            <p>
              <strong>Valid:</strong> {isValid ? '✓ Yes' : '✗ No'}
            </p>
            <p>
              <strong>Format:</strong> E.164
            </p>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// Multiple countries showcase
export const AllCountries: Story = {
  render: () => {
    const [phoneUS, setPhoneUS] = React.useState<Value>();
    const [phoneIN, setPhoneIN] = React.useState<Value>();
    const [phoneGB, setPhoneGB] = React.useState<Value>();
    const [phoneDE, setPhoneDE] = React.useState<Value>();

    return (
      <div className="w-80 space-y-4">
        <PhoneField
          label="United States"
          value={phoneUS}
          onChange={setPhoneUS}
          defaultCountry="US"
        />
        <PhoneField label="India" value={phoneIN} onChange={setPhoneIN} defaultCountry="IN" />
        <PhoneField
          label="United Kingdom"
          value={phoneGB}
          onChange={setPhoneGB}
          defaultCountry="GB"
        />
        <PhoneField label="Germany" value={phoneDE} onChange={setPhoneDE} defaultCountry="DE" />
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// Form example
export const ContactForm: Story = {
  render: () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState<Value>();

    return (
      <div className="w-96 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
            className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm"
          />
        </div>

        <PhoneField
          label="Phone Number"
          value={phone}
          onChange={setPhone}
          required
          message="We'll never share your phone number"
        />

        <button className="w-full h-9 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
          Submit
        </button>
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => {
    const [phoneNormal, setPhoneNormal] = React.useState<Value>();
    const [phoneValid, setPhoneValid] = React.useState<E164Number>('+14155552671' );
    const [phoneInvalid, setPhoneInvalid] = React.useState<Value>('+1234');
    const [phoneDisabled, setPhoneDisabled] = React.useState<E164Number>('+14155552671' );

    return (
      <div className="w-80 space-y-4">
        <PhoneField label="Normal State" value={phoneNormal} onChange={setPhoneNormal} />

        <PhoneField
          label="Valid Phone"
          value={phoneValid}
          onChange={setPhoneValid}
          message="✓ This phone number is valid"
        />

        <PhoneField
          label="Invalid Phone"
          value={phoneInvalid}
          onChange={setPhoneInvalid}
          error={true}
          message="Please enter a valid phone number"
        />

        <PhoneField
          label="Disabled State"
          value={phoneDisabled}
          onChange={setPhoneDisabled}
          disabled={true}
          message="This field is disabled"
        />
      </div>
    );
  },
  parameters: {
    layout: 'centered',
  },
};
