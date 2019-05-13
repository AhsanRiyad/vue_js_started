import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

import cors from 'cors';

Vue.use(cors);

export const bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
