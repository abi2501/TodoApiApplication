import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice.js";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    rtodo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
