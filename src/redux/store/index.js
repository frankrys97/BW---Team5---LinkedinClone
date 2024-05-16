import { combineReducers, configureStore } from "@reduxjs/toolkit";
import myProfileReducers from "../reducers/MyProfileReducers";

const rootReducers = combineReducers({
  //   profile: profileReducers,
  myProfile: myProfileReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
