# Quantum UI

A modern React component library built with TypeScript, Material-UI, and design tokens. Quantum UI provides a comprehensive set of business-focused components with a sophisticated theme system supporting light/dark modes, SSR-safe theming, and zero-flickering experience.

## Features

✨ **Modern Design System** - Built with semantic design tokens and responsive breakpoints  
🎨 **Dual Font System** - Space Grotesk for display elements, Inter for body text  
🌓 **Advanced Theming** - SSR-safe light/dark mode with zero flickering  
📱 **Responsive** - Mobile-first design with tablet and desktop optimizations  
⚡ **Performance Optimized** - Tree-shakeable imports and efficient styling  
🚀 **SSR Ready** - Perfect hydration with Next.js, Remix, and other SSR frameworks  
📖 **Storybook** - Comprehensive component documentation and examples  
🔧 **TypeScript** - Full type safety with intelligent autocomplete  

## Installation

```bash
npm install quantum-ui
# or
yarn add quantum-ui
# or
pnpm add quantum-ui
```

## Quick Start

### Basic Setup (Vite/CRA)

```tsx
import React from 'react';
import { ThemeScript, ThemeProvider, Button, Typography, Paper } from 'quantum-ui';

function App() {
  return (
    <>
      {/* Add ThemeScript to prevent flickering */}
      <ThemeScript defaultColorScheme="light" />
      
      <ThemeProvider defaultColorScheme="light">
        <Paper variant="elevated">
          <Typography variant="h1">Welcome to Quantum UI</Typography>
          <Typography variant="body1" intent="secondary">
            A modern component library for business applications
          </Typography>
          <Button intent="primary">Get Started</Button>
        </Paper>
      </ThemeProvider>
    </>
  );
}
```

### Performance-Optimized Imports

```tsx
// ✅ Tree-shakeable direct imports (recommended)
import { Button } from 'quantum-ui/Button';
import { TextField } from 'quantum-ui/TextField';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';

// ✅ Theme utilities (barrel import is fine)
import { ThemeProvider, ThemeScript, useTheme } from 'quantum-ui';
```

## Framework Integration

### Next.js Setup

#### App Router (app/layout.tsx)
```tsx
import { ThemeScript } from 'quantum-ui';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeScript defaultColorScheme="light" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

#### Pages Router (_document.tsx)
```tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeScript } from 'quantum-ui';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ThemeScript defaultColorScheme="light" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

#### App Component (_app.tsx or layout.tsx)
```tsx
import { ThemeProvider } from 'quantum-ui';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultColorScheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

### Vite Setup

#### index.html
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      // Add theme script before app loads
      import { getThemeScript } from 'quantum-ui';
      const script = document.createElement('script');
      script.innerHTML = getThemeScript({ defaultColorScheme: 'light' });
      document.head.appendChild(script);
    </script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### main.tsx
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'quantum-ui';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultColorScheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Webpack/CRA Setup

#### public/index.html
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your App</title>
    <script>
      // Add theme script manually (copy from getThemeScript() output)
      (function() {
        document.documentElement.classList.add('no-transition');
        try {
          const savedScheme = localStorage.getItem('quantum-color-scheme');
          const validSchemes = ['light', 'dark'];
          const themeToApply = savedScheme && validSchemes.includes(savedScheme) 
            ? savedScheme 
            : 'light';
          document.documentElement.setAttribute('data-theme', themeToApply);
        } catch (e) {
          document.documentElement.setAttribute('data-theme', 'light');
        }
        
        function enableTransitions() {
          document.documentElement.classList.remove('no-transition');
          document.documentElement.classList.add('loaded');
        }
        
        if (document.readyState === 'loading') {
          window.addEventListener('DOMContentLoaded', function() {
            setTimeout(enableTransitions, 100);
          });
        } else {
          setTimeout(enableTransitions, 100);
        }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### src/App.tsx
```tsx
import React from 'react';
import { ThemeProvider } from 'quantum-ui';
import YourComponents from './components';

function App() {
  return (
    <ThemeProvider defaultColorScheme="light">
      <YourComponents />
    </ThemeProvider>
  );
}

