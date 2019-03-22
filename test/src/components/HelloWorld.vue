<template>
  


  <div>
    <h1> 
      
      {{ name }}
    
      {{ getName() }}
      
    </h1>

    <p>
      
    {{ getName() }}

    </p>

    </div>
  

</template>

<script>
export default {
  
  data () {
    return {
      name: 'riyad'
    }
    
  },
  methods :
  {
    getName : function(){
      return 'Ahsan' ;
    }
  }  
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
