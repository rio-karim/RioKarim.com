<template lang="html">
  <div class="Mosaic">
    <template v-if="loader"><Loader /></template>
    <transition name="fade">
      <div v-if="!loader" class="row">
        <a :href="urlList[0]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 0, faded: target === 0 && faded }"
            :style="
              `background: url('${imageRaw[0]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
        <a :href="urlList[1]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 1, faded: target === 1 && faded }"
            :style="
              `background: url('${imageRaw[1]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
        <a :href="urlList[2]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 2, faded: target === 2 && faded }"
            :style="
              `background: url('${imageRaw[2]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
        <a :href="urlList[3]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 3, faded: target === 3 && faded }"
            :style="
              `background: url('${imageRaw[3]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
        <a :href="urlList[4]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 4, faded: target === 4 && faded }"
            :style="
              `background: url('${imageRaw[4]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
        <a :href="urlList[5]" target="_blank" class="col-4">
          <div
            :class="{ selected: target === 5, faded: target === 5 && faded }"
            :style="
              `background: url('${imageRaw[5]}') center center no-repeat;`
            "
            alt=""
          />
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { each, random, extend } from 'underscore'
import Loader from '~/components/blocks/Loader'
export default {
  components: {
    Loader
  },
  data() {
    return {
      target: 0,
      loader: true,
      faded: false,
      mosaic: '',
      imageList: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
      imageRaw: [
        require('~/static/gallery/1.png'),
        require('~/static/gallery/2.png'),
        require('~/static/gallery/3.png'),
        require('~/static/gallery/4.png'),
        require('~/static/gallery/5.png'),
        require('~/static/gallery/6.png')
      ],
      urlList: ['/test', '/test', '/test', '/test', '/test', '/test'],
      urlCache: {
        '1.png': '/1',
        '2.png': '/2',
        '3.png': '/3',
        '4.png': '/4',
        '5.png': '/5',
        '6.png': '/6',
        '7.png': '/7',
        '8.png': '/8',
        '9.png': '/9',
        '10.png': '/10',
        '11.png': '/11',
        '12.png': '/12',
        '13.png': '/13',
        '14.png': '/14',
        '15.png': '/15'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loader = false
      this.mosaic = setInterval(() => {
        let newTarget = random(0, 5)
        let targetExists = this.target === newTarget
        while (targetExists) {
          newTarget = random(0, 5)
          targetExists = this.target === newTarget
        }
        this.target = newTarget
        this.faded = true
        setTimeout(() => {
          let newImg = random(1, 15)
          let imgExists = this.imageList.includes(`${newImg}.png`)
          while (imgExists) {
            newImg = random(1, 15)
            imgExists = this.imageList.includes(`${newImg}.png`)
          }
          this.imageList[this.target] = `${newImg}.png`
          this.imageRaw[this.target] = require(`~/static/gallery/${newImg}.png`)
          this.urlList[this.target] = this.urlCache[`${newImg}.png`]
        }, 750)
        setTimeout(() => {
          this.faded = false
        }, 1500)
      }, 4000)
    }, 1500)
  },
  beforeDestroy() {
    clearInterval(this.mosaic)
  }
}
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.Mosaic {
  height: 100%;
  width: 100%;
  .row {
    height: 100%;
    width: 100%;
    .col-4 {
      overflow: hidden;
      padding: 0;
      margin: 0;
      background: $c-bg;
      cursor: pointer;
      transition: transform 0.5s ease-in-out, box-shadow 0.2s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 41px 5px rgba(0, 0, 0, 1);
        transform: scale(1.02);
        z-index: 100000;
      }
      div {
        transition: opacity 1s ease-in-out;
        height: 100%;
        width: auto;
        background-size: auto 100% !important;
        &.faded {
          opacity: 0;
        }
      }
    }
  }
}
</style>
