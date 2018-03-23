# x-particles-vue
[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/x-particles/x-particles)
[![Version](https://img.shields.io/npm/v/x-particles.svg)](https://www.npmjs.com/package/x-particles)
[![License](https://img.shields.io/npm/l/x-particles.svg)](https://www.npmjs.com/package/x-particles)
[![NPM downloads](http://img.shields.io/npm/dm/x-particles.svg?style=flat-square)](https://npmjs.org/package/x-particles)
[![Downloads](https://img.shields.io/npm/dt/x-particles.svg)](https://www.npmjs.com/package/x-particles)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/x-particles/dist/XParticles.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)

> A Vue.js particles plugin base on [particles.js](https://github.com/VincentGarreau/particles.js) .

## Example

``` bash
# git clone https://github.com/OXOYO/X-Particles-Vue-Demo.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Usage

``` bash
## Packages install
npm install x-particles --save

## main.js
import XParticles from 'x-particles'

Vue.use(XParticles)

## App.vue
<style lang="less">
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
<script>
```

## Preview
[Demo](https://oxoyo.github.io/X-Particles-Vue-Demo/)

![XParticles](https://raw.githubusercontent.com/OXOYO/X-Particles-Vue/master/docs/images/img_001.png "XParticles")

## Links
- [particles.js](https://github.com/VincentGarreau/particles.js)
- [vue](https://github.com/vuejs/vue)


## License
[MIT](http://opensource.org/licenses/MIT)
