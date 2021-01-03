/** @format */

import { combineReducers } from 'redux';
import usuarioReducer from './usuarioReducer';
import publicacionReducer from './publicacionReducer';

export default combineReducers({ usuarioReducer, publicacionReducer });
