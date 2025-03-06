import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


interface Todo {
    id : number,
    text : string,
    completed : boolean
}

interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
  }

const initialState : TodosState = {
    todos : [],
    loading : false,
    error : null
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    console.log(data)
    // return data.slice(0, 5); 
  });


export const tokenSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {

          const newItem : Todo  = {
            id : state.todos.length + 1,
            text : action.payload,
            completed : false
          }
          state.todos.push(newItem)
        },

        removeItem : (state) => {

        }

    },
})


export const { addItem } = tokenSlice.actions

export default tokenSlice.reducer