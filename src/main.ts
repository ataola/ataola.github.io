import { createApp, defineComponent } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router/index';
import App from '@/App.vue';
import 'normalize.css/normalize.css';
import Particles from 'particles.vue3';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch);

const app = createApp(App);
app.use(router);
app.use(Particles);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

