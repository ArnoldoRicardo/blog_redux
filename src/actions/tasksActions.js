import axios from 'axios';

import { GET_ALL, LOADING, ERROR } from '../types/TasksTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    });
    try {
        const tasks = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({
            type: GET_ALL,
            payload: tasks.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Informacion de tareas no disponible.',
        });
    }
};
