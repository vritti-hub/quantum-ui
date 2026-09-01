import React from 'react';
import { Checkbox as ShadcnCheckbox } from '../../../shadcn/shadcnCheckbox';
import { Field, FieldContent, FieldDescription, FieldError, FieldLabel } from '../../../shadcn/shadcnField';
import { withDisabledTip } from '../../utils/disabledTip';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof ShadcnCheckbox> {
  label?: React.ReactNode;

  description?: React.ReactNode;

  error?: string;

  disabledTip?: string;
}

// Checkbox component with Field system integration
export const Checkbox = React.forwardRef<React.ElementRef<typeof ShadcnCheckbox>, CheckboxProps>(
  ({ label, description, error, disabledTip, id, ...props }, ref) => {
    const generatedId = React.useId();
    const fieldId = id || generatedId;
    const hasError = !!error;

    // If no label or description, just return the base checkbox
    if (!label && !description && !error) {
      return withDisabledTip(<ShadcnCheckbox {...props} ref={ref} id={fieldId} />, disabledTip, props.disabled);
    }

    return (
      <Field orientation="horizontal" data-disabled={props.disabled} data-invalid={hasError}>
        {withDisabledTip(
          <ShadcnCheckbox
            {...props}
            ref={ref}
            id={fieldId}
            aria-describedby={description || error ? `${fieldId}-description ${fieldId}-error` : undefined}
            aria-invalid={hasError}
          />,
          disabledTip,
          props.disabled,
        )}
        <FieldContent>
          {label && (
            <FieldLabel htmlFor={fieldId} className="font-normal cursor-pointer">
              {label}
            </FieldLabel>
          )}

          {description && <FieldDescription id={`${fieldId}-description`}>{description}</FieldDescription>}

          {error && <FieldError id={`${fieldId}-error`}>{error}</FieldError>}
        </FieldContent>
      </Field>
    );
  },
);

Checkbox.displayName = 'Checkbox';
