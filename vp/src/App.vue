<template>
  <div id="app">
    

  <comp v-bind:Msg='msg' v-on:changeT='changeT($event)'></comp>
  
  <p>
    this is root varable {{ msg }}
  </p>
  
  
  <comp2></comp2>

  <button v-on:click='getRev'>
    getRev
  </button>

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
    },
    getRev: function(){
      this.$http.get('http://localhost:4000/get_reviews', {
                title: 't',
                body: 'ff',
                userId: 1
            }).then(function(data){
                console.log(data);
                
            });
    }
  }
}
</script>
