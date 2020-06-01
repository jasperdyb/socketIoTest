import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: '//localhost:3000',

  // options: { path: "/my-app/" } //Optional options
}))

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
