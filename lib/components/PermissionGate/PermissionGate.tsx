import { Lock, LockKeyhole } from 'lucide-react';
import type React from 'react';
import { createContext, useContext } from 'react';
import { cn } from '../../../shadcn/utils';
import type { ServiceCode } from '../../types/catalog-resolver';
import { serviceLabels } from '../../utils/services';

export type PermissionLockReason = 'PLAN' | 'SITE' | 'SERVICE';

export interface PermissionGateResult {
  granted: boolean;
  locked: boolean;
  reason: PermissionLockReason | null;
  unlockPlans: string[];
  // Which external services the org still has to provision — only populated when reason is 'SERVICE'
  missingServices: ServiceCode[];
  available: boolean;
  featureName: string | null;
}

export type PermissionGateFn = (code: string) => PermissionGateResult;

const ALLOW: PermissionGateResult = Object.freeze({
  granted: true,
  locked: false,
  reason: null,
  unlockPlans: [],
  missingServices: [],
  available: true,
  featureName: null,
});

const ALLOW_GATE: PermissionGateFn = () => ALLOW;

const GATE_CONTEXT_KEY = Symbol.for('@vritti/quantum-ui/PermissionGate');
type GateRegistry = { [GATE_CONTEXT_KEY]?: React.Context<PermissionGateFn | null> };
const registry = globalThis as GateRegistry;
registry[GATE_CONTEXT_KEY] ??= createContext<PermissionGateFn | null>(null);
const PermissionGateContext = registry[GATE_CONTEXT_KEY];

export const PermissionGateProvider = PermissionGateContext.Provider;

// The raw gate for mapping over collections; ALLOW-everything when no provider is mounted
export function usePermissionGate(): PermissionGateFn {
  return useContext(PermissionGateContext) ?? ALLOW_GATE;
}

// Total: no provider / no code resolves to ALLOW, so callers never branch on null
export function usePermission(code?: string): PermissionGateResult {
  const gate = useContext(PermissionGateContext);
  return code && gate ? gate(code) : ALLOW;
}

// The lock symbol for a locked control — plan locks show a warning lock, BU locks a red keyhole lock,
// service locks a red lock (blocked until the org provisions it, not an entitlement the user can buy)
export const PermissionLockIcon: React.FC<{ reason: PermissionLockReason | null; className?: string }> = ({
  reason,
  className,
}) => {
  switch (reason) {
    case 'SITE':
      return <LockKeyhole className={cn('text-destructive', className)} />;
    case 'SERVICE':
      return <Lock className={cn('text-destructive', className)} />;
    default:
      return <Lock className={cn('text-warning', className)} />;
  }
};

// Shared tooltip copy for locked controls — upsell for plan locks, restriction notice for BU locks,
// setup notice for service locks
export function lockedTip({
  reason,
  unlockPlans,
  missingServices = [],
}: Pick<PermissionGateResult, 'reason' | 'unlockPlans'> &
  Partial<Pick<PermissionGateResult, 'missingServices'>>): string {
  switch (reason) {
    case 'SITE':
      return 'Not enabled for this site';
    case 'SERVICE':
      return `Requires ${serviceLabels(missingServices)}`;
    default:
      return unlockPlans.length > 0 ? `Available in ${unlockPlans.join(', ')}` : 'Not included in your plan';
  }
}

// Resolves a blocked control's heading + description, keyed off the resolved feature name when known
function lockMessages(
  result: Pick<PermissionGateResult, 'granted' | 'reason' | 'unlockPlans' | 'featureName'> &
    Partial<Pick<PermissionGateResult, 'missingServices'>>,
): {
  title: string;
  tip: string;
} {
  const name = result.featureName;
  if (!result.granted) {
    return {
      title: name ? `${name} is restricted` : 'No access',
      tip: name ? `You don't have permission to view ${name}.` : "You don't have permission to access this.",
    };
  }
  switch (result.reason) {
    case 'SITE':
      return {
        title: name ? `${name} not enabled here` : 'Not available here',
        tip: name ? `${name} isn't enabled for this site.` : 'Not enabled for this site.',
      };
    case 'SERVICE': {
      const needs = serviceLabels(result.missingServices ?? []);
      return {
        title: 'Setup required',
        tip: name ? `${name} needs ${needs}. Set it up to continue.` : `This needs ${needs}. Set it up to continue.`,
      };
    }
    default: {
      if (result.unlockPlans.length > 0) {
        const plans = result.unlockPlans.join(', ');
        return {
          title: name ? `Unlock ${name}` : 'Upgrade required',
          tip: name ? `${name} is available on ${plans}.` : `Available in ${plans}.`,
        };
      }
      return {
        title: name ? `Unlock ${name}` : 'Upgrade required',
        tip: name ? `${name} isn't included in your plan.` : 'Not included in your plan.',
      };
    }
  }
}

export interface PermissionGateProps {
  permission?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode | ((result: PermissionGateResult & { title: string; tip: string }) => React.ReactNode);
}

// Default fallback — a centered lock panel with the feature-specific restriction message
const DefaultLockFallback: React.FC<{ result: PermissionGateResult }> = ({ result }) => (
  <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
    <PermissionLockIcon reason={result.reason} className="size-10" />
    <p className="max-w-sm text-sm text-muted-foreground">{lockMessages(result).tip}</p>
  </div>
);

// Gates a subtree by permission code: children mount only when granted AND unlocked, else renders `fallback`
export const PermissionGate: React.FC<PermissionGateProps> = ({ permission, children, fallback }) => {
  const result = usePermission(permission);
  if (result.available) return <>{children}</>;
  if (fallback !== undefined)
    return <>{typeof fallback === 'function' ? fallback({ ...result, ...lockMessages(result) }) : fallback}</>;
  return <DefaultLockFallback result={result} />;
};
