import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button as ShadcnButton, buttonVariants } from '../../shadcnButton';
import { cn } from '../../utils';

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /**
   * The intent/purpose of the button
   * - primary: Main actions, CTAs (default variant)
   * - secondary: Secondary actions (secondary variant)
   * - destructive: Dangerous actions (destructive variant)
   * - ghost: Subtle actions (ghost variant)
   * - outline: Outlined actions (outline variant)
   */
  intent?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline';

  /**
   * Size of the button
   */
  size?: 'sm' | 'default' | 'lg' | 'icon';

  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;

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

// Map our intents to shadcn variants
const intentToVariant = {
  primary: 'default',
  secondary: 'secondary',
  destructive: 'destructive',
  ghost: 'ghost',
  outline: 'outline',
} as const;

export const Button = React.memo<ButtonProps>(
  ({ intent = 'primary', fullWidth = false, className, size = 'default', children, ...props }) => {
    const variant = intentToVariant[intent];

    return (
      <ShadcnButton
        variant={variant}
        size={size}
        className={cn(fullWidth && 'w-full', className)}
        data-intent={intent}
        {...props}
      >
        {children}
      </ShadcnButton>
    );
  }
);

Button.displayName = 'Button';
