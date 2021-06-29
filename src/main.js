import Vue from 'vue'
import App from './App.vue'

import router from './router/router';

// on démarre notre application Vue 
// en instanciant notre composant App dans l'élément '#app"
// déclarer qu'on utilise l'instance de VueRouter définie dans "router/router.js"
new Vue({ 
  router, // revient à écrire router: router
  render: createElement => createElement(App) 
}).$mount('#app');