export default App;
```

### Remix Setup

#### app/root.tsx
```tsx
import { ThemeScript, ThemeProvider } from 'quantum-ui';

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ThemeScript defaultColorScheme="light" />
      </head>
      <body>
        <ThemeProvider defaultColorScheme="light">
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

## Components

### Core Components
- **Button** - Primary, secondary, destructive, and ghost variants
- **Typography** - Comprehensive text styling with semantic intents
- **TextField** - Form inputs with validation states and responsive sizing
- **Paper** - Containers with glass, elevated, and subtle variants

### Theme System
- **ThemeProvider** - Global theme and color scheme management
- **ThemeScript** - Prevents theme flickering (add before React loads)
- **useTheme** - Hook for accessing theme context and toggling modes
- **useIsClient** - Utility hook for client-only components

## Theming API

### ThemeScript Configuration
```tsx
<ThemeScript
  defaultColorScheme="dark"           // Default: "light"
  storageKey="my-theme-key"          // Default: "quantum-color-scheme"
  attribute="data-color-mode"        // Default: "data-theme"
  preventFlickering={false}          // Default: true
/>
```

### ThemeProvider Configuration
```tsx
<ThemeProvider
  defaultColorScheme="dark"          // Must match ThemeScript
  storageKey="my-theme-key"         // Must match ThemeScript
  attribute="data-color-mode"       // Must match ThemeScript
>
  <App />
</ThemeProvider>
```

### useTheme Hook
```tsx
function ThemeToggle() {
  const { 
    colorScheme,      // Current theme: "light" | "dark"
    toggleColorScheme,// Toggle between themes
    setTheme,         // Set specific theme
    isHydrated        // Whether React has hydrated
  } = useTheme();
  
  return (
    <button onClick={toggleColorScheme}>
      Current: {colorScheme}
    </button>
  );
}
```

## Component APIs

### Button
```tsx
import { Button } from 'quantum-ui/Button';
import type { ButtonProps } from 'quantum-ui/Button';

interface ButtonProps {
  intent?: "primary" | "secondary" | "destructive" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
}
```

### Typography
```tsx
import { Typography } from 'quantum-ui/Typography';
import type { TypographyProps } from 'quantum-ui/Typography';

interface TypographyProps {
  intent?: "primary" | "secondary" | "disabled";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "button" | "caption" | "overline";
}
```

### TextField
```tsx
import { TextField } from 'quantum-ui/TextField';
import type { TextFieldProps } from 'quantum-ui/TextField';

interface TextFieldProps {
  state?: "normal" | "error" | "success" | "warning";
  label?: string;
  message?: string;
  fullWidth?: boolean;
}
```

### Paper
```tsx
import { Paper } from 'quantum-ui/Paper';
import type { PaperProps } from 'quantum-ui/Paper';

interface PaperProps {
  variant?: "standard" | "glass" | "elevated" | "subtle";
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build library
npm run build

# Run linting
npm run lint
```

## Performance Best Practices

### Import Strategy
```tsx
// ✅ BEST: Direct component imports (optimal tree-shaking)
import { Button } from 'quantum-ui/Button';
import { TextField } from 'quantum-ui/TextField';

// ✅ GOOD: Theme utilities barrel import (small bundle impact)
import { ThemeProvider, useTheme } from 'quantum-ui';

// ❌ AVOID: Component barrel imports (larger bundles)
import { Button, TextField } from 'quantum-ui';
```

### Bundle Size Optimization
- **Individual components**: ~0.5-1KB gzipped each
- **Theme system**: ~8KB gzipped (includes MUI theme)
- **Full library**: Import only what you use for optimal performance

## SSR Considerations

### Zero Flickering Setup
1. **Add ThemeScript** before React loads (prevents flickering)
2. **Configure ThemeProvider** with matching settings
3. **Use consistent defaults** across script and provider

### Hydration Safety
- ThemeProvider ensures no hydration mismatches
- `isHydrated` flag available for client-only features
- `useIsClient` hook for conditional rendering

## Design System

Quantum UI is built on a sophisticated design token system:

- **Colors**: Semantic color system with light/dark mode support
- **Typography**: Responsive font scaling with dual font approach
- **Spacing**: Consistent spacing scale across all breakpoints
- **Shadows**: Elevated and glass morphism effects
- **Animations**: Smooth transitions with reduced motion support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details.