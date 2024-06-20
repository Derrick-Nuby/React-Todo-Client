import React, { useState } from 'react';
import "./../assets/styles/styles.css"

const CreateAccountForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://ts-todo-app-k33v.onrender.com/api/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
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
            <label htmlFor="name">Enter Your name</label>
            <input 
            type="text" 
            name="name" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Enter your email:</label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Enter your password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default CreateAccountForm;
