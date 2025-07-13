# CLAUDE.md - Development Guidelines for quantum-ui

This file contains essential guidelines and patterns for Claude when working on the quantum-ui design system. Following these rules ensures consistency, maintainability, and adherence to established patterns.

## 📋 Current Component Status

### **Available Components (Production Ready)**

- **Button** (`/lib/components/Button/`) - Intent-based variants with CSS animations
- **TextField** (`/lib/components/TextField/`) - State-driven inputs with glassmorphism styling
- **Paper** (`/lib/components/Paper/`) - 5 semantic variants for all surface needs
- **Typography** (`/lib/components/Typography/`) - Comprehensive text system with dual fonts

### **Theme System (Complete)**

- **SSR-Safe Implementation** - Zero-flickering theme script + provider pattern
- **Semantic Tokens** - Complete responsive token system with theme awareness
- **CSS Variable Generation** - Automatic conversion with RGB variants for alpha blending
- **Framework Integration** - Next.js, Remix, Vite, CRA support
- **Performance Optimized** - CSS animations replace JavaScript-based motion libraries

## 🚀 Performance & Animation Guidelines

### **1. CSS-First Animation System**

- **CSS animations over JavaScript** - All animations use CSS transitions/transforms for optimal performance
- **Reduced motion support** - Respect `prefers-reduced-motion` user preference
- **Hardware acceleration** - Use `transform` and `opacity` for smooth animations
- **No external animation libraries** - Framer Motion has been completely removed

```css
/* ✅ CORRECT: CSS animations with semantic tokens */
.component {
  transition: all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard);
  transform: translateY(0);
}

.component:hover {
  transform: translateY(-2px);
}

/* ✅ CORRECT: Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .component {
    transition: none;
    transform: none;
  }
}
```

### **2. Bundle Size Optimization**

- **Direct component imports only** - Never use barrel imports for components
- **Tree-shaking enabled** - Individual component builds reduce bundle size by up to 40kB
- **Semantic tokens** - Complete token system maintained for future flexibility
- **Lightweight theme system** - ~9KB gzipped for full theme functionality

```typescript
// ✅ CORRECT: Direct imports for optimal bundle size
import { Button } from 'quantum-ui/Button';
import { Paper } from 'quantum-ui/Paper';

// ❌ WRONG: Barrel imports increase bundle size
import { Button, Paper } from 'quantum-ui';
```

### **3. Paper Component Variants**

The Paper component now includes 5 semantic variants optimized for different use cases:

```typescript
// Section containers for landing pages
<Paper variant="section" fullWidth>
  <Typography variant="h1">Hero Content</Typography>
</Paper>

// Interactive surfaces for apps
<Paper variant="surface">
  <TextField label="Form Input" />
</Paper>

// Accent cards with gradient backgrounds
<Paper variant="accent" emphasis="high">
  <Typography variant="h3">Call to Action</Typography>
</Paper>

// Minimal surfaces for subtle containers
<Paper variant="minimal" input>
  <Typography variant="body1">Form Field Container</Typography>
</Paper>

// Feature cards with advanced hover effects
<Paper variant="feature" glass compact>
  <Typography variant="h3">Feature Title</Typography>
</Paper>
```

## 🎯 Core Design System Principles

### **1. Semantic Token Architecture**

- **ALWAYS use semantic tokens** - Never hardcode colors, spacing, or other design values
- **Follow the hierarchy**: `palette` → `semanticTokens` → `component themes`
- **Semantic tokens should be theme-aware** with `light` and `dark` variants
- **Use responsive tokens** with `mobile`, `tablet`, `desktop` breakpoints where appropriate

### **2. Color System Rules**

