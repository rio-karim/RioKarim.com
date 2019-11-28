<template lang="html">
  <div class="Mosaic">
    <div class="row">
      <div class="col-4">
        <div
          :class="{ selected: target === 0, faded: target === 0 && faded }"
          :style="`background: url('${imageRaw[0]}') center center no-repeat;`"
          alt=""
        />
      </div>
      <div class="col-4">
        <div
          :class="{ selected: target === 1, faded: target === 1 && faded }"
          :style="`background: url('${imageRaw[1]}') center center no-repeat;`"
          alt=""
        />
      </div>
      <div class="col-4">
        <div
          :class="{ selected: target === 2, faded: target === 2 && faded }"
          :style="`background: url('${imageRaw[2]}') center center no-repeat;`"
          alt=""
        />
      </div>
      <div class="col-4">
        <div
          :class="{ selected: target === 3, faded: target === 3 && faded }"
          :style="`background: url('${imageRaw[3]}') center center no-repeat;`"
          alt=""
        />
      </div>
      <div class="col-4">
        <div
          :class="{ selected: target === 4, faded: target === 4 && faded }"
          :style="`background: url('${imageRaw[4]}') center center no-repeat;`"
          alt=""
        />
      </div>
      <div class="col-4">
        <div
          :class="{ selected: target === 5, faded: target === 5 && faded }"
          :style="`background: url('${imageRaw[5]}') center center no-repeat;`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { each, random, extend } from 'underscore'
export default {
  data() {
    return {
      target: 0,
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
      ]
    }
  },
  mounted() {
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
      }, 750)
      setTimeout(() => {
        this.faded = false
      }, 1500)
    }, 4000)
  },
  beforeDestroy() {
    clearInterval(this.mosaic)
  }
}
</script>

<style lang="scss" scoped>
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
