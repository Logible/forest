import Vue from 'vue'
import App from './App.vue'

//注册全局组件
import Top from "@/components/Top"
//引入路由
import router from '@/route/index'
//引入Vuex
import store from '@/store/index'

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//引入全局组件: 第一个参数:全局组件的名字
// 第二个参数: 哪一个组件
Vue.component(Top.name, Top)

//生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
