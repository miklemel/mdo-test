import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store';

import App from './App.vue'
import router from './router'
import './assets/main.css'

Vue.use(Vuex)


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
