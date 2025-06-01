import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createQuantumTheme } from "./createTheme";

interface ThemeContextType {
  toggleColorScheme: () => void;
  colorScheme: string;
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

  // Theme creation - only recreates on screen width changes
  const theme = createQuantumTheme("light", screenWidth); // Always use light theme object

  // Handle window resize - only for responsive variables
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize theme from localStorage or default
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedScheme = localStorage.getItem("quantum-color-scheme");
    const initialScheme = savedScheme || defaultColorScheme;
    document.documentElement.setAttribute("data-theme", initialScheme);
  }, [defaultColorScheme]);

  // Get current color scheme value from DOM
  const colorScheme =
    document.documentElement.getAttribute("data-theme") || "light";

  // Toggle color scheme - direct DOM manipulation + persistence
  const toggleColorScheme = () => {
    const current = colorScheme;
    const newScheme = current === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newScheme);
    localStorage.setItem("quantum-color-scheme", newScheme);
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
