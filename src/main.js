// 导入 Vue.js
import Vue from 'vue'
// 导入 App.vue 组件
import App from './App.vue'
// 导入路由组件
import router from './router'
// 导入全局验证指令
import './directives'
// 导入组件
import './components'
// 导入状态
import store from './store'

// 设置 Vue 在启动时是否生成生产提示
Vue.config.productionTip = false

// 实例化一个 Vue 对象，并挂载到 index.html 文件的 id="app" 的元素
new Vue({
  router,
  store,
  // render 渲染函数
  render: h => h(App),
  created() {
    console.log(this.$options.store)
  }
}).$mount('#app')
