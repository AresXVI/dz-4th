import styles from './Todo.module.css'

const Todo = ({todo}) => {
  
  return (
    <div className={styles.dflt}>{todo}</div>
  )
}

export default Todo