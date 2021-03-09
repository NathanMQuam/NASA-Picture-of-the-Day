<template>
  <div class="photo" @click="setActivePhoto">
  <div class="media" v-if="state.activePhoto.url">
    <!-- NOTE props can be accessed directly within the template by name -->
    <img class="mr-3" :src="state.activePhoto.url" alt="Photo Poster">
    <!-- <div class="media-body">
      <h5 class="mt-0">{{photo.title}}</h5>
      <p>Score: {{photo.vote_average}}</p>
    </div> -->
</div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { photoService } from '../services/PhotoService'
import { computed } from 'vue'
export default {
  name: 'photo',
  // NOTE props are passed to an object with a defined type
  props: {
    photo: Object
  },
  // NOTE if you want props in setup must pass param
  setup (props) {
    const state = reactive({
      activePhoto: computed(() => props.photo)
    })
    return {
      state,
      setActivePhoto () {
        // NOTE to access the props they can be gotten from the props parameter
        photoService.setActive(props.photo)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
img {
  width: 100px;
}
</style>
