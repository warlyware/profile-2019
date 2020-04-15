<template>
  <modal id="modal" height="auto"
  width="40%"
  classes="bg-alt-blue-2 rounded"
  name="proficiency-deail" transition="modal">
    <div class="bg-opaque-brown-dark m-4 p-4 rounded">
      hello, world!
    </div>
  </modal>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';
  .v--modal-overlay {
    background-color: RGBA(33, 26, 16, 0.8);
  }
  .overlay-fade {
    transition: opacity 0.7s linear;
  }
  .overlay-fade-enter-active, .overlay-fade-leave-active {
    transition: opacity .5s
  }
  .modal-enter-active, .modal-leave-active {
    transition: opacity .7s
  }
  .overlay-fade-enter, .overlay-fade-leave-to, .modal-enter, .modal-leave-to {
    opacity: 0
  }
</style>
