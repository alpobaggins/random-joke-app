import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSaveThunk } from '../redux/actions/all';
import { getRandomJokeThunk } from '../redux/actions/random';

function Random() {
  const dispatch = useDispatch();

  const joke = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(getRandomJokeThunk());
  }, []);

  function handleSave(joke) {
    dispatch(getSaveThunk(joke));
    dispatch(getRandomJokeThunk());
  }

  function handleNext() {
    dispatch(getRandomJokeThunk());
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

export default Random
