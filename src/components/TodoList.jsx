import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,deleted}) => {
    return (
        <div>
        {list.map(e=><TodoItem e={e} deleted={deleted}/>)}
    </div>
  )
}

export default TodoList