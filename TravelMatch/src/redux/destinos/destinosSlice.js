import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destinos: [],
    loadingDestinos: false,
    errorDestinos: null
}

const destinosSlice = createSlice({
    name: 'destino',
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
        destinoById: ()=> {
            const destinoId = action.payload;
            const destinoEncontrado = state.destinos.find(destino => destino.id === destinoId);
            if (destinoEncontrado) {
                // Si se encuentra el destino
                console.log("Destino encontrado:", destinoEncontrado);
            } else {
                console.log("Destino no encontrado");
            }
        }
        //más minifunciones reductoras por tipo de acción
    }
});

export const { destinosRequest, destinosFail, fillDestinos, destinoById } = destinosSlice.actions; //actions creators

export default destinosSlice.reducer;