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
import { mapState, mapActions } from 'vuex'
import Loader from '~/components/blocks/Loader'
export default {
  components: {
    Loader
  },
  computed: mapState('gallery', {
    loader: state => state.loader,
    urlList: state => state.urlList,
    imageRaw: state => state.imageRaw,
    target: state => state.target,
    faded: state => state.faded,
    selected: state => state.selected
  }),
  mounted() {
    this.startMosaic()
  },
  beforeDestroy() {
    this.stopMosaic()
  },
  methods: mapActions('gallery', {
    stopMosaic: 'stop',
    startMosaic: 'start'
  })
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
