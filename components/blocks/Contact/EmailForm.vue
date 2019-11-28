<template lang="html">
  <form action="javascript:void(0);">
    <div class="row row-contact">
      <div class="form-group p-3 mb-2 mr-1">
        <input
          id="name"
          v-model="$store.state.contact.name"
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
          v-model="$store.state.contact.email"
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
        v-model="$store.state.contact.subject"
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
        v-model="$store.state.contact.message"
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
      @click="sendEmail()"
      :class="{ disabled: !$store.state.contact.available }"
      :disabled="!$store.state.contact.available"
      name="submit"
      type="submit"
      class="btn btn-primary float-right"
    >
      Send
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    sendEmail() {
      this.$store.dispatch('contact/sendEmail').then(resp => {
        this.$notify({
          group: 'default',
          title: resp.title,
          text: resp.message
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
