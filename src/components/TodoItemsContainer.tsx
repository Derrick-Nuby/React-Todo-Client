import React from 'react'
import "./../assets/styles/styles.css"
import TodoItem from './TodoItem'


const TodoItemsContainer: React.FC = () => {
    return (
        <div className="responses">
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    )
}

export default TodoItemsContainer