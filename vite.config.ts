import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      include: ['lib'],
      exclude: ['**/*.stories.*', '**/*.test.*'],
      tsconfigPath: './tsconfig.lib.json'
    })
  ],
  build: {
    lib: {
      entry: {
        // Main entry point
        index: resolve(__dirname, 'lib/index.ts'),
        // Next.js server-safe entry point
        next: resolve(__dirname, 'lib/next.ts'),
        // Component entries
        'components/Button': resolve(__dirname, 'lib/components/Button/index.ts'),
        'components/TextField': resolve(__dirname, 'lib/components/TextField/index.ts'),
        'components/Paper': resolve(__dirname, 'lib/components/Paper/index.ts'),
        'components/Typography': resolve(__dirname, 'lib/components/Typography/index.ts'),
        'components/ThemeToggle': resolve(__dirname, 'lib/components/ThemeToggle/index.ts'),
      },
      name: 'QuantumUI',
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        '@mui/material/Button',
        '@mui/material/TextField', 
        '@mui/material/Paper',
        '@mui/material/Typography',
        '@mui/material/Box',
        '@mui/material/Stack',
        '@mui/material/CssBaseline',
        '@mui/material/styles',
        '@emotion/react',
        '@emotion/styled'
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    target: 'esnext',
    minify: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url))
    }
  }
})