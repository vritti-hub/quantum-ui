"use client"

import React from 'react';
import {
  Controller,
  FieldPath,
  FieldValues,
  FormProvider,
  UseFormReturn,
} from 'react-hook-form';
import { Checkbox } from '../Checkbox';
import { FieldError } from '../../../shadcn/shadcnField';
import { cn } from '../../../shadcn/utils';

// Re-export Controller for explicit usage
export { Controller } from 'react-hook-form';

/**
 * Recursively process children to wrap form fields with Controller
 */
function processChildren<TFieldValues extends FieldValues>(
  children: React.ReactNode,
  control: UseFormReturn<TFieldValues>['control']
): React.ReactNode {
  return React.Children.map(children, (child) => {
    // Handle non-element children (strings, numbers, null, etc.)
    if (!React.isValidElement(child)) {
      return child;
    }

    const childProps = child.props as any;
    const isFragment = child.type === React.Fragment;

    // Handle form fields with name prop (but not Fragments)
    if (!isFragment && childProps.name && typeof childProps.name === 'string') {
      const name = childProps.name as FieldPath<TFieldValues>;

      return (
        <Controller
          key={name}
          control={control}
          name={name}
          render={({ field, fieldState }) => {
            // Check if this is a Checkbox component - map value to checked
            const isCheckbox = child.type === Checkbox;

            const fieldProps = isCheckbox
              ? {
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  onBlur: field.onBlur,
                  ref: field.ref,
                }
              : field;

            return React.cloneElement(child, {
              ...childProps,
              ...fieldProps,
              error: fieldState.error?.message || (fieldState.error ? 'Invalid' : undefined),
              name: undefined, // Remove name to avoid passing it to the underlying input
            });
          }}
        />
      );
    }

    // Handle React Fragments - process their children directly
    if (isFragment) {
      return processChildren(childProps.children, control);
    }

    // Recurse into children for container elements (divs, FieldGroups, etc.)
    if (childProps.children != null) {
      return React.cloneElement(child, {
        ...childProps,
        children: processChildren(childProps.children, control),
      });
    }

    // Return unchanged if no name prop and no children
    return child;
  });
}

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /**
   * The react-hook-form form instance
   */
  form: UseFormReturn<TFieldValues>;

  /**
   * Form submit handler
   */
  onSubmit: (data: TFieldValues) => void | Promise<void>;

  /**
   * Children elements - automatically wrapped with Controller if they have a name prop
   */
  children: React.ReactNode;

  /**
   * Whether to automatically display root errors
   * @default true
   */
  showRootError?: boolean;

  /**
   * Position of the root error display
   * @default 'bottom'
   */
  rootErrorPosition?: 'top' | 'bottom';

  /**
   * Additional classes for the root error display
   */
  rootErrorClassName?: string;
}

/**
 * Smart Form component that automatically wraps children with Controller
 *
 * Usage:
 * ```tsx
 * <Form form={form} onSubmit={handleSubmit}>
 *   <TextField name="email" label="Email" description="Your email address" />
 *   <PasswordField name="password" label="Password" />
 *   <Button type="submit">Submit</Button>
 * </Form>
 * ```
 */
export function Form<TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  children,
  showRootError = true,
  rootErrorPosition = 'bottom',
  rootErrorClassName,
  ...props
}: FormProps<TFieldValues>) {
  const handleSubmit = form.handleSubmit(onSubmit);

  // Process children recursively to automatically wrap with Controller
  const processedChildren = processChildren(children, form.control);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} {...props}>
        {/* Top position error */}
        {showRootError && rootErrorPosition === 'top' && form.formState.errors.root && (
          <FieldError
            errors={[form.formState.errors.root]}
            className={cn("text-center", rootErrorClassName)}
          />
        )}

        {processedChildren}

        {/* Bottom position error */}
        {showRootError && rootErrorPosition === 'bottom' && form.formState.errors.root && (
          <FieldError
            errors={[form.formState.errors.root]}
            className={cn("text-center", rootErrorClassName)}
          />
        )}
      </form>
    </FormProvider>
  );
}

Form.displayName = 'Form';
