<template>
  <div class="Contact">
    <div class="container-fluid p-0">
      <div class="row">
        <div
          class="Contact__item hero-unit px-4 col-12 col-md-4 col-lg-5 d-flex align-items-center"
        >
          <div class="pl-4">
            <div class="py-5 Contact__item-header">
              <h1 class="mb-1 primary">Contact me</h1>
            </div>
            <p class="mb-2">
              If you have any questions or would like a chat, please don't
              hesitate to contact me below...
            </p>
            <email-form />
          </div>
        </div>
        <div class="Contact__item col-12 col-md-8 col-lg-7">
          <google-maps />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from '~/components/blocks/Contact/GoogleMaps'
import EmailForm from '~/components/blocks/Contact/EmailForm'

export default {
  components: {
    GoogleMaps,
    EmailForm
  }
}
</script>

<style lang="scss" scoped>
.Contact {
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
