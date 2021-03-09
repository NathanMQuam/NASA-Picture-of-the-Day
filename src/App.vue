<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center" style="text-align: center">
          <h1> Welcome to <img alt="Vue logo" src="./assets/logo.png" style="height: 5vh">ue-APOD</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
          <!-- NOTE Search gets defined with prevent to stop reload -->
        <div class="col">
          <!-- NOTE We bind to the state with v-model from our input -->
          <form @submit.prevent="search">
            <input class="mx-1" type="date" :max="state.date" v-model="state.query" required>
            <button type="submit" class="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <!-- <MovieResults /> -->
        </div>
        <div class="col-6">
          <PhotoDetails />
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3"> Made with ♥ by codeworks</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from './AppState'
import PhotoDetails from './components/PhotoDetails'
import { photoService } from './services/PhotoService.js'

export default {
  name: 'App',
  setup () {
    const date = new Date()
    const state = reactive({
      query: '',
      date: `${date.getFullYear}-${date.getMonth}-${date.getDate}`,
      photos: computed(() => AppState.photos)
    })
    return {
      state,
      async search () {
        try {
          // NOTE call to service and await the results
          await photoService.searchPhotos(`${state.query}`)
          // NOTE due to two way data binding we reset the form by resetting the value of query
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    PhotoDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
