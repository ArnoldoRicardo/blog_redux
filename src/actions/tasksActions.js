import axios from 'axios';

import { GET_ALL, LOADING, ERROR, SAVE, UPDATE } from '../types/TasksTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING,
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tasks = {};
        response.data.map(
            (task) =>
                (tasks[task.userId] = {
                    ...tasks[task.userId],
                    [task.id]: {
                        ...task,
                    },
                })
        );

        dispatch({
            type: GET_ALL,
            payload: tasks,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Informacion de tareas no disponible.',
        });
    }
};

export const add = (task) => async (dispatch) => {
    dispatch({
        type: LOADING,
    });

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
        console.log(response.data);
        dispatch({ type: SAVE });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Intente mas tarde.',
        });
    }
};

export const update = (task) => async (dispatch) => {
    dispatch({
        type: LOADING,
    });

    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
        console.log(response.data);
        dispatch({ type: SAVE });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Intente mas tarde.',
        });
    }
};

export const checkedTask = (user_id, task_id) => (dispacth, getState) => {
    const { tasks } = getState().tasksReducer;
    const task = tasks[user_id][task_id];

    const new_tasks = {
        ...tasks,
    };
    new_tasks[user_id][task_id] = {
        ...task,
        completed: !task.completed,
    };

    dispacth({
        type: UPDATE,
        payload: new_tasks,
    });
};
