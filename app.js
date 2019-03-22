new Vue({
  el: '#vue-app' ,
  data: {
    name: 'riyad' , 
    a: 0
    
  } , 
  computed : {
  	addToA: function(){
  		return this.a + 10 ;
  	}
  }
})
