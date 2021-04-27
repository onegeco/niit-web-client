import Vue from 'vue'
import App from './App.vue'
import {initialize} from './router/guards'
import router from './router'
import store from './store'
//import { AbilityBuilder, Ability } from '@casl/ability'
//import { abilityPlugin } from '@casl/vue' 
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

initialize(router);
Vue.config.productionTip = false

/*
const ability = new ability([])

function authAbility(user) {
  return AbilityBuilder.define( (can, cannot ) => {
    if(user.type === '1')

  })
}
*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
