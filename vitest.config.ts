import type { UserConfig } from 'vitest/config';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { ConfigEnv } from 'vite';
import { defineConfig } from 'vite';
export default defineConfig(async (env) => {

  return {
    plugins: [
      vue({ reactivityTransform: true }),
      vueJsx({ optimize: true, transformOn: true })
    ],


    resolve: {
      alias: {
        '@': path.resolve('src')
      },
      mainFields: ['index', 'module', 'jsnext'],
      extensions: ['.ts', '.tsx', '.json', '.jsx', '.mjs', '.js']
    },
    test: {
      root: process.cwd(),
      globals: true,
      environment: 'jsdom',
      transformMode: {
        web: [/\.[jt]sx$/]
      },
      dir: 'test',
      include: ['**/*.{test,spec}.ts'],
      coverage: {
        reporter: ['html'],
        reportsDirectory: 'report/test'
      }
    }
  };

});
