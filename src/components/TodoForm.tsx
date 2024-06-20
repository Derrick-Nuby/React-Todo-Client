import React, { useState } from 'react';
import "./../assets/styles/styles.css"
const cookie = document.cookie.split('jwt=')[1]

const TodoForm: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(name, description);
        
        e.preventDefault();
        fetch(`https://ts-todo-app-k33v.onrender.com/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${cookie}`
            },
            body: JSON.stringify({ name, description })
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Enter Your Todo Item</label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            
            <label htmlFor="description">Enter the description of Your Todo</label>
            <textarea 
            name="description" 
            id="description" 
            cols={30} rows={5} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
