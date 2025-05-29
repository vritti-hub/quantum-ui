import React from 'react';
import { TextField as MuiTextField, type TextFieldProps } from '@mui/material';
import { styled } from '@pigment-css/react';

export interface QuantumTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  glow?: boolean;
  animated?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

interface StyledTextFieldProps {
  hasGlow?: boolean;
  isAnimated?: boolean;
}

const StyledTextField = styled(MuiTextField)<StyledTextFieldProps>({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    '& fieldset': {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    '&:hover fieldset': {
      borderWidth: '1.5px',
    },
    
    '&.Mui-focused fieldset': {
      borderWidth: '2px',
    },
  },
  
  '& .MuiInputLabel-root': {
    fontFamily: 'inherit',
    
    '&.Mui-focused': {
      fontWeight: 500,
    },
  },
  
  '& .MuiFormHelperText-root': {
    fontFamily: 'inherit',
    marginTop: '6px',
  },

  variants: [
    {
      props: { hasGlow: true } as const,
      style: {
        '& .MuiOutlinedInput-root': {
          position: 'relative',
          
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, #6366F1, #00D9FF)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1,
            pointerEvents: 'none',
          },
          
          '&.Mui-focused::before': {
            opacity: 1,
          },
        },
      },
    },
    {
      props: { isAnimated: true } as const,
      style: {
        '& .MuiOutlinedInput-root': {
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.2)',
          },
          
          '&.Mui-focused': {
            transform: 'translateY(-1px)',
            boxShadow: '0 6px 16px -6px rgba(99, 102, 241, 0.3)',
          },
        },
      },
    },
  ],
});

export const QuantumTextField: React.FC<QuantumTextFieldProps> = ({
  glow = false,
  animated = false,
  variant = 'outlined',
  ...props
}) => {
  return (
    <StyledTextField
      variant={variant}
      hasGlow={glow}
      isAnimated={animated}
      {...props}
    />
  );
};

export default QuantumTextField;