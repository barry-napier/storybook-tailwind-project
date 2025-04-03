import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import string from 'vite-plugin-string';

export default defineConfig({
  plugins: [tailwindcss(), string({ include: '**/*.html' })],
});
