// src/store/reducers.ts
import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from './actionTypes';

interface TodoState {
    todos: string[];
}

const initialState: TodoState = {
    todos: [],
};

function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
}

export default todoReducer;
