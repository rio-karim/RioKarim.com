<template>
  <div class="Home py-5 d-flex align-items-center">
    <div class="container-fluid row py-4">
      <div class="Home__item hero-unit col-12 col-md-4 col-lg-5 pl-5">
        <div class="pl-4">
          <h1 class="mb-1">Hi,</h1>
          <h1 class="mb-1">I'm Rio,</h1>
          <h1 class="mb-2">Web Developer.</h1>
          <p class="tagline mb-3 ml-1">Node JS / SSR / Express</p>
          <nuxt-link to="/contact" class="btn btn-primary btn-large ml-1">
            Contact me
          </nuxt-link>
        </div>
      </div>
      <div class="Home__item col-12 col-md-8 col-lg-7">
        <home-logo />
      </div>
    </div>
  </div>
</template>

<script>
import HomeLogo from '~/components/blocks/Home/Logo'
import MyConfig from '~/rk.config'
export default {
  components: {
    HomeLogo
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 85%;
  height: auto;
}
</style>
