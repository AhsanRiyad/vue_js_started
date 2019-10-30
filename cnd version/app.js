new Vue({
	el: '#app',
	vuetify: new Vuetify(),
	data: {
		name: 'Riyad'
	},
	methods: {

		hi: function(){
			alert('hi');
		},
		post: function(){ this.$http.post('http://jsonplaceholder.typicode.com/posts', {
			title: 'rfaef',
			body: 'raefaref',
			userId: 1
		}).then(function(data){
			console.log(data);
			alert(data);
		})
	}
}



})