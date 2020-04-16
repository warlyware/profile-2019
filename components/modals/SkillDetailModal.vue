<template>
  <modal id="modal" height="auto"
  width="450px"
  classes="bg-alt-blue-2 rounded"
  name="proficiency-deail" transition="modal"
  :adaptive="true"
  @before-open="beforeOpen">
    <div class="bg-opaque-brown-dark m-4 p-4 rounded">
      <div class="flex flex-col self-center py-2">
        <div class="self-center border-b">
          <span class="text-3xl font-bold">
            {{ details.name }}
          </span>
        </div>
        <a class="self-center text-xs py-2" :href="details.url" target="_blank">
          [LINK]
        </a>
        <div class="self-center text-sm italic">
          {{ details.yearsOfExperience }} years of experience
        </div>
      </div>
      <div class="flex flex-col self-center py-4">
        <div class="self-center text-lg font-bold px-4 text-justify leading-normal">
          {{ details.description }}
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return { details: {}, closeButton: '<' }
  },
  methods: {
    beforeOpen({ params }) {
      const { name, description, url, yearsOfExperience } = params
      this.details = { name, description, url, yearsOfExperience }
    }
  }
}
</script>
