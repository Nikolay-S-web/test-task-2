import { defineConfig } from 'vite';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import legacy from '@vitejs/plugin-legacy';
// import { sentryVitePlugin } from '@sentry/vite-plugin';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import htmlPurge from 'vite-plugin-purgecss';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
    build: {
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
        sourcemap: true,
    },
    plugins: [
        // htmlPurge({
        //     safelist: {
        //         standard: [/^fancybox-content$/],
        //     },
        // }),
        VitePluginSvgSpritemap('./src/assets/svg/*.svg'),
        ViteMinifyPlugin(),
        legacy(),
        // sentryVitePlugin({
        //     project: process.env.SENTRY_PROJECT,
        //     sourcemaps: {
        //         include: '/dist',
        //         urlPrefix: '~/',
        //     },
        // }),
        // ViteImageOptimizer({
        //     exclude: /\.(|svg|)$/i,
        //     png: {
        //         quality: 100,
        //     },
        //     jpeg: {
        //         quality: 80,
        //     },
        //     jpg: {
        //         quality: 80,
        //     },
        // }),
        ghPages({
            branch: 'gh-pages',
        }),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    grid: 'autoplace',
                }),
                pxtorem({
                    rootValue: 16,
                    unitPrecision: 5,
                    propList: ['*'],
                    selectorBlackList: [],
                    replace: true,
                    mediaQuery: true,
                    minPixelValue: 0,
                    exclude: /node_modules/i,
                }),
            ],
        },
    },
});
