export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: string;
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: number;
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;