import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import leftSide from './components/leftSide'
import breadcrumbs from './components/breadcrumbs.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App),
    leftSide,
    vuetify,
    breadcrumbs,
    axios,
}).$mount('#app')