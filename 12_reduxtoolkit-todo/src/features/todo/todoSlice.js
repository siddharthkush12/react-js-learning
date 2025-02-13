import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const currTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(currTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => 
        todo.id !== action.payload)
    },
  },
});

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer
