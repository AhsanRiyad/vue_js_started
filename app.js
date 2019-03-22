new Vue({
  el: '#vue-app' ,
  data: {
    
    statusR  : true ,
    statusG : false
    
  } , 
  computed : {
  	classList : function(){
  		return { red: this.statusR , 
  			green: this.statusG } 
  	} 
  }
})
