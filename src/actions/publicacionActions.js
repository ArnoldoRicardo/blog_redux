/** @format */

import axios from 'axios';

import { UPDATE, CARGANDO, ERROR, COM_CARGANDO, COM_ERROR, COM_UPDATE } from '../types/publicacionTypes';

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
            comments: [],
            open: false,
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

export const openComments = (user_id, post_id) => (dispatch, getState) => {
    const { publicaciones } = getState().publicacionReducer;

    const new_posts = { ...publicaciones };
    new_posts[user_id] = publicaciones[user_id].map((post) => {
        if (post.id === post_id) {
            return { ...post, open: !post.open };
        }
        return post;
    });

    dispatch({
        type: UPDATE,
        payload: new_posts,
    });
};

export const getComments = (user_id, post_id) => async (dispatch, getState) => {
    const { publicaciones } = getState().publicacionReducer;

    dispatch({
        type: COM_CARGANDO,
    });

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`);

        const new_posts = { ...publicaciones };
        new_posts[user_id] = publicaciones[user_id].map((post) => {
            if (post.id === post_id) {
                return { ...post, comments: response.data };
            }
            return post;
        });

        dispatch({
            type: COM_UPDATE,
            payload: new_posts,
        });
    } catch (error) {
        dispatch({
            type: COM_ERROR,
            payload: 'Informacion de comentarios no disponible.',
        });
    }
};
