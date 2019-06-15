import Vue from "vue"
import Vuex from "vuex"
import api from "../api/index"

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        data:{}
    },
    getters:{

    },
    mutations:{
        getgoto(state,res){
            state.data = res
            
        }
    },
    actions:{
        getuserinfo({commit}){
            api.userinfo().then(res=>{
                commit('getgoto',res.data)
            })
        }
    }
})