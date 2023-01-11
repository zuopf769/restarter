import { Card } from 'antd'
import { useParams } from 'react-router'

import { useTodo } from '~/network/useTodo'

function TodoTitle({ todoId }: { todoId: number }) {
  const { todo, isLoading, error } = useTodo(todoId)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return (
    <div>
      {todo != null ? <div>{todo.title}</div> : <div>Todo not found</div>}
    </div>
  )
}

function TodoCard() {
  const { id } = useParams()
  return (
    <div className="mt-8 flex justify-center">
      <Card title={'TODO ' + id} className="w-80">
        <TodoTitle todoId={Number(id)} />
      </Card>
    </div>
  )
}

export default TodoCard
