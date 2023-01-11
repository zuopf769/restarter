import useSWR from 'swr'

import { axios } from './axios'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const todoFetcher = (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      if (err.response?.status === 404) {
        return null
      }
    })

export function useTodoList(userId?: number) {
  const { data, error, isLoading } = useSWR<Todo[]>(
    userId ? `/todos/?userId=${userId}` : '/todos',
    todoFetcher,
  )
  return {
    todos: data,
    isLoading,
    error,
  }
}

export function useTodo(todoId: number) {
  const { data, error, isLoading } = useSWR<Todo>(
    `/todos/${todoId}`,
    todoFetcher,
  )
  return {
    todo: data,
    isLoading,
    error,
  }
}
