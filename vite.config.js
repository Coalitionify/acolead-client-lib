import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const isStage = mode === 'stage';
  const fileName = isStage ? 'acolead.stage.iife.js' : 'acolead.iife.js';
  const outDir = 'dist';

  return {
    define: {
      __IS_STAGE__: isStage ? 'true' : 'false'
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'AcoLead',
        fileName: () => fileName,
        formats: ['iife']
      },
      minify: 'esbuild',
      outDir,
      emptyOutDir: false // ✅ Do not delete previous builds
    }
  };
});
