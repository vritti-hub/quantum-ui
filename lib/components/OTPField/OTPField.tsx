import React from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../../shadcn/shadcnInputOTP';
import { Label } from '../../../shadcn/shadcnLabel';
import { cn } from '../../../shadcn/utils';

export interface OTPFieldProps {
  /**
   * OTP value
   */
  value: string;

  /**
   * Callback when OTP changes
   */
  onChange: (value: string) => void;

  /**
   * Number of OTP digits
   * @default 6
   */
  length?: number;

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
   * Whether the field is required
   */
  required?: boolean;

  /**
   * CSS class name for styling
   */
  className?: string;
}

// OTPField component - specialized input for one-time passwords
export const OTPField: React.FC<OTPFieldProps> = ({
  value,
  onChange,
  length = 6,
  label,
  message,
  error,
  disabled,
  required,
  className,
}) => {
  const fieldId = React.useId();

  return (
    <div className='space-y-2' data-slot='field'>
      {label && (
        <Label data-slot='label'>
          {label}
          {required && <span className='text-destructive ml-1'>*</span>}
        </Label>
      )}

      <InputOTP
        maxLength={length}
        value={value}
        onChange={onChange}
        disabled={disabled}
        containerClassName={cn('justify-center', className)}
      >
        <InputOTPGroup>
          {Array.from({ length }, (_, index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className={cn(
                error && 'border-destructive focus-within:ring-destructive/20 dark:focus-within:ring-destructive/40'
              )}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {message && (
        <div
          id={`${fieldId}-message`}
          className={cn('text-xs text-center', error ? 'text-destructive' : 'text-muted-foreground')}
          role={error ? 'alert' : undefined}
          data-slot='message'
        >
          {message}
        </div>
      )}
    </div>
  );
};
