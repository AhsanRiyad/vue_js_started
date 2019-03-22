
// example one without global object

Vue.component('greeting' , {
	template: "<p> this is component {{name}} <button v-on:click='changeName()' > change name </button> </p>" , 
	data: function(){
		return { name: 'riyad' }
	} , 
	methods : {
		changeName: function(){
			this.name = 'Ahsan' ;
		}
	}
})


// example 2 global object

var data = {
	name : 'riyad'
}

Vue.component('greeting2' , {
	template: "<p> this is component {{name}} <button v-on:click='changeName()' > change name </button> </p>" , 
	data: function(){
		return data ; 
	} , 
	methods : {
		changeName: function(){
			this.name = 'Ahsan' ;
		}
	}
})




var one = new Vue({
	el: '#app-one' , 
	data: {
		title: 'this is the title of one'
	},
	methods : {

	}
});
var two = new Vue({
	el: '#app-two' , 
	data: {

	},
	methods : {
		changeT : function(){
			one.title = 'title changed';
		}
	}
});

