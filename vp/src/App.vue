<template>
  <div id="app">
    

  <comp v-bind:Msg='msg' v-on:changeT='changeT($event)'></comp>
  
  <p>
    this is root varable {{ msg }}
  </p>


  </div>
</template>

<script>

import Comp from './comp1.vue'

export default {
  components: {
    'comp' : Comp
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
