<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen text-white ml--16">
    <h2 class="self-center text-3xl uppercase py-4 font-light">
      Contact
    </h2>
    <div class="relative w-full h-full overflow-hidden flex justify-center items-center">
      <svg id="mail-icon" class="cursor-pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="96.3 -4.7 45.1 46.2" style="enable-background:new 96.3 -4.7 45.1 46.2;" xml:space="preserve">
        <path class="st0" d="M138.2,10.5H99.5c-1.7,0-3.1,1.4-3.1,3.1v24.8c0,1.7,1.4,3.1,3.1,3.1h38.7c1.7,0,3.1-1.4,3.1-3.1V13.6
          C141.3,11.9,139.9,10.5,138.2,10.5z" />
        <path class="st0" d="M125.6,30.7c-3.7-2.6-6.6-4.6-6.8-4.7l0,0L125.6,30.7z" />
        <path id="env-lid" class="st0" d="M118.9,26L118.9,26c0,0,16-11.1,21.4-14.8c-0.5-0.5-1.2-0.8-2-0.8H99.5c-0.8,0-1.5,0.3-2,0.8
          L118.9,26L118.9,26z" />
        <path id="env-paper" class="st1" d="M135.8,34.2h-33.9c-1.3,0-2.4-1.1-2.4-2.4V0.7c0-1.3,1.1-2.4,2.4-2.4h33.9
          c1.3,0,2.4,1.1,2.4,2.4v31.1C138.1,33.1,137.1,34.2,135.8,34.2z" />
        <path id="env-line-3" class="st2" d="M131.2,6.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
          c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,5.7,132.1,6.5,131.2,6.5z" />
        <path id="env-line-2" class="st2" d="M131.2,14.1h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
          c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,13.4,132.1,14.1,131.2,14.1z" />
        <path id="env-line-1" class="st2" d="M131.2,21.5h-24.7c-0.9,0-1.6-0.7-1.6-1.6l0,0c0-0.9,0.7-1.6,1.6-1.6h24.6
          c0.9,0,1.6,0.7,1.6,1.6l0,0C132.8,20.8,132.1,21.5,131.2,21.5z" />
        <path class="st3" d="M97.6,11.1c-0.6,0.5-1.3,1.5-1.3,2.4v24.9c0,1.7,1.4,3.1,3.1,3.1h38.8c0.8,0,1.4-0.3,2-0.7
        C137.1,38.7,97.6,11.1,97.6,11.1z" />
        <path class="st4" d="M140.3,11.2c-5.4,3.7-21.4,14.8-21.4,14.8l0,0c0.2,0.1,18.2,12.7,21.3,14.8c0.7-0.6,1.2-1.4,1.2-2.3v-25
        C141.3,12.6,140.9,11.8,140.3,11.2z" />
      </svg>
    </div>
  </div>
</template>

<script>
// import { TimelineLite, TweenLite, Back } from 'gsap/all'

export default {
  mounted() {
    this.setupEmailSvg()
  },
  methods: {
    setupEmailSvg() {
      const line1 = document.getElementById('env-line-1')
      const line2 = document.getElementById('env-line-2')
      const line3 = document.getElementById('env-line-3')
      const mailIcon = document.getElementById('mail-icon')
      const envLid = document.getElementById('env-lid')
      const envPaper = document.getElementById('env-paper')

      const tl = new window.TimelineLite({
        paused: true
      })

      window.TweenLite.defaultEase = window.Back.easeOut
      tl
        .to(
          envLid,
          0.5,
          { scaleY: -1, y: 1.5 }
        )
        .fromTo(
          envPaper,
          0.5,
          { transformOrigin: '50% 100%', scaleY: 0 },
          { scaleY: 1 }
          , '=-0.25'
        )
        .staggerFromTo(
          [line1, line2, line3],
          0.5,
          { transformOrigin: '50% 50%', scaleX: 0 },
          { scaleX: 1 },
          -0.09
        )

      mailIcon.addEventListener('click', () => {
        tl.play()
        setTimeout(() => {
          window.open('mailto:danward@gmail.com', '_blank')
        }, 1300)
      })
    }
  }
}
</script>

<style>
.st0{fill: #8AB1B0;}
.st1{fill: #E6EBE0;}
.st2{fill: #CBCCCA;}
.st3{fill: #4C96A8;}
.st4{fill: #211A10;}
#mail-icon {
  margin-top: -18%;
  width: 20rem;
}
</style>
