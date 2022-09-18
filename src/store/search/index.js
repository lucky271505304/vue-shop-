import {reqGetSearchInfo }  from '@/api'

let state = {
    searchList: {}, 
};

let actions ={
    async getSearch({commit},params={}){
        //params 是当用户派发actions的时候，第二个参数传递过来的，至少是一个空对象
         let result = await reqGetSearchInfo(params);
         if(result.code==200){
             commit('GETSEARCH',result.data);
         }
     }
};

let mutations = {
    GETSEARCH(state,searchList){
        state.searchList= searchList;
    }
};

let getters = {
        goodsList(state){
 return state.searchList.goodsList;
           },
           attrsList(state){
               return state.searchList.attrsList;
           },
           trademarkList(state){
               return state.searchList.trademarkList;
           }
}

export default{
    state,
    actions,
    mutations,
    getters
}


