import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import myOrder from '@/views/Center/myOrder'
import groupOrder from '@/views/Center/groupOrder'
export default [
    {
      path: '/home',
      component: Home
    },
    {
       path: '/center',
       component: Center,
       //二级路由组建
       children:[
         {
           path: 'myorder',
           component: myOrder
         },
         {
           path: 'grouporder',
           component: groupOrder
         },{
           path: '/center',
           redirect: '/center/myorder',
         }
       ]
    },
    {
      path: '/paysuccess',
      component: PaySuccess
    },
    {
      path: '/pay',
      component: Pay,
       //路由独享守卫
      beforeEnter: (to,from,next)=>{
        if(from.path == '/trade'){
          next();
        }
        else{
          next(false);
        } 
      }
    },
    {
      path: '/trade',
      component: Trade,
      //路由独享守卫
      beforeEnter:(to,from,next) =>{
        // 必须从shopcart进才放行
         if(from.path=='/shopcart'){
           //放行
              next();
         }
         else{
           next(false);
         }
      }
    },
    {
      path:'/addcartsuccess',
      component: AddCartSuccess,
      name: 'addcartsuccess',

    },
    {
      path: '/shopcart',
      component: ShopCart,
      name: 'shopcart'
    },
    {
      path: '/search/:keyword?',
      component: Search,
      name: 'search'
    },
    { 
      path: '/detail/:skuid?',
      component: Detail
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/register',
      component: Register,
      name: 'register'
    },
    //重定向
    {
      path: '*',
      redirect: '/home'
    }
 ]