import { createTheme } from "@mui/material";
import { pigment, extendTheme } from "@pigment-css/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Define the quantum theme
const quantumTheme = extendTheme({
  cssVarPrefix: 'quantum',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#6366F1',
          light: '#8B8FFF',
          dark: '#4338CA',
          contrastText: '#FFFFFF'
        },
        secondary: {
          main: '#00D9FF',
          light: '#4DE6FF',
          dark: '#00B8D4',
          contrastText: '#000000'
        },
        error: {
          main: '#EF4444',
          light: '#FCA5A5',
          dark: '#DC2626',
          contrastText: '#FFFFFF'
        },
        warning: {
          main: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          contrastText: '#000000'
        },
        info: {
          main: '#3B82F6',
          light: '#93C5FD',
          dark: '#1D4ED8',
          contrastText: '#FFFFFF'
        },
        success: {
          main: '#10B981',
          light: '#6EE7B7',
          dark: '#059669',
          contrastText: '#FFFFFF'
        },
        background: {
          default: '#FFFFFF',
          paper: '#F8FAFC',
          surface: '#F1F5F9'
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          disabled: '#94A3B8'
        },
        divider: '#E2E8F0',
        action: {
          hover: 'rgba(99, 102, 241, 0.04)',
          selected: 'rgba(99, 102, 241, 0.08)',
          disabled: 'rgba(99, 102, 241, 0.26)',
          disabledBackground: 'rgba(99, 102, 241, 0.12)'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#8B8FFF',
          light: '#A5A9FF',
          dark: '#6366F1',
          contrastText: '#000000'
        },
        secondary: {
          main: '#4DE6FF',
          light: '#7AEBFF',
          dark: '#00D9FF',
          contrastText: '#000000'
        },
        error: {
          main: '#FCA5A5',
          light: '#FED7D7',
          dark: '#EF4444',
          contrastText: '#000000'
        },
        warning: {
          main: '#FCD34D',
          light: '#FDE68A',
          dark: '#F59E0B',
          contrastText: '#000000'
        },
        info: {
          main: '#93C5FD',
          light: '#BFDBFE',
          dark: '#3B82F6',
          contrastText: '#000000'
        },
        success: {
          main: '#6EE7B7',
          light: '#A7F3D0',
          dark: '#10B981',
          contrastText: '#000000'
        },
        background: {
          default: '#0B1426',
          paper: '#1A2332',
          surface: '#2D3748'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8B9DC3',
          disabled: '#64748B'
        },
        divider: '#374151',
        action: {
          hover: 'rgba(139, 143, 255, 0.08)',
          selected: 'rgba(139, 143, 255, 0.16)',
          disabled: 'rgba(139, 143, 255, 0.3)',
          disabledBackground: 'rgba(139, 143, 255, 0.12)'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: 'none'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4
    }
  },
  spacing: {
    unit: 8
  },
  shape: {
    borderRadius: 8
  },
  shadows: {
    light: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    dark: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)'
    }
  }
});

const materialTheme = createTheme({
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
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  }
});

const pigmentConfig = {
  theme: quantumTheme,
  transformLibraries: ["@mui/material"],
  getSelector: (colorScheme: string) => 
    colorScheme ? `[data-theme="${colorScheme}"]` : ':root'
};

export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
  optimizeDeps: {
    include: ["prop-types", "react-is", "hoist-non-react-statics"],
  },
});