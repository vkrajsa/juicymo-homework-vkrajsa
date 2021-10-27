import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import './assets/styles/app.scss'
import i18n from './i18n'

import BaseBox from './components/reusables/Box.vue';
import ErrorMessage from "./components/reusables/ErrorMessage.vue";
import AppSpinner from "./components/reusables/AppSpinner.vue";
import BaseButton from "./components/reusables/BaseButton.vue";
Vue.component('BaseBox', BaseBox);
Vue.component('BaseButton', BaseButton);
Vue.component('ErrorMessage', ErrorMessage);
Vue.component('AppSpinner', AppSpinner);

Vue.filter("formatDate", (date) => {
  return date.split('T')[0].split('-').reverse().join('-');
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
