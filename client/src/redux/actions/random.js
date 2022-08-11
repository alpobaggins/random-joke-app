import { GET_RANDOM_JOKE } from '../constants/constants';

export const getRandomJoke = (data) => ({ type: GET_RANDOM_JOKE, payload: data });

export const getRandomJokeThunk = () => async (dispatch) => {
  const jokeApi = 'https://geek-jokes.sameerkumar.website/api?format=json ';
  const response = await fetch(jokeApi);
  const result = await response.json();
  dispatch(getRandomJoke(result));
};
