new Vue({
  el: '#vue-app' ,
  data: {
    name: 'riyad' , 
    job : 'student' , 
    website : 'www.facebook.com/riyadahsan6',
    fullTag: '<p> hello this is a complete emement </p>'
  } , 
  methods: {
  	greet : function(){
  		return 'good morning' ; 
  	}, 
  	time : function(time1){
  		return time1 + ' ' + this.name; 
  	}
  }
})
