import { SET_MY_PROFILE } from "../actions";

const initialState = {
  content: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
}
