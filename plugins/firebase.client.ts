import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { firebase } = config.public
  let app: any
  let auth = {}
  try {
    app = initializeApp({ ...firebase })
    auth = getAuth(app)
  } catch(e) {
    console.error(e)
    app = null
  }
  
  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth
    }
  }
})
