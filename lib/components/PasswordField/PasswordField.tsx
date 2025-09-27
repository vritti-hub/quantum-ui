import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../../../shadcn/utils';
import { TextField, TextFieldProps } from '../TextField/TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type' | 'endAdornment'> {
  /**
   * Whether to show password strength indicator
   */
  showStrengthIndicator?: boolean;

  /**
   * Custom aria-label for the visibility toggle button
   */
  toggleAriaLabel?: string;
}

// Helper function to calculate password strength
const getPasswordStrength = (password: string) => {
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  if (strength < 2) return { label: 'Weak', color: 'text-red-500', bgColor: 'bg-red-500', width: '20%' };
  if (strength < 4) return { label: 'Fair', color: 'text-yellow-500', bgColor: 'bg-yellow-500', width: '60%' };
  return { label: 'Strong', color: 'text-green-500', bgColor: 'bg-green-500', width: '100%' };
};

// PasswordField component - specialized TextField for password inputs
export const PasswordField: React.FC<PasswordFieldProps> = ({
  showStrengthIndicator = false,
  toggleAriaLabel,
  value = '',
  message,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordStrength = getPasswordStrength(String(value));

  // Combine strength indicator with existing message
  const enhancedMessage =
    showStrengthIndicator && value && !error ? (
      <div className='space-y-2'>
        <div className='flex justify-between items-center text-xs'>
          <span className='text-muted-foreground'>Password strength:</span>
          <span className={passwordStrength.color}>{passwordStrength.label}</span>
        </div>
        <div className='w-full bg-muted rounded-full h-1'>
          <div
            className={cn('h-1 rounded-full transition-all duration-300', passwordStrength.bgColor)}
            style={{ width: passwordStrength.width }}
          />
        </div>
        {message && <div>{message}</div>}
      </div>
    ) : (
      message
    );

  const eyeIcon = showPassword ? <EyeOff /> : <Eye />;

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      value={value}
      message={enhancedMessage}
      error={error}
      endAdornment={eyeIcon}
    />
  );
};
