import type { ServiceCode } from '../types/catalog-resolver';

// Human copy for each external service a feature can depend on. Adding a service means adding one entry
// here — no lock surface branches on a specific service code.
export const SERVICE_LABELS: Record<ServiceCode, string> = {
  GITEA: 'a git organization',
};

// Joins the missing services into a phrase, e.g. "a git organization" / "a git organization and X"
export function serviceLabels(services: ServiceCode[]): string {
  const labels = services.map((service) => SERVICE_LABELS[service] ?? service);
  if (labels.length === 0) return 'a service';
  if (labels.length === 1) return labels[0];
  return `${labels.slice(0, -1).join(', ')} and ${labels[labels.length - 1]}`;
}
