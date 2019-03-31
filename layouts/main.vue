<template>
  <div id="main-screen-fade-in" class="w-full h-full overflow-hidden absolute">
    <bokeh />
    <home-page-borders class="invisible md:visible" />
    <nuxt />
  </div>
</template>

<script>
import Bokeh from '~/components/Bokeh.vue'
import HomePageBorders from '~/components/HomePageBorders.vue'

export default {
  components: {
    Bokeh,
    HomePageBorders
  },
  mounted() {
    setTimeout(() => {
      document.getElementById('main-screen-fade-in').style.opacity = 1
    }, 100)
  }
}
</script>

<style scoped>
#main-screen-fade-in {
  opacity: 0;
  transition: opacity 0.7s linear;
}
</style>
