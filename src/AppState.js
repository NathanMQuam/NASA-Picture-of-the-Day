import { reactive } from '@vue/reactivity'

export const AppState = reactive({
  activePhoto: undefined,
  photos: []
})
