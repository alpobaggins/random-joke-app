import { GET_WITHOUT_CHUCK_JOKE } from "../constants/constants";

const initialState = {};

const withoutChuckReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WITHOUT_CHUCK_JOKE:
      return payload;
    default:
      return state;
  }
};

export default withoutChuckReducer;
