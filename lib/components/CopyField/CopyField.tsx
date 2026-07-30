import { Check, Copy } from 'lucide-react';
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../../shadcn/utils';
import { Button } from '../Button';
import { FieldDescription, FieldLabel } from '../Field';
import { Tooltip } from '../Tooltip';

/**
 * Props for the CopyField component
 */
export interface CopyFieldProps {
  /** The value shown and copied to the clipboard */
  value: string;
  /** Optional label rendered above the field; omit for a bare copy row */
  label?: React.ReactNode;
  /** Optional helper text rendered below the field */
  description?: React.ReactNode;
  /** Render the value in a monospace font (default: true) */
  mono?: boolean;
  /** Additional CSS classes applied to the field container */
  className?: string;
}

/**
 * CopyField renders a labeled, read-only value with an integrated copy-to-clipboard button.
 *
 * @example
 * ```tsx
 * <CopyField label="API Key" value="sk_live_123" />
 * ```
 */
export const CopyField: React.FC<CopyFieldProps> = ({ value, label, description, mono = true, className }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear any pending revert timer on unmount to avoid setting state on an unmounted component
  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  // Write the value to the clipboard and briefly show the copied confirmation
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can be denied or unavailable; fail silently without breaking the UI
    }
  }, [value]);

  const ariaLabel = label ? `Copy ${typeof label === 'string' ? label : 'value'}` : 'Copy value';

  return (
    <div className={className}>
      {label && <FieldLabel className="mb-1">{label}</FieldLabel>}
      <div
        className={cn(
          'group flex items-center gap-2 rounded-md border border-border bg-secondary pl-3 pr-1 py-1',
          'transition-colors focus-within:border-ring focus-within:ring-1 focus-within:ring-ring hover:border-ring/60',
        )}
      >
        <span
          className={cn('min-w-0 flex-1 select-all break-all text-sm', mono && 'font-mono')}
        >
          {value}
        </span>
        <Tooltip content={copied ? 'Copied' : 'Copy'}>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={ariaLabel}
            onClick={handleCopy}
            className="size-7 shrink-0 text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
          </Button>
        </Tooltip>
      </div>
      {description && <FieldDescription className="mt-1.5">{description}</FieldDescription>}
    </div>
  );
};

CopyField.displayName = 'CopyField';
