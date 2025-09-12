import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // Force the root to be the current project folder to avoid walking up to parent
  root: path.resolve(__dirname, '.'),
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Use the new JSX runtime
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: {
      // Ensure vite resolves lucide-react from this project's node_modules
      'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react'),
    },
  },
  optimizeDeps: {
    // Pre-bundle to stabilize path resolution on Windows with spaces in paths
    include: ['lucide-react'],
  },
  // Configure the development server
  server: {
    port: 3000,
    open: true,
  },
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  // Configure the base URL for the app
  // Use an environment variable for dynamic base URL, defaulting to '/' for Vercel
  base: process.env.VITE_APP_BASE_URL || '/',
  // Configure the public directory
  publicDir: 'public',
});
