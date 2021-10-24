import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import './assets/styles/app.scss'
import i18n from './i18n'

import BaseBox from './components/reusables/Box.vue';
Vue.component('BaseBox', BaseBox);


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
