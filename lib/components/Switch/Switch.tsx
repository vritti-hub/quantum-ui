import React from 'react';
import { Field, FieldError, FieldLabel } from '../../../shadcn/shadcnField';
import { Switch as ShadcnSwitch } from '../../../shadcn/shadcnSwitch';
import { withDisabledTip } from '../../utils/disabledTip';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof ShadcnSwitch> {
  label?: React.ReactNode;

  description: React.ReactNode;

  error?: string;

  disabledTip?: string;
}

// Switch for toggling on/off; label + description on the left with the toggle pinned right (description required)
export const Switch = React.forwardRef<React.ElementRef<typeof ShadcnSwitch>, SwitchProps>(
  ({ label, description, error, disabledTip, id, size = 'lg', ...props }, ref) => {
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
          {withDisabledTip(
            <ShadcnSwitch
              {...props}
              ref={ref}
              id={fieldId}
              size={size}
              aria-describedby={description || error ? `${fieldId}-description ${fieldId}-error` : undefined}
              aria-invalid={hasError}
            />,
            disabledTip,
            props.disabled,
          )}
        </div>
        {error && <FieldError id={`${fieldId}-error`}>{error}</FieldError>}
      </Field>
    );
  },
);

Switch.displayName = 'Switch';

export type CompactSwitchProps = React.ComponentProps<typeof ShadcnSwitch> & { disabledTip?: string };

// Bare compact switch with no Field wrapper, defaults to sm size for dense layouts like table/matrix cells
export const CompactSwitch: React.FC<CompactSwitchProps> = ({ size = 'sm', disabledTip, ...props }) =>
  withDisabledTip(<ShadcnSwitch size={size} {...props} />, disabledTip, props.disabled);

CompactSwitch.displayName = 'CompactSwitch';
