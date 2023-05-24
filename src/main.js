import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vuetify/lib/framework'; // Update the import statement
import './global.css'; // Import the global CSS file

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(ElementPlus)
  .mount('#app');
