/** @format */

import axios from 'axios';

import { TRAER_PUBLICACION, CARGANDO, ERROR } from '../types/publicacionTypes';

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    // const publicaciones = await axios.get('http://localhost:3001/posts');
    const publicaciones = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({
      type: TRAER_PUBLICACION,
      payload: publicaciones.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Algo salio mal intente mas tarde',
    });
  }
};

export const traerPorUsuario = (key) => async (dispatch) => {
  //   const publicaciones = await axios.get(
  //     `http://localhost:3001/posts?usuario=${key}`
  //   );
  const publicaciones = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${key}`);
  dispatch({
    type: TRAER_PUBLICACION,
    payload: publicaciones.data,
  });
};
