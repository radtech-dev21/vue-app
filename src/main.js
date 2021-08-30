import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'

import ForgotPassword from './components/ForgotPassword.vue'
import Register from './components/Register.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
const routes = [
  {path:'/', component:Home}, 
  {path:'/about-us', component:About},
  {path:'/login', component:Login},
  {path:'/register', component:Register},
  {path:'/forgot-password', component:ForgotPassword}
];
const router = new VueRouter({routes});
Vue.config.productionTip = false
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
