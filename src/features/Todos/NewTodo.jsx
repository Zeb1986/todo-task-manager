import { useDispatch } from "react-redux";

import {addTodo} from './todos-slice';
export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.name.value, event.target.description.value, (new Date().toLocaleString())));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control" type="text" autoComplete="off" name="name" placeholder="New task name" />
      <input className="form-control" type="text" autoComplete="off" name="description" placeholder="New task description" />
      <input type="submit" className="btn btn-primary float-start" value="Add Todo" />
    </form>
  );
};