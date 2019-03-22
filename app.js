new Vue({
  el: '#vue-app' ,
  data: {
    name: 'riyad' , 
    job : 'student'
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
