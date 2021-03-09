import { AppState } from '../AppState'
import { photoApi } from './AxiosService'

class PhotoService {
  async searchPhotos (query) {
    // console.log('photo service search "' + query + '"')
    try {
      const res = await photoApi.get('', { params: { date: query } })
      // AppState.photos = res.data.results
      this.setActive(res.data)
      console.log(AppState.photos)
    } catch (error) {
      console.error(error)
    }
  }

  setActive (photo) {
    AppState.activePhoto = photo
  }
}

export const photoService = new PhotoService()
