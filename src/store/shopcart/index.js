import {reqShopCart,reqDeleteCar,reqUpdate} from  '@/api'

let state = {
       cartList: []
}  
let actions = {
      async getCartList({commit}){
           let result = await reqShopCart();
            if(result.code==200){
                commit('GETCARTLIST',result.data);
            }
       },
       //删除购物车
     async  deleteCarList({commit},skuId){
           let result = await reqDeleteCar(skuId);
           if(result.code==200){
               return 'ok';
           }
           else{
             return Promise.reject(new Error('faile'))
           }
       },
       //修改购物车选中状态
     async  updateChecked({commit},{skuId,isChecked}){
      let result = await reqUpdate(skuId,isChecked);
      if(result.code==200){
        return 'ok';
    }
    else{
        return Promise.reject(new Error('faile'))
      }

    },
    deleteAllCar({dispatch,getters}){
      //获取购物车中全部商品
      let PromiseAll =[];
       getters.cartList.cartInfoList.forEach(item=>{
      let promise=item.isChecked==1?dispatch('deleteCarList',item.skuId):'';
      PromiseAll.push(promise);
       })
       return Promise.all(PromiseAll);
    },
    //修改全部产品状态
    updateAllCarList({dispatch,state},isChecked){
        //  console.log(state);
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item=>{
        let promise =  dispatch('updateChecked',{skuId:item.skuId,isChecked})
        promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
}

let mutations = {
    GETCARTLIST(state,cartList){
          state.cartList = cartList;
    }
}

let getters = {
        cartList(state){
            return state.cartList[0] || {}
        },
        // cartInfoList(state){
        //   return state.
        // }
}

export default {
    state,
    actions,
    mutations,
    getters,
}