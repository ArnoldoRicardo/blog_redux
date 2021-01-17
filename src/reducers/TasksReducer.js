import { GET_ALL, LOADING, ERROR, ADD_TASK } from '../types/TasksTypes';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
    redirect: false,
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, tasks: action.payload, loading: false, error: '' };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        case ADD_TASK:
            return { ...state, tasks: {}, loading: false, error: '' };
        default:
            return state;
    }
};

export default tasksReducer;
