<template>
  <div>
    <div class="name-left tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-r pin-t shadow-lg">
      <h1 class="mx-2">
        :: DAN WARD ::
      </h1>
    </div>
    <div class="name-right tracking-wide screen-edge text-xl flex justify-center absolute min-h-screen pin-l pin-t shadow-lg">
      <h1 class="mx-2">
        :: DAN WARD ::
      </h1>
    </div>
    <div class=" tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-t shadow-lg uppercase">
      <nuxt-link class="my-4" to="home">
        Proficiencies
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Code
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="writing">
        Writing
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Contact
      </nuxt-link>
    </div>
    <div class="tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-b shadow-lg uppercase">
      <a class="my-4" href="//github.com/warlyware" target="_blank">
        GitHub
      </a>
      <div class="mx-8">
        |
      </div>
      <a class="my-4" href="//twitter.com/warlyware" target="_blank">
        Twitter
      </a>
    </div>
  </div>
</template>

<script>
export default { }
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
