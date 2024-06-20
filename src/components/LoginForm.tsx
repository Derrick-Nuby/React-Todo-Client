import React from 'react';
import "./../assets/styles/styles.css"


const LoginForm: React.FC = () => {
    return (
        <form action="">
            <label htmlFor="email">Enter your email:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Enter your password:</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
