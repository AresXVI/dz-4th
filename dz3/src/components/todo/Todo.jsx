import style from './Todo.module.css'
const Todo = ({todo}) => {
  return (
    <div>
      <li className={style.dflt}>{todo}</li>
    </div>
  )
}

export default Todo