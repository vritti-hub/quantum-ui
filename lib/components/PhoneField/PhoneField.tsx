import React from 'react';
import PhoneInputBase, { type Country, type Value } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Label } from '../../../shadcn/shadcnLabel';
import { cn } from '../../../shadcn/utils';

export interface PhoneFieldProps {
  /**
   * Phone number value in E.164 format (e.g., +14155552671)
   */
  value?: Value;

  /**
   * Callback when phone number changes
   */

  onChange: (value: Value | undefined) => void;

  /**
   * Default country code (e.g., 'US', 'IN', 'GB')
   */
  defaultCountry?: Country;

  /**
   * Label for the field
   */
  label?: string;

  /**
   * Helper or error message to display below the field
   */
  message?: string;

  /**
   * Whether the message represents an error state
   */
  error?: boolean;

  /**
   * Whether the field is disabled
   */
  disabled?: boolean;

  /**
   * CSS class name for styling
   */
  className?: string;

  /**
   * Placeholder text for the input
   */
  placeholder?: string;
}

// PhoneField component - specialized input for international phone numbers
export const PhoneField: React.FC<PhoneFieldProps> = ({
  value,
  onChange,
  defaultCountry = 'IN',
  label,
  message,
  error,
  disabled,
  className,
  placeholder,
}) => {
  const fieldId = React.useId();

  return (
    <div className='space-y-2' data-slot='field'>
      {label && <Label data-slot='label'>{label}</Label>}

      <PhoneInputBase
        international
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={message ? `${fieldId}-message` : undefined}
        aria-invalid={error}
        data-slot='input'
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent dark:bg-input/30 px-3 py-1 text-sm shadow-xs transition-[color,box-shadow]',
          'placeholder:text-muted-foreground',
          'focus-within:outline-none focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-destructive focus-within:ring-destructive/20 dark:focus-within:ring-destructive/40',
          className
        )}
        numberInputProps={{
          className: cn(
            'flex-1 bg-transparent outline-none',
            'placeholder:text-muted-foreground',
            'disabled:cursor-not-allowed'
          ),
        }}
        countrySelectProps={{
          className: cn('mr-2 bg-transparent border-none outline-none', 'focus:ring-0', 'disabled:cursor-not-allowed'),
        }}
      />

      {message && (
        <div
          id={`${fieldId}-message`}
          className={cn('text-xs', error ? 'text-destructive' : 'text-muted-foreground')}
          role={error ? 'alert' : undefined}
          data-slot='message'
        >
          {message}
        </div>
      )}
    </div>
  );
};
