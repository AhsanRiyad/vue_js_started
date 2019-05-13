<template>
	<div>
		
			<h1>this is child  , {{ var1 }}</h1>
			<button v-on:click='evnt()'>
				click it
			</button>
			
	</div>
</template>



<script>
	export default{
		props: ['Msg'],
		data(){

			return {
				var1 : 'child var 1'
			}
		},
		methods: {
			evnt: function(){
				this.$emit('changeT' , 'valu1');
				this.var1 = 'hi';


			}
		}

	}
</script>