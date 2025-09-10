import React from 'react';
import { Input } from '../../shadcnInput';
import { Label } from '../../shadcnLabel';
import { cn } from '../../utils';

export interface TextFieldProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  /**
   * The current state of the field for validation feedback
   */
  state?: 'normal' | 'error' | 'success' | 'warning';

  /**
   * Label for the field
   */
  label?: string;

  /**
   * Helper or error message to display below the field
   */
  message?: string;

  /**
   * Size of the field
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the field is required
   */
  required?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  state = 'normal',
  label,
  message,
  size = 'md',
  required = false,
  className,
  id,
  ...props
}) => {
  const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;

  const getStateClasses = () => {
    switch (state) {
      case 'error':
        return 'border-destructive focus-visible:ring-destructive/20';
      case 'success':
        return 'border-green-500 focus-visible:ring-green-500/20';
      case 'warning':
        return 'border-yellow-500 focus-visible:ring-yellow-500/20';
      default:
        return '';
    }
  };

  const getMessageClasses = () => {
    switch (state) {
      case 'error':
        return 'text-destructive';
      case 'success':
        return 'text-green-600 dark:text-green-400';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-8 text-sm';
      case 'lg':
        return 'h-11 text-base';
      default:
        return 'h-9 text-sm';
    }
  };

  return (
    <div className='space-y-2'>
      {label && (
        <Label htmlFor={inputId} className='text-sm font-medium'>
          {label}
          {required && <span className='text-destructive ml-1'>*</span>}
        </Label>
      )}

      <Input
        id={inputId}
        className={cn(getSizeClasses(), getStateClasses(), className)}
        aria-invalid={state === 'error'}
        aria-describedby={message ? `${inputId}-message` : undefined}
        {...props}
      />

      {message && (
        <p id={`${inputId}-message`} className={cn('text-xs', getMessageClasses())}>
          {message}
        </p>
      )}
    </div>
  );
};
