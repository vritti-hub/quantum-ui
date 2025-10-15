import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      include: ['lib'],
      exclude: ['**/*.stories.*', '**/*.test.*'],
      tsconfigPath: './tsconfig.lib.json',
      outDir: 'dist',
      insertTypesEntry: false,
      pathsToAliases: false,
      rollupTypes: true,
      entryRoot: 'lib',
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: {
        // Main entry point
        index: resolve(__dirname, 'lib/index.ts'),
        // Component entries
        'components/Button': resolve(__dirname, 'lib/components/Button/index.ts'),
        'components/Card': resolve(__dirname, 'lib/components/Card/index.ts'),
        'components/Checkbox': resolve(__dirname, 'lib/components/Checkbox/index.ts'),
        'components/PasswordField': resolve(__dirname, 'lib/components/PasswordField/index.ts'),
        'components/TextField': resolve(__dirname, 'lib/components/TextField/index.ts'),
        'components/Typography': resolve(__dirname, 'lib/components/Typography/index.ts'),
        'components/ThemeToggle': resolve(__dirname, 'lib/components/ThemeToggle/index.ts'),
      },
      name: 'QuantumUI',
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    target: 'esnext',
    minify: false,
  },
});
