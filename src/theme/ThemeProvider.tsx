import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createQuantumTheme } from "./createTheme";

type ColorScheme = "light" | "dark" | "auto";

interface ThemeContextType {
  colorScheme: ColorScheme;
  resolvedColorScheme: "light" | "dark";
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
}

// ✅ Optimized: Cached system color scheme detection
const getSystemColorScheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// ✅ Optimized: Theme caching to avoid recreation
const themeCache = new Map<
  "light" | "dark",
  ReturnType<typeof createQuantumTheme>
>();

const getCachedTheme = (mode: "light" | "dark") => {
  if (!themeCache.has(mode)) {
    themeCache.set(mode, createQuantumTheme(mode));
  }
  return themeCache.get(mode)!;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = "light",
}) => {
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(defaultColorScheme);
  const [systemColorScheme, setSystemColorScheme] = useState<"light" | "dark">(
    () => getSystemColorScheme()
  );

  const resolvedColorScheme =
    colorScheme === "auto" ? systemColorScheme : colorScheme;

  // ✅ Optimized: Single useEffect for DOM updates
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Apply theme attribute
    root.setAttribute("data-theme", resolvedColorScheme);

    // Apply theme class for CSS targeting
    body.className = body.className.replace(/theme-(light|dark)/g, "");
    body.classList.add(`theme-${resolvedColorScheme}`);

    // Set CSS custom properties for immediate feedback
    const isDark = resolvedColorScheme === "dark";
    root.style.setProperty("--theme-bg", isDark ? "#0D1117" : "#FFFFFF");
    root.style.setProperty("--theme-text", isDark ? "#FFFFFF" : "#000000");
  }, [resolvedColorScheme]);

  // ✅ Optimized: Conditional media query listener
  useEffect(() => {
    // Only listen for system changes when in auto mode
    if (colorScheme !== "auto" || typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemColorScheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [colorScheme]);

  // ✅ Optimized: Memoized toggle function
  const toggleColorScheme = useCallback(() => {
    setColorScheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "auto";
      return "light";
    });
  }, []);

  // ✅ Optimized: Use cached theme
  const theme = getCachedTheme(resolvedColorScheme);

  const contextValue = React.useMemo(
    () => ({
      colorScheme,
      resolvedColorScheme,
      setColorScheme,
      toggleColorScheme,
    }),
    [colorScheme, resolvedColorScheme, toggleColorScheme]
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
