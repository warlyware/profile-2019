<template>
  <section>
    <button id="go-home"
    class="flex shadow-lg justify-center pin-r absolute rounded-full bg-white w-16 h-16 mr-8"
    @click="goToHome()">
      <div class="self-center text-5xl bold">
        >
      </div>
    </button>
    <div class="px-8 md:px-24 py-16 flex items-end min-h-screen">
      <typed-text />
    </div>
  </section>
</template>

<script>
import TypedText from '~/components/TypedText.vue'

export default {
  components: { TypedText },
  methods: {
    async goToHome() {
      document.getElementsByTagName('body')[0].style.backgroundColor = '#FFF9C2'
      document.getElementById('typed-text').style.opacity = '0'
      document.getElementById('go-home').style.opacity = '0'
      await setTimeout(() => {
        this.$router.push('home')
      }, 500)
    }
  }
}
</script>

<style scoped>
  #go-home {
    transition: opacity 0.3s linear;
    top: calc(50% - 32px);
  }
</style>
