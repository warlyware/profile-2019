<template>
  <div id="typed-text" class="font-bold text-lg sm:text-2xl md:text-3xl lg:text-5xl absolute pb-8" />
</template>

<script>
import TypeIt from 'typeit'

export default {
  data() {
    return {
      typingSpeed: {
        Instant: 0,
        Brisk: 30,
        Normal: 50,
        Slow: 100
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
      .type(`I'm the CTO at`)
      .break()
      .type(`<a href="//herbfluence.com" target="_blank">herbfluence.com</a>,`)
      .break()
      .type('a social media influencer')
      .break()
      .type('marketing platform.')
      .pause(200)
      .break()
      .type('')
      .break()
      .type(`I'm also a `)
      .break()
      .type(`full stack web developer,`)
      .break()
      .type('author, and technical writer.')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#418292'
        document.getElementById('typed-text').style.color = '#FCAC51'
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
      .type('from <a href="//www.packtpub.com" target="_blank">Packt Publishing</a>,')
      .break()
      .type('and cofounder of the')
      .break()
      .type('Medium coding blog')
      .break()
      .type('<a href="//levelup.gitconnected.com" target="_blank">levelup.gitconnected.com</a>,')
      .break()
      .type('which recently surpassed')
      .break()
      .type('31,000 followers! 🥳')
      .pause(600)
      .exec(async () => {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#211A10'
        document.getElementById('typed-text').style.color = '#fff'
        await new Promise((resolve, reject) => resolve())
      })
      .break()
      .type('')
      .break()
      .type('Thanks for stopping by!')
      .pause(2000)
      // .break()
      // .type('')
      // .options({ speed: this.typingSpeed.Slow })
      // .break()
      // .type('<img class="w-12 h-12" src="/images/conga-parrot.gif" />')
      .exec(async () => {
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
#typed-text {
  color: #f6f6f6;
  opacity: 1;
  a {
    color: inherit;
  }
}
</style>
