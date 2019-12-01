<template lang="html">
  <div
    id="ajaxsass"
    :class="{ active: !loader }"
    class="col col-media col-logo"
  >
    <canvas id="tagcanvas" width="700" height="700">
      <p>
        Anything in here will be replaced on browsers that support the canvas
        element
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('skills', {
    loader: state => state.loader
  })
}
</script>

<style lang="css" scoped></style>
