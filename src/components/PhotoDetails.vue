<template>
  <div class="photoDetails">
    <h2>{{state.activePhoto.title}}</h2>
    <img :src="state.activePhoto.url" :alt="state.activePhoto.title">
    <p>{{state.activePhoto.explanation}}</p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import AppState from '../AppState.js'
export default {
  name: 'photoDetails',
  setup () {
    const state = reactive({
      activePhoto: computed(() => AppState.activePhoto)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>
