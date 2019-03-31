<template>
  <div>
    <bokeh />
    <home-page-borders />
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
  }
}
</script>
