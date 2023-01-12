import useSWR, { preload } from 'swr'

import { axios } from './axios'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todoFetcher = (url: string) =>
  axios.get(url).then((res) => res.data)

export function useTodoList(userId?: number) {
  const { data, error, isLoading } = useSWR<Todo[]>(
    userId ? `/todos/?userId=${userId}` : '/todos',
    todoFetcher,
  )

  if (userId) {
    preload(`/todos/?userId=${userId + 1}`, todoFetcher)
    preload(`/todos/?userId=${userId - 1}`, todoFetcher)
  }

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
