<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen">
    <skill-detail-modal />
    <h2 class="self-center text-3xl uppercase mb-4 md:mt-8 font-light">
      Skills
    </h2>
    <div class="relative w-full h-full max-w-2xl overflow-hidden">
      <div
      class="tracking-wide md:text-xl lg:text-3xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap text-justify md:text-center">
        <div v-for="skill in skills"
        :key="skill.name"
        class="p-2 lg:p-4 flex-grow">
          <div class="flex flex-col cursor-pointer p-2 bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark rounded"
          @click="showModal(skill)">
            <span>
              {{ skill.name }}
            </span>
            <span class="text-xs">
              {{ skill.yearsOfExperience }} years experience
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skills from '~/constants/skills'
import SkillDetailModal from '~/components/modals/SkillDetailModal.vue'

export default {
  components: {
    SkillDetailModal
  },
  data() {
    return {
      skills
    }
  },
  methods: {
    showModal(skill) {
      this.$modal.show('proficiency-deail', skill)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/colors.scss';

  .v--modal-overlay {
    background-color: RGBA(33, 26, 16, 0.9);
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
