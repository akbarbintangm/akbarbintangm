// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Akbar Bintang Mahendra - Full Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Personal profile of Akbar Bintang Mahendra, a Full Stack Developer focused on backend engineering, system integration, and frontend delivery.'
        }
      ]
    }
  }
})
