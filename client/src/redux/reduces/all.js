import { GET_DELETE, GET_SAVE } from "../constants/constants";

const initialState = [];

const allReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SAVE:
      return [...state, payload];
    case GET_DELETE:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default allReducer;
