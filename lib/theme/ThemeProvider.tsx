import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createQuantumTheme } from './createTheme';
import { ThemeContext } from './useTheme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Enhanced ThemeProvider that works seamlessly with ThemeScript.
 *
 * ThemeScript handles:
 * - Initial DOM theme application (prevents flickering)
 * - Blocking script execution before React loads
 *
 * ThemeProvider handles:
 * - React state management and context
 * - SSR-safe hydration
 * - Theme toggling and persistence
 * - Performance optimization
 *
 * Uses hardcoded values:
 * - localStorage key: "quantum-color-scheme"
 * - HTML attribute: "data-theme"
 * - Fallback theme: "light"
 *
 * @example
 * ```tsx
 * // 1. Add ThemeScript to prevent flickering
 * <ThemeScript defaultColorScheme="light" />
 *
 * // 2. Wrap app with ThemeProvider
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storageKey = 'quantum-color-scheme';
  const attribute = 'data-theme';
  // SSR-safe state initialization - read from localStorage on client, fallback to light
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(() => {
    // Only read localStorage on client side to prevent SSR hydration mismatch
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('quantum-color-scheme');
        if (saved === 'light' || saved === 'dark') {
          return saved;
        }
      } catch (error) {
        // Fallback if localStorage fails
      }
    }
    return 'light';
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Memoized theme creation - only recreate when colorScheme changes
  const theme = useMemo(() => createQuantumTheme(colorScheme), [colorScheme]);

  // Hydration effect - sync with localStorage and DOM
  useEffect(() => {
    // Skip on server
    if (typeof window === 'undefined') return;

    const syncWithStorage = () => {
      try {
        // Read from localStorage first
        const savedTheme = localStorage.getItem(storageKey);
        const isValidSavedTheme = savedTheme === 'light' || savedTheme === 'dark';

        if (isValidSavedTheme) {
          setColorScheme(savedTheme as 'light' | 'dark');
        } else {
          // Read from DOM if localStorage is empty (set by ThemeScript)
          const domTheme = document.documentElement.getAttribute(attribute);
          const isValidDomTheme = domTheme === 'light' || domTheme === 'dark';

          if (isValidDomTheme) {
            setColorScheme(domTheme as 'light' | 'dark');
          }
          // If neither localStorage nor DOM has valid theme, keep "light" default
        }
      } catch (error) {
        // Fallback to DOM if localStorage fails
        const domTheme = document.documentElement.getAttribute(attribute);
        const isValidDomTheme = domTheme === 'light' || domTheme === 'dark';

        if (isValidDomTheme) {
          setColorScheme(domTheme as 'light' | 'dark');
        }
      }

      setIsHydrated(true);
    };

    // Sync immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', syncWithStorage);
      return () => document.removeEventListener('DOMContentLoaded', syncWithStorage);
    } else {
      syncWithStorage();
    }
  }, []);

  // Theme change effect - update DOM and localStorage when React state changes
  useEffect(() => {
    // Skip on server
    if (typeof window === 'undefined') return;

    // Skip if not hydrated yet (let the hydration effect handle initial sync)
    if (!isHydrated) return;

    // Update DOM attribute
    document.documentElement.setAttribute(attribute, colorScheme);

    // Persist to localStorage
    try {
      localStorage.setItem(storageKey, colorScheme);
    } catch (error) {
      // Gracefully handle localStorage errors (private browsing, etc.)
      console.warn('Failed to save theme preference:', error);
    }
  }, [colorScheme, isHydrated, storageKey, attribute]);

  // Optimized theme toggle function
  const toggleColorScheme = useCallback(() => {
    setColorScheme((current) => (current === 'light' ? 'dark' : 'light'));
  }, []);

  // Set specific theme (useful for theme selection UI)
  const setTheme = useCallback((newTheme: 'light' | 'dark') => {
    setColorScheme(newTheme);
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      colorScheme,
      toggleColorScheme,
      setTheme,
      isHydrated,
      // Expose configuration for debugging/advanced usage
      storageKey,
      attribute,
    }),
    [colorScheme, toggleColorScheme, setTheme, isHydrated]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
