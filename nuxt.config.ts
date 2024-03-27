// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    // Keys within public are also exposed client-side
    // public: { OPENAI_API_KEY: process.env.OPENAI_API_KEY }
},
})
