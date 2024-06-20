import React from 'react';
import "./../assets/styles/styles.css"


const TodoItem: React.FC = () => {
    return (
        <li className="todo-item">
            <div className="adjacent">
                <input type="checkbox" name="completed" id="completed" />
                <label htmlFor="completed" className="title">hello world</label>
            </div>
            <div className="description">This is a short summary of the todo item...This is a short summary of the todo item...This is a short summary of the todo item...</div>
            <div className="actions">
                <button className="view">View</button>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
