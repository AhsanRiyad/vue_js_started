new Vue({
  el: '#vue-app' ,
  data: {

    hWidth: 400 ,
    name: 'riyad'
  }, 
  methods: {
  	sub : function(){
  		
  		this.hWidth -=50 ;
  	}
  }
})
