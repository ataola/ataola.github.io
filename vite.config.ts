import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteVConsole } from 'vite-plugin-vconsole'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'
// https://github.com/vbenjs/vite-plugin-imagemin
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const config = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      viteVConsole({
        entry: resolve(__dirname, './src/main.ts').replace(/\\/g, '/'),
        localEnabled: mode === 'development', // dev environment
        enabled: mode === 'development', // build production
        config: {
          maxLogNumber: 1000,
          theme: 'light',
        },
      }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
        polyfills: [
          'es.symbol',
          'es.array.filter',
          'es.promise',
          'es.promise.finally',
          'es/map',
          'es/set',
          'es.array.for-each',
          'es.object.define-properties',
          'es.object.define-property',
          'es.object.get-own-property-descriptor',
          'es.object.get-own-property-descriptors',
          'es.object.keys',
          'es.object.to-string',
          'web.dom-collections.for-each',
          'esnext.global-this',
          'esnext.string.match-all',
        ],
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      visualizer(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@api': resolve(__dirname, 'src/api'),
        '@data': resolve(__dirname, 'src/data'),
        '@views': resolve(__dirname, 'src/views'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@types': resolve(__dirname, 'src/types'),
        '@store': resolve(__dirname, 'src/store'),
        '@layout': resolve(__dirname, 'src/layout'),
        '@assets': resolve(__dirname, 'rc/assets'),
        '@router': resolve(__dirname, 'src/router'),
        '@static': resolve(__dirname, 'src/static'),
        '@scss': resolve(__dirname, 'src/assets/scss'),
        '@components': resolve(__dirname, 'src/components'),
        '@constants': resolve(__dirname, 'src/assets/constants'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
    base: config.mode === 'development' ? './' : '/', //https://cn.vitejs.dev/guide/static-deploy.html#github-pages
    server: {
      host: config.VITE_HOST,
      port: config.VITE_PORT ? Number(config.VITE_PORT) : 9000,
      open: true,
      cors: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://host:port',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    css: { preprocessorOptions: { scss: { charset: false } } },
    build: {
      target: 'es2015',
      outDir: './dist/',
      cssCodeSplit: true,
    },
  })
}
