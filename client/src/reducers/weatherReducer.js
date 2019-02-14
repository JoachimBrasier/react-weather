import { LOADING, GET_WEATHER, LOADED, GET_FORECAST } from '../actions/types';

const initialState = {
    weather: {},
    forecast : {},
    loading: false
};

export default(state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
        case GET_FORECAST:
            return {
                ...state,
                forecast: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case LOADED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    };
};