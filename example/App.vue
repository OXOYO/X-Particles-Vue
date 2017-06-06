/**
* Created by OXOYO on 2017/5/12.
*
*/

<style lang="less">
  html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    height: 100%;
    width: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  .layout {
    background: #383838;
  }
  .particles-background {
    background: #383838;
    height: 100%;
    width: 100%;
  }
</style>

<template>
  <div id="app" class="layout">
    <x-particles id="myParticles" class="particles-background" :config="config"></x-particles>
  </div>
</template>

<script>
  import defConfig from './config/default.js'
//  import defConfig from './config/nasa.js'
//  import defConfig from './config/bubble.js'
//  import defConfig from './config/snow.js'

  export default {
    name: 'app',
    data () {
      return {
        config: {}
      }
    },
    created: function () {
      let _t = this

      _t.config = defConfig
    }
  }
</script>

