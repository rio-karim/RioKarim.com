<template lang="html">
  <div class="Loader absolute">
    <div id="no-freeze-spinner" class="Loader__spinner true-center">
      <div class="true-center">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmaddesigns.de%2Frwd-sass-compass%2Fimg%2Fsass-logo-new.png&f=1&nofb=1"
          alt=""
        />
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjuc-paris.jfrog.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F02%2FAWS_logo_white_v2.png&f=1&nofb=1"
          alt=""
        />
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FVue.js_Logo_2.svg%2F512px-Vue.js_Logo_2.svg.png&f=1&nofb=1"
          alt=""
        />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Loader {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    &.filter {
      background: white;
    }
  }
  #no-freeze-spinner {
    transition: all 0.1s linear;
    opacity: 0;
    transform: scale(10);
    z-index: -1;
  }
  #no-freeze-spinner {
    z-index: 9999;
    opacity: 0.3;
    transform: scale(1);
  }
  #no-freeze-spinner > div > div {
    animation-play-state: paused;
    border: 5px solid $c-text;
    border-radius: 50%;
    animation: rotate 1s infinite linear;
    border-left-color: $c-primary;
    width: 100%;
    height: 100%;
  }
  #no-freeze-spinner > div {
    margin: auto;
    border-radius: 50%;
    width: 84px;
    height: 84px;
    padding: 5px;
  }
  #no-freeze-spinner div div {
    animation-play-state: running;
  }
  @keyframes loadicons {
    0% {
      transform: scale(0) translate3d(0, 0, 0);
    }
    11% {
      transform: scale(1.2) translate3d(0, 0, 0);
    }
    22% {
      transform: scale(1) translate3d(0, 0, 0);
    }
    33% {
      transform: scale(0) translate3d(0, 0, 0);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  #no-freeze-spinner img {
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: $c-primary;
    width: 29px;
    height: auto;
    line-height: 1;
    transform: scale(0) translate3d(0, 0, 0);
  }
  #no-freeze-spinner img:nth-of-type(1) {
    animation: loadicons 3s infinite ease-in-out;
  }
  #no-freeze-spinner img:nth-of-type(2) {
    animation: loadicons 3s 1s infinite ease-in-out;
  }
  #no-freeze-spinner img:nth-of-type(3) {
    animation: loadicons 3s 2s infinite ease-in-out;
  }
}
</style>
