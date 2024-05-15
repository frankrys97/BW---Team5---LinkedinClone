import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myProfileReducers from "../reducers/MyProfileReducers";
import ModalUploadImage from "../reducers/ModalUploadImage";
// import ModalCreatePost from "../reducers/ModalCreatePost";

const rootReducers = combineReducers({
  //   profile: profileReducers,
  myProfile: myProfileReducers,
  ModalUploadImage: ModalUploadImage,
  // ModalCreatePost: ModalCreatePost,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
