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
    background: black;
  }
</style>

<template>
  <div id="app" class="layout">
    <x-particles id="myParticles" :config="config"></x-particles>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      config: {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#dedede'
          },
          shape: {
            // circle, edge, triangle, polygon, star, image
            type: 'circle',
            stroke: {
              width: 0,
              color: '#192231'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#dedede',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 400
            }
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
    }
  }
}
</script>

