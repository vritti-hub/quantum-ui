import React from 'react';

/**
 * Script component that prevents theme flickering by applying
 * the saved theme preference before React hydrates.
 *
 * Usage in Next.js _document.tsx:
 * ```tsx
 * import { ThemeScript } from 'quantum-ui/ThemeScript'
 *
 * export default function Document() {
 *   return (
 *     <Html>
 *       <Head />
 *       <body>
 *         <ThemeScript />
 *         <Main />
 *         <NextScript />
 *       </body>
 *     </Html>
 *   )
 * }
 * ```
 *
 * Usage in regular HTML:
 * ```tsx
 * function App() {
 *   return (
 *     <>
 *       <ThemeScript />
 *       <YourAppContent />
 *     </>
 *   )
 * }
 * ```
 */
export const ThemeScript: React.FC = () => {
  const script = getThemeScript();

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      // This ensures the script runs before React hydration
      suppressHydrationWarning
    />
  );
};

// Also export a function version for manual usage
export const getThemeScript = () => {
  return `
(function() {
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
})();
`.trim();
};
