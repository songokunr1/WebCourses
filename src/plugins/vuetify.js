import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import Vue from 'vue';
import Vuetify from 'vuetify'; // Add this import

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    defaultTheme: 'light'
  }
});