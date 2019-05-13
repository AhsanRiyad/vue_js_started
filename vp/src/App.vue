<template>
  <div id="app">
    

  <comp v-bind:Msg='msg' v-on:changeT='changeT($event)'></comp>
  
  <p>
    this is root varable {{ msg }}
  </p>
  
  
  <comp2></comp2>



  </div>
</template>

<script>

import Comp from './comp1.vue';
import Comp2 from './comp2.vue';

export default {
  components: {
    'comp' : Comp,
    'comp2' : Comp2
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeT: function(event){
      this.msg = 'hi';
    }
  }
}
</script>