```typescript
// ✅ CORRECT: Use semantic tokens
color: "var(--quantum-color-text-primary)"

// ❌ WRONG: Never hardcode colors
color: "#000000"
color: "rgba(0, 0, 0, 0.8)"
color: "#E9ECEF" // Never use hex colors directly

// ✅ CORRECT: Always use palette references in semantic tokens
glass: {
  light: palette.lightNeutral[200], // Use palette reference
  dark: palette.darkNeutral[800], // Use palette reference
  needsRGB: true, // Enable alpha blending
} as ColorDefinition,

// ❌ WRONG: Never hardcode hex values in semantic tokens
glass: {
  light: "#E9ECEF", // NEVER do this
  dark: "#1A1D20", // NEVER do this
} as ColorDefinition,

// ✅ CORRECT: Theme-aware definition with palette
text: {
  primary: {
    light: palette.lightNeutral[900], // Pure black
    dark: palette.darkNeutral[50], // Pure white
  } as ColorDefinition,
}
```

### **2.1. CRITICAL: Never Hardcode Colors**

- **ALWAYS use palette references** in semantic tokens
- **NEVER use hex values directly** (`#000000`, `#E9ECEF`, etc.)
- **NEVER use hardcoded RGBA values** (`rgba(233, 236, 239, 0.7)`)
- **Use `needsRGB: true`** when you need alpha blending with CSS `rgba(var(--color-nameRGB), alpha)`
- **Palette is the single source of truth** for all color values

### **3. Component-Specific Token Naming**

- **Component-prominent naming**: `textField.height` not `componentHeight.textField`
- **Logical grouping**: Group related tokens under component namespaces
- **Clear semantics**: Names should indicate purpose, not implementation

```typescript
// ✅ PREFERRED: Component-prominent structure
textField: {
  height: { mobile: "3rem", tablet: "3.25rem", desktop: "3.25rem" },
  fontSize: { mobile: "1rem", tablet: "1.25rem", desktop: "1.25rem" },
  spacing: {
    paddingTop: { mobile: "20px", tablet: "24px", desktop: "24px" },
    paddingBottom: { mobile: "8px", tablet: "4px", desktop: "4px" },
  }
}
```

## 🛠️ Component Development Rules

### **1. Theme Component Structure**

```typescript
export const ComponentTheme: Components<Theme>['MuiComponent'] = {
  styleOverrides: {
    root: {
      // Use semantic tokens, never hardcoded values
      backgroundColor: 'var(--quantum-color-surface-primary)',
      borderRadius: 'var(--quantum-borderRadius-medium)',
      boxShadow: 'var(--quantum-shadows-small)',
    },
  },
  variants: [
    // Define semantic variants (success, warning, error, etc.)
  ],
};
```

### **2. Font Weight and Typography**

- **Use semantic font weights**: `--quantum-typography-fontWeight-normal` (not `400`)
- **Reduce visual noise**: Prefer lighter font weights for better readability
- **Use opacity for subtle variations**: `opacity: 0.7` instead of different colors

```typescript
// ✅ CORRECT: Semantic font weights with opacity for variation
"&.MuiInputLabel-shrunk": {
  fontWeight: "var(--quantum-typography-fontWeight-normal)",
  opacity: 0.6, // Subtle reduction instead of color change
}
```

### **3. Shadow and Visual Effects**

- **All shadows must be theme-aware** with different opacity for light/dark modes
- **Include complete shadow definitions** with inset highlights when needed
- **Use brand-consistent colors** in glass and shimmer effects

```typescript
// ✅ CORRECT: Theme-aware shadow with complete definition
textField: {
  light: "0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
  dark: "0 4px 6px -1px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)",
} as ColorDefinition,
```

## 📱 Responsive Design Patterns

### **1. Mobile-First Approach**

- **Start with mobile values**, then enhance for larger screens
- **Consider touch targets**: Smaller border radius on mobile for easier interaction
- **Optimize for thumb navigation**: Appropriate spacing and sizing

### **2. Breakpoint Values**

```typescript
// Standard responsive pattern
{
  mobile: "smaller/touch-optimized value",
  tablet: "balanced value",
  desktop: "refined/larger value"
}

// Example:
borderRadius: {
  large: {
    mobile: "8px",   // Easier touch targets
    tablet: "12px",  // Balanced
    desktop: "12px", // Refined appearance
  }
}
```

### **3. Progressive Enhancement**

- **Essential functionality works on mobile**
- **Enhanced experience on larger screens**
- **Graceful degradation** when features aren't supported

## 🎨 Visual Design Guidelines

### **1. Blue Brand Theming**

