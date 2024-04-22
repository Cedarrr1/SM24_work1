import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Tmap from "@map-component/vue-tmap";

createApp(App)
    .use(store)
    .use(router)
    .use(Tmap)
    .mount('#app');

