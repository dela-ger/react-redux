import { createStore } from 'redux';

// initial State
const initialState = {
    counter: 0
};

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => {
    return {type: INCREMENT}
}

const decrement = () => {
    return { type: DECREMENT }
}

// Reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, counter: state.counter + 1 }
    } else if(action.type === DECREMENT) {
        return { ...state, counter: state.counter - 1 }
    }else {
        return state;
    }
}

// create redux store
const store = createStore(counterReducer);

export { store, increment, decrement }