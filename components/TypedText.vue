<template>
  <div id="typed-text" class="font-bold text-lg sm:text-2xl md:text-3xl lg:text-5xl absolute pb-8" />
</template>

<script>
import TypeIt from 'typeit'

export default {
  data() {
    return {
      typeItInstance: null,
      typingSpeed: {
        Instant: 0,
        Brisk: 50,
        Normal: 65,
        Slow: 300
      }
    }
  },
  mounted() {
    this.typeItInstance = new TypeIt('#typed-text', {
      speed: this.typingSpeed.Normal,
      nextStringDelay: 300
    })
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#000'
        document.getElementById('typed-text').style.color = '#f6f6f6'
        await new Promise((resolve, reject) => {
          return resolve()
        })
      })
      .pause(600)
      .type('Hi! 👋')
      .pause(600)
      .break()
      .type(`My name is `)
      .options({ speed: this.typingSpeed.Slow })
      .type('<span class="text-teal-light">Dan Ward</span>.')
      .options({ speed: this.typingSpeed.Normal })
      .pause(500)
      .break()
      .type(`I'm a frontend focused`)
      .break()
      .type(`full stack web developer,`)
      .break()
      .type('author, technical writer,')
      .break()
      .type('and web technology consultant.')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#1F9D55'
        document.getElementById('typed-text').style.color = '#FFBBCA'
        await new Promise((resolve, reject) => resolve())
      })
      .break()
      .type('')
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
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'darkblue'
        document.getElementById('typed-text').style.color = 'orange'
        await new Promise((resolve, reject) => resolve())
      })
      .break()
      .type('')
      .break()
      .type('I am the')
      .break()
      .type('author of the')
      .break()
      .type(`<a href="//www.packtpub.com/application-development/react-native-cookbook-second-edition" target="_blank">React Native Cookbook</a>`)
      .break()
      .type('Second Edition')
      .break()
      .type('from <a href="//www.packtpub.com" target="_blank">Packt Publishing</a>.')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'tan'
        document.getElementById('typed-text').style.color = 'maroon'
        await new Promise((resolve, reject) => resolve())
      })
      .break()
      .type('')
      .break()
      .type('I am the coeditor')
      .break()
      .type('and cofounder of the')
      .break()
      .type('Medium coding blog')
      .break()
      .type('<a href="//levelup.gitconnected.com" target="_blank">levelup.gitconnected.com</a>,')
      .break()
      .type('which recently surpassed')
      .break()
      .type('10,000 followers! 🥳')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#000'
        document.getElementById('typed-text').style.color = '#f6f6f6'
        await new Promise((resolve, reject) => resolve())
      })
      .break()
      .type('')
      .break()
      .type('Thanks for stopping by!')
      .break()
      // .type('')
      // .options({ speed: this.typingSpeed.Slow })
      // .break()
      // .type('<img class="w-12 h-12" src="/images/conga-parrot.gif" />')
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#FFF9C2'
        document.getElementById('typed-text').style.opacity = '0'
        document.getElementById('go-home').style.opacity = '0'
        await setTimeout(() => {
          this.$router.push('home')
        }, 500)
      })
      .go()
  },
  destroyed() {
    this.typeItInstance.freeze()
  }
}
</script>

<style lang="scss">
body {
  background-color: #000;
  transition: background-color 0.8s linear;
  overflow-y: hidden;
}
#typed-text {
  color: #f6f6f6;
  transition: color 0.7s linear 0.3s;
  transition: opacity 0.3s linear;
  transition: width 0.3s linear;
  transition: font-size 0.3s linear;
  a {
    color: inherit;
    transition: color 0.2s linear;
    transition: background-color 0.2s linear;
  }
}
</style>
