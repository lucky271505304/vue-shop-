import {reqGoodsInfo,reqAddShop} from '@/api'
import {getUUID} from '@/utils/uuid_token'

let state = {
          goodinfo: {},
          uuid_token: getUUID()
}

let actions = {
      async getGoodInfo({commit},skuId){
           let result = await reqGoodsInfo(skuId);
           if(result.code == 200){
               commit('GETGOODINFO',result.data);
           }
       },
      async addShopCart({commit},{skuId,skuNum}){
           let result = await reqAddShop(skuId, skuNum);
           if(result.code==200){
               return 'ok'
           }
           else{
               return Promise.reject(new Error('faile'));
           }
       }
}

let mutations = {
          GETGOODINFO(state,goodinfo){
              state.goodinfo = goodinfo;
          }
}

let getters = {
       categoryView(state){
       return state.goodinfo.categoryView || {};
       },
       skuInfo(state){
           return state.goodinfo.skuInfo ||{};
       },
       spuSaleAttrList(state){
           return state.goodinfo.spuSaleAttrList || [];
       }
}

export default {
    state,
    actions,
    mutations,
    getters,
}