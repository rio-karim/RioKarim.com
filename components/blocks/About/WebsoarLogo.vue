<template lang="html">
  <transition name="fade">
    <img v-if="loaded" src="~/assets/logo/websoar.png" alt="" />
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
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(5%, -5%);
}
img {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
