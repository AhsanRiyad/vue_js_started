

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

