// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Kaspar Digital - Software Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Software engineer with C++ and backend expertise, fullstack web and cross-platform mobile development. Creator of Snake MODERN.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'Kaspar Digital - Software Engineer' },
        { property: 'og:description', content: 'Software engineer: C++, backend, fullstack web, cross-platform mobile development' },
        { property: 'og:type', content: 'website' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kaspar Digital - Software Engineer' },
        { name: 'twitter:description', content: 'C++, backend, fullstack web, cross-platform mobile' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
