import { resolve } from 'path';

import { defineConfig, loadEnv } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import reactPlugin from '@vitejs/plugin-react';

// /. imports

const getPlugins = mode => {
    const isProd = mode === 'production';

    const plugins = [reactPlugin()];

    if (isProd) {
        plugins.push(
            ViteMinifyPlugin({
                exclude: /node_modules/,
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeComments: true
            })
        );
    }

    // TODO: +plugin for copy static from public folder

    return plugins;
};

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 3000,
            open: true
        },
        build: {
            outDir: 'build',
            emptyOutDir: true,
            rollupOptions: {
                input: [resolve(__dirname, 'index.html')],
                output: {
                    entryFileNames: 'assets/scripts/[name]-entry.js',
                    chunkFileNames: 'assets/scripts/chunks/[name]-[hash].js',
                    assetFileNames: ({ names }) => {
                        const fileName = names[0];
                        console.log(fileName);
                        if (/\.css$/.test(fileName)) {
                            return 'assets/css/[name]-[hash][extname]';
                        }

                        if (/\.(gif|jpe?g|png|svg)$/.test(fileName)) {
                            return 'assets/images/[name]-[hash][extname]';
                        }

                        if (/\.(ttf|woff|woff2|eot|otf)$/.test(fileName)) {
                            return 'assets/fonts/[name]-[hash][extname]';
                        }

                        // return 'assets/[name]-[hash][extname]';
                        return `assets/[name][extname]`;
                    }
                }
            }
        },
        preview: {
            outDir: 'build'
        },
        plugins: getPlugins(mode)
    };
});
