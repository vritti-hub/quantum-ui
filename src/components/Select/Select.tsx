import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select as MuiSelect, 

  MenuItem,
  FormHelperText, 
  type SelectProps
} from '@mui/material';
import { styled } from '@pigment-css/react';

export interface QuantumSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface QuantumSelectProps extends Omit<SelectProps, 'children'> {
  options: QuantumSelectOption[];
  helperText?: string;
  glow?: boolean;
  animated?: boolean;
}

interface StyledFormControlProps {
  hasGlow?: boolean;
  isAnimated?: boolean;
}

const StyledFormControl = styled(FormControl)<StyledFormControlProps>({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  
  '& .MuiInputLabel-root': {
    fontFamily: 'inherit',
    
    '&.Mui-focused': {
      fontWeight: 500,
    },
  },
  
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

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover': {
    transform: 'translateX(4px)',
  },
  
  '&.Mui-selected': {
    fontWeight: 500,
    
    '&:hover': {
      transform: 'translateX(4px)',
    },
  },
  
  '&.Mui-disabled': {
    opacity: 0.5,
  },
});

export const QuantumSelect: React.FC<QuantumSelectProps> = ({
  options,
  label,
  helperText,
  error,
  glow = false,
  animated = false,
  fullWidth = true,
  variant = 'outlined',
  ...props
}) => {
  return (
    <StyledFormControl 
      fullWidth={fullWidth} 
      variant={variant}
      error={error}
      hasGlow={glow}
      isAnimated={animated}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        label={label}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '8px',
              boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              maxHeight: 300,
              '& .MuiList-root': {
                padding: '8px',
              },
            },
          },
        }}
        {...props}
      >
        {options.map((option) => (
          <StyledMenuItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </StyledMenuItem>
        ))}
      </MuiSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};

export default QuantumSelect;