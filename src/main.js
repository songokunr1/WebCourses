/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
import ElementPlus from 'element-plus';
import './global.css'; // Import the global CSS file

registerPlugins(app)
app.use(ElementPlus)
app.mount('#app')
