<template>
  <div class="photoDetails" v-if="state.activePhoto.url">
    <h2>{{state.activePhoto.title}}</h2>
    <iframe v-if="state.activePhoto.media_type == 'video'" :src="state.activePhoto.url" :alt="state.activePhoto.title"></iframe>
    <img v-if="state.activePhoto.media_type == 'image'" :src="state.activePhoto.url" :alt="state.activePhoto.title">
    <p>{{state.activePhoto.explanation}}</p>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState.js'
import { photoService } from '../services/PhotoService.js'
export default {
  name: 'photoDetails',
  setup () {
    onMounted(() => {
      photoService.searchPhotos()
    })
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

<style scoped>
  img, iframe {
    width: 100%;
  }

  iframe {
    height: 50vh
  }
</style>
