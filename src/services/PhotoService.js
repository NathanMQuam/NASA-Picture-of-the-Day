import { AppState } from '../AppState'
import { photoApi } from './AxiosService'

class PhotoService {
  async searchPhotos (query) {
    const res = await photoApi.get(query)
    AppState.photos = res.data.results
  }

  setActive (photo) {
    AppState.activePhoto = photo
  }
}

export const photoService = new PhotoService()
