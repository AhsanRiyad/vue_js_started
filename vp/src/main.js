import Vue from 'vue'
import App from './App.vue'


//import Comp from './comp1.vue'

//Vue.component('comp1' , Comp);

export const bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
