import type React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../shadcn/shadcnTooltip';

// Wraps a disabled control so it still emits the hover/focus its tooltip needs, and explains why it is off
export function withDisabledTip(
  control: React.ReactElement,
  tip: string | undefined,
  disabled: boolean | undefined,
): React.ReactElement {
  if (!tip || !disabled) return control;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* Disabled controls emit no hover/focus events, so the trigger lives on a wrapper. */}
          <span className="inline-flex cursor-not-allowed">{control}</span>
        </TooltipTrigger>
        <TooltipContent>{tip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
