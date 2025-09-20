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
}

// TextField molecule - Input + Label composition
export const TextField: React.FC<TextFieldProps> = ({
  label,
  message,
  required = false,
  className,
  id,
  ...props
}) => {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Input
        id={inputId}
        className={cn(className)}
        aria-describedby={message ? `${inputId}-message` : undefined}
        {...props}
      />

      {message && (
        <p id={`${inputId}-message`} className="text-xs text-muted-foreground">
          {message}
        </p>
      )}
    </div>
  );
};
