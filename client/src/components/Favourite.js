import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteThunk } from '../redux/actions/all';

export default function Favourite() {

  const dispatch = useDispatch();

  const all = useSelector((state) => state.all);

  function handleDelete(id) {
    dispatch(getDeleteThunk(id));
  }

  return (
    <div className="card">
    <h3 className="card-title">these jokes are the funniest</h3>
    <div className="card-body-main">
      <ul>
        {all.map((el) => (
          <div className='one-card'>
            <li className="card-text">{el.joke}</li>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  </div> 
  )
}

