import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
}

// Create MUI theme that works with our Pigment CSS theme
const createMuiTheme = (mode: ColorScheme) => createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6366F1',
          light: '#8B8FFF',
          dark: '#4338CA'
        },
        secondary: {
          main: '#00D9FF',
          light: '#4DE6FF',
          dark: '#00B8D4'
        },
        error: {
          main: '#EF4444',
          light: '#FCA5A5',
          dark: '#DC2626'
        },
        warning: {
          main: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706'
        },
        info: {
          main: '#3B82F6',
          light: '#93C5FD',
          dark: '#1D4ED8'
        },
        success: {
          main: '#10B981',
          light: '#6EE7B7',
          dark: '#059669'
        },
        background: {
          default: '#FFFFFF',
          paper: '#F8FAFC'
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#8B8FFF',
          light: '#A5A9FF',
          dark: '#6366F1'
        },
        secondary: {
          main: '#4DE6FF',
          light: '#7AEBFF',
          dark: '#00D9FF'
        },
        error: {
          main: '#FCA5A5',
          light: '#FED7D7',
          dark: '#EF4444'
        },
        warning: {
          main: '#FCD34D',
          light: '#FDE68A',
          dark: '#F59E0B'
        },
        info: {
          main: '#93C5FD',
          light: '#BFDBFE',
          dark: '#3B82F6'
        },
        success: {
          main: '#6EE7B7',
          light: '#A7F3D0',
          dark: '#10B981'
        },
        background: {
          default: '#0B1426',
          paper: '#1A2332'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8B9DC3'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: mode === 'light' 
              ? '0 4px 12px rgba(99, 102, 241, 0.15)' 
              : '0 4px 12px rgba(139, 143, 255, 0.25)'
          }
        },
        contained: {
          boxShadow: mode === 'light' 
            ? '0 2px 4px rgba(0, 0, 0, 0.1)' 
            : '0 2px 4px rgba(0, 0, 0, 0.3)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: mode === 'light' ? '#6366F1' : '#8B8FFF'
              }
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: 2,
                borderColor: mode === 'light' ? '#6366F1' : '#8B8FFF'
              }
            }
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.MuiOutlinedInput-root': {
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: mode === 'light' ? '#6366F1' : '#8B8FFF'
              }
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: 2,
                borderColor: mode === 'light' ? '#6366F1' : '#8B8FFF'
              }
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === 'light' 
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.4)'
        }
      }
    }
  }
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultColorScheme = 'light' 
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultColorScheme);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', colorScheme);
    
    // Also set for MUI CSS variables
    document.documentElement.setAttribute('data-mui-color-scheme', colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const theme = createMuiTheme(colorScheme);

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme, setColorScheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};