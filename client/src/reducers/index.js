import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    weather: weatherReducer,
    errors: errorReducer
});