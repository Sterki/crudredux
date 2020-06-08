import {combineReducers} from 'redux';
import productoReducers from './productosReducer';

export default combineReducers({

    producto : productoReducers
});