<template>
  <div class="text-white">
    <top-nav />
    <div class="name-left tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-r pin-t shadow-lg">
      <nuxt-link class="mx-4 text-xl" to="/">
        :: DAN WARD ::
      </nuxt-link>
    </div>
    <div class="name-right tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-l pin-t shadow-lg">
      <nuxt-link class="mx-4 text-xl" to="/">
        :: DAN WARD ::
      </nuxt-link>
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
  }
}
</script>

<style scoped>
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
