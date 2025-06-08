# CLAUDE.md - Development Guidelines for quantum-ui

This file contains essential guidelines and patterns for Claude when working on the quantum-ui design system. Following these rules ensures consistency, maintainability, and adherence to established patterns.

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

// ✅ CORRECT: Theme-aware definition
text: {
  primary: {
    light: palette.lightNeutral[900], // Pure black
    dark: palette.darkNeutral[50], // Pure white
  } as ColorDefinition,
}
```

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
export const ComponentTheme: Components<Theme>["MuiComponent"] = {
  styleOverrides: {
    root: {
      // Use semantic tokens, never hardcoded values
      backgroundColor: "var(--quantum-color-surface-primary)",
      borderRadius: "var(--quantum-borderRadius-medium)",
      boxShadow: "var(--quantum-shadows-small)",
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
// ✅ CORRECT: Import from theme barrel
import { ThemeProvider } from "../theme";

// ✅ CORRECT: Use semantic tokens, not palette directly
fontSize: "var(--quantum-textField-fontSize)"

// ❌ WRONG: Direct palette usage in components
color: palette.universalBlue[500]
```

## 🧪 Testing and Validation

### **1. Visual Testing Checklist**
- [ ] Works in both light and dark themes
- [ ] Responsive across mobile/tablet/desktop
- [ ] Proper contrast on all Paper variants
- [ ] Consistent with design system patterns
- [ ] No hardcoded values

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

## 🚫 Common Anti-Patterns to Avoid

### **1. Hardcoded Values**
```typescript
// ❌ WRONG: Hardcoded colors
boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"

// ✅ CORRECT: Semantic token
boxShadow: "var(--quantum-shadows-textField)"
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
componentHeight: { textField: "..." }

// ✅ CORRECT: Component-prominent
textField: { height: "..." }
```

### **4. Inconsistent Responsive Patterns**
```typescript
// ❌ WRONG: Missing breakpoints
fontSize: { mobile: "1rem", desktop: "1.25rem" } // Missing tablet

// ✅ CORRECT: Complete responsive definition
fontSize: { mobile: "1rem", tablet: "1.1rem", desktop: "1.25rem" }
```

## 📈 Performance Considerations

### **1. CSS Variable Generation**
- **Efficient processing**: Only generate variables that are actually used
- **Proper TypeScript types**: Ensure type safety without runtime overhead
- **Minimal DOM impact**: Use semantic tokens to reduce CSS bundle size

### **2. Theme Switching**
- **CSS custom properties**: Enable instant theme switching
- **Avoid inline styles**: Use CSS variables for better performance
- **Optimize for animations**: Smooth transitions between theme states

## 🔄 Development Workflow

### **1. Making Changes**
1. **Update semantic tokens first** (if new tokens needed)
2. **Update CSS variable generation** (if new token types)
3. **Update component themes** to use new tokens
4. **Test in both themes and all breakpoints**
5. **Verify no hardcoded values remain**

### **2. Adding New Components**
1. **Follow established naming patterns**
2. **Create component-specific tokens** if needed
3. **Use existing semantic tokens** where possible
4. **Ensure responsive and theme-aware** design
5. **Add to component barrel exports**

### **3. Refactoring Guidelines**
- **Prefer editing existing files** over creating new ones
- **Maintain backward compatibility** when possible
- **Update related components** that might be affected
- **Verify all variants and states** still work correctly

---

## 📚 Quick Reference

### **Most Used Token Patterns**
```typescript
// Colors
"var(--quantum-color-text-primary)"
"var(--quantum-color-surface-input)"
"var(--quantum-color-action-primary)"

// Typography
"var(--quantum-typography-fontWeight-normal)"
"var(--quantum-textField-fontSize)"

// Spacing & Layout
"var(--quantum-textField-height)"
"var(--quantum-borderRadius-large)"
"var(--quantum-shadows-textField)"
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

---

*This document should be updated as new patterns emerge and the design system evolves.*