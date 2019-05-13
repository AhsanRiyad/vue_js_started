new Vue({
    el: '#app',
    data: {
        name: 'Riyad',
        website: 'http://www.riyadahsan.com',
        count: 0,
        val: '',
        cond: 'riyad'
    }, 
    methods: {
    	time: function(){
    		return 'now it is 2.40PM';
    	},
    	greet: function(param){
    		return 'this is param';
    	}
    },
    computed: {
    	comp1: function(){
    		return 'hellow';
    	}
    }
});