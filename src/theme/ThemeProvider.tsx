import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createQuantumTheme } from "./createTheme";

interface ThemeContextType {
  toggleColorScheme: () => void;
  colorScheme: "light" | "dark";
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
  defaultColorScheme?: "light" | "dark";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = "light",
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // ✅ Use React state for color scheme instead of reading from DOM
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return defaultColorScheme;

    const savedScheme = localStorage.getItem("quantum-color-scheme");
    return (savedScheme as "light" | "dark") || defaultColorScheme;
  });

  // Theme creation - recreates when color scheme or screen width changes
  const theme = createQuantumTheme(colorScheme, screenWidth);

  // Handle window resize - only for responsive variables
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync DOM attribute and localStorage when colorScheme state changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.setAttribute("data-theme", colorScheme);
    localStorage.setItem("quantum-color-scheme", colorScheme);
  }, [colorScheme]);

  // Toggle color scheme - update React state (which triggers DOM/localStorage sync)
  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "light" ? "dark" : "light"));
  };

  const contextValue = {
    toggleColorScheme,
    colorScheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
