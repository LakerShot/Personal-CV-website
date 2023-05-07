import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(() => {
    return {
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '~@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        test: {
            globals: true,
            environment: 'jsdom',
        },

        server: {
            host: '0.0.0.0',
        },
    };
});
