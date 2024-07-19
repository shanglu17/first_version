import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Welcome from './components/Welcome.vue'
import Creation1 from './components/Creation1.vue'
import Creation2 from './components/Creation2.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Welcome },
  { path: '/creation1', component: Creation1 },
  { path: '/creation2', component: Creation2 }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
