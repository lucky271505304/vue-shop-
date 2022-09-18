import axios from 'axios'
import store from '@/store'

let requests = axios.create({
   baseURL: "/api",
   timeout: 5000

})

requests.interceptors.request.use(config => {
  //请求拦截器:请求头【header】,请求头能否给服务器携带参数
  //请求拦截器：其实项目中还有一个重要的作用,给服务器携带请求们的公共的参数
  //进度条开始
if(store.state.detail.uuid_token){
  //给请求头添加一个字段
  config.headers.userTempId = store.state.detail.uuid_token;
}
//需要携带token携带给服务器
if(store.state.user.token){
  config.headers.token = store.state.user.token;
}
  return config;
});
requests.interceptors.response.use((res) => {
  //res:实质就是项目中发请求、服务器返回的数据
  //进度条结束
  return res.data;
}, (err) => {
  //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
  alert(err.message);
  //终止Promise链
  return new Promise();
});


export default requests