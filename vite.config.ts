import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({
    svgrOptions: {
      // Optional: Global SVGR settings
    },
    include: '**/*.svg', // Explicitly target only `.svg` files
  }), react()],
})
