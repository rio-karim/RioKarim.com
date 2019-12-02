<template lang="html">
  <div class="Portfolio">
    <mosaic />
  </div>
</template>

<script>
import Mosaic from '~/components/blocks/Portfolio/Mosaic'
export default {
  head() {
    return {
      title: 'Rio Karim | Gallery'
    }
  },
  components: {
    Mosaic
  }
}
</script>

<style lang="scss" scoped></style>
