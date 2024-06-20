import React, { useState } from 'react';
import "./../assets/styles/styles.css"
import ErrorNotification from './ErrorNotification';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://ts-todo-app-k33v.onrender.com/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
        return response.json()
        })
        .then(data => {
            if (data.error) {
                console.log(data.error);
                < ErrorNotification message={data.error}/>
            } else {
            console.log(data);
            const { token } = data;
            const expiryDate = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${token}; Path=/; Expires=${expiryDate};`;
            localStorage.setItem('jwtToken', token);
            navigate('/todos')
            }
    })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email:</label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Enter your password:</label>
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

export default LoginForm;

