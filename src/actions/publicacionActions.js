/** @format */

import axios from 'axios';

import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionTypes';

export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { publicaciones } = getState().publicacionReducer;

    dispatch({
        type: CARGANDO,
    });

    try {
        // const response = await axios.get(`http://localhost:3001/posts?usuario=${key}`);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${key}`);

        const publicacionesActualizadas = { ...publicaciones, [key]: response.data };

        dispatch({
            type: TRAER_POR_USUARIO,
            payload: publicacionesActualizadas,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Algo salio mal intente mas tarde',
        });
    }
};
