import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/scss/materialdesignicons.scss";
import { LightTheme } from "~/themes/LightTheme";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: LightTheme
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
