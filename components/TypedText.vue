<template>
  <div id="typed-text" class="font-bold text-5xl"></div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  data() {
    return {
      typingSpeed: {
        Instant: 0,
        Brisk: 50,
        Normal: 75,
        Slow: 200
      }
    }
  },
  mounted() {
    new TypeIt('#typed-text', {
      speed: this.typingSpeed.Instant,
      nextStringDelay: 300
    }).pause(600)
      .type('dan@danward.dev:~$ ')
      .pause(1200)
      .options({ speed: this.typingSpeed.Slow })
      .type('exec portfolio')
      .break()
      .break()
      .options({ speed: this.typingSpeed.Normal })
      .type('Hi! 👋')
      .pause(600)
      .break()
      .type(`My name is `)
      .options({ speed: this.typingSpeed.Slow })
      .type('<span class="text-teal-dark">Dan Ward</span>.')
      .options({ speed: this.typingSpeed.Normal })
      .pause(500)
      .break()
      .type(`I'm a web developer,`)
      .break()
      .type('author, technical writer,')
      .break()
      .type('and web technology consultant.')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#1F9D55'
        document.getElementById('typed-text').style.color = '#FFBBCA'
        await new Promise((resolve, reject) => {
          return resolve()
        })
      })
      .break()
      .break()
      .type('I live in')
      .break()
      .type('Virginia Beach, VA')
      .break()
      .type('and work at')
      .break()
      .type('<a href="//marathonus.com" target="_blank">Marathon Consulting</a>')
      .break()
      .type('as a developer')
      .break()
      .type('and consultant.')
      .go()
  }
}
</script>

<style>
  body {
    background-color: #000;
    transition: background-color 1s linear;
  }
  #typed-text {
    color: #f6f6f6;
    transition: color 0.7s linear 0.3s;
  }
</style>
