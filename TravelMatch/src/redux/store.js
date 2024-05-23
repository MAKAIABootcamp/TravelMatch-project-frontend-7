import { configureStore } from "@reduxjs/toolkit";
import destinoReducer from './destinos/destinosSlice';
import userAuthReducer from './userAuth/userAuthSlice';
//import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    destinos: destinoReducer,
    userAuth: userAuthReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
