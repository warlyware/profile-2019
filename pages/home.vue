<template>
  <div class="text-white">
    <bokeh />
    <home-page-borders />
    <proficiencies />
  </div>
</template>

<script>
import Bokeh from '~/components/Bokeh.vue'
import Proficiencies from '~/components/Proficiencies.vue'
import HomePageBorders from '~/components/HomePageBorders.vue'

export default {
  components: {
    Bokeh,
    HomePageBorders,
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
.ml--16 {
  margin-left: -4rem;
}
</style>
