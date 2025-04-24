import React, { useEffect, useState } from 'react'
import { TodoList } from '../../components/TodoList'
const URl = 'http://localhost:8000/todos'

const TodosPage = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const creatTodo = async (e) => {
        e.preventDefault();

        if(input.trim() !== '') {
            const data = {
                status: false,
                title: input
            };
    
            const response  = await fetch(URl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            response.status === 201 ? getTodo() : alert('Ошибка !');
        }
    }

    const getTodo = async () => {
        const response = await fetch(URl);
        const data = await response.json();
        setTodos(data);
        setInput('');
    }

    const deleteTodo = async (id) => {
        const response = await fetch(URl + `/${id}`, {
            method: "DELETE",
        })
        response.status === 200 ? getTodo() : alert('Ошибка !')
    }

    const updateCheckBox = async (status, id) => {
        const data = {status}
        const response = await fetch(URl + `/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        response.status === 200 ? getTodo() : alert('Ошибка!'); 
    }

    const updateTodosTitle = async (id) => {
        if(input.trim() !== '') {
            const data = {
                status: false,
                title: input
            }
    
            const response = await fetch(URl + `/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            response.status === 200 ? getTodo() : alert('Ошибка !')
        }
    }

    useEffect(() => {
        getTodo();
    }, [])

    const data = {
        todos,
        updateCheckBox,
        deleteTodo,
        updateTodosTitle
    }

    return (
        <div>
            <h2>TodosPage</h2>
            <form>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className='add' onClick={creatTodo}>add</button>
            </form>
            <TodoList data={data}/>

        </div>
    )
}

export default TodosPage