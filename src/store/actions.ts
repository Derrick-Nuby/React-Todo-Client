import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from './actionTypes';

export function addTodo(todo: string): TodoActionTypes {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

export function removeTodo(index: number): TodoActionTypes {
    return {
        type: REMOVE_TODO,
        payload: index,
    };
}
