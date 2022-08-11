import { GET_WITHOUT_CHUCK_JOKE } from '../constants/constants';

export const getWithoutChuckJoke = (data) => ({ type: GET_WITHOUT_CHUCK_JOKE, payload: data });

export const getWithoutChuckJokeThunk = () => async (dispatch) => {
  const jokeApi = 'https://geek-jokes.sameerkumar.website/api?format=json ';
  const response = await fetch(jokeApi);
  const result = await response.json();
  if(result.joke.includes('Chuck Norris')) {
    dispatch(getWithoutChuckJokeThunk())
  } else {
    dispatch(getWithoutChuckJoke(result))
  }
};
