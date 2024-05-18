import { configureStore } from "@reduxjs/toolkit";
import destinoReducer from './destinos/destinosSlice';
// import thunk from "redux-thunk";
//import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    destinos: destinoReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export default store;
