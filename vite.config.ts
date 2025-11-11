import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load all env vars (no prefix), e.g. GEMINI_API_KEY
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // IMPORTANT for GitHub Pages under a subpath
    base: '/unapologetically-jewish/',

    plugins: [react()],

    // Optional dev server settings (local only)
    server: { host: '0.0.0.0', port: 3000 },

    // Default outDir is 'dist' (fine for Pages workflow)
    build: {
      outDir: 'dist',
      sourcemap: true, // helpful for debugging; remove if you prefer
    },

    // Expose your key in the exact shape your app expects
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
      // Optional: keep NODE_ENV consistent in some libs
      'process.env.NODE_ENV': JSON.stringify(mode),
    },

    resolve: {
      alias: {
        // Your repo uses root-level components, keep alias as-is
        '@': path.resolve(__dirname, '.'),
        // If you later move code to /src, change to: path.resolve(__dirname, 'src')
      },
    },
  }
})
