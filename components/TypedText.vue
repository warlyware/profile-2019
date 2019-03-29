<template>
  <div id="typed-text" class="font-bold text-5xl"></div>
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
  mounted() {
    new TypeIt('#typed-text', {
      strings: this.strings,
      speed: 50,
      nextStringDelay: 200
    }).go()
  }
}
</script>

<style scoped>

</style>
