import originalAxios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

export const axios = originalAxios.create({
  baseURL,
  timeout: 10000,
})
