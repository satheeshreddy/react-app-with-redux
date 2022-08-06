import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counter";
import authReducers from "./auth";

const store = configureStore({
  reducer: { counter: counterReducers, auth: authReducers },
});

export default store;
