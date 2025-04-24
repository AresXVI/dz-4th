import React from 'react'

export const TodoList = ({data}) => {
    const {
        todos,
        updateCheckBox,
        deleteTodo,
        updateTodosTitle
    } = data
    return (
        <ul>
            {todos.map((todo) => 
                <li key={todo.id}>
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.status}
                            onChange={
                                e => updateCheckBox(e.target.checked, todo.id)
                            }
                        />
                        <span className={todo.status ? 'active' : ''}>{todo.title}</span>
                    </div>
                    <div>
                        <button 
                            className='delete'
                            onClick={() => deleteTodo(todo.id)}
                        >
                            delete
                        </button>
                        <button 
                            className='update'
                            onClick={() => updateTodosTitle(todo.id)}
                        >
                            update
                        </button>
                    </div>
                </li>
            )}
        </ul>
    )
}
