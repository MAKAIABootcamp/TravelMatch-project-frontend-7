import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
//import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export default store;
