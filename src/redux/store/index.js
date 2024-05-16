import { combineReducers, configureStore } from '@reduxjs/toolkit'
import myProfileReducers from '../reducers/MyProfileReducers'
import ModalUploadImage from '../reducers/ModalUploadImage'
import ModalCreatePost from '../reducers/ModalCreatePost'
import JobReducer from '../reducers/JobReducer'

const rootReducers = combineReducers({
  //   profile: profileReducers,
  myProfile: myProfileReducers,
  ModalUploadImage: ModalUploadImage,
  // ModalCreatePost: ModalCreatePost,
  ModalCreatePost: ModalCreatePost,
  job: JobReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store
