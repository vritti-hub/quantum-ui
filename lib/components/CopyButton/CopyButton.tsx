import { Check, Copy } from 'lucide-react';
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../../../shadcn/utils';
import { Tooltip } from '../Tooltip';

/**
 * Props for the CopyButton component
 */
export interface CopyButtonProps {
  /** The full string copied to the clipboard */
  value: string;
  /** Accessible label and tooltip text (default: 'Copy'); the tooltip shows 'Copied' after a copy */
  label?: string;
  /** Additional CSS classes applied to the button */
  className?: string;
}

/**
 * CopyButton is an icon-only copy-to-clipboard affordance that briefly flips a
 * Copy icon to a Check and surfaces a Tooltip confirming the copy.
 *
 * @example
 * ```tsx
 * <CopyButton value="sk_live_123" label="Copy API key" />
 * ```
 */
export const CopyButton: React.FC<CopyButtonProps> = ({ value, label = 'Copy', className }) => {
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

  return (
    <Tooltip content={copied ? 'Copied' : label}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={label}
        className={cn(
          'inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
          className,
        )}
      >
        {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
      </button>
    </Tooltip>
  );
};

CopyButton.displayName = 'CopyButton';
