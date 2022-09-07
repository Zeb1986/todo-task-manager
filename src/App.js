import {FilterTodo} from './features/Filters/Filter';
import {NewTodo} from './features/Todos/NewTodo'
import {TodoList} from './features/Todos/TodoList'
import { ResetApp } from './features/Reset/ResetApp';

export default function App() {

  return (
    <div className="App">
      <h1>Test task for WebGL internship</h1>
      <h2>Add yor tasks here</h2>
      <NewTodo />
      <div className='controls'>
        <FilterTodo />
      <ResetApp />
      </div>      
      <TodoList  />     
    </div>
  );
}
