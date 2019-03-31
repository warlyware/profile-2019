<template>
  <div class="text-white">
    <top-nav />
    <div class="name-left tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-r pin-t shadow-lg">
      <div class="mx-4 cursor-pointer text-xl" @click="goToIntro">
        :: DAN WARD ::
      </div>
    </div>
    <div class="name-right tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-l pin-t shadow-lg">
      <div class="mx-4 cursor-pointer text-xl" @click="goToIntro">
        :: DAN WARD ::
      </div>
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from '~/components/BottomNav'
import TopNav from '~/components/TopNav'

export default {
  components: {
    BottomNav,
    TopNav
  },
  methods: {
    goToIntro() {
      document.getElementsByTagName('html')[0].style.opacity = '0'
      document.getElementsByTagName('body')[0].style.backgroundColor = '#fff'
      // document.getElementById('main-screen-fade-in').style.backgroundColor = '#fff'
      setTimeout(() => {
        window.location = '/'
      }, 600)
    }
  }
}
</script>

<style>
html {
  opacity: 1;
  transition: opacity 0.7s linear;
}
.screen-edge {
  background-color: RGBA(239, 242, 243, 0.02);
}
.name-right, .name-left {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.name-left {
  transform: rotate(180deg);
}
</style>
