<template>
  <div id="main-screen-fade-in" class="w-full h-screen overflow-hidden absolute bg-brown-dark">
    <button class="z-20 flex shadow-lg items-center justify-center pin-r pin-t fixed rounded-full bg-white w-12 h-12 mt-4 mr-4 md:hidden"
    @click="toggleMobileMenu">
      <div v-show="mobileMenuIsOpen" class="mt--1 text-5xl bold">
        -
      </div>
      <div v-show="!mobileMenuIsOpen" class="mt--1 text-5xl bold">
        +
      </div>
    </button>
    <div v-show="mobileMenuIsOpen"
    id="mobile-menu"
    class="z-10 text-lg lg:text-2xl fixed w-screen h-screen bg-brown-dark v-fade overflow-y-scroll">
      <div class="flex flex-col items-center justify-center w-full h-full py-4">
        <button class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4 text-white"
        @click="navigateTo('experience')">
          Experience
        </button>
        <button class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4 text-white"
        @click="navigateTo('skills')">
          Skills
        </button>
        <button class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4 text-white"
        @click="navigateTo('writing')">
          Writing
        </button>
        <button class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4 text-white"
        @click="navigateTo('contact')">
          Contact
        </button>
        <div class="text-white">===</div>
        <a class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4"
        href="//github.com/warlyware"
        target="_blank">
          GitHub
        </a>
        <a class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4"
        href="//medium.com/@warlyware"
        target="_blank">
          Medium
        </a>
        <a class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4"
        href="//gitconnected.com/warlyware"
        target="_blank">
          Gitconnected
        </a>
        <a class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark my-4 mx-4"
        href="//www.linkedin.com/in/warlyware/"
        target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
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
  data() {
    return {
      mobileMenuIsOpen: false
    }
  },
  mounted() {
    setTimeout(() => {
      document.getElementById('main-screen-fade-in').style.opacity = 1
    }, 100)
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuIsOpen = !this.mobileMenuIsOpen
    },
    navigateTo(page) {
      this.toggleMobileMenu()
      this.$router.push(page)
    }
  }
}
</script>

<style scoped>
#main-screen-fade-in {
  opacity: 0;
  transition: opacity 0.7s linear;
}
.mt--2 {
  margin-top: -0.5rem;
}
.mt--1 {
  margin-top: -0.25rem;
}
</style>
