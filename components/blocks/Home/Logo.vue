<template lang="html">
  <transition name="fade">
    <img v-if="loaded" src="~/assets/logo/3dLogo.png" alt="" />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  beforeDestroy() {
    this.loaded = false
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-40%);
  opacity: 0;
}
img {
  opacity: 1;
  transform: translateX(0);
}
@media (max-width: 991px) {
  img {
    opacity: 1;
    transform: translateX(20%) scale(1.2);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(80%) scale(1.25);
    opacity: 0;
  }
}
</style>
