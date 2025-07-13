import { createContext, useContext } from 'react';

export interface ThemeContextType {
  /** Current color scheme */
  colorScheme: 'light' | 'dark';
  /** Toggle between light and dark themes */
  toggleColorScheme: () => void;
  /** Set specific theme (useful for theme selection UI) */
  setTheme: (theme: 'light' | 'dark') => void;
  /** Whether React has finished hydrating (safe to show theme-dependent content) */
  isHydrated: boolean;
  /** localStorage key used for persistence */
  storageKey: string;
  /** HTML attribute used for theme */
  attribute: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook to access and control theme state.
 *
 * @example Basic usage
 * ```tsx
 * function ThemeToggle() {
 *   const { colorScheme, toggleColorScheme } = useTheme();
 *
 *   return (
 *     <button onClick={toggleColorScheme}>
 *       Current: {colorScheme}
 *     </button>
 *   );
 * }
 * ```
 *
 * @example Theme selection UI
 * ```tsx
 * function ThemeSelector() {
 *   const { colorScheme, setTheme } = useTheme();
 *
 *   return (
 *     <div>
 *       <button
 *         onClick={() => setTheme('light')}
 *         data-active={colorScheme === 'light'}
 *       >
 *         Light
 *       </button>
 *       <button
 *         onClick={() => setTheme('dark')}
 *         data-active={colorScheme === 'dark'}
 *       >
 *         Dark
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example Conditional rendering based on hydration
 * ```tsx
 * function ClientOnlyComponent() {
 *   const { isHydrated } = useTheme();
 *
 *   if (!isHydrated) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   return <ComplexInteractiveWidget />;
 * }
 * ```
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider. ' + 'Make sure to wrap your app with <ThemeProvider>.'
    );
  }

  return context;
};

/**
 * Utility hook for components that need to check if they're running on the client
 * after hydration. This is useful for components that should only render on the client.
 *
 * @example
 * ```tsx
 * function ClientOnlyWidget() {
 *   const isClient = useIsClient();
 *
 *   if (!isClient) return null;
 *
 *   return <ComplexClientFeature />;
 * }
 * ```
 */
export const useIsClient = (): boolean => {
  const { isHydrated } = useTheme();
  return isHydrated;
};
