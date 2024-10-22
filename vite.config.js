import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                    'resources/js/app.js',
                    'resources/css/app.css'
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0', // Allow Vite to listen on all IP addresses
        port: 5173,      // Default port for Vite
        hmr: {
            host: '0.0.0.0', // The host that your browser can access
            port: 5173,
        },
        watch: {
          usePolling: true,
        },
    },
    build: {
        outDir: 'public/build',
        manifest: true,
    },
});
