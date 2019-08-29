<template>
  <div>
      <button @click="addFun">+</button>
      <button @click="reductionFun">-</button>
      <h1>vuex测试页面</h1>
      <h2>{{this.$store.state.count}}</h2>
      <h2>通过getter获取{{this.$store.getters.getStateCount}}</h2>
      <div style="border: 1px solid red;margin-top:50px;">
          {{count1}}
      </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    name:'Test'
    ,methods:{
      addFun(){
        this.$store.dispatch("addFun");
      },
      reductionFun(){
        var n=10;
        this.$store.dispatch("reductionFun",n);
      }
    },
    computed:{
      ...mapState({
       count1:state=>state.count 
      })
    }
}
</script>

<style>

</style>