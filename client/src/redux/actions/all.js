import { GET_DELETE, GET_SAVE } from "../constants/constants";
import uniqid from 'uniqid';

export const getSave = (data) => ({ type: GET_SAVE, payload: data });
export const getDelete = (data) => ({ type: GET_DELETE, payload: data });

export const getSaveThunk = (joke) => async (dispatch) => {
  const result = {
    id: uniqid(),
    joke
  }
  dispatch(getSave(result));
};

export const getDeleteThunk = (id) => async (dispatch) => {
  dispatch(getDelete(id));
};
