import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducers = combineReducers({
  //   profile: profileReducers,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store
