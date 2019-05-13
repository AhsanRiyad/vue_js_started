<template>
  <div id="app">
    
  <comp v-bind:Msg='msg'></comp>

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
  }
}
</script>
