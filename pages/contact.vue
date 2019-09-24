<template>
  <div class="Contact py-5 d-flex align-items-center">
    <div class="container-fluid row py-4">
      <div
        class="Contact__item hero-unit col-12 col-md-4 col-lg-5 pl-5 d-flex align-items-center"
      >
        <div class="pl-4">
          <div class="py-5 Contact__item-header">
            <h1 class="mb-1 primary">Contact me</h1>
          </div>
          <p class="mb-2">
            If you have any questions or would like a chat, please don't
            hesitate to contact me below...
          </p>
          <form action="javascript:void(0);">
            <div class="row row-contact">
              <div class="form-group p-3 mb-2 mr-1">
                <input
                  id="name"
                  class="form__input text"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required=""
                />
                <label class="input__label--highlight" for="name"></label>
              </div>
              <div class="form-group p-3 mb-2 ml-1">
                <input
                  id="email"
                  class="form__input text"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <label class="input__label--highlight" for="email"></label>
              </div>
            </div>
            <div class="form-group p-3 mb-2 col-12">
              <input
                id="subject"
                class="form__input text"
                name="subject"
                type="text"
                placeholder="Subject"
                required=""
              />
              <label class="input__label--highlight" for="subject"></label>
            </div>
            <div class="form-group p-3 mb-2 col-12">
              <textarea
                id="message"
                class="form__input form__input--textarea text"
                name="message"
                style="resize:none;"
                placeholder="Message"
                required=""
                rows="6"
              ></textarea>
              <span class="input__select--highlight"></span>
              <label class="input__label--highlight" for="message"></label>
            </div>
            <button
              name="submit"
              type="submit"
              class="btn btn-primary float-right"
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
      <div class="Contact__item col-12 col-md-8 col-lg-7">
        <google-maps />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from '~/components/blocks/Contact/GoogleMaps'
export default {
  components: {
    GoogleMaps
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

  form {
    .row {
      margin-left: 0;
      margin-right: 0;
      flex-wrap: nowrap;
      .form-group {
        width: 50%;
      }
    }
    .form-group {
      border: none;
      position: relative;
      background: #37393b;
      color: #9c9c9c;
      margin-bottom: 0;
      padding: 0 0;
      .form__input,
      textarea {
        border: none;
        background: #37393b;
        height: 100%;
        color: $c-text;
        width: 100%;
        &:focus {
          color: $c-text;
          outline-width: 0;
          ~ .input__label--highlight {
            background-color: $c-primary;
            width: 100%;
          }
        }
        &:valid {
          ~ .input__label--highlight {
            background-color: limegreen;
            width: 100%;
          }
        }
      }
      .input__label--highlight {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        transition: all 0.3s ease;
      }
    }
  }
}
img {
  width: 85%;
  height: auto;
}
</style>
