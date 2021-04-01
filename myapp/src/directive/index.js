import Vue from 'vue'
import size from './size.js'
import copy from './copy.js'
import longpress from './longoress.js'
import debounce from './debounce.js'
import copyText from './copyText.js'
import loading from './loading.js'

// 注册全局指令
Vue.directive('size')
// 注册自定义指令v-copy
// 点击赋值按钮 将copy 的value值赋值到 textera中
Vue.directive('copy',copy)
// 自定义指令
const directives = {
    copy,
    longpress,
    debounce,
    copyText,
    loading,
  }
  
  export default {
    install(Vue) {
      Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
      })
    },
  }