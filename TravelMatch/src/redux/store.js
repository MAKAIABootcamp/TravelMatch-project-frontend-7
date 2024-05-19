import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './userAuth/userAuthSlice';
// import thunk from "redux-thunk";
//import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export default store;