- **Primary color**: `universalBlue[500]` (#0066CC)
- **Input backgrounds**: Subtle blue tint (`universalBlue[25]`)
- **Glass effects**: Blue-tinted shadows for brand consistency
- **Shimmer effects**: Brand-aligned blue tones

### **2. Contrast and Accessibility**

- **Excellent contrast required** on all Paper variants
- **Test in both light and dark modes**
- **Use semantic surface tokens** for proper contrast hierarchy
- **WCAG AAA compliance** for text and interactive elements

### **3. Interactive States**

- **Subtle feedback**: Use opacity and slight color shifts
- **Consistent hierarchy**: Normal → Hover → Focus → Active
- **Theme-appropriate colors**: Different feedback intensities for light/dark modes

## 🌓 Advanced Theming System

### **1. SSR-Safe Theme Implementation**

#### **ThemeScript Usage (Blocking Script)**

```typescript
// ✅ CORRECT: Add before React loads to prevent flickering
// Next.js App Router (app/layout.tsx)
import { ThemeScript } from 'quantum-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript
          defaultColorScheme="light"
          storageKey="quantum-color-scheme"
          attribute="data-theme"
          preventFlickering={true}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

// ✅ CORRECT: Next.js Pages Router (_document.tsx)
import { ThemeScript } from 'quantum-ui';

export default function Document() {
  return (
    <Html>
      <body>
        <ThemeScript defaultColorScheme="light" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// ✅ CORRECT: Vite/CRA (index.html)
<script type="module">
  import { getThemeScript } from 'quantum-ui';
  const script = document.createElement('script');
  script.innerHTML = getThemeScript({ defaultColorScheme: 'light' });
  document.head.appendChild(script);
</script>
```

#### **ThemeProvider Configuration**

```typescript
// ✅ CORRECT: Match ThemeScript configuration exactly
<ThemeProvider
  defaultColorScheme="light"    // Must match ThemeScript
  storageKey="quantum-color-scheme"  // Must match ThemeScript
  attribute="data-theme"        // Must match ThemeScript
>
  <App />
</ThemeProvider>
```

### **2. Framework-Specific Integration Patterns**

#### **Next.js Integration**

```typescript
// ✅ App Router Pattern
// app/layout.tsx
import { ThemeScript } from 'quantum-ui';
export default function RootLayout({ children }) {
  return (
    <html>
      <head><ThemeScript /></head>
      <body>{children}</body>
    </html>
  );
}

// app/providers.tsx
'use client';
import { ThemeProvider } from 'quantum-ui';
export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// ✅ Pages Router Pattern
// pages/_document.tsx - Add ThemeScript
// pages/_app.tsx - Add ThemeProvider
```

#### **Vite Integration**

```typescript
// ✅ index.html - Add script before React
// main.tsx - Add ThemeProvider wrapper
import { ThemeProvider } from 'quantum-ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultColorScheme="light">
    <App />
  </ThemeProvider>
);
```

#### **Remix Integration**

```typescript
// ✅ app/root.tsx
import { ThemeScript, ThemeProvider } from 'quantum-ui';

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <ThemeScript defaultColorScheme="light" />
      </head>
      <body>
        <ThemeProvider defaultColorScheme="light">
          <Outlet />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### **3. Theme Hook Usage Patterns**

```typescript
// ✅ CORRECT: Basic theme control
function ThemeToggle() {
  const { colorScheme, toggleColorScheme, isHydrated } = useTheme();

  if (!isHydrated) return <div>Loading...</div>;

  return (
    <button onClick={toggleColorScheme}>
      Switch to {colorScheme === 'light' ? 'dark' : 'light'}
    </button>
  );
}

// ✅ CORRECT: Theme selection UI
function ThemeSelector() {
  const { colorScheme, setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => setTheme('light')}
        data-active={colorScheme === 'light'}
      >
        Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        data-active={colorScheme === 'dark'}
      >
        Dark
      </button>
    </div>
  );
}

