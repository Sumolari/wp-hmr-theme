import { resolve as resolvePath } from 'path';

import { defineConfig } from 'vite';

import { CopyFilePlugin } from './vite';

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
  plugins: [
    CopyFilePlugin({
      sourceFileName: 'style.css',
      absolutePathToDestination: resolvePath(__dirname, './theme/style.css'),
    }),
  ],
  build: {
    target: 'modules',
    outDir: '.vite-dist',
    rollupOptions: {
      input: {
        stylesheet: './sass/style.ts',
      },
    },
  },
  server: {
    port: 1337,
    host: '0.0.0.0',
  },
});
