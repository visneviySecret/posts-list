import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { baseUrl } from './src/router'

export default defineConfig({
    base: `${baseUrl}/`,
    plugins: [react()],
    build: {
        rollupOptions: {
            external: ['react-dom/client'],
        },
    },
})