// ✅ CORRECT: Client-only components
function ClientOnlyFeature() {
  const isClient = useIsClient();

  if (!isClient) return null;

  return <ComplexInteractiveWidget />;
}
```

### **4. Anti-Patterns to Avoid**

#### **❌ WRONG: Script inside ThemeProvider**

```typescript
// ❌ This causes flickering!
export const ThemeProvider = ({ children }) => {
  return (
    <>
      <ThemeScript />  {/* Too late! */}
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    </>
  );
};
```

#### **❌ WRONG: Mismatched configurations**

```typescript
// ❌ ThemeScript and ThemeProvider must match!
<ThemeScript defaultColorScheme="light" storageKey="theme" />
<ThemeProvider defaultColorScheme="dark" storageKey="quantum-theme" />
```

#### **❌ WRONG: Reading localStorage in useState**

```typescript
// ❌ Causes hydration mismatches
const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light'; // SSR mismatch!
});

// ✅ CORRECT: Always start with default
const [theme, setTheme] = useState(defaultTheme);
```

## 🔧 File Organization and Naming

### **1. Semantic Tokens Structure**

```
semanticTokens.ts
├── colors (theme-aware)
├── effects (theme-aware)
├── shadows (theme-aware)
├── glassmorphism (theme-aware)
├── borderRadius (responsive)
├── typography (responsive variants)
├── spacing (responsive)
└── component-specific tokens (textField, etc.)
```

### **2. Component Theme Files**

- **One file per component**: `Button.ts`, `TextField.ts`, etc.
- **Export named theme objects**: `ButtonTheme`, `TextFieldTheme`
- **Use semantic token references exclusively**
- **Document complex calculations** with inline comments

### **3. Import Patterns**

```typescript
// ✅ CORRECT: Tree-shakeable direct imports (performance)
import { Button } from 'quantum-ui/Button';
import { TextField } from 'quantum-ui/TextField';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';

// ✅ CORRECT: Theme utilities barrel import (small impact)
import { ThemeProvider, ThemeScript, useTheme } from 'quantum-ui';

// ❌ WRONG: Component barrel imports (larger bundles)
import { Button, TextField } from 'quantum-ui';
```

### **4. Current Codebase Architecture**

- **Build System**: Vite with multi-entry tree-shakeable exports
- **Font Strategy**: Space Grotesk (display) + Quicksand/Inter (body)
- **Performance**: React.memo, constant lookups, zero runtime CSS-in-JS
- **Bundle Sizes**: Individual components ~0.5-1KB, theme system ~8KB
- **Export Structure**: Individual component paths + theme utilities barrel

## 🧪 Testing and Validation

### **1. Visual Testing Checklist**

- [ ] Works in both light and dark themes
- [ ] Responsive across mobile/tablet/desktop
- [ ] Proper contrast on all Paper variants
- [ ] Consistent with design system patterns
- [ ] No hardcoded values
- [ ] Zero theme flickering on SSR

### **2. Token Validation**

- [ ] All tokens have proper TypeScript definitions
- [ ] CSS variables generate correctly
- [ ] Theme-aware tokens have both light/dark variants
- [ ] Responsive tokens have all breakpoint values

### **3. Component Integration**

- [ ] Works with existing component ecosystem
- [ ] Maintains design system consistency
- [ ] Follows established interaction patterns
- [ ] Accessible keyboard navigation
- [ ] SSR-safe hydration

### **4. Theme System Testing**

- [ ] ThemeScript prevents flickering in all frameworks
- [ ] ThemeProvider syncs correctly with DOM
- [ ] useTheme hook provides all expected functionality
- [ ] Theme persistence works across page reloads
- [ ] No hydration mismatches in SSR environments

## 🚫 Common Anti-Patterns to Avoid

### **1. Hardcoded Values**

```typescript
// ❌ WRONG: Hardcoded colors
boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)';

// ✅ CORRECT: Semantic token
boxShadow: 'var(--quantum-shadows-textField)';
```

### **2. Static Theme Values**

```typescript
// ❌ WRONG: No theme awareness
shadows: {
  small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}

// ✅ CORRECT: Theme-aware
shadows: {
  small: {
    light: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    dark: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  }
}
```

### **3. Poor Component Token Organization**

```typescript
// ❌ WRONG: Generic naming
componentHeight: {
  textField: '...';
}

