import React from 'react'
import Todo from '../../components/todo/Todo'
import style from './todosPage.module.css'
function TodosPage() {
  const arr = ["todo 1", "todo 2", "todo 3"]
  return (
    <div className={style.todosPage}>
      {arr.map((todo, index) => <Todo key={index} todo={todo}/>)}
    </div>
  )
}

export default TodosPage