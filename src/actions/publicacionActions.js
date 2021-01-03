/** @format */

import axios from 'axios';

import { TRAER_PUBLICACION } from '../types/publicacionTypes';

export const traerTodos = () => async (dispatch) => {
    const publicaciones = await axios.get('http://localhost:3001/posts');
    dispatch({
        type: TRAER_PUBLICACION,
        payload: publicaciones.data,
    });
};
