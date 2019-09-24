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
      <div class="Skills__item col-12 col-md-8 col-lg-7"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.Skills {
  &__item {
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
