import { createStore } from "redux";

const initialState = {
    count: 0
};

// create action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
export const SET_COUNT = 'SET_COUNT'

// action creator

export const increment = () => ({ type: INCREMENT });

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const reset = () => ({ type: RESET })
export const setCount = (value) => ({ type: SET_COUNT, payload: value })

// create the reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, count: state.count + 1 }
    } else if (action.type === DECREMENT) {
        return { ...state, count: state.count - 1 }
    }else if (action.type === RESET) {
        return { ...state, count: 0 }
    }else if (action.type === SET_COUNT) {
        return { ...state, count: action.payload }
    }
    
    else {
        return state
    }
};

const store = createStore(counterReducer)

export default store;
