import React from 'react';

interface ThemeScriptProps {
  /**
   * Default color scheme to use if no preference is saved
   * @default "light"
   */
  defaultColorScheme?: 'light' | 'dark';
  
  /**
   * localStorage key to read theme preference from
   * @default "quantum-color-scheme"
   */
  storageKey?: string;
  
  /**
   * HTML attribute to set the theme on
   * @default "data-theme"
   */
  attribute?: string;
  
  /**
   * Whether to add 'no-transition' class during initial load
   * @default true
   */
  preventFlickering?: boolean;
}

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
export const ThemeScript: React.FC<ThemeScriptProps> = ({
  defaultColorScheme = 'light',
  storageKey = 'quantum-color-scheme',
  attribute = 'data-theme',
  preventFlickering = true,
}) => {
  const script = `
(function() {
  ${preventFlickering ? `
  // Add no-transition class to prevent flickering during initial load
  document.documentElement.classList.add('no-transition');
  ` : ''}
  
  try {
    const savedScheme = localStorage.getItem('${storageKey}');
    const validSchemes = ['light', 'dark'];
    const themeToApply = savedScheme && validSchemes.includes(savedScheme) 
      ? savedScheme 
      : '${defaultColorScheme}';
    
    document.documentElement.setAttribute('${attribute}', themeToApply);
  } catch (e) {
    // Fallback if localStorage is not available (private browsing, etc.)
    document.documentElement.setAttribute('${attribute}', '${defaultColorScheme}');
  }
  
  ${preventFlickering ? `
  // Remove no-transition class after DOM is ready to enable smooth transitions
  function enableTransitions() {
    document.documentElement.classList.remove('no-transition');
    document.documentElement.classList.add('loaded');
  }
  
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(enableTransitions, 100);
    });
  } else {
    // DOM is already ready
    setTimeout(enableTransitions, 100);
  }
  ` : ''}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      // This ensures the script runs before React hydration
      suppressHydrationWarning
    />
  );
};

// Also export a function version for manual usage
export const getThemeScript = (options: ThemeScriptProps = {}) => {
  const {
    defaultColorScheme = 'light',
    storageKey = 'quantum-color-scheme',
    attribute = 'data-theme',
    preventFlickering = true,
  } = options;

  return `
(function() {
  ${preventFlickering ? `
  document.documentElement.classList.add('no-transition');
  ` : ''}
  
  try {
    const savedScheme = localStorage.getItem('${storageKey}');
    const validSchemes = ['light', 'dark'];
    const themeToApply = savedScheme && validSchemes.includes(savedScheme) 
      ? savedScheme 
      : '${defaultColorScheme}';
    
    document.documentElement.setAttribute('${attribute}', themeToApply);
  } catch (e) {
    document.documentElement.setAttribute('${attribute}', '${defaultColorScheme}');
  }
  
  ${preventFlickering ? `
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
  ` : ''}
})();
`.trim();
};