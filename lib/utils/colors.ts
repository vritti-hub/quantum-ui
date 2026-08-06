/**
 * Categorical "group" color palette.
 *
 * A shared, theme-aware set of 12 color keys backed by the `--group-*` CSS variables
 * declared in quantum-ui's theme (index.css). Each key auto-swaps light/dark and is also
 * exposed to Tailwind as `bg-group-*` / `text-group-*` / `border-group-*` utilities.
 *
 * Use for charts, graphs, legends, and color pickers where a stable set of distinct,
 * theme-consistent colors is needed. Render via `var(--group-<key>)`, the `var` field on
 * `GROUP_COLORS`, or the utility classes — never a raw hex.
 */
export const GROUP_COLOR_KEYS = [
  'blue',
  'green',
  'amber',
  'rose',
  'violet',
  'teal',
  'orange',
  'lime',
  'cyan',
  'indigo',
  'fuchsia',
  'slate',
] as const;

export type GroupColorKey = (typeof GROUP_COLOR_KEYS)[number];

/** Palette entries with a display label and the CSS `var(...)` reference for each key. */
export const GROUP_COLORS: { key: GroupColorKey; label: string; var: string }[] = GROUP_COLOR_KEYS.map((key) => ({
  key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  var: `var(--group-${key})`,
}));

/** Resolve a (possibly nullable) color key to a CSS color; falls back to the theme primary. */
export function groupColorVar(key?: string | null): string {
  return key && (GROUP_COLOR_KEYS as readonly string[]).includes(key) ? `var(--group-${key})` : 'var(--color-primary)';
}
