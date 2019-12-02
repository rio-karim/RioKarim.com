<template lang="html">
  <div class="Mosaic">
    <template v-if="loader"><Loader /></template>
    <transition name="fade">
      <div v-if="!loader" class="row">
        <a
          :href="urlList[0]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4"
        >
          <div
            :class="{ selected: target === 0, faded: target === 0 && faded }"
            :style="
              `background: url('${imageRaw[0]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
          />
        </a>
        <a
          :href="urlList[1]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4 Mosaic__tile"
        >
          <div
            :class="{ selected: target === 1, faded: target === 1 && faded }"
            :style="
              `background: url('${imageRaw[1]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
          />
        </a>
        <a
          :href="urlList[2]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4 Mosaic__tile"
        >
          <div
            :class="{ selected: target === 2, faded: target === 2 && faded }"
            :style="
              `background: url('${imageRaw[2]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
          />
        </a>
        <a
          :href="urlList[3]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4 Mosaic__tile"
        >
          <div
            :class="{ selected: target === 3, faded: target === 3 && faded }"
            :style="
              `background: url('${imageRaw[3]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
          />
        </a>
        <a
          :href="urlList[4]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4 Mosaic__tile"
        >
          <div
            :class="{ selected: target === 4, faded: target === 4 && faded }"
            :style="
              `background: url('${imageRaw[4]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
          />
        </a>
        <a
          :href="urlList[5]"
          target="_blank"
          class="col-12 col-md-6 col-lg-6 col-xl-4 Mosaic__tile"
        >
          <div
            :class="{ selected: target === 5, faded: target === 5 && faded }"
            :style="
              `background: url('${imageRaw[5]}') center center no-repeat;`
            "
            class="Mosaic__tile-image"
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60px;
  z-index: 500;
  right: 0;
  .row {
    height: 100%;
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    .Mosaic__tile,
    .col-12 {
      overflow: hidden;
      margin: 0 !important;
      padding: 0 !important;
      background: $c-bg;
      cursor: pointer;
      transition: transform 0.5s ease-in-out, box-shadow 0.2s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 41px 5px rgba(0, 0, 0, 1);
        transform: scale(1.02);
        z-index: 100000;
      }
      &-image {
        transition: opacity 1s ease-in-out;
        height: 100%;
        width: 100%;
        width: auto;
        background-size: cover !important;
        &.faded {
          opacity: 0;
        }
      }
    }
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) {
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767px) {
  .Mosaic {
    position: inherit;
    top: unset;
    left: unset;
    right: unset;
    margin-top: -60px;
    height: 2000px;
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991px) {
  .Mosaic {
    left: 0;
    top: 60px;
  }
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199px) {
}
</style>
