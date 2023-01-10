import originalAxios, { AxiosError } from 'axios'
import useSWR from 'swr'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const axios = originalAxios.create({
  baseURL: baseUrl,
})

const userFetcher = (id: string) =>
  axios
    .get<User>(id)
    .then((res) => res.data)
    .catch((err: AxiosError) => {
      if (err.response?.status === 404) {
        return null
      }
    })

export default function useUser(id: number) {
  const { data, error, isLoading } = useSWR(`/users/${id}`, userFetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
