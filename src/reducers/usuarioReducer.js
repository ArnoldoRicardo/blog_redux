/** @format */

import { TRAER_USUARIOS, CARGANDO, ERROR } from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: '',
};

const usuarioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_USUARIOS:
            return { ...state, usuarios: action.payload, cargando: false };
        case CARGANDO:
            return { ...state, cargando: true };
        case ERROR:
            return { ...state, error: action.payload, cargando: false };
        default:
            return state;
    }
};

export default usuarioReducer;
