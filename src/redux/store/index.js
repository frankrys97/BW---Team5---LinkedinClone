import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myProfileReducers from "../reducers/MyProfileReducers";
import ModalUploadImage from "../reducers/ModalUploadImage";

const rootReducers = combineReducers({
  //   profile: profileReducers,
  myProfile: myProfileReducers,
  ModalUploadImage: ModalUploadImage,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
