import Vue from "vue";
import * as $ from 'jquery'
import * as _ from 'lodash'
import Buefy from "buefy";


import App from "./App.vue";
//
// test commiting little change
//
Vue.config.productionTip = false;

// Plugins
Vue.use(Buefy, {
  defaultIconPack: "mdi"
});


new Vue({
  render: h => h(App)
}).$mount("#app");
