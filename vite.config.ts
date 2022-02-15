import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ((mode: string) => {
  const config = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [ vue() ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@api': resolve('/src/api'),
        '@views': resolve('/src/views'),
        '@utils': resolve('/src/utils'),
        '@types': resolve('/src/types'),
        '@store': resolve('/src/store'),
        '@layout': resolve('/src/layout'),
        '@assets': resolve('src/assets'),
        '@router': resolve('/src/router'),
        '@static': resolve('/src/static'),
        '@scss': resolve('/src/assets/scss'),
        '@components': resolve('/src/components'),
        '@constants': resolve('/src/assets/constants')
      },
      extensions: [ '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs' ]
    },
    base: config.mode === 'development' ? './' : '/',  //https://cn.vitejs.dev/guide/static-deploy.html#github-pages
    server: {
      host: config.VITE_HOST,
      port: config.VITE_PORT ? Number(config.VITE_PORT) : 9000,
      open: true,
      cors: true
      // proxy: {
      //   '/api': {
      //     target: 'http://host:port',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    css: { preprocessorOptions: { scss: { charset: false } } }
  });
});