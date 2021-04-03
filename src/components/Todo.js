import React from 'react'
import Item from './Item'

export default function Todo({todos, setTodos, filtered}) {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
          //bentuk sebelumnya: todos.map
          filtered.map(todo=>(
            <Item 
            todos={todos}
            setTodos={setTodos}
            task={todo} 
            text={todo.text} 
            key={todo.id}/>
          ))}
      </ul>
    </div>
  )
}
