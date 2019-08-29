import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store=new Vuex.Store({
    state:{
        count:1
    },
    getters:{
        getStateCount(state){
            return state.count+1;
        }
    },
    mutations:{
       add(state){
           state.count=state.count+1;
       },
       reduction(state,n){
           state.count=state.count-n;
       }
    },
    actions:{
        addFun(context){
            context.commit("add");
        },
        reductionFun(context,n){
            context.commit("reduction",n);
        }
    }
})
export default store;