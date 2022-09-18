import {reqAddress,reqOrder} from '@/api'

let state = {
    address: [],
    orderInfo: {}
}

let actions ={
   async getUserAddress({commit}){
        let result = await reqAddress();
        if(result.code==200){
            commit('GETUSERADDRESS',result.data);
        }
    },
    async getOrderInfo({commit}){
           let result = await reqOrder();
           if(result.code==200){
               commit('GETORDERINFO',result.data)
           }
    }
}

let mutations = {
    GETUSERADDRESS(state,address){
        state.address = address;
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    }
}

let getters = {

}

export default{
    state,
    actions,
    mutations,
    getters,
}