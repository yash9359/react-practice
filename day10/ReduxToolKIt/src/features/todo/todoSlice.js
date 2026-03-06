import {createSlice, nanoid} from '@reduxjs/toolkit';


const initialState = {

    todos: [{
        id:1,
        text:"Hello"
    }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // property and fn
        addTodo:  (state,action) =>{

            // state = currentState
            // action = jo bhi data paas ho ke aa raha


            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{

            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)

        }
    }
});

export const {addTodo,removeTodo} =todoSlice.actions

export default todoSlice.reducer