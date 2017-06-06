// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import XParticles from '../src/index.js'
// import XParticles from '../dist/XParticles.js'
import App from './App'

Vue.config.productionTip = false
console.log('use XParticles', XParticles)
Vue.use(XParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
