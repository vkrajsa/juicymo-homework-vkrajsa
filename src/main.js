import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import './assets/styles/app.scss'
import i18n from './i18n'

import BaseBox from './components/reusables/Box.vue';
import ErrorMessage from "./components/reusables/ErrorMessage.vue";


Vue.component('BaseBox', BaseBox);
Vue.component('ErrorMessage', ErrorMessage);


Vue.filter("formatDate", (date) => {
  return date.split('T')[0].split('-').reverse().join('-');
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
