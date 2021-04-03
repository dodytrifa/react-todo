import React from 'react'

export default function Item({text, task, todos, setTodos}) {
  const deleteHandler = (e) => {
    e.preventDefault()
    setTodos(todos.filter((el) => el.id !== task.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((element) => {
      if(element.id === task.id){
        return {
          ...element, completed: !element.completed
        }
      }
      return element
    }))
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${task.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  )
}
