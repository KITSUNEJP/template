import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  fab
} from '@fortawesome/free-brands-svg-icons'
import {
  far
} from '@fortawesome/free-regular-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");