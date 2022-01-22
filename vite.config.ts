import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ((mode: string) => {
  const config = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
    // base: config.mode === 'development' ? './' : 'https://zhengjiangtao.cn',  //https://cn.vitejs.dev/guide/static-deploy.html#github-pages
    base: './',
    server: {
      host: config.VITE_HOST,
      port: config.VITE_PORT ? Number(config.VITE_PORT) : 9000,
      open: true,
      cors: true
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    }
  })
})