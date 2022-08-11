import { GET_RANDOM_JOKE } from "../constants/constants";

const initialState = {};

const randomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RANDOM_JOKE:
      return payload;
    default:
      return state;
  }
};

export default randomReducer;
