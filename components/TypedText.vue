<template>
  <div id="typed-text" class="font-bold text-5xl"></div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  data() {
    return {
      typingSpeed: {
        Brisk: 50,
        Slow: 200
      }
    }
  },
  mounted() {
    new TypeIt('#typed-text', {
      speed: this.typingSpeed.Brisk,
      nextStringDelay: 300
    }).type('Hi!')
      .pause(500)
      .break()
      .type(`My name is `)
      .options({ speed: this.typingSpeed.Slow })
      .type('<span class="text-red">Dan Ward</span>.')
      .options({ speed: this.typingSpeed.Brisk })
      .pause(500)
      .break()
      .type(`I'm a web developer,`)
      .break()
      .type('author, technical writer,')
      .break()
      .type('and web technology consultant.')
      .pause(500)
      .exec(async () => {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve()
          }, 2000)
        })
      })
      .break()
      .break()
      .type('I live and work')
      .break()
      .type('in Virginia Beach, VA')
      .break()
      .type('at Marathon Consulting.')
      .go()
  }
}
</script>

<style scoped>

</style>
