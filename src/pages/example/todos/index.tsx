import { Table } from 'antd'
import { useState } from 'react'
import { preload } from 'swr'

import { todoFetcher, useTodoList } from '~/network/useTodo'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Completed',
    dataIndex: 'completed',
    render: (value: boolean) => (value ? 'Yes' : 'No'),
  },
]

preload('/todos/?userId=1', todoFetcher)

function TodoTable() {
  const [current, setCurrent] = useState(1)
  const { todos, isLoading, error } = useTodoList(current)

  if (error) return <div>Error: {error.message}</div>
  return (
    <Table
      loading={isLoading || !todos}
      dataSource={todos ?? []}
      columns={columns}
      rowKey={(record) => record.id}
      size="middle"
      pagination={{
        current,
        pageSize: 20,
        showSizeChanger: false,
        total: 200,
        position: ['bottomCenter'],
      }}
      onChange={(pagination) => {
        const selectedPage = pagination.current ?? 1
        setCurrent(selectedPage)
      }}
    />
  )
}

export default function TodoList() {
  return (
    <div className="mx-auto p-8 max-w-2xl">
      <h1 className="mb-4 text-3xl">TODO LIST</h1>
      <TodoTable />
    </div>
  )
}
