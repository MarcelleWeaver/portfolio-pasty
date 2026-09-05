import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginReact({
      reactCompiler: true,
    }),
    pluginTailwindcss(),
  
  ],
  output: {
    // Please replace <REPO_NAME> with the repository name.
    // For example, "/my-project/"
    assetPrefix: '/portfolio/',
  },
  
  
});
