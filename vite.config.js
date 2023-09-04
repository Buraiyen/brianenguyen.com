import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    UnoCSS({
      configFile: './uno.config.ts',
    }),
  ],
});
