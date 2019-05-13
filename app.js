new Vue({
    el: '#app',
    data: {
        name: 'Riyad',
        website: 'http://www.riyadahsan.com'
    }, 
    methods: {
    	time: function(){
    		return 'now it is 2.40PM';
    	},
    	greet: function(param){
    		return 'this is param';
    	}
    }
});