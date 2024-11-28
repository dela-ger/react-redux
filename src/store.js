import { createStore } from "redux";

const initialState = {
    count: 0
};

// create action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creator

export const increment = () => ({  type: INCREMENT });

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

// create the reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, count: state.count + 1 }
    } else if (action.type === DECREMENT) {
        return { ...state, count: state.count - 1 }
    }else {
        return state
    }
};

const store = createStore(counterReducer)

export default store;
