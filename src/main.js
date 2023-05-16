import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vuetify/dist/vuetify.min.css'; // Add this line to import Vuetify CSS

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify) // Use Vuetify as a plugin
  .use(ElementPlus)
  .mount('#app');