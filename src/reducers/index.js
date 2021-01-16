/** @format */

import { combineReducers } from 'redux';
import usuarioReducer from './usuarioReducer';
import publicacionReducer from './publicacionReducer';
import tasksReducer from './TasksReducer';

export default combineReducers({ usuarioReducer, publicacionReducer, tasksReducer });
