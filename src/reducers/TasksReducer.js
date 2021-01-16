import { GET_ALL, LOADING, ERROR } from '../types/TasksTypes';

const INITIAL_STATE = {
    tasks: {},
    loading: false,
    error: '',
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, tasks: action.payload, loading: false, error: '' };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default tasksReducer;
