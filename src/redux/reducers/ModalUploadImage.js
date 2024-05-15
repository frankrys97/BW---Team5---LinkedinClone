import { SHOW_MODAL_IMAGE_UPLOAD } from "../actions";

const initialState = {
  showModalImageUpload: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_IMAGE_UPLOAD:
      return {
        ...state,
        showModalImageUpload: action.payload,
      };
    default:
      return state;
  }
}
