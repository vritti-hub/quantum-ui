import { createContext, useContext } from 'react';
import type { ServiceCode } from '../types/catalog-resolver';

// An external service the org has provisioned. externalId/externalName carry the provider's own
// identifiers (for Gitea: the numeric org id and the namespace) so consumers never need a second call.
export interface OrgService {
  service: ServiceCode;
  externalId: string | null;
  externalName: string | null;
}

export interface OrgContextValue {
  id: string | null;
  name: string | null;
  subdomain: string | null;
  logoUrl: string | null;
  services: OrgService[];
}

// No provider means no org has been resolved yet — report zero services rather than throwing, so a
// federated remote rendered outside the host still mounts (same posture as usePermission).
const NO_SERVICES: OrgService[] = [];

const ABSENT: OrgContextValue = Object.freeze({
  id: null,
  name: null,
  subdomain: null,
  logoUrl: null,
  services: NO_SERVICES,
});

const OrgContext = createContext<OrgContextValue>(ABSENT);

export const OrgContextProvider = OrgContext.Provider;

// Returns the host's current organization, fed from the auth-state stream; remotes read it instead of refetching
export function useOrgContext(): OrgContextValue {
  return useContext(OrgContext);
}

// Returns the org's provisioned entry for one service, or null when it has not been set up
export function useOrgService(service: ServiceCode): OrgService | null {
  const { services } = useOrgContext();
  return services.find((entry) => entry.service === service) ?? null;
}
