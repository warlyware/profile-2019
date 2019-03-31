<template>
  <div>
    <bokeh />
    <div class="name-left tracking-wide screen-edge text-white text-xl flex justify-center absolute min-h-screen pin-r pin-t shadow-lg">
      <h1 class="mx-2">
        {{ name }}
      </h1>
    </div>
    <div class="name-right tracking-wide screen-edge text-white text-xl flex justify-center absolute min-h-screen pin-l pin-t shadow-lg">
      <h1 class="mx-2">
        {{ name }}
      </h1>
    </div>
    <div class="tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-t shadow-lg uppercase">
      <nuxt-link class="my-4" to="home">
        Proficiencies
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Code
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="writing">
        Writing
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Contact
      </nuxt-link>
    </div>
    <div class="tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-b shadow-lg uppercase">
      <a class="my-4" href="//github.com/warlyware" target="_blank">
        GitHub
      </a>
      <div class="mx-8">
        |
      </div>
      <a class="my-4" href="//twitter.com/warlyware" target="_blank">
        Twitter
      </a>
    </div>
    <div class="px-32 py-16 flex flex-col justify-center items-center text-white h-screen">
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
export default {
  components: {
    Bokeh
  },
  data() {
    return {
      name: ':: DAN WARD ::',
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
.screen-edge {
  background-color: RGBA(239, 242, 243, 0.02);
}
.name-right {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.name-left {
  h1 {
    opacity: 1;
  }
  background-color: RGBA(239, 242, 243, 0.02);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}
</style>
