import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config({ path: '../.env' });

const port = process.env.UIPORTI ?? 5001;

/* https://vitejs.dev/config/
https://vitejs.dev/config/server-options.html#server-watch */
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port,
  },
});
