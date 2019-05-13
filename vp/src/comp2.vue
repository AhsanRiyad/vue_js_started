<template>
	<div>
		<h1>nesting locally</h1>
		<p>
			this is comp2 {{ msg }}
		</p>
	</div>
</template>



<script>

	import { bus } from './main';

	export default{
	data(){
		return {
			msg: 'this is comp2'
		}
	},
	created() {
		bus.$on('changeT' , (data)=>{
			this.msg= 'changing comp2 data';
		});
	}	

	}
</script>