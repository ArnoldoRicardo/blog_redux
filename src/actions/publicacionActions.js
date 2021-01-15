/** @format */

import axios from 'axios';

import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionTypes';

export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { posts } = getState().publicacionReducer;

    dispatch({
        type: CARGANDO,
    });

    try {
        // const response = await axios.get(`http://localhost:3001/posts?usuario=${key}`);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${key}`);

        const PostsById = response.data.map((post) => ({
            ...post,
            comentarios: [],
            abierto: false,
        }));

        const newPosts = { ...posts, [key]: PostsById };

        dispatch({
            type: TRAER_POR_USUARIO,
            payload: newPosts,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Informacion de publicaciones no disponible.',
        });
    }
};
