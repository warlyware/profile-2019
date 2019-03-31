<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen">
    <h2 class="self-center text-3xl uppercase mb-4 md:mt-8 font-light">
      Proficiencies
    </h2>
    <div class="relative w-full h-full max-w-xl overflow-hidden">
      <div
      class="tracking-wide md:text-xl lg:text-3xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap text-justify md:text-center">
        <div v-for="proficiency in proficiencies"
        :key="proficiency"
        class="p-4 flex-grow">
          <span class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark ">
            {{ proficiency }}
          </span>
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
