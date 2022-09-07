import { useSelector, useDispatch } from "react-redux";
import {selectVisibleTodos, toggleTodo, removeTodo, editTodoValue, editTodo, saveTodo} from './todos-slice';


export const TodoList = () => {
  const activeFilter = useSelector(state => state.filter)
  const todos = useSelector(state => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();
  const handleChange = (e, id) => {
    dispatch(editTodoValue(id, e.target.value, e.target.name))
  }


  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          <br/>
          <label>
            <input                        
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          /> Completed
          </label>
                    
            {todo.edit? 
          <input
            className="form-control" 
            type='text' 
            name='name' 
            autoComplete="off" 
            defaultValue={todo.name} 
            onChange={e => handleChange(e, todo.id)} 
          />: 
          <span
            className="list-group-item-span" 
            style={{textDecoration: todo.completed? 'line-through' : 'none' }}
          >Task name: {todo.name}
          </span>}
            {todo.edit? 
          <input 
            className="form-control"
            type='text' 
            name='description' 
            autoComplete="off" 
            value={todo.description} 
            onChange={e => handleChange(e, todo.id)}           
          />: 
          <span
            className="list-group-item-span" 
            style={{textDecoration: todo.completed? 'line-through' : 'none' }}
            >{`Task description: ${todo.description}`}</span>}
          <span
            className="list-group-item-span"
            >Task created: {todo.date} 
            {todo.completed? `Task completed: ${todo.completedTime}`: todo.edited?`Task edited: ${todo.edited}`: null }
          </span>
          <button 
            className="btn btn-danger float-end" 
            onClick={() => dispatch(removeTodo(todo.id))}
          >delete
          </button>
            {!todo.edit? 
          <button 
            className="btn btn-warning float-end" 
            onClick={() => dispatch(editTodo(todo.id))} 
          >Edit
          </button> : 
          <button 
            className="btn btn-success float-end" 
            onClick={() => dispatch(saveTodo(todo.id))} 
          >Save
          </button>}
        </li>
      ))}
    </ul>
  );
};
