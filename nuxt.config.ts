import { loadEnv } from 'vite'

interface VITE_ENV_CONFIG {
  VITE_API_HOST: string
  VITE_PACK_ENV: string
  VITE_PACK_URL: string
}

const envScript = (process.env as any).npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG

console.log('当前环境：', envData)

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 + Firebase9 Authentication Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt3 + Firebase Authentication Demo'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap'
        }
      ]
    }
  },
  css: [
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css'
  ],
  runtimeConfig: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    public: {
      firebase: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId
      }
    }
  },
  vite: {
    envDir: '~/env', // 指定env文件夹
  },
  typescript: {
    shim: false
  },
  build: {
    transpile: ['primevue'],
    // extend(config: any, ctx: any) {
    //   const path = require('path')
    //   config.devtool = '#source-map'
    // }
  }
})
