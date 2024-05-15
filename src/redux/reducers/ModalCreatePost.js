import SHOW_MODAL_CREATE_POST from "../actions";


const initialState = {
    showModalCreatePost: false,
}



export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL_CREATE_POST:
            return {
                ...state,
                showModalCreatePost: action.payload,
            };
        default:
            return state;
    }
}