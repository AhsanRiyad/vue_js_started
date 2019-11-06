/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'



Vue.use(Vuetify)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Routes from './routes'


const router = new VueRouter({
	routes : Routes,
	//mode: history
});


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar', require('./components/navbar.vue').default);
//Vue.component('add_meal', require('./components/add_meal.vue').default);
//Vue.component('add_bazar', require('./components/add_bazar.vue').default);
Vue.component('toolbar', require('./components/toolbar.vue').default);
Vue.component('App', require('./App.vue').default);

//Vue.component('HelloWorld', require('./components/HelloWorld.vue').default);


import hellow from './components/HelloWorld.vue'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource);
Vue.use(moment);

Vue.component('greetings' , {

	template: '<p>this is a template</p>'


})



const app = new Vue({
    el: '#app',
    data: {
    	name: 'riyad',
    	status: false,
        
    },
    methods: {
    	add_meal:function(){
    		this.status = true;
    		//alert(this.status);
    	}
    },
    router: router,
    components : { 
        'hellow': hellow

     }
});


