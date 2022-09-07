import { useSelector, useDispatch } from "react-redux";
import {setFilter} from './filter-slice';


export const FilterTodo = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.filter);

  const handleFilter = (val) => dispatch(setFilter(val));

  return (
    <div className="btn-group">
      <button 
      className="btn btn-info"
        style={{
          backgroundColor: activeFilter === 'all' ? 'lightgray' : 'transparent',
        }}
        onClick={() => handleFilter('all')}>all</button>
      <button 
      className="btn btn-info"
        style={{
          backgroundColor: activeFilter === 'active' ? 'lightgray' : 'transparent',
        }}
        onClick={() => handleFilter('active')}>active</button>
      <button 
      className="btn btn-info"
        style={{
          backgroundColor: activeFilter === 'completed' ? 'lightgray' : 'transparent',
        }}
        onClick={() => handleFilter('completed')}>completed</button>
    </div>
  );
}