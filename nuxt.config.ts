import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,

  css: ["~/assets/scss/style.scss"],

  build: {
    transpile: ["vuetify"]
  },

  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },

  modules: [
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",

    // Vuetify
    (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) => {
        config.plugins.push(vuetify());
      });
    }
  ],

  app: {
    head: {
      title: "Nuxtify3",
      titleTemplate: "%s - " + process.env.npm_package_description,
      meta: [
        {
          name: "description",
          content: process.env.npm_package_description
        }
      ]
    }
  },

  // Pinia Nuxt configurations https://pinia.vuejs.org/ssr/nuxt.html
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },

  nitro: {
    preset: "vercel"
  }
});
