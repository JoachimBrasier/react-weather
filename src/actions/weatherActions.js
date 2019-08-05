import axios from 'axios';
import { LOADING, LOADED, GET_WEATHER, GET_ERRORS, GET_FORECAST } from './types';

const apiKey = '0ea94cebcaebcce638e48d558f192b4d';

// Get weather & forecast by geolocation
export const getDataByGeolocation = (lat, lon, units) => dispatch => {
    dispatch(setLoadingTrue());
    axios.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=fr&appid=${apiKey}`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=fr&appid=${apiKey}`)
    ])
    .then(axios.spread((weather, forecast) =>  {
        dispatch({
            type: GET_WEATHER,
            payload: weather.data
        })
        dispatch({
            type: GET_FORECAST,
            payload: forecast.data
        })
        dispatch(setLoadingFalse());
    }))
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch(setLoadingFalse());
    });
}

// Get weather & forecast by search
export const getDataBySearch = (city, units) => dispatch => {
    dispatch(setLoadingTrue());
    axios.all([
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=fr&appid=${apiKey}`),
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&lang=fr&appid=${apiKey}`)
    ])
    .then(axios.spread((weather, forecast) =>  {
        dispatch({
            type: GET_WEATHER,
            payload: weather.data
        })
        dispatch({
            type: GET_FORECAST,
            payload: forecast.data
        })
        dispatch(setLoadingFalse());
    }))
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch(setLoadingFalse());
    });
}

// Set loading
export const setLoadingTrue = () => {
    return {
        type: LOADING
    };
};

// Set loading
export const setLoadingFalse = () => {
    return {
        type: LOADED
    };
};