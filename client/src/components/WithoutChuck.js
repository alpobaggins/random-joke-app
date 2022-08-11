import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSaveThunk } from '../redux/actions/all';
import { getWithoutChuckJokeThunk } from '../redux/actions/withoutChuck';

function WithoutChuck() {
  const dispatch = useDispatch();

  const joke = useSelector((state) => state.jokewc);

  useEffect(() => {
    dispatch(getWithoutChuckJokeThunk());
  }, []);

  function handleSave(joke) {
    dispatch(getSaveThunk(joke));
    dispatch(getWithoutChuckJokeThunk());
  }

  function handleNext() {
    dispatch(getWithoutChuckJokeThunk());
  }

  return (
    <div className="card">
      <h3 className="card-title">your joke today is...</h3>
      <div className="card-body">
        <p className="card-text">{joke.joke}</p>
        <button className="post-button like" type="button" onClick={() => handleSave(joke.joke)}>save</button>
        <button className="post-button dislike" type="button" onClick={handleNext}>next</button>
      </div>
    </div> 
  )
}

export default WithoutChuck
