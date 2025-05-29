import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';
import { styled } from '@pigment-css/react';

export interface QuantumButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text' | 'gradient';
  glow?: boolean;
}

interface StyledButtonProps {
  quantumVariant?: string;
  hasGlow?: boolean;
}

const StyledButton = styled(MuiButton)<StyledButtonProps>({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  borderRadius: '8px',
  fontWeight: 500,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  
  // Base hover effects
  '&:hover': {
    transform: 'translateY(-1px)',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },

  // Gradient variant
  variants: [
    {
      props: { quantumVariant: 'gradient' } as const,
      style: {
        background: 'linear-gradient(135deg, #6366F1 0%, #00D9FF 100%)',
        color: '#FFFFFF',
        border: 'none',
        '&:hover': {
          background: 'linear-gradient(135deg, #4338CA 0%, #00B8D4 100%)',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px -8px rgba(99, 102, 241, 0.4)',
        },
      },
    },
    {
      props: { hasGlow: true } as const,
      style: {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-2px',
          left: '-2px',
          right: '-2px',
          bottom: '-2px',
          borderRadius: 'inherit',
          padding: '2px',
          background: 'linear-gradient(135deg, #6366F1, #00D9FF)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          zIndex: -1,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover::before': {
          opacity: 1,
        },
      },
    },
    {
      props: { variant: 'contained' } as const,
      style: {
        '&:hover': {
          boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.3)',
        },
      },
    },
    {
      props: { variant: 'outlined' } as const,
      style: {
        borderWidth: '1.5px',
        '&:hover': {
          borderWidth: '1.5px',
          boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.2)',
        },
      },
    },
  ],
});

export const QuantumButton: React.FC<QuantumButtonProps> = ({
  variant = 'contained',
  glow = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant === 'gradient' ? 'contained' : variant}
      quantumVariant={variant}
      hasGlow={glow}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default QuantumButton;