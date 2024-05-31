import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite que el servidor sea accesible desde fuera del contenedor docker.
    port: 8080,
    strictPort: true,
    origin: "http://localhost:8080", // Esta es la URL de origen externa.
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: "0.0.0.0", // También permite que el servidor de previsualización sea accesible desde fuera del contenedor.
  },
});
