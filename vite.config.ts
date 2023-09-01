/// <reference types="vitest" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

const libEntryPath = resolve(dirname(fileURLToPath(import.meta.url)), 'src/index.ts');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), tsconfigPaths()],
  build: {
    lib: {
      name: 'MyLib',
      fileName: 'lib',
      entry: libEntryPath,
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    setupFiles: ['tests/setup.ts'],
    // enable in-source testing to bring a closer feedback loop for development
    // @see https://vitest.dev/guide/in-source.html
    includeSource: ['src/**/*.{ts,tsx}'],
  },
});
