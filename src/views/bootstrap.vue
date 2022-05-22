<template>
  <div class="cover">
    <span class="overlay"></span>
    <div class="logo">
      <h2>
        <img class="avatar" src="../static/brands/zheng.png" alt="郑" />
        <span class="blink">{{ title }}</span>
      </h2>
      <router-link :to="{ name: 'Home' }">{{ tip }}&nbsp;&nbsp;&nbsp;&nbsp;➞</router-link>
    </div>
    <!-- https://dev.to/matteobruni/how-to-create-snow-effects-for-this-christmas-with-tsparticles-4mpd -->
    <Particles id="Particles" :options="snowOption" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Bootstrap',
  setup(props, { emit, slots, attrs }) {
    const tip = ref('点此进入')
    const title = ref('江涛的个人网站')
    const snowOption = reactive({
      fullScreen: {
        zIndex: 1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
          onHover: {
            enable: true,
            mode: 'bubble',
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 4,
          },
          grab: {
            distance: 400,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        links: {
          color: {
            value: '#ffffff',
          },
          distance: 500,
          opacity: 0.4,
          width: 2,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          direction: 'bottom',
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            speed: 1,
            minimumValue: 0.1,
          },
        },
        size: {
          random: {
            enable: true,
          },
          value: {
            min: 1,
            max: 10,
          },
          animation: {
            speed: 40,
            minimumValue: 0.1,
          },
        },
      },
    })

    return {
      tip,
      title,
      snowOption,
    }
  },
})
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url('../static/cover/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 6;
    opacity: 0.4;
    background-color: #fff;
  }

  .logo {
    min-width: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    overflow: hidden;
    text-align: center;
    transition: all 0.2s linear;

    h2 {
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      cursor: default;
      animation: down linear 1s;

      .avatar {
        width: 0.42rem;
        height: 0.42rem;
      }
    }

    a {
      display: block;
      color: #fff;
      opacity: 0.7;
      font-size: 0.24rem;
      text-decoration: none;
      text-shadow: 2px 2px 2px #000000;
      transition: all 0.2s linear;
      animation: up linear 1s;
    }

    a:hover {
      color: #000;
    }
  }
}

@keyframes up {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes up {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes down {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0%);
  }
}

.blink {
  background: -webkit-linear-gradient(
    left,
    #fff,
    #f00 6.25%,
    #ff7d00 12.5%,
    #ff0 18.75%,
    #0f0 25%,
    #0ff 31.25%,
    #00f 37.5%,
    #f0f 43.75%,
    #ff0 50%,
    #f00 56.25%,
    #ff7d00 62.5%,
    #ff0 68.75%,
    #0f0 75%,
    #0ff 81.25%,
    #00f 87.5%,
    #f0f 93.75%,
    #ff0
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: masked-animation 2s linear infinite;
  white-space: nowrap;
}

@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100%, 0;
  }
}
</style>
