import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    preguntas: [],
    isLoadingPreguntas: false,
    errorPreguntas: null
};

const preguntasSlice = createSlice({
    name: 'preguntas',
    initialState: initialState,
    reducers: {
        preguntasRequest: (state) => {
            state.isLoadingPreguntas = true;
            state.errorPreguntas = null;
        },
        fillPreguntas: (state, action) => {
            state.preguntas = action.payload;
            state.isLoadingPreguntas = false;
            state.errorPreguntas = null;
        },
        preguntasFail: (state, action) => {
            state.errorPreguntas = action.payload;
            state.isLoadingPreguntas = false;
        }
    }
});

export const { preguntasRequest, fillPreguntas, preguntasFail } = preguntasSlice.actions;
export default preguntasSlice.reducer;