// ✅ CORRECT: Component-prominent
textField: {
  height: '...';
}
```

### **4. Animation Anti-Patterns**

```typescript
// ❌ WRONG: JavaScript-based animations (Framer Motion removed)
import { motion, AnimatePresence } from 'framer-motion';
<motion.div animate={{ opacity: 1 }} />  // Library completely removed

// ✅ CORRECT: CSS animations with semantic tokens
style={{
  opacity: isVisible ? 1 : 0,
  transition: 'opacity var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)',
}}
```

### **5. Inconsistent Responsive Patterns**

```typescript
// ❌ WRONG: Missing breakpoints
fontSize: { mobile: "1rem", desktop: "1.25rem" } // Missing tablet

// ✅ CORRECT: Complete responsive definition
fontSize: { mobile: "1rem", tablet: "1.1rem", desktop: "1.25rem" }
```

### **6. Theme Implementation Mistakes**

```typescript
// ❌ WRONG: Script placement causes flickering
function App() {
  return (
    <ThemeProvider>
      <ThemeScript />  {/* Too late! */}
      <Content />
    </ThemeProvider>
  );
}

// ✅ CORRECT: Script before React
// HTML: <ThemeScript />
// React: <ThemeProvider><App /></ThemeProvider>
```

## 📈 Performance Considerations

### **1. Animation Performance**

- **CSS animations only** - JavaScript animation libraries have been completely removed
- **Hardware acceleration** - Use `transform` and `opacity` for 60fps animations
- **Reduced motion support** - All animations respect accessibility preferences
- **Semantic timing** - Use design token animation durations and easing

```typescript
// ✅ CORRECT: CSS animations with semantic tokens
style={{
  transition: 'all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)',
  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
}}

// ❌ WRONG: JavaScript-based animations (Framer Motion removed)
import { motion } from 'framer-motion'; // This package has been removed
```

### **2. Bundle Size Achievement**

- **40kB reduction** - Achieved in vritti-landing by removing Framer Motion
- **Individual component imports**: ~0.5-1KB gzipped each
- **Theme system**: ~9KB gzipped (includes complete MUI theme)
- **Selective barrel exports**: Import only theme utilities from main package

### **3. CSS Variable Generation**

- **Complete token system maintained** - All semantic tokens kept for design system flexibility
- **Efficient processing**: Variables generated at build time, not runtime
- **Proper TypeScript types**: Ensure type safety without runtime overhead
- **Minimal DOM impact**: CSS custom properties enable instant theme switching

### **4. Theme Switching**

- **CSS custom properties**: Enable instant theme switching without re-renders
- **Zero JavaScript overhead**: Theme changes update CSS variables only
- **Smooth transitions**: All theme-aware properties transition seamlessly

## 🔄 Development Workflow

### **1. Making Changes**

1. **Update semantic tokens first** (if new tokens needed)
2. **Update CSS variable generation** (if new token types)
3. **Update component themes** to use new tokens
4. **Test in both themes and all breakpoints**
5. **Verify no hardcoded values remain**
6. **Test SSR behavior in target frameworks**

### **2. Adding New Components**

1. **Follow established naming patterns**
2. **Create component-specific tokens** if needed
3. **Use existing semantic tokens** where possible
4. **Ensure responsive and theme-aware** design
5. **Add to component barrel exports**
6. **Create individual component export path**

### **3. Component Migration Guidelines**

- **Replace JavaScript animations with CSS** - All hover, focus, and state animations should use CSS
- **Use Paper variants instead of custom surfaces** - 5 semantic variants cover most use cases
- **Maintain semantic token usage** - Never hardcode animation values
- **Test reduced motion** - Ensure animations can be disabled for accessibility
- **Verify performance** - CSS animations should maintain 60fps on all devices

```typescript
// ✅ CORRECT: CSS-based hover effects
const [isHovered, setIsHovered] = useState(false);

return (
  <Paper
    variant="feature"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    sx={{
      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      transition: 'all var(--quantum-animation-duration-normal) var(--quantum-animation-easing-standard)',
    }}
  >
    <Typography variant="h3">Interactive Card</Typography>
  </Paper>
);

