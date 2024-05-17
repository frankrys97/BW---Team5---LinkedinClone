import { ADD_JOB, GET_JOB, REMOVE_JOB, SELECT_JOB } from '../actions'

const initialState = {
  savedJob: [],
  selectedJob: '',
  searchJob: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      }

    case ADD_JOB:
      return {
        ...state,
        savedJob: [...state.savedJob, action.payload],
      }

    case REMOVE_JOB:
      return {
        ...state,
        savedJob: state.savedJob.filter((job) => job._id !== action.payload),
      }

    case GET_JOB:
      return {
        ...state,
        searchJob: action.payload,
      }
    default:
      return state
  }
}
