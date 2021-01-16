/** @format */

import { UPDATE, CARGANDO, ERROR, COM_CARGANDO, COM_ERROR, COM_UPDATE } from '../types/publicacionTypes';

const INITIAL_STATE = {
    publicaciones: {},
    cargando: false,
    error: '',
    com_cargando: false,
    com_error: '',
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
        case COM_UPDATE:
            return {
                ...state,
                publicaciones: action.payload,
                com_cargando: false,
                com_error: '',
            };
        case COM_CARGANDO:
            return { ...state, com_cargando: true };
        case COM_ERROR:
            return { ...state, com_error: action.payload, com_cargando: false };
        default:
            return state;
    }
};

export default publicacionReducer;
