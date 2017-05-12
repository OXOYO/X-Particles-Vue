/**
* Created by OXOYO on 2017/5/12.
*
*/

<style scoped lang="less">
  .x-particles {}
</style>

<template>
  <div :id="id" class="x-particles"></div>
</template>

<script>
  import 'particles.js'
  import defConfig from './config.js'

  export default {
    name: 'x-particles',
    props: {
      id: {
        type: String,
        default: 'x-particles'
      },
      config: {
        type: Object,
        default: function () {
          return defConfig
        }
      }
    },
    mounted: function () {
      let _t = this
      if (!window.particlesJS) {
        console.log('particles.js has not load!')
        return
      }
      let config = {
        ...defConfig,
        ..._t.config
      }
      window.particlesJS(_t.id, config, function () {
        console.log('particles created!')
      })
    }
  }
</script>

