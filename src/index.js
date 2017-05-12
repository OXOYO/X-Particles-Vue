/**
 * Created by OXOYO on 2017/5/12.
 */

import Particles from './Particles.vue'

const XParticles = {}

XParticles.installed = false
XParticles.install = function (Vue) {
  if (XParticles.installed) {
    return
  }

  Vue.component('x-particles', Particles)
  XParticles.installed = true
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XParticles)
}

export default XParticles
