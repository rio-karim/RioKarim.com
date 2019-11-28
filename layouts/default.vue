<template>
  <div class="default">
    <div id="__app" class="App relative d-flex flex-row">
      <notifications
        :speed="500"
        group="default"
        class="Notifications"
        animation-name="v-fade-left"
      />
      <sidebar />
      <loader v-if="loading" />
      <nuxt id="__viewport" v-else />
    </div>
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
      overflow: hidden;
    }
  }
  .Notifications {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 200px;

    .vue-notification {
      padding: 10px;
      margin: 0 5px 5px;
      position: relative;
      font-size: 12px;

      color: #ffffff;
      background: #44a4fc;
      border-left: 5px solid #187fe7;
      .notification-title {
        font-weight: bold;
        padding-bottom: 7px;
      }
      &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
      }

      &.error {
        background: #e54d42;
        border-left-color: #b82e24;
      }

      &.success {
        background: #68cd86;
        border-left-color: #42a85f;
      }
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
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(500px) scale(0.2);
}
</style>
