import requests from './requests'

export const reqcategory = ()=>{
          return requests({url:"/product/getBaseCategoryList",method:"get"})
}

// //搜索模块   传参数params/demo     至少一个空对象  /api/list
export const  reqGetSearchInfo = (params) => requests({url:"/list",method:'post',data:params}) 


// /api/item/{ skuId }    GET   详情页
export const reqGoodsInfo = (skuId) => requests({url:`/item/${ skuId }`,method:'get'});

//添加到购物车    /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddShop = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

export const reqShopCart = ()=>requests({url:'/cart/cartList',method:'GET'});

export const reqDeleteCar = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})

//修改商品的选中状态
export const reqUpdate = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码   /api/user/passport/sendCode/{phone}
export const reqGEtCode =(phone) =>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});


//注册用户   /user/passport/register    post
 export const reqRegister = (data) => requests({url:'/user/passport/register',method:'post',data:data})

 //登录   /api/user/passport/login
 export const reqUserLogin =(data) => requests({url:'/user/passport/login',data:data,method:'post'})

 //获取用户信息   /user/passport/auth/getUserInfo     携带token
 export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

 //退出登录
 export const reqLogout =()=> requests({url:'user/passport/logout',method:'get'})

 //获取用户地址信息

 export const reqAddress =() => requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

 //获取商品清单  order/auth/trade

 export const reqOrder = () => requests({url:'order/auth/trade',method:'get'});

 //提交订单的接口  /order/auth/submitOrder?tradeNo={tradeNo}
  export const reqSubmit = (tradeNo,data) =>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})

  //获取订单支付信息  /payment/weixin/createNative/{orderId}  get
  export const    reqPayInfo = (orderId) =>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

  //支付状态
  export const reqPay = (orderId) =>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

  // 获取订单列表   /order/auth/{page}/{limit}   get 
  export const reqCenter = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get',})