/** @format */

import { TRAER_PUBLICACION, CARGANDO, ERROR } from '../types/publicacionTypes';

const INITIAL_STATE = {
    publicaciones: [],
    cargando: false,
    error: '',
};

const publicacionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_PUBLICACION:
            return { ...state, publicaciones: action.payload, cargando: false };
        case CARGANDO:
            return { ...state, cargando: true };
        case ERROR:
            return { ...state, error: action.payload, cargando: false };
        default:
            return state;
    }
};

export default publicacionReducer;
