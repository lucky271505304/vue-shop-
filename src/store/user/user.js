import {reqGEtCode,reqRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken,getToken ,removeToken} from '@/utils/token'

let state = {

  code: '',
  token: getToken(),
  userInfo: ''
}    
let actions ={
          async getCode({commit},phone){
               let result = await reqGEtCode(phone);
              if(result.code==200){
                  commit('GETCODE',result.data);
                  return 'ok'
              }
              else{
                  return Promise.reject(new Error('faile'));
              }
           },
          async  userRegister({commit},user){
         let result  = await reqRegister(user);
         if(result.code==200){
             return 'ok';
         }
         else{
            return Promise.reject(new Error('faile'));
         }
            },
            //登录  token 令牌
         async   userLogin({commit},data){
                let result = await reqUserLogin(data);
                if(result.code==200){
                    commit('USERLOGIN',result.data.token);
                    //本地持久化存储token  
                    // localStorage.setItem('TOKEN',result.data.token);
                    setToken(result.data.token);
                    return 'ok'
                }
                else{
                    return Promise.reject(new Error('faile'));
                }
            },
            //获取用户信息
          async  getUserInfo({commit}){
        let result = await reqUserInfo ();
        if(result.code==200){
        commit('GETUSERINFO',result.data); 
        }
        
            },
          async  userLogout({commit}){
              //通知服务器清除token
                let result = await reqLogout();  
                if(result.code==200){
                 commit('USERLOGOUT');
                 return 'ok'
                }
                else{
                    return Promise.reject(new Error('faile'));
                }
            }

}

let mutations = {
  GETCODE(state,code){
      state.code = code;
  },
  USERLOGIN(state,token){
      state.token = token;
  },
  GETUSERINFO(state,userInfo){
      state.userInfo = userInfo;
  },
  //清除本地数据
  USERLOGOUT(state){
   state.token ='';
   state.userInfo = '';
   removeToken();
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

