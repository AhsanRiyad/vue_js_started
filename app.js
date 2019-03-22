new Vue({
	el: '#app-one' ,
	data: {
		innerT : '' , 
		valueI : 'hello'
	},

	methods: {
		getInput : function(){
			this.valueI = this.$refs.input1.value;
			this.innerT =  this.$refs.h1_tag.innerText;
			console.log(this.$refs);

		}
	}

});