<template>
  <section class="container px-16 py-16 flex items-end">
    <div id="typed-text" class="font-bold text-5xl"></div>
  </section>
</template>

<script>
import TypeIt from 'typeit'

export default {
  data() {
    return {
      strings: [
        'Hi!',
        'My name is Dan Ward.',
        `I'm a web developer,`,
        'author, technical writer,',
        'and web technology consultant.',
        '',
        'I live and work',
        'in Virginia Beach, VA',
        'at Marathon Consulting.'
      ]
    }
  },
  components: { },
  mounted() {
    new TypeIt('#typed-text', {
      strings: this.strings,
      speed: 50,
      nextStringDelay: 200
    }).go()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
