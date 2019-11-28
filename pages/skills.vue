<template>
  <div class="Skills py-5 d-flex align-items-center">
    <div class="container-fluid row py-4">
      <div
        class="Skills__item hero-unit col-12 col-md-4 col-lg-5 pl-5 d-flex align-items-center"
      >
        <div class="pl-4">
          <div class="py-5 Skills__item-header">
            <h1 class="mb-1 primary">Skills & Expertise</h1>
          </div>
          <p class="mb-3">
            My primary area of expertise is front end development, also
            comfortable working with and building APIs - integrated with MySQL
            or Mongo.
          </p>
          <p class="mb-3">
            I am also capable in basic DevOps duties, such as creating or
            connecting to EC2 instances, setting up environments and working
            with both Git and Docker.
          </p>
          <p class="mb-3">
            My primary framework of choice for frontend development is VueJS and
            Nuxt, using Express as a backend service. With these two I have
            built authentication APIs, server-side rendered operations
            interfaces and fluid websites.
          </p>
          <p class="mb-3">
            Finally I have also made open-source contributions to Vuestorefront,
            an e-commerce pwa platform for Magento store. Having previously used
            both PHP and Laravel, i'm always willing to work with different
            stacks.
          </p>
          <nuxt-link to="/contact" class="btn btn-primary btn-large ml-1">
            Contact me
          </nuxt-link>
        </div>
      </div>
      <div class="Skills__item col-12 col-md-8 col-lg-7 relative">
        <Loader v-if="loader" />
        <div
          id="ajaxsass"
          :class="{ active: !loader }"
          class="col col-media col-logo"
        >
          <canvas id="tagcanvas" width="700" height="700">
            <p>
              Anything in here will be replaced on browsers that support the
              canvas element
            </p>
          </canvas>
          <div id="tags" class="d-none">
            <ul>
              <li><a href="">AJAX</a></li>
              <li><a href="">SASS</a></li>
              <li><a href="">JSON</a></li>
              <li><a href="">REST</a></li>
              <li><a href="">Node JS</a></li>
              <li><a href="">jQuery</a></li>
              <li><a href="">Gulp</a></li>
              <li><a href="">JavaScript</a></li>
              <li><a href="">Git</a></li>
              <li><a href="">ES6</a></li>
              <li><a href="">MongoDB</a></li>
              <li><a href="">BEM</a></li>
              <li><a href="">Agile</a></li>
              <li><a href="">Bootstrap</a></li>
              <li><a href="">AWS</a></li>
              <li><a href="">Socket.io</a></li>
              <li><a href="">Express</a></li>
              <li><a href="">_underscore</a></li>
              <li><a href="">npm</a></li>
              <li><a href="">HTML 5</a></li>
              <li><a href="">PHP</a></li>
              <li><a href="">CSS 3</a></li>
              <li><a href="">HandlebarsJS</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/blocks/Loader'
export default {
  components: {
    Loader
  },
  data() {
    return {
      loader: true
    }
  },
  mounted() {
    const scriptTag = document.createElement('script')
    scriptTag.src = '/tagcanvas.js'
    scriptTag.id = 'TagCanvas'
    document.getElementsByTagName('head')[0].appendChild(scriptTag)
    setTimeout(() => {
      this.loader = false
      window.TagCanvas.Start('tagcanvas', 'tags', {
        textColour: '#3FC4E4',
        outlineColour: 'transparent',
        reverse: true,
        maxSpeed: 0.18,
        zoom: 0.45,
        zoomMax: 0.45,
        stretchX: 3,
        stretchY: 3,
        textHeight: 36,
        shuffleTags: true,
        weight: true,
        weightMode: 'size',
        txtOpt: true,
        textFont: 'Raleway, sans-serif',
        noSelect: true,
        initial: [0.1, -0.05]
      })
    }, 2000)
  },
  destroyed() {
    const tagScript = document.querySelector('#TagCanvas')
    tagScript.parentNode.removeChild(tagScript)
  }
}
</script>

<style lang="scss" scoped>
.Skills {
  &__item {
    .col-media {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
    &-header {
      position: relative;
      &::before {
        background: transparent;
        content: '<h1>';
        position: absolute;
        top: 17%;
        left: 0;
        width: 50px;
        color: #595959;
        font-style: italic;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
      &::after {
        background: transparent;
        content: '</h1>';
        position: absolute;
        bottom: 17%;
        left: 0;
        width: 50px;
        color: #595959;
        font-style: italic;
        font-size: 16px;
        font-family: 'Dancing Script', cursive;
        letter-spacing: 3px;
      }
    }
  }
}
img {
  width: 85%;
  height: auto;
}
</style>
