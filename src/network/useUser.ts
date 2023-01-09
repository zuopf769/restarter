import originalAxios from 'axios'
import useSWR from 'swr'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const axios = originalAxios.create({
  baseURL: baseUrl,
})

const fetcher = (url: string) => axios.get<User>(url).then((res) => res.data)

export default function useUser(id: number) {
  const { data, error, isLoading } = useSWR(`/users/${id}`, fetcher)

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
