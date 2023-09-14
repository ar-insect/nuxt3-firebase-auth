import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  
  const config = useRuntimeConfig()
  const { VITE_API_HOST } = config.public
  
  const http = axios.create({
    baseURL: VITE_API_HOST,
    headers: {
      common: {},
    },
  })
return {
    provide: {
      http: http,
    },
  }
})
