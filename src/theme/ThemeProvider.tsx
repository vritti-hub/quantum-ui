import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { createQuantumTheme } from "./createTheme";
import { ThemeContext } from "./useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: "light" | "dark";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = "light",
}) => {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return defaultColorScheme;

    const savedScheme = localStorage.getItem("quantum-color-scheme");
    return (savedScheme as "light" | "dark") || defaultColorScheme;
  });

  // Theme creation - only depends on color scheme now
  const theme = createQuantumTheme(colorScheme);

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
