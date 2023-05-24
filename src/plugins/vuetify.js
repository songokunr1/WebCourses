import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework'; // Update the import statement

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    defaultTheme: 'light'
  }
});