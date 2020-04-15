<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen">
    <proficiency-detail-modal />
    <h2 class="self-center text-3xl uppercase mb-4 md:mt-8 font-light">
      Proficiencies
    </h2>
    <div class="relative w-full h-full max-w-2xl overflow-hidden">
      <div
      class="tracking-wide md:text-xl lg:text-3xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap text-justify md:text-center">
        <div v-for="proficiency in proficiencies"
        :key="proficiency"
        class="p-2 lg:p-4 flex-grow">
          <span class="cursor-pointer p-2 bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark"
          @click="showModal(proficiency)">
            {{ proficiency.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import proficiencies from '~/constants/proficiencies'
import ProficiencyDetailModal from '~/components/modals/ProficiencyDetailModal.vue'

export default {
  components: {
    ProficiencyDetailModal
  },
  data() {
    return {
      proficiencies
    }
  },
  methods: {
    showModal() {
      this.$modal.show('proficiency-deail')
    }
  }
}
</script>
