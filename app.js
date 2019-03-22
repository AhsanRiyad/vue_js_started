new Vue({
  el: '#vue-app' ,
  data: {
    name: 'riyad' , 
    job : 'student' , 
    website : 'www.facebook.com/riyadahsan6',
    fullTag: '<p> hello this is a complete emement </p>',
    x: 0 ,
    y: 0 ,
    age: 100
  } , 
  methods: {
  	greet : function(){
  		return 'good morning' ; 
  	}, 
  	time : function(time1){
  		return time1 + ' ' + this.name; 
  	},
  	updateXY: function(event){
  		this.x = event.offsetX ; 
  		this.y = event.offsetY;
  	},
  	add : function(val){
  		this.age += val ; 
  	} , 
  	subtract : function(val){
  		this.age -= val ; 
  	}
  }
})
