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
    CopyFilePlugin({
      sourceFileName: 'helloWorld',
      absolutePathToDestination: resolvePath(__dirname, './theme/js/hello-world.js'),
    }),
  ],
  build: {
    target: 'modules',
    outDir: '.vite-dist',
    rollupOptions: {
      input: {
        stylesheet: './sass/style.ts',
        helloWorld: './ts/hello-world.ts',
      },
    },
  },
  server: {
    port: 1337,
    host: '0.0.0.0',
  },
});
