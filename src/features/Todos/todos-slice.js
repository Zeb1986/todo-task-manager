import {createSlice, nanoid} from '@reduxjs/toolkit';

import {resetToDefault} from '../Reset/reset-action';

const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (name, description, date ) => ({
        payload: {
          name,
          description,
          date,
          id: nanoid(),
          completed: false,
          completedTime:'',
          edit: false,
          edited: '',
        }
      })
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
      todo.completedTime = new Date().toLocaleString();
    },
    editTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.edit = !todo.edit;
    },
    saveTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.edit = !todo.edit;
      todo.edited = new Date().toLocaleString();
    },
    editTodoValue: {
      reducer: (state, action) => {
      const id = action.payload.id;
      const value = action.payload.value;
      const fieldname = action.payload.fieldname;
      const todo = state.find((todo) => todo.id === id);
      todo[fieldname] = value;
      },
      prepare: (id, value, fieldname ) => ({
        payload: {
          id, 
          value,
          fieldname,                   
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetToDefault, () => {
        return []
      })
  }
});
export const {addTodo, removeTodo, toggleTodo, editTodo, editTodoValue, saveTodo} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;


export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter(todo => !todo.completed);
    }
    case 'completed': {
      return state.todos.filter(todo => todo.completed);
    }
    default: {
      return state.todos;
    }
  }
}