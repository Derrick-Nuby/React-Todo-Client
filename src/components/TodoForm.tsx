import React from 'react';
import "./../assets/styles/styles.css"


const TodoForm: React.FC = () => {
    return (
        <form action="">
            <label htmlFor="todo">Enter Your Todo Item</label>
            <input type="text" name="todo" id="todo" />
            
            <label htmlFor="description">Enter the description of Your Todo</label>
            <textarea name="description" id="description" cols={30} rows={5} />
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
