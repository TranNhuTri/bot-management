// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
});