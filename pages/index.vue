<template>
  <div class="Home py-lg-5 d-flex align-items-lg-center">
    <div class="container-fluid py-lg-4 d-flex align-items-center">
      <div class="row row--home">
        <div class="Home__item hero-unit col-12 col-md-5 col-lg-5 pl-lg-5">
          <div class="pl-lg-4">
            <h1 v-if="hasMounted" class="mb-1">Hi,</h1>
            <h1 v-if="hasMounted" class="mb-1">
              I'm <span class="primary font-weight-bold">R</span>io,
            </h1>
            <h1 v-if="hasMounted" class="mb-2">Web Developer.</h1>
            <p v-if="hasMounted" class="tagline mb-3 ml-1">
              Node JS / SSR / Express
            </p>
            <nuxt-link
              v-if="hasMounted"
              to="/contact"
              class="btn btn-primary btn-large ml-1"
            >
              Contact me
            </nuxt-link>
          </div>
        </div>
        <div class="Home__item col-12 col-md-7 col-lg-7">
          <home-logo />
        </div>
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
  },
  data() {
    return {
      hasMounted: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.hasMounted = true
    }, 50)
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 85%;
  height: auto;
}
</style>
