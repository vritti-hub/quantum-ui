import React from 'react';
import { Input } from '../../../shadcn/shadcnInput';
import { Label } from '../../../shadcn/shadcnLabel';
import { cn } from '../../../shadcn/utils';

export interface TextFieldProps extends React.ComponentProps<'input'> {
  /**
   * Label for the field
   */
  label?: string;

  /**
   * Helper or error message to display below the field
   */
  message?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Whether the message represents an error state
   */
  error?: boolean;
}

// TextField molecule - Input + Label composition
export const TextField: React.FC<TextFieldProps> = ({
  label,
  message,
  required = false,
  error = false,
  className,
  id,
  ...props
}) => {
  return (
    <div className='space-y-2' data-slot='field'>
      {label && (
        <Label data-slot='label'>
          {label}
          {required && (
            <span className='text-destructive ml-1' aria-hidden='true'>
              *
            </span>
          )}
        </Label>
      )}

      <Input
        className={className}
        aria-describedby={message}
        aria-required={required}
        aria-invalid={error}
        required={required}
        data-slot='input'
        {...props}
      />

      {message && (
        <p
          className={cn('text-xs', error ? 'text-destructive' : 'text-muted-foreground')}
          role={error ? 'alert' : undefined}
          data-slot='message'
        >
          {message}
        </p>
      )}
    </div>
  );
};
