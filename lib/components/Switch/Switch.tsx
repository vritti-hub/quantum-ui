import React from 'react';
import { Field, FieldError, FieldLabel } from '../../../shadcn/shadcnField';
import { Switch as ShadcnSwitch } from '../../../shadcn/shadcnSwitch';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof ShadcnSwitch> {
  label?: React.ReactNode;

  description: React.ReactNode;

  error?: string;
}

// Switch for toggling on/off; label + description on the left with the toggle pinned right (description required)
export const Switch = React.forwardRef<React.ElementRef<typeof ShadcnSwitch>, SwitchProps>(
  ({ label, description, error, id, size = 'lg', ...props }, ref) => {
    const generatedId = React.useId();
    const fieldId = id || generatedId;
    const hasError = !!error;

    return (
      <Field data-disabled={props.disabled} data-invalid={hasError}>
        {label && (
          <FieldLabel htmlFor={fieldId} className="cursor-pointer">
            {label}
          </FieldLabel>
        )}
        <div className="flex min-h-9 items-center gap-3">
          {description && (
            <label
              htmlFor={fieldId}
              id={`${fieldId}-description`}
              className="flex-1 cursor-pointer text-sm leading-snug text-muted-foreground"
            >
              {description}
            </label>
          )}
          <ShadcnSwitch
            {...props}
            ref={ref}
            id={fieldId}
            size={size}
            aria-describedby={description || error ? `${fieldId}-description ${fieldId}-error` : undefined}
            aria-invalid={hasError}
          />
        </div>
        {error && <FieldError id={`${fieldId}-error`}>{error}</FieldError>}
      </Field>
    );
  },
);

Switch.displayName = 'Switch';

export type CompactSwitchProps = React.ComponentProps<typeof ShadcnSwitch>;

// Bare compact switch with no Field wrapper, defaults to sm size for dense layouts like table/matrix cells
export const CompactSwitch: React.FC<CompactSwitchProps> = ({ size = 'sm', ...props }) => (
  <ShadcnSwitch size={size} {...props} />
);

CompactSwitch.displayName = 'CompactSwitch';
