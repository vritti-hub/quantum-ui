import { Button as ShadcnButton, buttonVariants } from '../../../shadcn/shadcnButton';
import { cn } from '../../../shadcn/utils';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether to render as child component
   */
  asChild?: boolean;
}

// Button molecule - pure shadcn Button with quantum defaults
export const Button = React.memo<ButtonProps>(
  ({ className, ...props }) => {
    return (
      <ShadcnButton
        className={cn(className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
