import { reqcategory } from '@/api'

let state = {
     categoryList: []
}

let actions = {
     async categoryList({commit}){
          let result = await reqcategory();
         if(result.code==200){
           commit('CATEGORYLIST',result.data)
         }
      }
}

let mutations = {
    CATEGORYLIST(state,categoryList){
           state.categoryList = categoryList;
       }
}

let getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}