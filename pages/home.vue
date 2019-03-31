<template>
  <div class="text-white">
    <bokeh />
    <home-page-borders />
    <div class="px-32 py-16 flex flex-col justify-center items-center h-screen">
      <h2 class="self-center text-3xl uppercase mb-16">
        Proficiencies
      </h2>
      <div class="tracking-wide text-4xl uppercase ml--16">
        <div class="flex flex-wrap content-between text-center">
          <div v-for="proficiency in proficiencies"
          :key="proficiency"
          class="ml-16 flex-grow my-4 text-center">
            {{ proficiency }}
          </div>
        </div>
      </div>
    </div>
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
  data() {
    return {
      proficiencies: [
        'React',
        'Vue',
        'Redux',
        'Vuex',
        'NgRx',
        'Nuxt',
        'Angular',
        'React Native',
        'TypeScript',
        'CSS',
        'Flexbox',
        'SASS',
        'LESS',
        'Responsive Design',
        'Advanced Layouts',
        'PostCSS',
        'Node',
        'Webpack',
        'Server Side Rendering',
        'Modern JavaScript',
        'D3',
        'Highcharts',
        'RxJS',
        'MongoDB',
        'Unit Testing',
        'Google Maps',
        'Grunt',
        'Gulp',
        'Tailwind CSS',
        'Git',
        'Agile',
        'Jira',
        'Technical Writing'
      ]
    }
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
