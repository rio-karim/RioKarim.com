<template lang="html">
  <div class="GoogleMaps">
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <!-- <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker> -->
      />
    </GmapMap>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
