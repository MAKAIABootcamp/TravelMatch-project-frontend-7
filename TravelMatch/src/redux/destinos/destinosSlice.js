import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinos: [],
  loadingDestinos: false,
  errorDestinos: null,
};

const destinosSlice = createSlice({
  name: "destino",
  initialState: initialState,
  reducers: {
    destinosRequest: (state) => {
      state.loadingDestinos = true;
      state.errorDestinos = null;
    },
    destinosFail: (state, action) => {
      state.errorDestinos = action.payload;
      state.loadingDestinos = false;
    },
    fillDestinos: (state, action) => {
      state.destinos = action.payload;
      state.loadingDestinos = false;
      state.errorDestinos = null;
    },
    addDestino: (state, action) => {
      state.destinos.push(action.payload);
      state.loadingDestinos = false;
      state.errorDestinos = null;
    },
    destinoByIdSuccess: (state, action) => {
      state.destinos = action.payload; // Actualiza los destinos con los datos recibidos
      console.log("destino slice: ", state.destinos);
      state.loadingDestinos = false;
      state.errorDestinos = null;
    },
    //más minifunciones reductoras por tipo de acción
  },
});

export const {
  destinosRequest,
  destinosFail,
  fillDestinos,
  addDestino,
  destinoByIdSuccess,
  deleteDestino,
} = destinosSlice.actions; //actions creators

export default destinosSlice.reducer;
