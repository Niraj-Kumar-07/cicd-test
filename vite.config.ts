import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
