# ThemeScript Usage Guide

## Quick Start

### Next.js App Router (\_document.tsx)

```tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeScript } from 'quantum-ui';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* Add before <Main /> to prevent flickering */}
        <ThemeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Next.js Pages Router (pages/\_app.tsx)

```tsx
import { ThemeScript, ThemeProvider } from 'quantum-ui';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeScript />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
```

### Vite/CRA (index.html)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { getThemeScript } from 'quantum-ui';
      const script = document.createElement('script');
      script.innerHTML = getThemeScript();
      document.head.appendChild(script);
    </script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Manual HTML Integration

```html
<script>
  // Copy the output of getThemeScript() here
  (function () {
    document.documentElement.classList.add('no-transition');
    try {
      const savedScheme = localStorage.getItem('quantum-color-scheme');
      const validSchemes = ['light', 'dark'];
      const themeToApply = savedScheme && validSchemes.includes(savedScheme) ? savedScheme : 'light';
      document.documentElement.setAttribute('data-theme', themeToApply);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    // ... rest of script
  })();
</script>
```

## Configuration Options

```tsx
<ThemeScript
  defaultColorScheme='dark' // Default: "light"
  storageKey='my-theme-key' // Default: "quantum-color-scheme"
  attribute='data-color-mode' // Default: "data-theme"
  preventFlickering={false} // Default: true
/>
```

## Benefits

✅ **Zero flickering** - Theme applied before React loads
✅ **SSR compatible** - Works with any SSR framework  
✅ **Configurable** - Customize storage key, attribute, etc.
✅ **Small bundle** - Minimal JavaScript overhead
✅ **Type safe** - Full TypeScript support
