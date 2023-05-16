import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/posts-list',
    plugins: [react()],
    // build: {
    //     rollupOptions: {
    //         external: ['react-dom/client'],
    //     },
    // },
})
