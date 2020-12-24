/** @format */

import axios from 'axios';

import { TRAER_USUARIOS, CARGANDO, ERROR } from '../types/usuariosTypes';

export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO,
    });
    try {
        const usuarios = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_USUARIOS,
            payload: usuarios.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salio mal intente mas tarde',
        });
    }
};
