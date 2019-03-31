<template>
  <div class="text-white">
    <proficiencies />
  </div>
</template>

<script>
import Proficiencies from '~/components/Proficiencies.vue'

export default {
  layout: 'main',
  components: {
    Proficiencies
  }
}
</script>

<style lang="scss">
body {
  background: linear-gradient(to top left, #342815, 10%, #211a10 20%,  #211a10 50%, #211a10);
  height: 100vh;
  overflow: hidden;
}
a {
  text-decoration: none;
}
</style>
