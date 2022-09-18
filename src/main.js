import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/views/Home/TypeNav/TypeNav'
import store from '@/store'
import { Button, MessageBox,Message} from 'element-ui';
Vue.component(Button.name, Button,);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
Vue.component(TypeNav.name,TypeNav)
import pagination from '@/components/pagination/pagination'
Vue.component(pagination.name,pagination)
Vue.config.productionTip = false
// 统一引入   api接口中的全部请求
import * as API from '@/api'

new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this;
    //==============================
    Vue.prototype.$API = API;
  },
  render: h => h(App)
}).$mount('#app')
