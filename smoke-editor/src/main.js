import Vue from 'vue'
import Resource from 'vue-resource'
import Bulma from 'vue-bulma-components'
import App from './App'
import Auth from './auth'
import router from './router'

Vue.use(Resource)
Vue.use(Bulma)
Vue.config.productionTip = false

Vue.http.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`

// Check the user's auth status when the app starts
Auth.checkAuth()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
