import { configureStore } from "@reduxjs/toolkit";
import destinoReducer from "./destinos/destinosSlice";
import userAuthReducer from "./userAuth/userAuthSlice";
import preguntasReducer from "./preguntas/preguntasSlice";

const store = configureStore({
  reducer: {
    destinos: destinoReducer,
    userAuth: userAuthReducer,
    preguntas: preguntasReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
