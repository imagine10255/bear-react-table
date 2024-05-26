import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import {visualizer} from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        react(),
        svgr(),
        dts({
            insertTypesEntry: true,
        }),
        copy({
            targets: [
                {src: 'src/themes/*', dest: 'dist/themes'}
            ],
            hook: 'writeBundle'
        }) as Plugin,
        visualizer() as Plugin,
    ],
    css: {
        devSourcemap: process.env.NODE_ENV === 'production',
        modules: {
            localsConvention: 'camelCase',
            scopeBehaviour: 'local',
            generateScopedName: 'acrool-react-table__[name]__[local]',
        }
    },
    build: {
        minify: process.env.NODE_ENV === 'production',
        sourcemap: process.env.NODE_ENV !== 'production',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `acrool-react-table.${format}.js`,
        },
        cssTarget: 'chrome61',
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
