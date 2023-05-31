//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);
//引入home|search模块的仓库
import time from "./time";

export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    time,
  },
});