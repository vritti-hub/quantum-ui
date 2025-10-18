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
  message?: React.ReactNode;

  /**
   * Whether the message represents an error state
   */
  error?: boolean;

  /**
   * Element to display at the start of the input (e.g., icon)
   */
  startAdornment?: React.ReactNode;

  /**
   * Element to display at the end of the input (e.g., icon button)
   */
  endAdornment?: React.ReactNode;
}

// TextField molecule - Input + Label composition
export const TextField: React.FC<TextFieldProps> = ({
  label,
  message,
  error = false,
  className,
  id,
  startAdornment,
  endAdornment,
  ...props
}) => {
  return (
    <div className='space-y-2' data-slot='field'>
      {label && <Label data-slot='label'>{label}</Label>}

      <div className='relative'>
        {startAdornment && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>{startAdornment}</div>
        )}
        <Input
          className={cn(className, startAdornment && 'pl-10', endAdornment && 'pr-10')}
          aria-describedby={message ? `${id || 'field'}-message` : undefined}
          aria-invalid={error}
          data-slot='input'
          {...props}
        />
        {endAdornment && <div className='absolute inset-y-0 right-0 flex items-center pr-3'>{endAdornment}</div>}
      </div>

      {message && (
        <div
          id={`${id || 'field'}-message`}
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
