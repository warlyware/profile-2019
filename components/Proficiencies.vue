<template>
  <div class="px-32 py-16 flex flex-col justify-center items-center h-screen">
    <h2 class="self-center text-3xl uppercase my-8">
      Proficiencies
    </h2>
    <div class="relative w-full h-full overflow-hidden ml--16">
      <div
      class="tracking-wide text-4xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap content-between text-center">
        <div v-for="proficiency in proficiencies"
        :key="proficiency"
        class="ml-16 flex-grow my-4 text-center">
          {{ proficiency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
