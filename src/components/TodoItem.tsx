import React, { useState } from 'react';
import "./../assets/styles/styles.css";
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

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    const [completed, setCompleted] = useState<boolean>(todo.completed);

    const handleDelete = async () => {
        fetch(`https://ts-todo-app-k33v.onrender.com/api/todos/${todo._id}`, {
            method: 'DELETE',
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
                    console.log(data);
                }
            })
    };

    const handleCheckboxChange = async () => {

        const updatedCompleted = !completed;
        setCompleted(updatedCompleted);
        
        fetch(`https://ts-todo-app-k33v.onrender.com/api/todos/status/${todo._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${cookie}`
            },
            body: JSON.stringify({ completed: updatedCompleted})
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data);
                }
            })
    };
    return (
        <li className="todo-item" key={todo._id}>
            <div className="adjacent">
                <input 
                type="checkbox" 
                name="completed" 
                id={`completed-${todo._id}`} 
                checked={completed}
                onChange={handleCheckboxChange}
                />
                <label htmlFor={`completed-${todo._id}`} className="title">{todo.name}</label>
            </div>
            <div className="description">{todo.description}</div>
            <div className="actions">
                <button className="edit">Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
