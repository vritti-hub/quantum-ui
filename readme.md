# Quantum UI

A modern React component library built with TypeScript, Material-UI, and design tokens. Quantum UI provides a comprehensive set of business-focused components with a sophisticated theme system supporting light/dark modes and responsive design.

## Features

✨ **Modern Design System** - Built with semantic design tokens and responsive breakpoints  
🎨 **Dual Font System** - Space Grotesk for display elements, Inter for body text  
🌓 **Theme Support** - Built-in light/dark mode with smooth transitions  
📱 **Responsive** - Mobile-first design with tablet and desktop optimizations  
⚡ **Performance** - Optimized components with React.memo and efficient styling  
📖 **Storybook** - Comprehensive component documentation and examples  
🔧 **TypeScript** - Full type safety with intelligent autocomplete  

## Installation

```bash
npm install quantum-ui
# or
yarn add quantum-ui
```

## Quick Start

```tsx
import React from 'react';
import { ThemeProvider, Button, Typography, Paper } from 'quantum-ui';

function App() {
  return (
    <ThemeProvider>
      <Paper variant="elevated">
        <Typography variant="h1">Welcome to Quantum UI</Typography>
        <Typography variant="body1" intent="secondary">
          A modern component library for business applications
        </Typography>
        <Button intent="primary">Get Started</Button>
      </Paper>
    </ThemeProvider>
  );
}
```

## Components

### Core Components
- **Button** - Primary, secondary, destructive, and ghost variants
- **Typography** - Comprehensive text styling with semantic intents
- **TextField** - Form inputs with validation states and density options
- **Paper** - Containers with glass, elevated, and subtle variants

### Theme System
- **ThemeProvider** - Global theme and color scheme management
- **useTheme** - Hook for accessing theme context and toggling modes

## API Reference

### Button
```tsx
interface ButtonProps {
  intent?: "primary" | "secondary" | "destructive" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
}
```

### Typography
```tsx
interface TypographyProps {
  intent?: "primary" | "secondary" | "disabled";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "button" | "caption" | "overline";
}
```

### TextField
```tsx
interface TextFieldProps {
  state?: "normal" | "error" | "success" | "warning";
  density?: "compact" | "comfortable" | "spacious";
  label?: string;
  message?: string;
}
```

### Paper
```tsx
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

## Design System

Quantum UI is built on a sophisticated design token system that ensures consistency across all components:

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
