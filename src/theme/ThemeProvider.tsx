import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { createQuantumTheme } from "./createTheme";
import { ThemeContext } from "./useTheme";

export interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * Default color scheme to use on first load
   * Should match the defaultColorScheme used in ThemeScript
   * @default "light"
   */
  defaultColorScheme?: "light" | "dark";
  /**
   * localStorage key to sync theme preference
   * Should match the storageKey used in ThemeScript
   * @default "quantum-color-scheme"
   */
  storageKey?: string;
  /**
   * HTML attribute that ThemeScript uses for theme
   * Should match the attribute used in ThemeScript
   * @default "data-theme"
   */
  attribute?: string;
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
 * @example
 * ```tsx
 * // 1. Add ThemeScript to prevent flickering
 * <ThemeScript defaultColorScheme="light" />
 * 
 * // 2. Wrap app with ThemeProvider
 * <ThemeProvider defaultColorScheme="light">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = "light",
  storageKey = "quantum-color-scheme",
  attribute = "data-theme",
}) => {
  // SSR-safe state initialization - always start with default
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(defaultColorScheme);
  const [isHydrated, setIsHydrated] = useState(false);

  // Memoized theme creation - only recreate when colorScheme changes
  const theme = useMemo(() => createQuantumTheme(colorScheme), [colorScheme]);

  // Hydration effect - sync with ThemeScript's applied theme
  useEffect(() => {
    // Skip on server
    if (typeof window === "undefined") return;

    const syncWithDOM = () => {
      // Read the actual theme from DOM (set by ThemeScript)
      const domTheme = document.documentElement.getAttribute(attribute);
      const isValidTheme = domTheme === "light" || domTheme === "dark";
      
      if (isValidTheme && domTheme !== colorScheme) {
        setColorScheme(domTheme);
      }
      
      setIsHydrated(true);
    };

    // Sync immediately if DOM is ready, otherwise wait
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", syncWithDOM);
      return () => document.removeEventListener("DOMContentLoaded", syncWithDOM);
    } else {
      syncWithDOM();
    }
  }, [attribute, colorScheme]);

  // Theme change effect - update DOM and localStorage when React state changes
  useEffect(() => {
    // Skip on server or before hydration
    if (typeof window === "undefined" || !isHydrated) return;

    // Update DOM attribute
    document.documentElement.setAttribute(attribute, colorScheme);
    
    // Persist to localStorage
    try {
      localStorage.setItem(storageKey, colorScheme);
    } catch (error) {
      // Gracefully handle localStorage errors (private browsing, etc.)
      console.warn("Failed to save theme preference:", error);
    }
  }, [colorScheme, isHydrated, storageKey, attribute]);

  // Optimized theme toggle function
  const toggleColorScheme = useCallback(() => {
    setColorScheme(current => current === "light" ? "dark" : "light");
  }, []);

  // Set specific theme (useful for theme selection UI)
  const setTheme = useCallback((newTheme: "light" | "dark") => {
    setColorScheme(newTheme);
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    colorScheme,
    toggleColorScheme,
    setTheme,
    isHydrated,
    // Expose configuration for debugging/advanced usage
    storageKey,
    attribute,
  }), [colorScheme, toggleColorScheme, setTheme, isHydrated, storageKey, attribute]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};