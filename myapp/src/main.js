import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import './assets/icomoon/iconfont.css';
import '../public/icomoon/iconfont.css';
//全局的自定义属性，文件执行后，所有的组件都可以使用
// import './directive'
import Directives from './directive'
Vue.use(Directives)

new Vue({
  render: h => h(App),
}).$mount('#app')
