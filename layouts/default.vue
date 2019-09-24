<template>
  <div id="__app" class="App relative d-flex flex-row">
    <sidebar />
    <loader v-if="loading" />
    <nuxt v-else id="__viewport" />
  </div>
</template>
<script>
import Sidebar from '~/layouts/sidebar'
import Loader from '~/layouts/loader'
export default {
  components: {
    Sidebar,
    Loader
  },

  data() {
    return {
      loading: false
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      this.loading = false
    })
  }
}
</script>
<style lang="scss">
@import '~/vendor/scss/reset.scss';
@import '~/vendor/scss/global.scss';
html,
body {
  width: 100%;
  height: 100%;
  #__app,
  #__nuxt,
  #__layout {
    width: 100%;
    height: 100%;
    #__viewport {
      flex: 1;
      background: $c-bg;
    }
  }
  #__viewport {
    &::before {
      background: transparent;
      content: '<body>';
      position: absolute;
      top: 6.5%;
      left: 7%;
      width: 50px;
      color: #595959;
      font-style: italic;
      font-size: 16px;
      font-family: 'Dancing Script', cursive;
      letter-spacing: 3px;
    }
    &::after {
      background: transparent;
      content: '</body>';
      position: absolute;
      bottom: 6.5%;
      left: 7%;
      width: 50px;
      color: #595959;
      font-style: italic;
      font-size: 16px;
      font-family: 'Dancing Script', cursive;
      letter-spacing: 3px;
    }
  }
}
</style>
