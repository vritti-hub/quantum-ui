import React, { useMemo } from 'react';
import { useTheme } from '../..';

export interface ThemeToggleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', style = {} }) => {
  const { colorScheme, toggleColorScheme, isHydrated } = useTheme();

  // Generate unique ID to avoid conflicts
  const clipPathId = useMemo(() => `theme-toggle-clip-${Math.random().toString(36).substr(2, 9)}`, []);

  // Don't render until hydrated to avoid SSR mismatch
  if (!isHydrated) {
    return (
      <div
        className={className}
        style={{
          width: '3em',
          height: '3em',
          borderRadius: '50%',
          background: 'var(--quantum-color-surface-secondary)',
          border: '1px solid var(--quantum-color-border-subtle)',
          ...style,
        }}
      />
    );
  }

  const isDark = colorScheme === 'dark';

  return (
    <>
      <style>{`
        .theme-toggle {
          --theme-toggle__around--duration: 500ms;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font: inherit;
          outline: inherit;
          padding: 0.25em;
          background: var(--quantum-color-surface-secondary);
          border: 1px solid var(--quantum-color-border-subtle);
          border-radius: 50%;
          color: var(--quantum-color-text-primary);
          display: inline-flex;
          font-size: 2em;
          height: 1.5em;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 1.5em;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .theme-toggle:hover {
          background: var(--quantum-color-surface-elevated);
          border-color: var(--quantum-color-border-default);
        }
        .theme-toggle:focus-visible {
          outline: 2px solid var(--quantum-color-action-primary);
          outline-offset: 2px;
        }
        .theme-toggle .theme-toggle__around * {
          transform-origin: center;
          transition: transform calc(var(--theme-toggle__around--duration) * .6) ease;
        }
        .theme-toggle .theme-toggle__around > g g circle {
          transition-duration: calc(var(--theme-toggle__around--duration) * .2);
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(1) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.253); 
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(2) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.348); 
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(3) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.443); 
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(4) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.538); 
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(5) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.633); 
        }
        .theme-toggle .theme-toggle__around > g g :nth-child(6) { 
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.728); 
        }
        .theme-toggle .theme-toggle__around > :first-child path {
          transition-property: transform, d;
          transition-duration: calc(var(--theme-toggle__around--duration) * .6);
          transition-timing-function: cubic-bezier(0,0,0.5,1);
        }
        .theme-toggle.theme-toggle--toggled .theme-toggle__around > g g circle,
        .theme-toggle input[type=checkbox]:checked ~ .theme-toggle__around > g g circle {
          transform: scale(0);
          opacity: 0;
          transition-delay: 0s;
        }
        .theme-toggle.theme-toggle--toggled .theme-toggle__around > g g path,
        .theme-toggle input[type=checkbox]:checked ~ .theme-toggle__around > g g path {
          transform: scale(.75);
          transition-delay: 0s;
        }
        .theme-toggle.theme-toggle--toggled .theme-toggle__around > :first-child path,
        .theme-toggle input[type=checkbox]:checked ~ .theme-toggle__around > :first-child path {
          d: path("M-9 3h25a1 1 0 0017 13v30H0Z");
          transition-delay: calc(var(--theme-toggle__around--duration) * 0.4);
          transition-timing-function: cubic-bezier(0,0,0,1.25);
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .theme-toggle .theme-toggle__around * {
            transition: none !important;
          }
        }
      `}</style>
      <label
        className={`theme-toggle ${isDark ? 'theme-toggle--toggled' : ''} theme-toggle--force-motion ${className}`}
        title='Toggle theme'
        style={style}
      >
        <input
          type='checkbox'
          checked={isDark}
          onChange={toggleColorScheme}
          style={{ display: 'none' }}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        />
        <span className='sr-only'>Toggle theme</span>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          width='1em'
          height='1em'
          fill='var(--quantum-color-text-primary)'
          className='theme-toggle__around'
          viewBox='0 0 32 32'
        >
          <clipPath id={clipPathId}>
            <path d='M0 0h42v30a1 1 0 00-16 13H0Z' />
          </clipPath>
          <g clipPath={`url(#${clipPathId})`}>
            <circle cx='16' cy='16' r='7.5' fill='var(--quantum-color-text-primary)' />
            <g>
              <circle cx='16' cy='4.5' r='1.8' fill='var(--quantum-color-text-primary)' />
              <circle cx='25.5' cy='10.5' r='1.8' fill='var(--quantum-color-text-primary)' />
              <circle cx='25.5' cy='21.5' r='1.8' fill='var(--quantum-color-text-primary)' />
              <circle cx='16' cy='27.5' r='1.8' fill='var(--quantum-color-text-primary)' />
              <circle cx='6.5' cy='21.5' r='1.8' fill='var(--quantum-color-text-primary)' />
              <circle cx='6.5' cy='10.5' r='1.8' fill='var(--quantum-color-text-primary)' />
            </g>
          </g>
        </svg>
      </label>
    </>
  );
};

export default ThemeToggle;
