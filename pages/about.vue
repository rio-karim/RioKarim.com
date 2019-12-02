<template>
  <div class="About py-lg-5 d-flex align-items-center">
    <div class="container-fluid py-lg-4">
      <div class="row">
        <div
          class="About__item hero-unit col-12 col-md-6 col-lg-5 pl-lg-5 d-flex align-items-center"
        >
          <div class="pl-lg-4">
            <div class="pb-4 pb-lg-5 pt-lg-5 About__item-header">
              <h1 class="mb-1 primary">About Me</h1>
            </div>
            <p class="mb-3">
              Since I began my career in 2016 I have built and collaborated on
              open-source projects, microservices front-to-back, and designed
              several great websites.
            </p>
            <p class="mb-3">
              In 2016 I went to Cardiff University to graduate from
              post-graduate Computer Science, there I played with Java, Python
              and JavaScript.
            </p>
            <p class="mb-3">
              I then began working as a freelancer and contractor for several
              clients and companies in the Natwest Accelerator at Central
              Square. Having collaborated and worked solo on multiple CRM
              systems and frontends in JavaScript, such as Datalyse and
              Spanavoice I then began working for PillTime (Online Pharmacy),
              using a mixture of Laravel and JavaScript.
            </p>
            <p class="mb-3">
              Since early 2019 I have been working at another online pharmacy
              (IEC), working with Express, Nuxt, and Magento to build frontends
              and APIs to support their sales and operations.
            </p>
          </div>
        </div>
        <div class="About__item col-12 col-md-6 col-lg-7">
          <websoar-logo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebsoarLogo from '~/components/blocks/About/WebsoarLogo'
export default {
  components: {
    WebsoarLogo
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.About {
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

@media (max-width: 991px) {
  .About {
    &__item {
      &-header {
        &::before {
          top: -25%;
          left: 10%;
        }
        &::after {
          bottom: 17%;
        }
      }
    }
  }
}
</style>
