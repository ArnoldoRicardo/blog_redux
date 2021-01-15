/** @format */

import { UPDATE, CARGANDO, ERROR } from '../types/publicacionTypes';

const INITIAL_STATE = {
    publicaciones: {},
    cargando: false,
    error: '',
};

const publicacionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                publicaciones: action.payload,
                cargando: false,
                error: '',
            };
        case CARGANDO:
            return { ...state, cargando: true };
        case ERROR:
            return { ...state, error: action.payload, cargando: false };
        default:
            return state;
    }
};

export default publicacionReducer;
