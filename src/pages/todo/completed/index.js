import TodoList from '@/components/TodoList/TodoList'
import TodoLayout from '@/layouts/todo'
import React from 'react'

const Completed = () => {
  return (
    <TodoList/>
  )
}
Completed.Layout = TodoLayout
export default Completed