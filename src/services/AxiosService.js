import axios from 'axios'

export const photoApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=7cmDNzHalNFIG0Np6kkHHDIdcrxRvVtk4dzdzgI8',
  timeout: 5000
})
