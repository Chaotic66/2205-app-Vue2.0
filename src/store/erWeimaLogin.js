export default {
    namespaced:true,
    state:{
        flag:''
    },
    mutations:{
       GET_FLAG(state,payload){
            
            state.flag = payload
            
       }
    },
    actions:{
        
    },
    getters:{

    }
}