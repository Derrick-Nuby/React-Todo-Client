import React, { useEffect, useState } from 'react';
import "./../assets/styles/styles.css"
import TodoItem from './TodoItem';
const cookie = document.cookie.split('jwt=')[1]

interface Todo {
    _id: string;
    name: string;
    description: string;
    completed: boolean;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}

const TodoItemsContainer: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        fetch(`https://ts-todo-app-k33v.onrender.com/api/todos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${cookie}`
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setTodos(data.todos);
                }
            })
            
    };

    return (
        <div className="responses">
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoItemsContainer;