// ❌ WRONG: Framer Motion (completely removed)
import { motion } from 'framer-motion';
return (
  <motion.div whileHover={{ y: -8 }}> // This library has been removed
    <Typography variant="h3">Interactive Card</Typography>
  </motion.div>
);
```

### **4. Refactoring Guidelines**

- **Prefer editing existing files** over creating new ones
- **Maintain backward compatibility** when possible
- **Update related components** that might be affected
- **Verify all variants and states** still work correctly
- **Test theme behavior across all supported frameworks**

---

## 📚 Quick Reference

### **Most Used Token Patterns**

```typescript
// Colors
'var(--quantum-color-text-primary)';
'var(--quantum-color-surface-input)';
'var(--quantum-color-action-primary)';

// Typography
'var(--quantum-typography-fontWeight-normal)';
'var(--quantum-textField-fontSize)';

// Spacing & Layout
'var(--quantum-textField-height)';
'var(--quantum-borderRadius-large)';
'var(--quantum-shadows-textField)';
```

### **RGB Variants for Alpha Blending**

When you need alpha transparency, ensure the color definition includes `needsRGB: true`:

```typescript
primary: {
  light: palette.universalBlue[500],
  dark: palette.universalBlue[500],
  needsRGB: true, // Generates --quantum-color-action-primaryRGB
}
```

This enables usage like: `rgba(var(--quantum-color-action-primaryRGB), 0.15)`

### **Framework Integration Checklist**

- [ ] **Next.js**: ThemeScript in \_document.tsx or layout.tsx
- [ ] **Vite**: ThemeScript via getThemeScript() in index.html
- [ ] **CRA/Webpack**: Manual script in public/index.html
- [ ] **Remix**: ThemeScript in root.tsx head
- [ ] **All frameworks**: ThemeProvider wrapping app component

## 🔧 Development Commands

### **Build & Development**

```bash
# Development server with demo app
npm run dev

# Build library for distribution
npm run build

# Component development and documentation
npm run storybook

# Code quality
npm run lint
npm run type-check
```

### **Testing Workflow**

1. **Visual testing**: Use Storybook for component variations
2. **Theme testing**: Test both light/dark modes across breakpoints
3. **SSR testing**: Verify zero-flickering in target frameworks
4. **Performance testing**: Check bundle sizes with tree-shaking

---

## 📝 Recent Updates & Status

**Last Updated**: June 2025 - Major Performance Optimization Update

### **✅ Completed Optimizations (June 2025)**

1. **Framer Motion Completely Removed** - All JavaScript animations replaced with CSS
2. **40kB Bundle Reduction** - Achieved in vritti-landing through animation library removal
3. **Paper Component Enhanced** - 5 new semantic variants added for all surface needs
4. **CSS Animation System** - Lightweight, accessible, performance-optimized
5. **Bundle Size Optimized** - Theme system reduced to ~9KB gzipped
6. **Semantic Tokens Maintained** - Complete token system kept for design flexibility

### **🎯 Current State**

All 4 core components (Button, TextField, Paper, Typography) are production-ready with enhanced performance characteristics. The theme system maintains sophisticated SSR support with zero-flickering implementation while achieving significant bundle size reductions.

**Architecture Highlights**:

- **CSS-first animations** - No JavaScript animation dependencies
- **Intent-based component APIs** - Semantic variants over style props
- **Performance optimized** - 40kB smaller bundles, 60fps animations
- **Accessibility first** - Reduced motion support, WCAG AAA compliance
- **Complete responsive design system** - Mobile-first with semantic tokens
- **SSR-safe theming** - Zero flickering across all supported frameworks

### **🚀 Performance Achievements**

- **Vritti Landing**: 40kB bundle size reduction (192kB → 152kB)
- **Component Library**: ~9KB gzipped theme system
- **Animation Performance**: 60fps CSS animations replace JavaScript motion
- **Tree Shaking**: Individual component imports reduce bundle size by up to 95%

_This document reflects the optimized codebase state. All patterns prioritize performance, accessibility, and maintainable CSS-first animations._
