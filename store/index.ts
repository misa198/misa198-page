import { combineReducers, configureStore } from "@reduxjs/toolkit";

import homeSlice from "store/slices/home.slice";

const rootReducer = combineReducers({
  home: homeSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
