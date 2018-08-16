import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
Vue.use(vueLazyLoad,{
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})