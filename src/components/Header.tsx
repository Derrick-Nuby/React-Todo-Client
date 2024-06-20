import React from 'react';
import { Link } from 'react-router-dom';
import "./../assets/styles/styles.css"

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Todo-APP</div>
      <menu>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="https://derricknuby.com">Author</a></li>
          <li><a href="https://github.com/Derrick-Nuby/React-Todo-Client" target="_blank">Source</a></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/create">Create Account</Link></li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
