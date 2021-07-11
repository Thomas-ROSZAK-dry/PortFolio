
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

new Vue({
  router, // revient à écrire router: router
  render: createElement => createElement(App)
  
}).$mount('#app');