import Vue from 'vue';
import App from './App.vue';
import mixin from './mixins';
import router from './router';
import store from './store/';
import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css';

import '@/assets/css/base.css';
import '@/assets/css/display.css';
import '@/plugins/element/index.js';

Vue.mixin(mixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
