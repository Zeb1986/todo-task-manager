import {useDispatch} from 'react-redux'

import {resetToDefault} from './reset-action'

export const ResetApp = () => {
  const dispatch = useDispatch();

  return (
    <button className='btn btn-danger' onClick={() => dispatch(resetToDefault())}>Clear list</button>
  )
}