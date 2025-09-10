import React from 'react';
import { cn } from '../../utils';

export interface PaperProps extends React.ComponentProps<'div'> {
  /**
   * The visual variant of the paper
   */
  variant?: 'section' | 'surface' | 'accent' | 'minimal' | 'feature' | 'container';

  /**
   * Whether to apply glass effect
   */
  glass?: boolean;

  /**
   * Whether to use compact spacing
   */
  compact?: boolean;

  /**
   * Whether to take full width
   */
  fullWidth?: boolean;
}

export const Paper: React.FC<PaperProps> = ({
  children,
  variant = 'surface',
  glass = false,
  compact = false,
  fullWidth = false,
  className,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'section':
        return 'bg-background border border-border rounded-lg shadow-sm';
      case 'surface':
        return 'bg-card text-card-foreground border border-border rounded-lg shadow-sm';
      case 'accent':
        return 'bg-accent text-accent-foreground border border-border rounded-lg shadow-sm';
      case 'minimal':
        return 'bg-transparent';
      case 'feature':
        return 'bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg shadow-md';
      case 'container':
        return 'bg-muted/50 border border-border rounded-lg';
      default:
        return 'bg-card text-card-foreground border border-border rounded-lg shadow-sm';
    }
  };

  return (
    <div
      className={cn(
        getVariantClasses(),
        {
          'backdrop-blur-sm bg-opacity-80': glass,
          'p-3': compact,
          'p-6': !compact,
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
