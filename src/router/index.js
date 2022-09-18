import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,res,error){
  if(res&&error){
    originPush.call(this,location,res,error);
  }
  else{
    originPush.call(this,location,()=>{}, ()=>{ })}
}

Vue.use(VueRouter)

 



let router= new VueRouter({
  routes,

});
export default router;

//全局守卫
router.beforeEach(async (to,from,next)=>{
  //捞token
let token = store.state.user.token;
let name = store.state.user.userInfo.name;
 if(token){
   if(to.path=='/login'){
     next('/home');
   }
   else{
     if(name){
       next();
     }
     else{
     try {
      await store.dispatch('getUserInfo');
      next();
     } catch (error) {
      await store.dispatch('userLogout');
      next('/login');
     }
     }
   }
 }
 else {
  //用户未登录||目前的判断都是放行.将来这里会'回手掏'增加一些判断
  //用户未登录:不能进入/trade、/pay、/paysuccess、/center、/center/myorder  /center/teamorder
  let toPath = to.path;
  if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
      next('/login?redirect='+toPath);
  } else {
      next();
  }
}

})
