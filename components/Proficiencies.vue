<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen">
    <modal name="proficiency-deail" transition="modal">
      hello, world!
    </modal>
    <h2 class="self-center text-3xl uppercase mb-4 md:mt-8 font-light">
      Proficiencies
    </h2>
    <div class="relative w-full h-full max-w-2xl overflow-hidden">
      <div
      class="tracking-wide md:text-xl lg:text-3xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap text-justify md:text-center">
        <div v-for="proficiency in proficiencies"
        :key="proficiency"
        class="p-2 lg:p-4 flex-grow"
        @click="showModal(proficiency)">
          <span class="cursor-pointer p-2 bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark ">
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
        'JavaScript (ES6+)',
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
  },
  methods: {
    showModal() {
      this.$modal.show('proficiency-deail')
    }
  }
}
</script>

<style lang="scss">
  modal {
    background-color: green;
  }
  .v--modal-overlay {
    background-color: RGBA(33, 26, 16, 0.8);
  }
  .overlay-fade {
    transition: opacity 0.7s linear;
  }
  .overlay-fade-enter-active, .overlay-fade-leave-active {
    transition: opacity .5s
  }
  .modal-enter-active, .modal-leave-active {
    transition: opacity .7s
  }
  .overlay-fade-enter, .overlay-fade-leave-to, .modal-enter, .modal-leave-to {
    opacity: 0
  }
</style>
