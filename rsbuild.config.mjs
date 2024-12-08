import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    sourceMap: {
      js: 'cheap-module-source-map',
    },
  },
  performance: {
    chunkSplit: {
      strategy: 'custom',
      forceSplitting: {
        srcApp: /[\\/]src[\\/](App)/,
      },
    },
  },
});
