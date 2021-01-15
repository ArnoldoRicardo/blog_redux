/** @format */

import axios from 'axios';

import { UPDATE, CARGANDO, ERROR } from '../types/publicacionTypes';

export const traerPorUsuario = (key) => async (dispatch, getState) => {
    const { publicaciones } = getState().publicacionReducer;

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

        const newPosts = { ...publicaciones, [key]: PostsById };

        dispatch({
            type: UPDATE,
            payload: newPosts,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Informacion de publicaciones no disponible.',
        });
    }
};

export const openClose = (user_id, post_id) => (dispatch, getState) => {
    const { publicaciones } = getState().publicacionReducer;

    const new_posts = { ...publicaciones };
    new_posts[user_id] = publicaciones[user_id].map((post) => {
        if (post.id === post_id) {
            return { ...post, abierto: !post.abierto };
        }
        return post;
    });

    dispatch({
        type: UPDATE,
        payload: new_posts,
    });
};
